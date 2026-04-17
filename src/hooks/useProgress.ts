import { useCallback, useEffect, useRef, useState } from 'react'
import { onAuthStateChanged, signInAnonymously } from 'firebase/auth'
import { doc, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore'
import { allTopicIds } from '../data/curriculum'
import { getFirebaseAuth, getFirebaseDb, isFirebaseConfigured } from '../lib/firebase'

const STORAGE_KEY = 'lana-web-dev-progress'
const PROGRESS_COLLECTION = 'progress'
/** Single shared progress doc (not per user). Change to match `firestore.rules`. */
const SHARED_PROGRESS_DOC_ID = 'lana'

const validIds = new Set(allTopicIds())

function parseStored(raw: string | null): Set<string> {
  if (!raw) return new Set()
  try {
    const parsed = JSON.parse(raw) as unknown
    if (!Array.isArray(parsed)) return new Set()
    return new Set(parsed.filter((x): x is string => typeof x === 'string' && validIds.has(x)))
  } catch {
    return new Set()
  }
}

function load(): Set<string> {
  if (typeof localStorage === 'undefined') return new Set()
  return parseStored(localStorage.getItem(STORAGE_KEY))
}

function save(ids: Set<string>): boolean {
  if (typeof localStorage === 'undefined') return false
  try {
    const filtered = [...ids].filter((id) => validIds.has(id))
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
    return true
  } catch {
    return false
  }
}

export function useProgress() {
  const useCloud = isFirebaseConfigured()
  const [done, setDone] = useState<Set<string>>(() => load())
  const [authReady, setAuthReady] = useState(false)
  /** Firestore snapshot applied at least once — avoids writing empty state before hydrate (wipes server). */
  const [cloudReady, setCloudReady] = useState(() => !isFirebaseConfigured())
  const skipWriteRef = useRef(false)
  const migratedRef = useRef(false)

  /** Local-only: persist + cross-tab sync */
  useEffect(() => {
    if (useCloud) return
    save(done)
  }, [done, useCloud])

  useEffect(() => {
    if (useCloud) return
    const onStorage = (e: StorageEvent) => {
      if (e.key !== STORAGE_KEY) return
      if (e.newValue === null) {
        setDone(new Set())
        return
      }
      setDone(parseStored(e.newValue))
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [useCloud])

  /** Firebase: anonymous auth + Firestore snapshot */
  useEffect(() => {
    if (!useCloud) return

    const auth = getFirebaseAuth()
    const db = getFirebaseDb()
    let unsubscribeSnapshot: (() => void) | undefined

    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      unsubscribeSnapshot?.()
      unsubscribeSnapshot = undefined
      setAuthReady(!!user)

      if (!user) {
        void signInAnonymously(auth).catch((err) => {
          console.error('Firebase anonymous sign-in failed', err)
        })
        return
      }

      const docRef = doc(db, PROGRESS_COLLECTION, SHARED_PROGRESS_DOC_ID)

      unsubscribeSnapshot = onSnapshot(
        docRef,
        (snap) => {
          const raw = snap.data()?.completed
          const ids = Array.isArray(raw)
            ? raw.filter((x): x is string => typeof x === 'string' && validIds.has(x))
            : []

          if (ids.length === 0 && !migratedRef.current) {
            const local = load()
            if (local.size > 0) {
              migratedRef.current = true
              void setDoc(docRef, {
                completed: [...local].filter((id) => validIds.has(id)),
                updatedAt: serverTimestamp(),
              })
              return
            }
          }
          migratedRef.current = true

          skipWriteRef.current = true
          setDone(new Set(ids))
          setCloudReady(true)
          requestAnimationFrame(() => {
            skipWriteRef.current = false
          })
        },
        (err) => {
          console.error('Firestore progress listener', err)
          setDone(load())
          setCloudReady(true)
        },
      )
    })

    return () => {
      unsubscribeSnapshot?.()
      unsubscribeAuth()
    }
  }, [useCloud])

  /** Push local state to Firestore when it changes (not when applying remote snapshot). */
  useEffect(() => {
    if (!useCloud || !authReady || !cloudReady) return
    if (skipWriteRef.current) return

    const db = getFirebaseDb()
    const docRef = doc(db, PROGRESS_COLLECTION, SHARED_PROGRESS_DOC_ID)
    void setDoc(docRef, {
      completed: [...done].filter((id) => validIds.has(id)),
      updatedAt: serverTimestamp(),
    })
  }, [done, useCloud, authReady, cloudReady])

  const toggle = useCallback((id: string) => {
    if (!validIds.has(id)) return
    setDone((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  return {
    done,
    toggle,
    /** Cloud sync is active (env configured). */
    usingFirebase: useCloud,
  }
}

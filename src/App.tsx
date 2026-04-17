import { LavenderFlowers } from './components/LavenderFlowers'
import { curriculum, sortTopicTags, TAG_LABELS, totalTopicCount } from './data/curriculum'
import { useProgress } from './hooks/useProgress'
import { celebrateTopicDone } from './lib/confetti'
import './App.css'

function App() {
  const { done, toggle, usingFirebase } = useProgress()
  const total = totalTopicCount()
  const completed = [...done].filter((id) =>
    curriculum.some((s) => s.topics.some((t) => t.id === id)),
  ).length
  const pct = total === 0 ? 0 : Math.round((completed / total) * 100)

  return (
    <>
      <LavenderFlowers />
      <div className="app">
      <header className="hero">
        <p className="hero-kicker">Quest log</p>
        <h1 className="hero-title">Lana&apos;s web dev path</h1>
        <p className="hero-sub">
          Track what you&apos;ve learned — get XP, more XP → more KFC, bugs optional.
        </p>

        <div className="xp-bar" aria-label={`Overall progress ${pct} percent`}>
          <div className="xp-bar-fill" style={{ width: `${pct}%` }} />
        </div>
        <div className="xp-meta">
          <span className="xp-label">
            Progress: <strong>{completed}</strong> / {total} topics
          </span>
          <span className="xp-pct">{pct}%</span>
        </div>
      </header>

      <main className="sections">
        {curriculum.map((section) => {
          const sectionTotal = section.topics.length
          const sectionDone = section.topics.filter((t) => done.has(t.id)).length
          const sectionPct = sectionTotal === 0 ? 0 : Math.round((sectionDone / sectionTotal) * 100)

          return (
            <section key={section.id} className="section-card">
              <div className="section-head">
                <h2 className="section-title">
                  <span className="section-emoji" aria-hidden>
                    {section.emoji}
                  </span>
                  {section.title}
                </h2>
                <div className="section-progress">
                  <div
                    className="section-progress-bar"
                    style={{ width: `${sectionPct}%` }}
                    role="presentation"
                  />
                  <span className="section-progress-text">
                    {sectionDone}/{sectionTotal}
                  </span>
                </div>
              </div>

              <ul className="topic-list">
                {section.topics.map((topic) => {
                  const checked = done.has(topic.id)
                  return (
                    <li key={topic.id} className={`topic ${checked ? 'topic-done' : ''}`}>
                      <label className="topic-label">
                        <input
                          type="checkbox"
                          className="topic-check"
                          checked={checked}
                          onChange={() => {
                            if (!checked) {
                              const completesSection =
                                sectionDone + 1 === sectionTotal && sectionTotal > 0
                              celebrateTopicDone(completesSection)
                            }
                            toggle(topic.id)
                          }}
                        />
                        <span className="topic-title-wrap">
                          <span className="topic-title">{topic.title}</span>
                          {topic.note ? (
                            <span className="topic-note">{topic.note}</span>
                          ) : null}
                        </span>
                      </label>
                      <div className="topic-tags" aria-label="Topic tags">
                        {sortTopicTags(topic.tags).map((tag) => (
                          <span key={tag} className={`topic-tag topic-tag--${tag}`}>
                            {TAG_LABELS[tag]}
                          </span>
                        ))}
                      </div>
                      <div className="topic-links">
                        {topic.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="resource-link"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </li>
                  )
                })}
              </ul>
            </section>
          )
        })}
      </main>

      <footer className="footer">
        <p>Made for Lana — keep grinding, player one.</p>
        <p className="footer-sync">
          {usingFirebase ? 'Progress is saved to the cloud (signed in anonymously).' : 'Progress is saved on this device only.'}
        </p>
      </footer>
    </div>
    </>
  )
}

export default App

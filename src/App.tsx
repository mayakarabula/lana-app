import { LavenderFlowers } from './components/LavenderFlowers'
import {
  curriculum,
  linkProgressId,
  sortTopicTags,
  TAG_LABELS,
  totalChecklistCount,
} from './data/curriculum'
import { useProgress } from './hooks/useProgress'
import { celebrateTopicDone } from './lib/confetti'
import './App.css'

function App() {
  const { done, toggle, usingFirebase } = useProgress()
  const total = totalChecklistCount()
  const completed = [...done].filter((id) =>
    curriculum.some((section) =>
      section.topics.some((topic) =>
        topic.links.some((link) => linkProgressId(topic.id, link.href) === id) ||
        topic.subTopics?.some((subTopic) =>
          subTopic.links.some((link) => linkProgressId(subTopic.id, link.href) === id),
        ),
      ),
    ),
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
            Progress: <strong>{completed}</strong> / {total} items
          </span>
          <span className="xp-pct">{pct}%</span>
        </div>
      </header>

      <main className="sections">
        {curriculum.map((section) => {
          const sectionTotal = section.topics.reduce(
            (sum, topic) =>
              sum +
              topic.links.length +
              (topic.subTopics?.reduce((subSum, subTopic) => subSum + subTopic.links.length, 0) ?? 0),
            0,
          )
          const sectionDone = section.topics.reduce(
            (sum, topic) =>
              sum +
              topic.links.filter((link) => done.has(linkProgressId(topic.id, link.href))).length +
              (topic.subTopics?.reduce(
                (subSum, subTopic) =>
                  subSum +
                  subTopic.links.filter((link) => done.has(linkProgressId(subTopic.id, link.href))).length,
                0,
              ) ?? 0),
            0,
          )
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
                  const topicLinkIds = [
                    ...topic.links.map((link) => linkProgressId(topic.id, link.href)),
                    ...(topic.subTopics?.flatMap((subTopic) =>
                      subTopic.links.map((link) => linkProgressId(subTopic.id, link.href)),
                    ) ?? []),
                  ]
                  const checked = topicLinkIds.length > 0 && topicLinkIds.every((id) => done.has(id))
                  return (
                    <li key={topic.id} className={`topic ${checked ? 'topic-done' : ''}`}>
                      <div className="topic-title-wrap">
                        <span className="topic-title">{topic.title}</span>
                        {topic.note ? (
                          <span className="topic-note">{topic.note}</span>
                        ) : null}
                      </div>
                      <div className="topic-tags" aria-label="Topic tags">
                        {sortTopicTags(topic.tags).map((tag) => (
                          <span key={tag} className={`topic-tag topic-tag--${tag}`}>
                            {TAG_LABELS[tag]}
                          </span>
                        ))}
                      </div>
                      <div className="topic-links">
                        {topic.links.map((link) => (
                          <div key={link.href} className="resource-item">
                            <input
                              type="checkbox"
                              className="topic-check topic-check--link"
                              checked={done.has(linkProgressId(topic.id, link.href))}
                              onChange={() => {
                                const id = linkProgressId(topic.id, link.href)
                                if (!done.has(id)) {
                                  const completesSection =
                                    sectionDone + 1 === sectionTotal && sectionTotal > 0
                                  celebrateTopicDone(completesSection)
                                }
                                toggle(id)
                              }}
                            />
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noreferrer noopener"
                              className={`resource-link ${done.has(linkProgressId(topic.id, link.href)) ? 'resource-link--done' : ''}`}
                            >
                              {link.label}
                            </a>
                          </div>
                        ))}
                      </div>
                      {topic.subTopics?.length ? (
                        <ul className="topic-subtopics">
                          {topic.subTopics.map((sub) => (
                            <li key={sub.id} className="topic-subtopic">
                              <details className="topic-subtopic-accordion">
                                <summary className="topic-subtopic-summary">
                                  <span className="topic-subtopic-title">{sub.title}</span>
                                  <span className="topic-subtopic-progress">
                                    {
                                      sub.links.filter((link) =>
                                        done.has(linkProgressId(sub.id, link.href)),
                                      ).length
                                    }
                                    /{sub.links.length}
                                  </span>
                                </summary>
                                <div className="topic-subtopic-links">
                                  {sub.links.map((link) => (
                                    <div key={link.href} className="resource-item">
                                      <input
                                        type="checkbox"
                                        className="topic-check topic-check--link"
                                        checked={done.has(linkProgressId(sub.id, link.href))}
                                        onChange={() => {
                                          const id = linkProgressId(sub.id, link.href)
                                          if (!done.has(id)) {
                                            const completesSection =
                                              sectionDone + 1 === sectionTotal && sectionTotal > 0
                                            celebrateTopicDone(completesSection)
                                          }
                                          toggle(id)
                                        }}
                                      />
                                      <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className={`resource-link resource-link--sub ${done.has(linkProgressId(sub.id, link.href)) ? 'resource-link--done' : ''}`}
                                      >
                                        {link.label}
                                      </a>
                                    </div>
                                  ))}
                                </div>
                              </details>
                            </li>
                          ))}
                        </ul>
                      ) : null}
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

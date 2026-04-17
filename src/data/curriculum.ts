/** Area + difficulty — show on each topic card */
export type TopicTag = 'frontend' | 'backend' | 'easy' | 'mid' | 'hard'

export const TAG_ORDER: TopicTag[] = ['frontend', 'backend', 'easy', 'mid', 'hard']

export const TAG_LABELS: Record<TopicTag, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  easy: 'Easy',
  mid: 'Mid',
  hard: 'Hard',
}

export function sortTopicTags(tags: TopicTag[]): TopicTag[] {
  return [...tags].sort((a, b) => TAG_ORDER.indexOf(a) - TAG_ORDER.indexOf(b))
}

export type Topic = {
  id: string
  title: string
  note?: string
  /** Area (frontend / backend / both) + difficulty (easy / mid / hard) */
  tags: TopicTag[]
  links: { label: string; href: string }[]
}

export type Section = {
  id: string
  emoji: string
  title: string
  topics: Topic[]
}

/** Outline from lana.pdf — Web dev learning path */
export const curriculum: Section[] = [
  {
    id: 'general',
    emoji: '🛜',
    title: 'General knowledge',
    topics: [
      {
        id: 'web-standards',
        title: 'Getting started on the web',
        tags: ['frontend', 'easy'],
        links: [
          {
            label: 'MDN — Web standards & how the web works',
            href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards',
          },
        ],
      },
    ],
  },
  {
    id: 'languages',
    emoji: '💬',
    title: 'Languages',
    topics: [
      {
        id: 'html',
        title: 'HTML',
        tags: ['frontend', 'easy'],
        links: [
          {
            label: 'MDN — Structuring content',
            href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content',
          },
        ],
      },
      {
        id: 'javascript',
        title: 'JavaScript fundamentals',
        tags: ['frontend', 'backend', 'easy'],
        links: [
          {
            label: 'MDN — Scripting',
            href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting',
          },
        ],
      },
      {
        id: 'typescript',
        title: 'TypeScript fundamentals',
        note: 'TypeScript handbook',
        tags: ['frontend', 'backend', 'mid'],
        links: [
          {
            label: 'TypeScript Handbook',
            href: 'https://www.typescriptlang.org/docs/handbook/intro.html',
          },
        ],
      },
      {
        id: 'css',
        title: 'CSS',
        tags: ['frontend', 'easy'],
        links: [
          {
            label: 'MDN — Styling basics',
            href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics',
          },
        ],
      },
    ],
  },
  {
    id: 'frameworks',
    emoji: '🧩',
    title: 'Frameworks',
    topics: [
      {
        id: 'react',
        title: 'React fundamentals',
        note: 'Quick start',
        tags: ['frontend', 'mid'],
        links: [{ label: 'React — Quick Start', href: 'https://react.dev/learn' }],
      },
      {
        id: 'vite',
        title: 'Vite',
        note: 'Crash course on YouTube (search when ready)',
        tags: ['frontend', 'easy'],
        links: [{ label: 'Vite — Getting started', href: 'https://vitejs.dev/guide/' }],
      },
      {
        id: 'nodejs',
        title: 'Node.js fundamentals',
        note: 'Node for beginners',
        tags: ['backend', 'easy'],
        links: [
          {
            label: 'Node.js — Introduction',
            href: 'https://nodejs.org/en/learn/getting-started/introduction-to-nodejs',
          },
        ],
      },
      {
        id: 'express',
        title: 'Express fundamentals',
        tags: ['backend', 'mid'],
        links: [
          {
            label: 'Express — Getting started',
            href: 'https://expressjs.com/en/starter/installing.html',
          },
        ],
      },
    ],
  },
  {
    id: 'ai',
    emoji: '🤖',
    title: 'AI',
    topics: [
      {
        id: 'claude-code',
        title: 'Claude Code',
        tags: ['frontend', 'easy'],
        links: [
          {
            label: 'Claude Code (GitHub)',
            href: 'https://github.com/anthropics/claude-code',
          },
          { label: 'Anthropic documentation', href: 'https://docs.anthropic.com/' },
        ],
      },
    ],
  },
  {
    id: 'testing',
    emoji: '🧪',
    title: 'Testing',
    topics: [
      {
        id: 'vitest',
        title: 'Vitest',
        tags: ['frontend', 'easy'],
        links: [{ label: 'Vitest — Getting started', href: 'https://vitest.dev/guide/' }],
      },
      {
        id: 'e2e',
        title: 'End-to-end testing',
        note: 'Pick a tool (e.g. Playwright or Cypress)',
        tags: ['frontend', 'hard'],
        links: [
          { label: 'Playwright', href: 'https://playwright.dev/docs/intro' },
          { label: 'Cypress', href: 'https://docs.cypress.io/app/get-started/why-cypress' },
        ],
      },
    ],
  },
  {
    id: 'infrastructure',
    emoji: '🏗',
    title: 'Infrastructure',
    topics: [
      {
        id: 'github',
        title: 'GitHub',
        note: 'Repositories, collaboration',
        tags: ['backend', 'easy'],
        links: [
          {
            label: 'GitHub Docs — Repositories',
            href: 'https://docs.github.com/en/repositories',
          },
        ],
      },
      {
        id: 'docker',
        title: 'Docker fundamentals',
        tags: ['backend', 'mid'],
        links: [{ label: 'Docker — Get started', href: 'https://docs.docker.com/get-started/' }],
      },
      {
        id: 'ci',
        title: 'CI',
        note: 'Pipelines for testing & deployment',
        tags: ['backend', 'mid'],
        links: [
          {
            label: 'GitHub Actions — Quickstart',
            href: 'https://docs.github.com/en/actions/quickstart',
          },
        ],
      },
      {
        id: 'deployment',
        title: 'Deployment',
        tags: ['frontend', 'mid'],
        links: [
          { label: 'Vercel', href: 'https://vercel.com/docs' },
          { label: 'Netlify', href: 'https://docs.netlify.com/' },
        ],
      },
    ],
  },
  {
    id: 'monitoring',
    emoji: '📈',
    title: 'Monitoring',
    topics: [
      {
        id: 'sentry',
        title: 'Error logging',
        note: 'Sentry',
        tags: ['backend', 'mid'],
        links: [{ label: 'Sentry — Product basics', href: 'https://docs.sentry.io/product/sentry-basics/' }],
      },
    ],
  },
]

export function totalTopicCount(): number {
  return curriculum.reduce((n, s) => n + s.topics.length, 0)
}

export function allTopicIds(): string[] {
  return curriculum.flatMap((s) => s.topics.map((t) => t.id))
}

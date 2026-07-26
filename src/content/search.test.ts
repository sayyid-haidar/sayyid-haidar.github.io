import { describe, expect, it } from 'vitest'
import { searchKnowledge } from './search'
import type { KnowledgeContent } from './types'

const items: KnowledgeContent[] = [
  {
    collection: 'cheatsheets',
    slug: 'postgres',
    title: 'PostgreSQL commands',
    description: 'Database operations',
    publishedAt: '2026-07-20',
    language: 'en',
    tags: ['sql', 'database'],
    draft: false,
    readingTime: 2,
    body: '',
    sourcePath: '/content/cheatsheets/postgres.md',
    topic: 'Database',
    icon: '🐘',
  },
  {
    collection: 'cheatsheets',
    slug: 'git',
    title: 'Git recovery',
    description: 'Undo mistakes safely',
    publishedAt: '2026-07-10',
    language: 'en',
    tags: ['tools'],
    draft: false,
    readingTime: 1,
    body: '',
    sourcePath: '/content/cheatsheets/git.md',
    topic: 'Tools',
    icon: '↩️',
  },
]

describe('searchKnowledge', () => {
  it('searches title, description, and tags case-insensitively', () => {
    expect(searchKnowledge(items, 'SQL')).toHaveLength(1)
    expect(searchKnowledge(items, 'mistakes')).toHaveLength(1)
  })

  it('combines query and topic filters', () => {
    expect(searchKnowledge(items, 'git', 'Database')).toHaveLength(0)
    expect(searchKnowledge(items, '', 'Tools')).toEqual([items[1]])
  })
})

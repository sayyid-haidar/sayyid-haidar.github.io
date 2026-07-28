import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, useLocation } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import type { KnowledgeContent } from '../../content/types'
import { ContentIndex } from './ContentIndex'

const items: KnowledgeContent[] = [
  {
    collection: 'cheatsheets',
    slug: 'postgres',
    title: 'PostgreSQL commands',
    description: 'Useful SQL',
    publishedAt: '2026-07-20',
    language: 'en',
    tags: ['database'],
    draft: false,
    readingTime: 2,
    body: '',
    sourcePath: '/postgres.md',
    topic: 'Database',
    icon: '🐘',
  },
  {
    collection: 'cheatsheets',
    slug: 'git',
    title: 'Git recovery',
    description: 'Undo mistakes',
    publishedAt: '2026-07-19',
    language: 'id',
    tags: ['tools'],
    draft: false,
    readingTime: 1,
    body: '',
    sourcePath: '/git.md',
    topic: 'Tools',
    icon: '↩️',
  },
]

function CurrentSearch() {
  return <output aria-label="Current search">{useLocation().search}</output>
}

describe('ContentIndex', () => {
  it('combines search and topic filters', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter>
        <ContentIndex items={items} />
      </MemoryRouter>,
    )

    await user.click(screen.getByRole('button', { name: 'Database' }))
    await user.type(screen.getByRole('searchbox', { name: 'Search content' }), 'git')

    expect(screen.getByText('No matching notes.')).toBeInTheDocument()
  })

  it('renders language labels', () => {
    render(
      <MemoryRouter>
        <ContentIndex items={items} />
      </MemoryRouter>,
    )

    expect(screen.getByText('Indonesia')).toBeInTheDocument()
    expect(screen.getByText('English')).toBeInTheDocument()
    expect(screen.getByRole('list', { name: 'Knowledge entries' })).toBeInTheDocument()
  })

  it('reads and writes filters through the URL', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter initialEntries={['/?q=git&topic=Tools']}>
        <ContentIndex items={items} />
        <CurrentSearch />
      </MemoryRouter>,
    )

    const search = screen.getByRole('searchbox', { name: 'Search content' })
    expect(search).toHaveValue('git')
    expect(screen.getByRole('button', { name: 'Tools' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    expect(screen.getByRole('link', { name: /Git recovery/ })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: /PostgreSQL commands/ })).not.toBeInTheDocument()

    await user.clear(search)
    await user.type(search, 'post')

    const params = new URLSearchParams(screen.getByLabelText('Current search').textContent ?? '')
    expect(params.get('q')).toBe('post')
    expect(params.get('topic')).toBe('Tools')
  })
})

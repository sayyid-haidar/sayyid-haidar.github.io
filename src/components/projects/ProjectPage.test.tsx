import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import type { ProjectContent } from '../../content/types'
import { ProjectProperties } from './ProjectProperties'
import { ProjectVisual } from './ProjectVisual'

const project: ProjectContent = {
  collection: 'projects',
  slug: 'example',
  title: 'Example platform',
  description: 'A truthful project description.',
  publishedAt: '2026-07-20',
  language: 'en',
  tags: ['backend'],
  draft: false,
  readingTime: 2,
  body: '',
  sourcePath: '/example.md',
  year: 2026,
  role: 'Backend',
  stack: ['Java', 'PostgreSQL'],
  featured: true,
  order: 1,
}

describe('project components', () => {
  it('uses a neutral visual when no cover is supplied', () => {
    render(<ProjectVisual project={project} />)
    expect(screen.getByLabelText('Neutral project visual')).toBeInTheDocument()
  })

  it('omits missing links cleanly', () => {
    render(<ProjectProperties project={project} />)
    expect(screen.getByText('Private project')).toBeInTheDocument()
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })
})

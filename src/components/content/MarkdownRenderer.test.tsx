import { StrictMode } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MarkdownRenderer } from './MarkdownRenderer'
import { extractHeadings } from './markdownHeadings'

describe('MarkdownRenderer', () => {
  it('renders GFM and keeps raw HTML disabled', () => {
    const { container } = render(
      <MarkdownRenderer markdown={'## Safe\n\n- [x] Done\n\n<script>alert(1)</script>'} />,
    )

    expect(screen.getByRole('heading', { name: 'Safe' })).toHaveAttribute('id', 'safe')
    expect(screen.getByRole('heading', { name: 'Safe' })).toHaveAttribute('tabindex', '-1')
    expect(container.querySelector('input[type="checkbox"]')).toBeChecked()
    expect(container.querySelector('script')).not.toBeInTheDocument()
  })

  it('creates unique IDs for duplicate headings', () => {
    expect(extractHeadings('## Setup\n\n## Setup')).toEqual([
      { id: 'setup', text: 'Setup', level: 2 },
      { id: 'setup-1', text: 'Setup', level: 2 },
    ])
  })

  it('keeps heading IDs stable when StrictMode renders twice', () => {
    render(
      <StrictMode>
        <MarkdownRenderer markdown={'## Setup\n\n## Setup'} />
      </StrictMode>,
    )

    expect(screen.getAllByRole('heading').map((heading) => heading.id)).toEqual([
      'setup',
      'setup-1',
    ])
  })

  it('adds safe attributes to external links', () => {
    render(<MarkdownRenderer markdown="[External](https://example.com)" />)
    expect(screen.getByRole('link', { name: 'External' })).toHaveAttribute(
      'rel',
      'noopener noreferrer',
    )
  })
})

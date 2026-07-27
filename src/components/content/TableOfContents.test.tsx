import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, useLocation } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'
import { TableOfContents } from './TableOfContents'

function CurrentHash() {
  return <output aria-label="Current hash">{useLocation().hash}</output>
}

describe('TableOfContents', () => {
  it('updates the hash, focuses the heading, and scrolls to it', async () => {
    const user = userEvent.setup()
    const scrollTo = vi.spyOn(window, 'scrollTo').mockImplementation(() => undefined)

    render(
      <MemoryRouter initialEntries={['/cheatsheets/ffmpeg']}>
        <h2 id="cek-rtsp" tabIndex={-1}>Cek RTSP</h2>
        <TableOfContents headings={[{ id: 'cek-rtsp', text: 'Cek RTSP', level: 2 }]} />
        <CurrentHash />
      </MemoryRouter>,
    )

    const heading = screen.getByRole('heading', { name: 'Cek RTSP' })
    vi.spyOn(heading, 'getBoundingClientRect').mockReturnValue({ top: 300 } as DOMRect)
    const focus = vi.spyOn(heading, 'focus')

    await user.click(screen.getByRole('link', { name: 'Cek RTSP' }))

    expect(screen.getByLabelText('Current hash')).toHaveTextContent('#cek-rtsp')
    expect(focus).toHaveBeenCalledWith({ preventScroll: true })
    expect(scrollTo).toHaveBeenCalledWith({ top: 188, behavior: 'smooth' })
    expect(screen.getByRole('link', { name: 'Cek RTSP' })).toHaveAttribute(
      'aria-current',
      'location',
    )
  })
})

import { afterEach, describe, expect, it, vi } from 'vitest'
import { headingIdFromHash, scrollToHeading } from './scrollToHeading'

describe('scrollToHeading', () => {
  afterEach(() => {
    document.body.innerHTML = ''
    vi.restoreAllMocks()
  })

  it('focuses the heading and scrolls with the navbar offset', () => {
    const heading = document.createElement('h2')
    heading.id = 'cek-rtsp'
    heading.tabIndex = -1
    document.body.appendChild(heading)

    vi.spyOn(heading, 'getBoundingClientRect').mockReturnValue({
      top: 300,
    } as DOMRect)
    const focus = vi.spyOn(heading, 'focus')
    const scrollTo = vi.spyOn(window, 'scrollTo').mockImplementation(() => undefined)
    vi.spyOn(window, 'scrollY', 'get').mockReturnValue(200)

    expect(scrollToHeading('cek-rtsp')).toBe(true)
    expect(focus).toHaveBeenCalledWith({ preventScroll: true })
    expect(scrollTo).toHaveBeenCalledWith({ top: 388, behavior: 'smooth' })
  })

  it('does nothing when the target does not exist', () => {
    const scrollTo = vi.spyOn(window, 'scrollTo').mockImplementation(() => undefined)

    expect(scrollToHeading('tidak-ada')).toBe(false)
    expect(scrollTo).not.toHaveBeenCalled()
  })

  it('decodes a URL hash safely', () => {
    expect(headingIdFromHash('#cek%20rtsp')).toBe('cek rtsp')
    expect(headingIdFromHash('#broken%')).toBe('broken%')
  })
})

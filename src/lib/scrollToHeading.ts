const NAVBAR_OFFSET = 112

export function headingIdFromHash(hash: string) {
  const value = hash.startsWith('#') ? hash.slice(1) : hash

  try {
    return decodeURIComponent(value)
  } catch {
    return value
  }
}

export function scrollToHeading(id: string, behavior: ScrollBehavior = 'smooth') {
  const target = document.getElementById(id)
  if (!target) return false

  const top = target.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET
  target.focus({ preventScroll: true })
  window.scrollTo({ top: Math.max(0, top), behavior })
  return true
}

export function scheduleScrollToHeading(
  id: string,
  behavior: ScrollBehavior = 'smooth',
  maxAttempts = 10,
) {
  let frameId = 0
  let attempts = 0

  const tryScroll = () => {
    attempts += 1
    if (scrollToHeading(id, behavior) || attempts >= maxAttempts) return
    frameId = requestAnimationFrame(tryScroll)
  }

  frameId = requestAnimationFrame(tryScroll)
  return () => cancelAnimationFrame(frameId)
}

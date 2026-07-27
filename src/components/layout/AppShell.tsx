import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import {
  headingIdFromHash,
  scheduleScrollToHeading,
} from '../../lib/scrollToHeading'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export function AppShell() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      return scheduleScrollToHeading(headingIdFromHash(location.hash))
    }
    window.scrollTo({ top: 0 })
  }, [location.pathname, location.hash])

  return (
    <div className="min-h-screen bg-white text-ink">
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

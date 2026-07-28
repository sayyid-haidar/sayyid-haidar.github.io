import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { Container } from './Container'
import { MobileNav } from './MobileNav'

const links = [
  { label: 'Work', to: '/projects' },
  { label: 'Cheatsheets', to: '/cheatsheets' },
  { label: 'Writing', to: '/writing' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-[60] -translate-y-20 rounded-md bg-ink px-4 py-2 text-sm text-white focus:translate-y-0"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur-xl">
        <Container size="xl">
          <nav className="flex h-[72px] items-center justify-between" aria-label="Primary">
            <Link
              to="/"
              className="text-[15px] font-semibold tracking-[-0.035em] text-ink hover:text-accent"
            >
              Sayyid Haidar
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-sm transition-colors ${
                      isActive ? 'text-ink' : 'text-muted hover:text-ink'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/#contact"
                className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
              >
                Contact
              </Link>
            </div>

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen(true)}
              className="rounded-lg p-2 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
            >
              <Menu aria-hidden="true" size={22} />
            </button>
          </nav>
        </Container>
      </header>
      <MobileNav open={open} onClose={() => setOpen(false)} links={links} />
    </>
  )
}

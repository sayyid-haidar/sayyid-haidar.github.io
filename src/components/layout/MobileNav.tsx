import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'

interface MobileNavProps {
  open: boolean
  onClose: () => void
  links: Array<{ label: string; to: string }>
}

export function MobileNav({ open, onClose, links }: MobileNavProps) {
  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[70] bg-white md:hidden">
      <div className="flex h-full flex-col p-6">
        <div className="flex items-center justify-between">
          <span className="text-[15px] font-semibold tracking-[-0.035em]">Sayyid Haidar</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="rounded-lg p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <X size={22} />
          </button>
        </div>
        <nav className="mt-20 flex flex-col gap-7" aria-label="Mobile">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={onClose}
              className="text-4xl font-semibold tracking-[-0.055em]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/#contact"
            onClick={onClose}
            className="text-4xl font-semibold tracking-[-0.055em] text-accent"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  )
}

import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'

interface MobileNavProps {
  open: boolean
  onClose: () => void
  links: Array<{ label: string; to: string }>
}

export function MobileNav({ open, onClose, links }: MobileNavProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const openerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (open && !dialog.open) {
      openerRef.current =
        document.activeElement instanceof HTMLElement ? document.activeElement : null
      if (typeof dialog.showModal === 'function') {
        dialog.showModal()
      } else {
        dialog.setAttribute('open', '')
      }
    } else if (!open && dialog.open) {
      dialog.close()
    }
  }, [open])

  function closeDialog() {
    const dialog = dialogRef.current
    if (!dialog?.open) return
    if (typeof dialog.close === 'function') {
      dialog.close()
    } else {
      dialog.removeAttribute('open')
      handleClose()
    }
  }

  function handleClose() {
    openerRef.current?.focus()
    onClose()
  }

  return (
    <dialog
      id="mobile-navigation"
      ref={dialogRef}
      aria-labelledby="mobile-navigation-title"
      onCancel={(event) => {
        event.preventDefault()
        closeDialog()
      }}
      onClose={handleClose}
      className="m-0 h-dvh max-h-none w-full max-w-none overscroll-contain bg-white p-0 backdrop:bg-black/20 md:hidden"
    >
      <div className="mobile-nav-dialog-panel flex h-full flex-col">
        <div className="flex items-center justify-between">
          <span
            id="mobile-navigation-title"
            className="text-[15px] font-semibold tracking-[-0.035em]"
          >
            Sayyid Haidar
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeDialog}
            className="rounded-lg p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <X aria-hidden="true" size={22} />
          </button>
        </div>
        <nav className="mt-20 flex flex-col gap-7" aria-label="Mobile">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeDialog}
              className="text-4xl font-semibold tracking-[-0.055em] hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/#contact"
            onClick={closeDialog}
            className="text-4xl font-semibold tracking-[-0.055em] text-accent hover:text-ink"
          >
            Contact
          </Link>
        </nav>
      </div>
    </dialog>
  )
}

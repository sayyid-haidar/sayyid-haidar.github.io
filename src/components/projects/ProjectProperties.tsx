import { ArrowUpRight } from 'lucide-react'
import type { ProjectContent } from '../../content/types'

export function ProjectProperties({ project }: { project: ProjectContent }) {
  const links = project.links ? Object.entries(project.links).filter(([, value]) => value) : []

  return (
    <div className="grid gap-6 border-y border-line py-6 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.11em] text-subtle">
          Role
        </p>
        <p className="mt-2 text-sm text-ink">{project.role}</p>
      </div>
      <div>
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.11em] text-subtle">
          Stack
        </p>
        <p className="mt-2 break-words text-sm text-ink">{project.stack.join(', ')}</p>
      </div>
      <div>
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.11em] text-subtle">
          Year
        </p>
        <p className="mt-2 text-sm text-ink">{project.year}</p>
      </div>
      <div>
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.11em] text-subtle">
          Links
        </p>
        <div className="mt-2 flex flex-wrap gap-3">
          {links.length === 0 ? (
            <span className="text-sm text-subtle">Private project</span>
          ) : (
            links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm capitalize text-accent hover:text-ink"
              >
                {label} <ArrowUpRight aria-hidden="true" size={13} />
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

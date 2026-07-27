import type { MouseEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { headingIdFromHash, scrollToHeading } from '../../lib/scrollToHeading'
import type { MarkdownHeading } from './markdownHeadings'

interface TableOfContentsProps {
  headings: MarkdownHeading[]
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const activeHeadingId = headingIdFromHash(location.hash)

  if (headings.length === 0) return null

  function handleHeadingClick(event: MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault()
    scrollToHeading(id)
    navigate(`${location.pathname}${location.search}#${id}`)
  }

  return (
    <nav
      aria-label="On this page"
      className="sticky top-28 hidden h-fit border-l border-line pl-5 lg:block"
    >
      <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-subtle">
        On this page
      </p>
      <ul className="space-y-2.5">
        {headings.map((heading) => (
          <li key={heading.id} className={heading.level === 3 ? 'pl-3' : undefined}>
            <a
              href={`#${heading.id}`}
              onClick={(event) => handleHeadingClick(event, heading.id)}
              aria-current={activeHeadingId === heading.id ? 'location' : undefined}
              className={
                activeHeadingId === heading.id
                  ? 'block text-xs font-semibold leading-5 text-accent'
                  : 'block text-xs leading-5 text-subtle hover:text-ink'
              }
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

import { Link } from 'react-router-dom'
import type { KnowledgeContent } from '../../content/types'
import { formatContentDate, languageLabel } from '../../lib/contentFormat'

interface KnowledgeRowProps {
  item: KnowledgeContent
}

export function KnowledgeRow({ item }: KnowledgeRowProps) {
  const date = item.updatedAt ?? item.publishedAt

  return (
    <Link
      to={`/${item.collection}/${item.slug}`}
      className="group grid grid-cols-[auto_1fr] gap-3 border-t border-line py-5 sm:grid-cols-[auto_1fr_auto] sm:items-center"
    >
      <span
        aria-hidden="true"
        className="grid h-9 w-9 place-items-center rounded-md bg-canvas text-lg"
      >
        {item.icon}
      </span>
      <span className="min-w-0">
        <span className="block truncate text-sm font-semibold text-ink group-hover:text-accent">
          {item.title}
        </span>
        <span className="mt-1 block text-xs text-subtle">
          {item.topic} · {languageLabel(item.language)} · {item.readingTime} min
        </span>
      </span>
      <span className="col-start-2 text-xs text-subtle sm:col-auto">
        {formatContentDate(date, item.language)}
      </span>
    </Link>
  )
}

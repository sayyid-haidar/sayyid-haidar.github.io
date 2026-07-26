import { Link } from 'react-router-dom'
import type { KnowledgeContent } from '../../content/types'
import { formatContentDate, languageLabel } from '../../lib/contentFormat'

interface ContentRowProps {
  item: KnowledgeContent
}

export function ContentRow({ item }: ContentRowProps) {
  const date = item.updatedAt ?? item.publishedAt

  return (
    <Link
      to={`/${item.collection}/${item.slug}`}
      className="group grid min-h-20 grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-line py-4 md:grid-cols-[minmax(18rem,1fr)_8rem_6rem_7rem]"
    >
      <span className="flex min-w-0 items-center gap-3">
        <span
          aria-hidden="true"
          className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-canvas text-lg"
        >
          {item.icon}
        </span>
        <span className="truncate text-sm font-semibold text-ink group-hover:text-accent">
          {item.title}
        </span>
      </span>
      <span className="hidden w-fit rounded bg-[#eeeae4] px-2 py-1 text-[0.68rem] text-muted md:block">
        {item.topic}
      </span>
      <span className="hidden text-xs text-subtle md:block">{languageLabel(item.language)}</span>
      <span className="text-right text-xs text-subtle">
        {formatContentDate(date, item.language)}
      </span>
    </Link>
  )
}

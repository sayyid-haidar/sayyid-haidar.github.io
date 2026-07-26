import type { KnowledgeContent } from '../../content/types'
import { formatContentDate, languageLabel } from '../../lib/contentFormat'

export function ContentProperties({ item }: { item: KnowledgeContent }) {
  return (
    <dl className="grid max-w-xl grid-cols-[6rem_1fr] gap-y-3 text-sm">
      <dt className="text-subtle">Topic</dt>
      <dd>
        <span className="rounded bg-[#eeeae4] px-2 py-1 text-xs text-muted">
          {item.topic}
        </span>
      </dd>
      <dt className="text-subtle">Language</dt>
      <dd className="text-muted">{languageLabel(item.language)}</dd>
      <dt className="text-subtle">Published</dt>
      <dd className="text-muted">{formatContentDate(item.publishedAt, item.language)}</dd>
      {item.updatedAt && (
        <>
          <dt className="text-subtle">Updated</dt>
          <dd className="text-muted">{formatContentDate(item.updatedAt, item.language)}</dd>
        </>
      )}
      <dt className="text-subtle">Reading time</dt>
      <dd className="text-muted">{item.readingTime} min</dd>
    </dl>
  )
}

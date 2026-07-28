import { Link, Navigate, useParams } from 'react-router-dom'
import { Container } from '../components/layout/Container'
import { ContentProperties } from '../components/content/ContentProperties'
import { MarkdownRenderer } from '../components/content/MarkdownRenderer'
import { TableOfContents } from '../components/content/TableOfContents'
import { extractHeadings } from '../components/content/markdownHeadings'
import { getArticleBySlug, getCheatsheetBySlug } from '../content/registry'
import { usePageMetadata } from '../lib/usePageMetadata'
import type { ContentCollection } from '../content/types'

interface ContentPageProps {
  collection: Extract<ContentCollection, 'cheatsheets' | 'writing'>
}

export function ContentPage({ collection }: ContentPageProps) {
  const { slug = '' } = useParams()
  const item =
    collection === 'cheatsheets' ? getCheatsheetBySlug(slug) : getArticleBySlug(slug)
  usePageMetadata(
    item ? `${item.title} — Sayyid Haidar` : 'Note not found — Sayyid Haidar',
    item?.description ?? 'The requested note could not be found.',
  )

  if (!item) return <Navigate to="/404" replace />
  const headings = extractHeadings(item.body)

  return (
    <Container size="lg" className="py-16 md:py-24">
      <nav aria-label="Breadcrumb" className="mb-12 text-xs text-subtle">
        <Link to="/" className="hover:text-ink">Home</Link>
        <span aria-hidden="true"> / </span>
        <Link to={`/${collection}`} className="capitalize hover:text-ink">{collection}</Link>
        <span aria-hidden="true"> / </span>
        <span>{item.title}</span>
      </nav>

      <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_12rem]">
        <article className="min-w-0">
          <div className="text-5xl" aria-hidden="true">{item.icon}</div>
          <h1 className="mt-5 max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-[-0.06em] text-ink md:text-6xl">
            {item.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted md:text-lg">
            {item.description}
          </p>
          <div className="my-8">
            <ContentProperties item={item} />
          </div>
          <hr className="mb-10 border-line" />
          <MarkdownRenderer markdown={item.body} />
        </article>
        <TableOfContents headings={headings} />
      </div>
    </Container>
  )
}

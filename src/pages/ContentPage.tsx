import { Navigate, useParams } from 'react-router-dom'
import { Container } from '../components/layout/Container'
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

  return (
    <Container size="lg" className="py-24">
      <h1>{item.title}</h1>
      <p>{item.description}</p>
    </Container>
  )
}

import { Link } from 'react-router-dom'
import { Container } from '../components/layout/Container'
import { getPublishedCheatsheets, getPublishedWriting } from '../content/registry'
import { usePageMetadata } from '../lib/usePageMetadata'
import type { ContentCollection } from '../content/types'

interface ContentIndexPageProps {
  collection: Extract<ContentCollection, 'cheatsheets' | 'writing'>
}

export function ContentIndexPage({ collection }: ContentIndexPageProps) {
  const isCheatsheet = collection === 'cheatsheets'
  const items = isCheatsheet ? getPublishedCheatsheets() : getPublishedWriting()
  const title = isCheatsheet ? 'Cheatsheets' : 'Writing'
  usePageMetadata(`${title} — Sayyid Haidar`, `${title} by Sayyid Haidar.`)

  return (
    <Container size="lg" className="py-24">
      <h1>{title}</h1>
      {items.length === 0 ? (
        <p>No published {title.toLowerCase()} yet.</p>
      ) : (
        items.map((item) => (
          <Link key={item.slug} to={`/${collection}/${item.slug}`}>
            {item.title}
          </Link>
        ))
      )}
    </Container>
  )
}

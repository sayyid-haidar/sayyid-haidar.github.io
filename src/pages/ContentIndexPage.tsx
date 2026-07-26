import { Container } from '../components/layout/Container'
import { ContentIndex } from '../components/content/ContentIndex'
import { getPublishedCheatsheets, getPublishedWriting } from '../content/registry'
import { usePageMetadata } from '../lib/usePageMetadata'
import type { ContentCollection } from '../content/types'

interface ContentIndexPageProps {
  collection: Extract<ContentCollection, 'cheatsheets' | 'writing'>
}

const copy = {
  cheatsheets: {
    icon: '⌘',
    title: 'Cheatsheets',
    description:
      'Practical commands, patterns, and references I want to find quickly. Written for my future self and anyone solving the same problem.',
  },
  writing: {
    icon: '✎',
    title: 'Writing',
    description:
      'Long-form notes about software, learning, and the decisions behind useful systems.',
  },
}

export function ContentIndexPage({ collection }: ContentIndexPageProps) {
  const items =
    collection === 'cheatsheets' ? getPublishedCheatsheets() : getPublishedWriting()
  const page = copy[collection]
  usePageMetadata(`${page.title} — Sayyid Haidar`, page.description)

  return (
    <Container size="lg" className="min-h-[70vh] py-20 md:py-28">
      <span
        aria-hidden="true"
        className="grid h-14 w-14 place-items-center rounded-xl bg-canvas text-3xl"
      >
        {page.icon}
      </span>
      <h1 className="mt-5 text-5xl font-semibold tracking-[-0.06em] text-ink md:text-6xl">
        {page.title}
      </h1>
      <p className="mb-12 mt-4 max-w-2xl text-base leading-7 text-muted">
        {page.description}
      </p>
      <ContentIndex items={items} />
    </Container>
  )
}

import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { KnowledgeContent } from '../../content/types'
import { searchKnowledge } from '../../content/search'
import { ContentFilters } from './ContentFilters'
import { ContentRow } from './ContentRow'
import { EmptyContentState } from './EmptyContentState'

interface ContentIndexProps {
  items: KnowledgeContent[]
}

export function ContentIndex({ items }: ContentIndexProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const topics = useMemo(
    () => ['All', ...Array.from(new Set(items.map((item) => item.topic))).sort()],
    [items],
  )
  const query = searchParams.get('q') ?? ''
  const requestedTopic = searchParams.get('topic') ?? 'All'
  const topic = topics.includes(requestedTopic) ? requestedTopic : 'All'
  const results = useMemo(() => searchKnowledge(items, query, topic), [items, query, topic])

  function setQuery(value: string) {
    const next = new URLSearchParams(searchParams)
    if (value) next.set('q', value)
    else next.delete('q')
    setSearchParams(next, { replace: true })
  }

  function setTopic(value: string) {
    const next = new URLSearchParams(searchParams)
    if (value === 'All') next.delete('topic')
    else next.set('topic', value)
    setSearchParams(next)
  }

  if (items.length === 0) {
    return (
      <EmptyContentState
        title="Nothing published yet."
        description="Drafts stay private until they are ready to be useful."
      />
    )
  }

  return (
    <>
      <ContentFilters
        query={query}
        onQueryChange={setQuery}
        topics={topics}
        activeTopic={topic}
        onTopicChange={setTopic}
        resultCount={results.length}
      />
      {results.length === 0 ? (
        <div className="border-t border-line">
          <EmptyContentState
            title="No matching notes."
            description="Try another keyword or clear the active topic filter."
          />
        </div>
      ) : (
        <ul aria-label="Knowledge entries" className="border-t border-line">
          {results.map((item) => (
            <li key={item.slug}>
              <ContentRow item={item} />
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

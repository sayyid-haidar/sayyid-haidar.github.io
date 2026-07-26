import { useMemo, useState } from 'react'
import type { KnowledgeContent } from '../../content/types'
import { searchKnowledge } from '../../content/search'
import { ContentFilters } from './ContentFilters'
import { ContentRow } from './ContentRow'
import { EmptyContentState } from './EmptyContentState'

interface ContentIndexProps {
  items: KnowledgeContent[]
}

export function ContentIndex({ items }: ContentIndexProps) {
  const [query, setQuery] = useState('')
  const [topic, setTopic] = useState('All')
  const topics = useMemo(
    () => ['All', ...Array.from(new Set(items.map((item) => item.topic))).sort()],
    [items],
  )
  const results = useMemo(() => searchKnowledge(items, query, topic), [items, query, topic])

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
      <div className="border-t border-line">
        <div className="hidden min-h-9 grid-cols-[minmax(18rem,1fr)_8rem_6rem_7rem] items-center border-b border-line text-[0.68rem] text-subtle md:grid">
          <span>Name</span>
          <span>Topic</span>
          <span>Language</span>
          <span className="text-right">Updated</span>
        </div>
        {results.length === 0 ? (
          <EmptyContentState
            title="No matching notes."
            description="Try another keyword or clear the active topic filter."
          />
        ) : (
          results.map((item) => <ContentRow key={item.slug} item={item} />)
        )}
      </div>
    </>
  )
}

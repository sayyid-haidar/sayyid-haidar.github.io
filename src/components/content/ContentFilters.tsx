interface ContentFiltersProps {
  query: string
  onQueryChange: (value: string) => void
  topics: string[]
  activeTopic: string
  onTopicChange: (value: string) => void
  resultCount: number
}

export function ContentFilters({
  query,
  onQueryChange,
  topics,
  activeTopic,
  onTopicChange,
  resultCount,
}: ContentFiltersProps) {
  return (
    <div className="mb-4 space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex max-w-full gap-1 overflow-x-auto rounded-lg bg-canvas p-1">
          {topics.map((topic) => (
            <button
              key={topic}
              type="button"
              onClick={() => onTopicChange(topic)}
              aria-pressed={activeTopic === topic}
              className={`shrink-0 rounded-md px-3 py-2 text-xs transition ${
                activeTopic === topic
                  ? 'bg-white font-semibold text-ink shadow-sm'
                  : 'text-muted hover:text-ink'
              }`}
            >
              {topic}
            </button>
          ))}
        </div>
        <label className="relative block sm:w-64">
          <span className="sr-only">Search content</span>
          <input
            type="search"
            name="knowledge-search"
            autoComplete="off"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search notes…"
            className="w-full rounded-lg border border-line bg-white px-4 py-2.5 text-sm text-ink placeholder:text-subtle focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
          />
        </label>
      </div>
      <p className="sr-only" aria-live="polite">
        {resultCount} results
      </p>
    </div>
  )
}

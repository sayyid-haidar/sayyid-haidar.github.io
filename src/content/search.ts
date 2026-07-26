import type { KnowledgeContent } from './types'

function normalize(value: string) {
  return value.toLocaleLowerCase().normalize('NFKD')
}

export function searchKnowledge(items: KnowledgeContent[], query: string, topic = 'All') {
  const normalizedQuery = normalize(query.trim())

  return items.filter((item) => {
    const matchesTopic = topic === 'All' || item.topic === topic
    if (!matchesTopic) return false
    if (!normalizedQuery) return true

    const haystack = normalize([item.title, item.description, ...item.tags].join(' '))
    return haystack.includes(normalizedQuery)
  })
}

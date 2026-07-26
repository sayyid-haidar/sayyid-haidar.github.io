import { createContentRegistry, parseContentFile } from './parse'
import type { ContentCollection, ContentItem } from './types'

const projectModules = import.meta.glob('/content/projects/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

const cheatsheetModules = import.meta.glob('/content/cheatsheets/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

const writingModules = import.meta.glob('/content/writing/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

function parseModules(collection: ContentCollection, modules: Record<string, string>) {
  return Object.entries(modules).map(([sourcePath, source]) =>
    parseContentFile(collection, sourcePath, source),
  )
}

const allItems: ContentItem[] = [
  ...parseModules('projects', projectModules),
  ...parseModules('cheatsheets', cheatsheetModules),
  ...parseModules('writing', writingModules),
]

const registry = createContentRegistry(allItems)
const effectiveDate = (item: { publishedAt: string; updatedAt?: string }) =>
  item.updatedAt ?? item.publishedAt

export function getPublishedProjects() {
  return registry.projects
    .filter((item) => !item.draft)
    .sort((a, b) => a.order - b.order || b.publishedAt.localeCompare(a.publishedAt))
}

export function getProjectBySlug(slug: string) {
  return getPublishedProjects().find((item) => item.slug === slug)
}

export function getPublishedCheatsheets() {
  return registry.cheatsheets
    .filter((item) => !item.draft)
    .sort((a, b) => effectiveDate(b).localeCompare(effectiveDate(a)))
}

export function getCheatsheetBySlug(slug: string) {
  return getPublishedCheatsheets().find((item) => item.slug === slug)
}

export function getPublishedWriting() {
  return registry.writing
    .filter((item) => !item.draft)
    .sort((a, b) => effectiveDate(b).localeCompare(effectiveDate(a)))
}

export function getArticleBySlug(slug: string) {
  return getPublishedWriting().find((item) => item.slug === slug)
}

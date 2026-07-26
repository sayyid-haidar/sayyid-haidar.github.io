import { parse as parseYaml } from 'yaml'
import { knowledgeFrontmatterSchema, projectFrontmatterSchema } from './schema'
import type {
  ContentCollection,
  ContentItem,
  ContentRegistry,
  KnowledgeContent,
  ProjectContent,
} from './types'

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

function parseDocument(sourcePath: string, source: string) {
  if (!source.startsWith('---\n')) {
    throw new Error(`${sourcePath}: missing YAML frontmatter`)
  }

  const closingIndex = source.indexOf('\n---\n', 4)
  if (closingIndex === -1) {
    throw new Error(`${sourcePath}: frontmatter is not closed with ---`)
  }

  const yamlSource = source.slice(4, closingIndex)
  const body = source.slice(closingIndex + 5).trim()

  try {
    return { frontmatter: parseYaml(yamlSource), body }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'invalid YAML'
    throw new Error(`${sourcePath}: ${message}`)
  }
}

function slugFromPath(sourcePath: string) {
  const filename = sourcePath.split('/').at(-1) ?? ''
  const slug = filename.replace(/\.md$/, '')

  if (!filename.endsWith('.md') || !slugPattern.test(slug)) {
    throw new Error(`${sourcePath}: filename must be lowercase kebab-case Markdown`)
  }

  return slug
}

function readingTime(body: string) {
  const words = body.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / 200))
}

function formatSchemaError(sourcePath: string, error: unknown): never {
  if (error && typeof error === 'object' && 'issues' in error) {
    const issues = (error as { issues: Array<{ path: PropertyKey[]; message: string }> }).issues
    const details = issues
      .map((issue) => `${issue.path.join('.') || 'frontmatter'} ${issue.message}`)
      .join('; ')
    throw new Error(`${sourcePath}: ${details}`)
  }

  throw error
}

export function parseContentFile(
  collection: ContentCollection,
  sourcePath: string,
  source: string,
): ContentItem {
  const { frontmatter, body } = parseDocument(sourcePath, source)
  const common = {
    collection,
    slug: slugFromPath(sourcePath),
    body,
    readingTime: readingTime(body),
    sourcePath,
  }

  try {
    if (collection === 'projects') {
      const metadata = projectFrontmatterSchema.parse(frontmatter)
      return { ...common, ...metadata, collection } satisfies ProjectContent
    }

    const metadata = knowledgeFrontmatterSchema.parse(frontmatter)
    return { ...common, ...metadata, collection } satisfies KnowledgeContent
  } catch (error) {
    return formatSchemaError(sourcePath, error)
  }
}

export function assertUniqueSlugs(items: ContentItem[]) {
  const seen = new Map<string, string>()

  for (const item of items) {
    const key = `${item.collection}:${item.slug}`
    const previous = seen.get(key)
    if (previous) {
      throw new Error(`${item.sourcePath}: duplicate slug "${item.slug}" also used by ${previous}`)
    }
    seen.set(key, item.sourcePath)
  }
}

export function createContentRegistry(items: ContentItem[]): ContentRegistry {
  assertUniqueSlugs(items)

  return {
    projects: items.filter((item): item is ProjectContent => item.collection === 'projects'),
    cheatsheets: items.filter(
      (item): item is KnowledgeContent => item.collection === 'cheatsheets',
    ),
    writing: items.filter((item): item is KnowledgeContent => item.collection === 'writing'),
  }
}

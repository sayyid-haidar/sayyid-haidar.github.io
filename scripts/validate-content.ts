import { readdirSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { createContentRegistry, parseContentFile } from '../src/content/parse'
import type { ContentCollection, ContentItem } from '../src/content/types'

const projectRoot = process.cwd()
const collections: ContentCollection[] = ['projects', 'cheatsheets', 'writing']
const items: ContentItem[] = []

for (const collection of collections) {
  const directory = resolve(projectRoot, 'content', collection)
  const files = readdirSync(directory).filter((file) => file.endsWith('.md')).sort()

  for (const file of files) {
    const sourcePath = `/content/${collection}/${file}`
    const source = readFileSync(resolve(directory, file), 'utf8')
    items.push(parseContentFile(collection, sourcePath, source))
  }
}

createContentRegistry(items)
console.log(`Validated ${items.length} Markdown content files.`)

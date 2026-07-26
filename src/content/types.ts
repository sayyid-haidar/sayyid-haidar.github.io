export type ContentCollection = 'projects' | 'cheatsheets' | 'writing'
export type ContentLanguage = 'en' | 'id'

export interface ExternalLinks {
  github?: string
  demo?: string
  docs?: string
}

export interface BaseContent {
  collection: ContentCollection
  slug: string
  title: string
  description: string
  publishedAt: string
  updatedAt?: string
  language: ContentLanguage
  tags: string[]
  draft: boolean
  readingTime: number
  body: string
  sourcePath: string
}

export interface ProjectContent extends BaseContent {
  collection: 'projects'
  year: number
  role: string
  stack: string[]
  featured: boolean
  order: number
  cover?: string
  links?: ExternalLinks
}

export interface KnowledgeContent extends BaseContent {
  collection: 'cheatsheets' | 'writing'
  topic: string
  icon: string
}

export type ContentItem = ProjectContent | KnowledgeContent

export interface ContentRegistry {
  projects: ProjectContent[]
  cheatsheets: KnowledgeContent[]
  writing: KnowledgeContent[]
}

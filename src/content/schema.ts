import { z } from 'zod'

const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'must use YYYY-MM-DD').refine(
  (value) => {
    const parsed = new Date(`${value}T00:00:00Z`)
    return !Number.isNaN(parsed.getTime()) && parsed.toISOString().startsWith(value)
  },
  'must be a valid calendar date',
)

const safePath = z.string().startsWith('/', 'must start with /')
const externalUrl = z.string().url('must be a valid URL')

export const sharedFrontmatterSchema = z.object({
  title: z.string().trim().min(1),
  description: z.string().trim().min(1),
  publishedAt: isoDate,
  updatedAt: isoDate.optional(),
  language: z.enum(['en', 'id']),
  tags: z.array(z.string().trim().min(1)).default([]),
  draft: z.boolean().default(true),
})

export const projectFrontmatterSchema = sharedFrontmatterSchema.extend({
  year: z.number().int().min(2000).max(2100),
  role: z.string().trim().min(1),
  stack: z.array(z.string().trim().min(1)).min(1),
  featured: z.boolean().default(false),
  order: z.number().int().min(0).default(999),
  cover: safePath.optional(),
  links: z.object({
    github: externalUrl.optional(),
    demo: externalUrl.optional(),
    docs: externalUrl.optional(),
  }).optional(),
})

export const knowledgeFrontmatterSchema = sharedFrontmatterSchema.extend({
  topic: z.string().trim().min(1),
  icon: z.string().trim().min(1),
})

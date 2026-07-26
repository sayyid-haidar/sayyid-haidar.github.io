import { describe, expect, it } from 'vitest'
import { knowledgeFrontmatterSchema, projectFrontmatterSchema } from './schema'

describe('content schemas', () => {
  it('accepts Indonesian knowledge content', () => {
    expect(
      knowledgeFrontmatterSchema.parse({
        title: 'Catatan Git',
        description: 'Cara memulihkan commit.',
        publishedAt: '2026-07-20',
        language: 'id',
        topic: 'Tools',
        icon: '↩️',
      }),
    ).toMatchObject({ language: 'id', draft: true })
  })

  it('rejects malformed project links', () => {
    expect(() =>
      projectFrontmatterSchema.parse({
        title: 'Service',
        description: 'A useful service.',
        publishedAt: '2026-07-20',
        language: 'en',
        role: 'Backend',
        year: 2026,
        stack: ['Java'],
        links: { demo: 'not-a-url' },
      }),
    ).toThrow()
  })
})

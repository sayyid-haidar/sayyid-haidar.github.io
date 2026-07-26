import { describe, expect, it } from 'vitest'
import { assertUniqueSlugs, parseContentFile } from './parse'

const validCheatsheet = `---
title: PostgreSQL reference
description: Commands for daily database work.
publishedAt: 2026-07-20
language: en
tags:
  - database
topic: Database
icon: "🐘"
---

# Inspect connections

Run this query first.
`

describe('parseContentFile', () => {
  it('parses valid knowledge content and defaults it to draft', () => {
    const item = parseContentFile(
      'cheatsheets',
      '/content/cheatsheets/postgresql-reference.md',
      validCheatsheet,
    )

    expect(item).toMatchObject({
      slug: 'postgresql-reference',
      draft: true,
      readingTime: 1,
      language: 'en',
    })
  })

  it('names the file and invalid field in validation errors', () => {
    expect(() =>
      parseContentFile(
        'cheatsheets',
        '/content/cheatsheets/bad-date.md',
        validCheatsheet.replace('2026-07-20', '20 July'),
      ),
    ).toThrow('/content/cheatsheets/bad-date.md: publishedAt')
  })

  it('rejects non-kebab-case filenames', () => {
    expect(() =>
      parseContentFile('cheatsheets', '/content/cheatsheets/Bad Name.md', validCheatsheet),
    ).toThrow('filename must be lowercase kebab-case')
  })

  it('rejects duplicate slugs in one collection', () => {
    const item = parseContentFile(
      'cheatsheets',
      '/content/cheatsheets/postgresql-reference.md',
      validCheatsheet,
    )

    expect(() =>
      assertUniqueSlugs([
        item,
        { ...item, sourcePath: '/content/cheatsheets/duplicate/postgresql-reference.md' },
      ]),
    ).toThrow('duplicate slug')
  })
})

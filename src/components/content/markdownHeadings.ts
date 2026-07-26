import GithubSlugger from 'github-slugger'

export interface MarkdownHeading {
  id: string
  text: string
  level: 2 | 3
}

export function extractHeadings(markdown: string): MarkdownHeading[] {
  const slugger = new GithubSlugger()
  const headings: MarkdownHeading[] = []

  for (const line of markdown.split('\n')) {
    const match = /^(##|###)\s+(.+?)\s*$/.exec(line)
    if (!match) continue

    const text = match[2].replace(/[*_`[\]]/g, '').trim()
    headings.push({
      id: slugger.slug(text),
      text,
      level: match[1].length as 2 | 3,
    })
  }

  return headings
}

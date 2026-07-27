import GithubSlugger from 'github-slugger'
import type { Element, Root, RootContent } from 'hast'

function textContent(node: RootContent): string {
  if (node.type === 'text') return node.value
  if ('children' in node) return node.children.map(textContent).join('')
  return ''
}

export function rehypeHeadingIds() {
  return (tree: Root) => {
    const slugger = new GithubSlugger()

    function visit(node: Root | RootContent) {
      if (
        node.type === 'element'
        && (node.tagName === 'h2' || node.tagName === 'h3')
      ) {
        const heading = node as Element
        heading.properties.id = slugger.slug(textContent(heading))
      }

      if ('children' in node) {
        node.children.forEach(visit)
      }
    }

    visit(tree)
  }
}

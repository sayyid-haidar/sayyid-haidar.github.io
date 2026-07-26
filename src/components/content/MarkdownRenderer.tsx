import { isValidElement, type ReactNode } from 'react'
import GithubSlugger from 'github-slugger'
import ReactMarkdown, { type Components } from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import { CodeBlock } from './CodeBlock'

function nodeText(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(nodeText).join('')
  if (isValidElement<{ children?: ReactNode }>(node)) return nodeText(node.props.children)
  return ''
}

export function MarkdownRenderer({ markdown }: { markdown: string }) {
  const slugger = new GithubSlugger()
  const components: Components = {
    h2: ({ children }) => <h2 id={slugger.slug(nodeText(children))}>{children}</h2>,
    h3: ({ children }) => <h3 id={slugger.slug(nodeText(children))}>{children}</h3>,
    pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,
    a: ({ href, children, ...props }) => {
      const external = href?.startsWith('http')
      return (
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          {...props}
        >
          {children}
        </a>
      )
    },
  }

  return (
    <div className="prose-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={components}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  )
}

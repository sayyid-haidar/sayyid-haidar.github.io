import ReactMarkdown, { type Components } from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import { CodeBlock } from './CodeBlock'
import { rehypeHeadingIds } from './rehypeHeadingIds'

export function MarkdownRenderer({ markdown }: { markdown: string }) {
  const components: Components = {
    h2: ({ children, id }) => (
      <h2 id={id} tabIndex={-1}>
        {children}
      </h2>
    ),
    h3: ({ children, id }) => (
      <h3 id={id} tabIndex={-1}>
        {children}
      </h3>
    ),
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
        rehypePlugins={[rehypeHeadingIds, rehypeHighlight]}
        components={components}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  )
}

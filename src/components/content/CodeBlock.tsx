import {
  Children,
  isValidElement,
  useState,
  type ReactElement,
  type ReactNode,
} from 'react'
import { Check, Copy } from 'lucide-react'

function nodeText(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (!node) return ''
  if (Array.isArray(node)) return node.map(nodeText).join('')
  if (isValidElement<{ children?: ReactNode }>(node)) return nodeText(node.props.children)
  return Children.toArray(node).map(nodeText).join('')
}

export function CodeBlock({ children }: { children?: ReactNode }) {
  const [copied, setCopied] = useState(false)
  const codeElement = Children.toArray(children)[0] as ReactElement<{
    className?: string
    children?: ReactNode
  }>
  const code = nodeText(codeElement).replace(/\n$/, '')
  const language =
    codeElement?.props.className?.match(/language-([\w-]+)/)?.[1]?.toUpperCase() ?? 'CODE'

  const copy = async () => {
    if (!navigator.clipboard) return
    await navigator.clipboard.writeText(code)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="my-7 overflow-hidden rounded-xl bg-[#202124] font-mono text-sm">
      <div className="flex items-center justify-between bg-[#2a2b2e] px-4 py-2 text-[0.68rem] text-gray-400">
        <span>{language}</span>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-1.5 rounded px-2 py-1 text-gray-300 hover:bg-white/10 hover:text-white"
          aria-label="Copy code"
        >
          {copied ? <Check size={13} /> : <Copy size={13} />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className="overflow-x-auto p-5 text-[0.82rem] leading-7">{children}</pre>
    </div>
  )
}

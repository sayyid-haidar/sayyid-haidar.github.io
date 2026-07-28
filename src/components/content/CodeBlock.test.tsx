import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { CodeBlock } from './CodeBlock'

describe('CodeBlock', () => {
  it('announces a successful copy operation', async () => {
    const user = userEvent.setup()
    const writeText = vi.fn().mockResolvedValue(undefined)
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText },
    })

    render(
      <CodeBlock>
        <code className="language-ts">const answer = 42</code>
      </CodeBlock>,
    )

    await user.click(screen.getByRole('button', { name: 'Copy code' }))

    expect(writeText).toHaveBeenCalledWith('const answer = 42')
    expect(await screen.findByRole('button', { name: 'Code copied' })).toBeInTheDocument()
    expect(screen.getByText('Copied')).toHaveAttribute('aria-live', 'polite')
  })
})

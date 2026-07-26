import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App baseline', () => {
  it('renders the current portfolio hero', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /backendengineer/i })).toBeInTheDocument()
  })
})

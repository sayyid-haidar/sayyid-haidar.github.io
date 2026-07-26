import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import App from './App'

function renderRoute(route: string) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>,
  )
}

describe('application routes', () => {
  it('renders the homepage', () => {
    renderRoute('/')
    expect(screen.getByRole('heading', { name: /portfolio redesign/i })).toBeInTheDocument()
  })

  it.each([
    ['/projects', 'Selected work'],
    ['/cheatsheets', 'Cheatsheets'],
    ['/writing', 'Writing'],
  ])('renders %s', (route, heading) => {
    renderRoute(route)
    expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument()
  })

  it('renders not found for an unknown route', () => {
    renderRoute('/missing')
    expect(screen.getByRole('heading', { name: /does not exist/i })).toBeInTheDocument()
  })
})

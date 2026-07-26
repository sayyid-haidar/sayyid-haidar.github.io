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
    expect(screen.getByRole('heading', { name: /I build useful systems/i })).toBeInTheDocument()
  })

  it.each([
    ['/projects', 'Useful systems, thoughtfully built.'],
    ['/cheatsheets', 'Cheatsheets'],
    ['/writing', 'Writing'],
  ])('renders %s', async (route, heading) => {
    renderRoute(route)
    expect(await screen.findByRole('heading', { name: heading })).toBeInTheDocument()
  })

  it('renders not found for an unknown route', async () => {
    renderRoute('/missing')
    expect(
      await screen.findByRole('heading', { name: /does not exist/i }),
    ).toBeInTheDocument()
  })
})

import { Link } from 'react-router-dom'
import { Container } from '../components/layout/Container'
import { usePageMetadata } from '../lib/usePageMetadata'

export function NotFoundPage() {
  usePageMetadata('Page not found — Sayyid Haidar', 'The requested page could not be found.')

  return (
    <Container size="lg" className="flex min-h-[65vh] flex-col justify-center py-24">
      <p className="text-sm text-muted">404</p>
      <h1 className="mt-3 text-5xl font-semibold tracking-tight">This page does not exist.</h1>
      <Link to="/" className="mt-8 text-accent">
        Return home →
      </Link>
    </Container>
  )
}

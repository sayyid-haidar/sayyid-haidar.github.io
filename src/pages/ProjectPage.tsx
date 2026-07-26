import { Navigate, useParams } from 'react-router-dom'
import { Container } from '../components/layout/Container'
import { getProjectBySlug } from '../content/registry'
import { usePageMetadata } from '../lib/usePageMetadata'

export function ProjectPage() {
  const { slug = '' } = useParams()
  const project = getProjectBySlug(slug)

  usePageMetadata(
    project ? `${project.title} — Sayyid Haidar` : 'Project not found — Sayyid Haidar',
    project?.description ?? 'The requested project could not be found.',
  )

  if (!project) return <Navigate to="/404" replace />

  return (
    <Container size="lg" className="py-24">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </Container>
  )
}

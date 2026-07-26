import { Link } from 'react-router-dom'
import { Container } from '../components/layout/Container'
import { getPublishedProjects } from '../content/registry'
import { usePageMetadata } from '../lib/usePageMetadata'

export function ProjectsPage() {
  const projects = getPublishedProjects()
  usePageMetadata('Work — Sayyid Haidar', 'Selected software engineering case studies.')

  return (
    <Container size="lg" className="py-24">
      <h1>Selected work</h1>
      {projects.length === 0 ? (
        <p>No published projects yet.</p>
      ) : (
        projects.map((project) => (
          <Link key={project.slug} to={`/projects/${project.slug}`}>
            {project.title}
          </Link>
        ))
      )}
    </Container>
  )
}

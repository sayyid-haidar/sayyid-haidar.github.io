import { Link, Navigate, useParams } from 'react-router-dom'
import { MarkdownRenderer } from '../components/content/MarkdownRenderer'
import { Container } from '../components/layout/Container'
import { ProjectNavigation } from '../components/projects/ProjectNavigation'
import { ProjectProperties } from '../components/projects/ProjectProperties'
import { ProjectVisual } from '../components/projects/ProjectVisual'
import { getProjectBySlug, getPublishedProjects } from '../content/registry'
import { usePageMetadata } from '../lib/usePageMetadata'

export function ProjectPage() {
  const { slug = '' } = useParams()
  const projects = getPublishedProjects()
  const project = getProjectBySlug(slug)
  usePageMetadata(
    project ? `${project.title} — Sayyid Haidar` : 'Project not found — Sayyid Haidar',
    project?.description ?? 'The requested project could not be found.',
  )

  if (!project) return <Navigate to="/404" replace />
  const index = projects.findIndex((item) => item.slug === project.slug)
  const nextProject =
    projects.length > 1 ? projects[(index + 1) % projects.length] : undefined

  return (
    <>
      <Container size="xl" className="pt-12 md:pt-20">
        <Link to="/projects" className="text-xs text-subtle hover:text-ink">
          ← Back to all work
        </Link>
        <header className="py-16 md:py-24">
          <p className="eyebrow text-accent">
            Selected work / {project.tags[0] ?? 'Engineering'}
          </p>
          <h1 className="mt-5 max-w-5xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.067em] text-ink md:text-7xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted md:text-lg">
            {project.description}
          </p>
        </header>
        <ProjectProperties project={project} />
        <ProjectVisual project={project} />
      </Container>

      <Container size="md" className="pb-24 md:pb-32">
        <MarkdownRenderer markdown={project.body} />
      </Container>
      <ProjectNavigation nextProject={nextProject} />
    </>
  )
}

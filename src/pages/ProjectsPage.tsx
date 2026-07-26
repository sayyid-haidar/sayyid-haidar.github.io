import { EmptyContentState } from '../components/content/EmptyContentState'
import { Container } from '../components/layout/Container'
import { ProjectsSection } from '../components/sections/ProjectsSection'
import { getPublishedProjects } from '../content/registry'
import { usePageMetadata } from '../lib/usePageMetadata'

export function ProjectsPage() {
  const projects = getPublishedProjects()
  usePageMetadata('Work — Sayyid Haidar', 'Selected software engineering case studies.')

  return (
    <Container size="xl" className="min-h-[70vh] py-20 md:py-28">
      <p className="eyebrow">Selected work</p>
      <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] text-ink md:text-7xl">
        Useful systems, thoughtfully built.
      </h1>
      <p className="mb-14 mt-5 max-w-2xl text-base leading-7 text-muted">
        Case studies about the problem, architecture decisions, implementation, and
        evidence—not a list of job titles.
      </p>
      {projects.length === 0 ? (
        <EmptyContentState
          title="Case studies are being prepared."
          description="Only truthful, complete project stories will be published here."
        />
      ) : (
        <ProjectsSection projects={projects} />
      )}
    </Container>
  )
}

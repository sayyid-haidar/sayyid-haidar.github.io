import type { ProjectContent } from '../../content/types'
import { ProjectCard } from '../ui/ProjectCard'

export function ProjectsSection({ projects }: { projects: ProjectContent[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.slug}
          project={project}
          prominent={index === 0}
          headingLevel="h2"
        />
      ))}
    </div>
  )
}

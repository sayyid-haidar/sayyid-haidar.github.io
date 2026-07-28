import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ProjectContent } from '../../content/types'
import { Container } from '../layout/Container'
import { ProjectCard } from '../ui/ProjectCard'
import { ScrollReveal } from '../ui/ScrollReveal'
import { Section, SectionHeader } from '../ui/Section'

interface SelectedWorkSectionProps {
  projects: ProjectContent[]
}

export function SelectedWorkSection({ projects }: SelectedWorkSectionProps) {
  const featured = projects.filter((project) => project.featured).slice(0, 3)
  if (featured.length === 0) return null

  return (
    <Section>
      <Container size="xl">
        <div className="flex items-end justify-between gap-6">
          <SectionHeader
            eyebrow="01 / Selected work"
            title="A few things I’ve built."
            subtitle="Case studies about the problem, the technical decisions, and what changed."
          />
          <Link
            to="/projects"
            className="mb-16 hidden items-center gap-2 text-sm text-muted hover:text-ink sm:flex"
          >
            All projects <ArrowRight aria-hidden="true" size={15} />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-[1.35fr_0.65fr]">
          {featured.map((project, index) => (
            <ScrollReveal
              key={project.slug}
              delay={index * 90}
              className={index > 1 ? 'md:col-span-2' : undefined}
            >
              <ProjectCard project={project} prominent={index === 0} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}

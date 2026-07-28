import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ProjectContent } from '../../content/types'
import { cn } from '../../lib/cn'

interface ProjectCardProps {
  project: ProjectContent
  prominent?: boolean
  headingLevel?: 'h2' | 'h3'
}

export function ProjectCard({
  project,
  prominent = false,
  headingLevel = 'h3',
}: ProjectCardProps) {
  const Heading = headingLevel

  return (
    <Link
      to={`/projects/${project.slug}`}
      className={cn(
        'group flex min-h-[17rem] flex-col justify-between rounded-2xl border border-line bg-canvas p-7 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#d8d8d5] hover:shadow-[0_20px_50px_rgba(15,23,42,0.07)]',
        prominent && 'md:min-h-[23rem] md:p-9',
      )}
    >
      <div className="flex items-center justify-between text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-subtle">
        <span>{project.featured ? 'Featured' : 'Project'} / {String(project.order).padStart(2, '0')}</span>
        <ArrowUpRight
          aria-hidden="true"
          size={17}
          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </div>
      <div>
        <Heading
          className={cn(
            'text-2xl font-semibold leading-tight tracking-[-0.045em] text-ink',
            prominent && 'md:text-4xl',
          )}
        >
          {project.title}
        </Heading>
        <p className="mt-3 max-w-xl text-sm leading-6 text-muted">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-line bg-white px-3 py-1 text-[0.68rem] text-muted"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

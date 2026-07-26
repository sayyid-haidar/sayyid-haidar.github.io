import { Link } from 'react-router-dom'
import type { ProjectContent } from '../../content/types'

export function ProjectNavigation({ nextProject }: { nextProject?: ProjectContent }) {
  if (!nextProject) return null

  return (
    <section className="border-t border-line bg-canvas py-24 text-center md:py-32">
      <p className="eyebrow">Next project</p>
      <Link
        to={`/projects/${nextProject.slug}`}
        className="mt-4 inline-block text-3xl font-semibold tracking-[-0.05em] text-ink hover:text-accent md:text-5xl"
      >
        {nextProject.title} →
      </Link>
    </section>
  )
}

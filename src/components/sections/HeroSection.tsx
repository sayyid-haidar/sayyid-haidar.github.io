import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../layout/Container'
import { NotionAvatar } from '../ui/NotionAvatar'

export function HeroSection() {
  return (
    <section className="flex min-h-[calc(100vh-72px)] items-center py-20 md:py-28">
      <Container size="xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
          <div>
            <p className="eyebrow mb-5">Backend engineer · builder · writer</p>
            <h1 className="display-title max-w-4xl text-[clamp(3.4rem,7.4vw,7.1rem)]">
              I build useful systems{' '}
              <span className="text-subtle">and document what I learn.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted md:text-lg">
              Selected software projects, practical cheatsheets, and long-form notes from
              solving real engineering problems.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
              <Link
                to="/projects"
                className="inline-flex w-fit items-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
              >
                Explore my work <ArrowRight size={16} />
              </Link>
              <Link
                to="/cheatsheets"
                className="inline-flex w-fit items-center gap-2 text-sm font-medium text-muted hover:text-ink"
              >
                Read my notes <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <NotionAvatar />
        </div>
      </Container>
    </section>
  )
}

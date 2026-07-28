import { ArrowUpRight } from 'lucide-react'
import { Container } from '../layout/Container'

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-line bg-white py-28 text-center md:py-36"
    >
      <Container size="lg">
        <p className="eyebrow mb-5">Contact</p>
        <h2 className="text-balance text-4xl font-semibold tracking-[-0.055em] text-ink md:text-6xl">
          Let’s build something useful.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted">
          For collaboration, questions, or a thoughtful technical conversation.
        </p>
        <a
          href="mailto:sayyid.abdul.aziz.haidar@gmail.com"
          className="mt-8 inline-flex max-w-full items-center gap-2 break-all text-sm font-semibold text-accent hover:text-ink"
        >
          sayyid.abdul.aziz.haidar@gmail.com <ArrowUpRight aria-hidden="true" size={16} />
        </a>
      </Container>
    </section>
  )
}

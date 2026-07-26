import { Container } from '../components/layout/Container'
import { usePageMetadata } from '../lib/usePageMetadata'

export function HomePage() {
  usePageMetadata(
    'Sayyid Haidar — Backend Engineer, Builder, Writer',
    'Selected software projects, practical cheatsheets, and engineering writing.',
  )

  return (
    <>
      <section className="py-28">
        <Container size="xl">
          <h1 className="text-5xl font-semibold tracking-tight">Portfolio redesign in progress.</h1>
        </Container>
      </section>
      <section id="contact" className="py-28">
        <Container size="lg">
          <a href="mailto:sayyid.abdul.aziz.haidar@gmail.com">
            sayyid.abdul.aziz.haidar@gmail.com
          </a>
        </Container>
      </section>
    </>
  )
}

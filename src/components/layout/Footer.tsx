import { Container } from './Container'

export function Footer() {
  return (
    <footer className="border-t border-line bg-white py-8">
      <Container size="xl">
        <div className="flex flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Sayyid Haidar</span>
          <div className="flex gap-5">
            <a
              href="https://github.com/sayyid-haidar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sayyid-abdul-aziz-haidar-3a9230146/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

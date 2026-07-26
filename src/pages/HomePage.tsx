import { ContactSection } from '../components/sections/ContactSection'
import { HeroSection } from '../components/sections/HeroSection'
import { LatestKnowledgeSection } from '../components/sections/LatestKnowledgeSection'
import { SelectedWorkSection } from '../components/sections/SelectedWorkSection'
import {
  getPublishedCheatsheets,
  getPublishedProjects,
  getPublishedWriting,
} from '../content/registry'
import { usePageMetadata } from '../lib/usePageMetadata'

export function HomePage() {
  const projects = getPublishedProjects()
  const cheatsheets = getPublishedCheatsheets()
  const writing = getPublishedWriting()

  usePageMetadata(
    'Sayyid Haidar — Backend Engineer, Builder, Writer',
    'Selected software projects, practical cheatsheets, and engineering writing.',
  )

  return (
    <>
      <HeroSection />
      <SelectedWorkSection projects={projects} />
      <LatestKnowledgeSection cheatsheets={cheatsheets} writing={writing} />
      <ContactSection />
    </>
  )
}

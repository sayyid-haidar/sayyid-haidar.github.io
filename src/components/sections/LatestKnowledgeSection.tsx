import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { KnowledgeContent } from '../../content/types'
import { cn } from '../../lib/cn'
import { Container } from '../layout/Container'
import { KnowledgeRow } from '../ui/KnowledgeRow'
import { Section, SectionHeader } from '../ui/Section'

interface LatestKnowledgeSectionProps {
  cheatsheets: KnowledgeContent[]
  writing: KnowledgeContent[]
}

function KnowledgeColumn({
  title,
  icon,
  items,
  to,
}: {
  title: string
  icon: string
  items: KnowledgeContent[]
  to: string
}) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-ink">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-canvas">{icon}</span>
          {title}
        </h3>
        <Link to={to} aria-label={`View all ${title}`} className="text-muted hover:text-ink">
          <ArrowRight size={16} />
        </Link>
      </div>
      {items.slice(0, 3).map((item) => (
        <KnowledgeRow key={item.slug} item={item} />
      ))}
    </div>
  )
}

export function LatestKnowledgeSection({
  cheatsheets,
  writing,
}: LatestKnowledgeSectionProps) {
  if (cheatsheets.length === 0 && writing.length === 0) return null

  return (
    <Section background="canvas">
      <Container size="xl">
        <SectionHeader
          eyebrow="02 / Knowledge"
          title="Things worth keeping."
          subtitle="References for my future self, plus ideas worth explaining in full."
        />
        <div
          className={cn(
            'grid gap-14',
            cheatsheets.length > 0 && writing.length > 0 && 'lg:grid-cols-2',
          )}
        >
          {cheatsheets.length > 0 && (
            <KnowledgeColumn
              title="Latest cheatsheets"
              icon="⌘"
              items={cheatsheets}
              to="/cheatsheets"
            />
          )}
          {writing.length > 0 && (
            <KnowledgeColumn title="Latest writing" icon="✎" items={writing} to="/writing" />
          )}
        </div>
      </Container>
    </Section>
  )
}

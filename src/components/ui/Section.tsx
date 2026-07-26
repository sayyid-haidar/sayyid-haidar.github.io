import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  background?: 'white' | 'canvas' | 'ink' | 'gray' | 'dark'
  padding?: 'sm' | 'md' | 'lg'
}

export function Section({
  id,
  children,
  className,
  background = 'white',
  padding = 'lg',
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    canvas: 'bg-canvas',
    ink: 'bg-ink text-white',
    gray: 'bg-canvas',
    dark: 'bg-ink text-white',
  }
  const paddings = {
    sm: 'py-14',
    md: 'py-20',
    lg: 'py-24 md:py-32',
  }

  return (
    <section id={id} className={cn(backgrounds[background], paddings[padding], className)}>
      {children}
    </section>
  )
}

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-12 md:mb-16', centered && 'text-center')}>
      {eyebrow && <p className={cn('eyebrow mb-4', light && 'text-white/60')}>{eyebrow}</p>}
      <h2
        className={cn(
          'text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-5xl',
          light ? 'text-white' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-5 max-w-2xl text-base leading-7 md:text-lg',
            centered && 'mx-auto',
            light ? 'text-white/65' : 'text-muted',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

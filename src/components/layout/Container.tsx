import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface ContainerProps {
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export function Container({
  children,
  className,
  size = 'xl',
}: ContainerProps) {
  const sizes = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-none',
  }

  return (
    <div
      className={cn(
        'mx-auto w-full px-5 sm:px-7 lg:px-10',
        sizes[size],
        className,
      )}
    >
      {children}
    </div>
  )
}

interface EmptyContentStateProps {
  title: string
  description: string
}

export function EmptyContentState({ title, description }: EmptyContentStateProps) {
  return (
    <div className="rounded-xl border border-dashed border-line bg-canvas px-6 py-14 text-center">
      <h2 className="text-lg font-semibold tracking-[-0.025em] text-ink">{title}</h2>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted">{description}</p>
    </div>
  )
}

import type { ProjectContent } from '../../content/types'

export function ProjectVisual({ project }: { project: ProjectContent }) {
  if (project.cover) {
    return (
      <div className="my-16 overflow-hidden rounded-2xl border border-line bg-canvas md:my-24">
        <img
          src={project.cover}
          alt={`${project.title} project preview`}
          width={1600}
          height={900}
          className="aspect-video w-full object-cover"
          loading="lazy"
        />
      </div>
    )
  }

  return (
    <div
      aria-label="Neutral project visual"
      className="my-16 grid min-h-[24rem] place-items-center overflow-hidden rounded-2xl border border-line bg-[radial-gradient(circle_at_78%_16%,rgba(219,234,254,0.9),transparent_28%),#f7f7f5] p-8 md:my-24 md:min-h-[32rem]"
    >
      <div className="w-full max-w-2xl -rotate-1 overflow-hidden rounded-xl border border-[#dfdfdc] bg-white shadow-[0_30px_70px_rgba(15,23,42,0.12)]">
        <div className="flex h-9 items-center gap-1.5 border-b border-line bg-[#fafaf9] px-4">
          <i className="h-1.5 w-1.5 rounded-full bg-[#d5d5d2]" />
          <i className="h-1.5 w-1.5 rounded-full bg-[#d5d5d2]" />
          <i className="h-1.5 w-1.5 rounded-full bg-[#d5d5d2]" />
        </div>
        <div className="grid min-h-72 grid-cols-[6rem_1fr] sm:grid-cols-[9rem_1fr]">
          <div className="border-r border-line bg-[#fbfbfa] p-4 text-[0.65rem] leading-8 text-subtle">
            Overview<br />Activity<br />Services<br />Queues<br />Settings
          </div>
          <div className="p-5 sm:p-8">
            <p className="text-sm font-semibold text-ink">System overview</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {['Requests', 'Success', 'Latency'].map((metric, index) => (
                <div key={metric} className="rounded-lg bg-canvas p-4">
                  <span className="text-[0.6rem] uppercase tracking-wider text-subtle">
                    {metric}
                  </span>
                  <span className="mt-2 block text-lg font-semibold text-ink">
                    {index === 0 ? '—' : index === 1 ? '✓' : '↘'}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex h-24 items-end gap-2 rounded-lg bg-[#fafaf9] p-4">
              {[36, 72, 45, 88, 61, 96].map((height, index) => (
                <i
                  key={height}
                  className={`flex-1 rounded-t ${index === 5 ? 'bg-[#60a5fa]' : 'bg-[#dbeafe]'}`}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

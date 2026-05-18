import type { ReactNode } from 'react'

export function CaseStudySection({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="border-t border-primary/20 py-16 md:py-20">
      <div className="mb-8 flex items-center gap-4">
        <div className="h-px w-14 bg-accent" />
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
          {eyebrow}
        </p>
      </div>
      <h2 className="max-w-[1400px] text-3xl font-bold leading-tight text-primary md:text-5xl">
        {title}
      </h2>
      <div className="mt-8 max-w-[1400px] text-lg leading-relaxed text-muted-foreground/90 md:text-xl">
        {children}
      </div>
    </section>
  )
}


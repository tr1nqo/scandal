'use client'

import { Reveal } from '@/components/reveal'
import { useDict } from '@/lib/i18n'

export function TimelineSection() {
  const t = useDict()

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <Reveal>
        <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
          <span className="h-px w-8 bg-accent" />
          {t.timeline.eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="max-w-2xl font-serif text-4xl font-medium leading-tight tracking-tight text-balance md:text-5xl">
          {t.timeline.heading}
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-px md:grid-cols-4">
        {t.timeline.steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.12}>
            <div className="border-t-2 border-foreground pt-6 md:pr-6">
              <span className="font-serif text-5xl font-medium md:text-6xl">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-5 font-serif text-xl font-medium md:text-2xl">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                {step.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

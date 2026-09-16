'use client'

import { Reveal } from '@/components/reveal'
import { useDict } from '@/lib/i18n'

export function AudienceSection() {
  const t = useDict()

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <Reveal>
        <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
          <span className="h-px w-8 bg-accent" />
          {t.audience.eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="max-w-2xl font-serif text-4xl font-medium leading-tight tracking-tight text-balance md:text-5xl">
          {t.audience.heading}
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-px border-t border-border md:grid-cols-3">
        {t.audience.items.map((item, i) => (
          <Reveal
            key={item.title}
            delay={i * 0.1}
            className="border-b border-border md:border-b-0 md:border-r md:last:border-r-0"
          >
            <div className="py-8 md:px-8 md:py-10 md:first:pl-0">
              <span className="font-serif text-sm text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-serif text-2xl font-medium md:text-3xl">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
                {item.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

'use client'

import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'
import { useDict } from '@/lib/i18n'
import { TELEGRAM_URL } from '@/lib/contact'

export function FormatsSection() {
  const t = useDict()

  return (
    <section id="formats" className="scroll-mt-24 border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="max-w-2xl">
          <Reveal>
            <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              <span className="h-px w-8 bg-accent" />
              {t.formats.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-balance md:text-5xl">
              {t.formats.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground text-pretty">
              {t.formats.subtitle}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {t.formats.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08} className="h-full">
              <div className="flex h-full flex-col border border-border bg-card p-7 md:p-9">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-serif text-4xl font-medium text-accent">
                    {item.index}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    {item.subtitle}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-2xl font-medium md:text-[1.7rem]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {item.description}
                </p>
                <ul className="mt-5 space-y-2 border-t border-border pt-5">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col items-center gap-4 border-t border-border pt-10 text-center">
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground text-pretty">
              {t.formats.ctaNote}
            </p>
            <Button asChild size="lg" className="rounded-none px-8 text-xs uppercase tracking-[0.18em]">
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
                {t.formats.ctaButton}
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

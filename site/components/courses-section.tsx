'use client'

import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { useDict } from '@/lib/i18n'
import { TELEGRAM_URL } from '@/lib/contact'

export function CoursesSection() {
  const t = useDict()

  return (
    <section id="courses" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                <span className="h-px w-8 bg-accent" />
                {t.courses.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="max-w-xl font-serif text-4xl font-medium leading-tight tracking-tight text-balance md:text-5xl">
                {t.courses.heading}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground text-pretty">
              {t.courses.subtitle}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-10 border-t border-border pt-2 md:grid-cols-2">
          {t.courses.items.map((course, i) => (
            <Reveal as="article" key={course.title} delay={(i % 2) * 0.1} className="group border-b border-border py-8">
              <span className="text-xs uppercase tracking-[0.15em] text-accent">{course.level}</span>
              <h3 className="mt-3 font-serif text-2xl font-medium md:text-3xl">
                {course.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground text-pretty">
                {course.description}
              </p>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-xs font-medium uppercase tracking-[0.18em] text-foreground underline-offset-4 transition-colors hover:text-pink hover:underline"
              >
                {t.courses.ctaButton} →
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-col items-center gap-4">
            <p className="max-w-md text-center text-sm text-muted-foreground text-pretty">
              {t.courses.ctaNote}
            </p>
            <Button asChild size="lg" variant="outline" className="rounded-none px-8 text-xs uppercase tracking-[0.18em]">
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
                {t.courses.ctaButton}
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

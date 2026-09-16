'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { useDict } from '@/lib/i18n'

export function HeroSection() {
  const t = useDict()

  return (
    <section id="top" className="relative overflow-hidden pt-16 md:pt-20">
      <div className="mx-auto max-w-7xl px-5 pt-10 md:px-8 md:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                <span className="h-px w-8 bg-accent" />
                {t.hero.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-serif text-[13vw] font-medium leading-[0.95] tracking-tight text-balance sm:text-6xl md:text-7xl lg:text-[5.6rem]">
                {t.hero.line1}
                <br />
                <span className="italic text-accent">{t.hero.highlight}</span>{' '}
                {t.hero.line2}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground text-pretty">
                {t.hero.subtitle}
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className="rounded-none px-8 text-xs uppercase tracking-[0.18em]"
                >
                  <a href="#formats">{t.hero.ctaPrimary}</a>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="rounded-none px-6 text-xs uppercase tracking-[0.18em] hover:bg-transparent hover:text-pink"
                >
                  <a href="#portfolio">{t.hero.ctaSecondary}</a>
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2} y={40}>
              <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
                {/* Thin offset outline in the brand's Kümmel tone */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-3 -top-3 hidden h-full w-full border border-accent/45 md:block"
                />
                <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                  <Image
                    src="/images/brand/founder-portrait.jpg"
                    alt="Олена Гавриш — засновниця Sonya Scandal"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {t.about.founderName} · {t.about.founderRole}
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-y-8 border-t border-border pt-10 md:mt-20 md:grid-cols-4">
          {t.hero.highlights.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08}>
              <div>
                <dt className="font-serif text-2xl font-medium leading-tight text-balance md:text-3xl">
                  {item.value}
                </dt>
                <dd className="mt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {item.label}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}

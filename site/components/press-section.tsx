'use client'

import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { useDict } from '@/lib/i18n'
import { asset } from '@/lib/asset'

export function PressSection() {
  const t = useDict()

  return (
    <section id="press" className="scroll-mt-24 border-b border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-12 lg:gap-16">
        <Reveal y={48} className="lg:col-span-6">
          <div className="space-y-4">
            <figure className="relative aspect-[3/4] overflow-hidden border border-border bg-card">
              <Image
                src={asset('/images/brand/press-novaya.jpg')}
                alt={t.press.text}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </figure>
            <figure className="relative aspect-[16/9] overflow-hidden border border-border bg-card">
              <Image
                src={asset('/images/brand/card-experience.jpg')}
                alt="Sonya Scandal — International Business Architect & Industry Mentor"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </figure>
          </div>
        </Reveal>

        <div className="lg:col-span-6">
          <Reveal>
            <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              <span className="h-px w-8 bg-accent" />
              {t.press.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-balance md:text-5xl">
              {t.press.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground text-pretty">
              {t.press.text}
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mt-8 border-t border-border pt-6">
              <p className="font-serif text-lg italic">{t.press.source}</p>
              <p className="mt-3 max-w-md text-xs leading-relaxed text-muted-foreground text-pretty">
                {t.press.note}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

'use client'

import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { useDict } from '@/lib/i18n'
import { asset } from '@/lib/asset'

export function LevelsSection() {
  const t = useDict()
  // Displayed top-down (level 3 first) so the list reads like the tower itself.
  const topDown = [...t.levels.items].reverse()

  return (
    <section id="levels" className="scroll-mt-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="max-w-2xl">
          <Reveal>
            <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              <span className="h-px w-8 bg-accent" />
              {t.levels.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-balance md:text-5xl">
              {t.levels.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground text-pretty">
              {t.levels.subtitle}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal y={48} className="lg:col-span-5">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden bg-secondary">
              <Image
                src={asset('/images/brand/levels-tower.jpg')}
                alt={`${t.levels.items[0].title} → ${t.levels.items[2].title}`}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain"
              />
            </div>
          </Reveal>

          <ol className="border-t border-border lg:col-span-7">
            {topDown.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 0.08}>
                <div className="flex gap-6 border-b border-border py-7 md:gap-8 md:py-9">
                  <span className="shrink-0 pt-1 font-serif text-sm uppercase tracking-[0.15em] text-accent">
                    {item.level}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl font-medium md:text-[1.7rem]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                      {item.subtitle}
                    </p>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground text-pretty">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

'use client'

import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { useDict } from '@/lib/i18n'
import { asset } from '@/lib/asset'

export function AboutSection() {
  const t = useDict()

  return (
    <section id="about" className="scroll-mt-24 border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal y={48}>
                <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                  <Image
                    src={asset('/images/brand/atelier-sketch.jpg')}
                    alt="Робота над ескізом і підбір тканин у цеху"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-border pt-8">
                  {t.about.credentials.map((c) => (
                    <div key={c.label}>
                      <dt className="font-serif text-xl font-medium leading-tight text-balance md:text-2xl">
                        {c.value}
                      </dt>
                      <dd className="mt-1.5 text-xs uppercase leading-relaxed tracking-[0.13em] text-muted-foreground">
                        {c.label}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>

          <div className="flex flex-col justify-center lg:col-span-7">
            <Reveal>
              <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                <span className="h-px w-8 bg-accent" />
                {t.about.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-balance md:text-5xl">
                {t.about.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <blockquote className="mt-9 border-l-2 border-accent pl-6">
                <p className="font-serif text-xl italic leading-relaxed text-foreground text-pretty md:text-2xl">
                  {t.about.lead}
                </p>
              </blockquote>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-9 space-y-5 text-base leading-relaxed text-muted-foreground text-pretty">
                {t.about.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-10 flex items-end justify-between gap-6 border-t border-border pt-6">
                <div>
                  <p className="font-serif text-lg italic">{t.about.founderName}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {t.about.founderRole}
                  </p>
                </div>
                <div className="relative hidden h-20 w-20 shrink-0 sm:block">
                  <Image
                    src={asset('/images/brand/crest.jpg')}
                    alt="Емблема Sonya Scandal — Creativity & Strategy"
                    fill
                    sizes="80px"
                    className="object-contain mix-blend-multiply dark:mix-blend-normal"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

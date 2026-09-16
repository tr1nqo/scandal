'use client'

import { Reveal } from '@/components/reveal'
import { useDict } from '@/lib/i18n'
import { BRANDS } from '@/lib/brands'

export function BrandsSection() {
  const t = useDict()
  if (BRANDS.length === 0) return null

  return (
    <section id="brands" className="scroll-mt-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="max-w-2xl">
          <Reveal>
            <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              <span className="h-px w-8 bg-accent" />
              {t.brands.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-balance md:text-5xl">
              {t.brands.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground text-pretty">
              {t.brands.subtitle}
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-px border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {BRANDS.map((brand, i) => {
            const label = brand.ownBrand ? t.brands.ownLabel : brand.url?.replace(/^https?:\/\//, '')
            const inner = (
              <>
                <span className="font-serif text-2xl font-medium md:text-3xl">{brand.name}</span>
                <span className="mt-2 flex items-center gap-2 text-xs uppercase tracking-[0.13em] text-muted-foreground">
                  {label}
                  {brand.url && !brand.ownBrand && (
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                      ↗
                    </span>
                  )}
                </span>
              </>
            )

            return (
              <Reveal as="li" key={brand.name} delay={(i % 3) * 0.07}>
                <div className="h-full border-b border-border">
                  {brand.url && !brand.ownBrand ? (
                    <a
                      href={brand.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-full flex-col justify-center py-8 transition-colors hover:text-pink md:px-6 md:py-10"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="flex h-full flex-col justify-center py-8 md:px-6 md:py-10">
                      {inner}
                    </div>
                  )}
                </div>
              </Reveal>
            )
          })}
        </ul>

        <Reveal delay={0.1}>
          <p className="mt-10 max-w-2xl text-xs leading-relaxed text-muted-foreground text-pretty">
            {t.brands.note}
          </p>
        </Reveal>
      </div>
    </section>
  )
}

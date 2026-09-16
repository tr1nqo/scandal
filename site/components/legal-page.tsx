'use client'

import Link from 'next/link'
import { SiteFooter } from '@/components/site-footer'
import { BrandMonogram, BrandWordmark } from '@/components/brand-mark'
import { LanguageSwitcher } from '@/components/language-switcher'
import { useDict, useLanguage } from '@/lib/i18n'
import { legalContent, type LegalPage as LegalPageData } from '@/lib/legal-content'

export function LegalPage({ page }: { page: 'impressum' | 'privacy' | 'terms' }) {
  const { locale } = useLanguage()
  const t = useDict()
  const data: LegalPageData = legalContent[locale][page]

  return (
    <>
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-5 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <BrandMonogram />
            <BrandWordmark className="text-lg font-semibold" />
          </Link>
          <LanguageSwitcher />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <Link
          href="/"
          className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-pink"
        >
          {t.legalNav.back}
        </Link>

        <h1 className="mt-6 font-serif text-4xl font-medium tracking-tight md:text-5xl">
          {data.title}
        </h1>
        <p className="mt-3 text-xs uppercase tracking-[0.12em] text-muted-foreground">
          {data.updated}
        </p>

        <div className="mt-12 space-y-10">
          {data.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-serif text-2xl font-medium">{section.heading}</h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                {section.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              {section.list && (
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {section.list.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </main>

      <SiteFooter />
    </>
  )
}

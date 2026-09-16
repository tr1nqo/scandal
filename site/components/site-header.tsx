'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { LanguageSwitcher } from '@/components/language-switcher'
import { BrandMonogram, BrandWordmark } from '@/components/brand-mark'
import { cn } from '@/lib/utils'
import { useDict } from '@/lib/i18n'
import { TELEGRAM_URL } from '@/lib/contact'

export function SiteHeader() {
  const t = useDict()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: t.nav.formats, href: '#formats' },
    { label: t.nav.courses, href: '#courses' },
    { label: t.nav.portfolio, href: '#portfolio' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.faq, href: '#faq' },
    { label: t.nav.contact, href: '#contact' },
  ]

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
        scrolled
          ? 'border-b border-border bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#top" className="flex items-center gap-2">
          <BrandMonogram />
          <BrandWordmark className="text-lg font-semibold md:text-xl" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Button asChild size="sm" className="rounded-none px-6 text-xs uppercase tracking-[0.15em]">
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
              {t.nav.applyCta}
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
            aria-label={t.nav.menuOpen}
            aria-expanded={open}
          >
            <span
              className={cn(
                'h-px w-6 bg-foreground transition-transform duration-300',
                open && 'translate-y-[7px] rotate-45',
              )}
            />
            <span
              className={cn(
                'h-px w-6 bg-foreground transition-opacity duration-300',
                open && 'opacity-0',
              )}
            />
            <span
              className={cn(
                'h-px w-6 bg-foreground transition-transform duration-300',
                open && '-translate-y-[7px] -rotate-45',
              )}
            />
          </button>
        </div>
      </div>

      <div
        className={cn(
          'overflow-hidden border-t border-border bg-background transition-[max-height] duration-500 lg:hidden',
          open ? 'max-h-96' : 'max-h-0 border-t-transparent',
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground"
            >
              {l.label}
            </a>
          ))}
          <Button asChild className="mt-3 rounded-none text-xs uppercase tracking-[0.15em]">
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
              {t.nav.applyCta}
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}

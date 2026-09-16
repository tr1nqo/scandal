'use client'

import { useState, useRef, useEffect } from 'react'
import { LOCALES, useLanguage } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const LABELS: Record<string, string> = { uk: 'UA', en: 'EN', de: 'DE' }

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  return (
    <div ref={ref} className={cn('relative', className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Language / Мова / Sprache"
        aria-expanded={open}
        className="flex h-9 items-center gap-1.5 border border-border px-3 text-xs font-medium uppercase tracking-[0.12em] text-foreground transition-colors hover:border-pink hover:text-pink"
      >
        {LABELS[locale]}
        <span className={cn('transition-transform duration-200', open && 'rotate-180')}>⌄</span>
      </button>
      {open && (
        <ul className="absolute right-0 top-full z-50 mt-1 min-w-24 border border-border bg-popover py-1 shadow-sm">
          {LOCALES.map((l) => (
            <li key={l}>
              <button
                type="button"
                onClick={() => {
                  setLocale(l)
                  setOpen(false)
                }}
                className={cn(
                  'flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-xs uppercase tracking-[0.1em] transition-colors hover:bg-secondary',
                  l === locale ? 'text-accent' : 'text-foreground',
                )}
              >
                <span>{LABELS[l]}</span>
                <span className="normal-case tracking-normal text-muted-foreground">
                  {t.langNames[l]}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

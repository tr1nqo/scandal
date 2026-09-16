'use client'

import Link from 'next/link'
import { Reveal } from '@/components/reveal'
import { BrandWordmark } from '@/components/brand-mark'
import { useDict } from '@/lib/i18n'
import {
  EMAIL,
  EMAIL_HREF,
  PHONE_UA,
  PHONE_UA_HREF,
  TELEGRAM_CHANNEL_HANDLE,
  TELEGRAM_CHANNEL_URL,
  TELEGRAM_URL,
} from '@/lib/contact'
import { openCookieSettings } from '@/lib/cookie-consent'

export function SiteFooter() {
  const t = useDict()
  const year = new Date().getFullYear()

  const learnLinks = [
    { label: t.footer.colFormats.links[0], href: '/#formats' },
    { label: t.footer.colFormats.links[1], href: '/#courses' },
    { label: t.footer.colFormats.links[2], href: '/#portfolio' },
    { label: t.footer.colFormats.links[3], href: '/#faq' },
  ]
  const aboutLinks = [
    { label: t.footer.colAcademy.links[0], href: '/#about' },
    { label: t.footer.colAcademy.links[1], href: '/#contact' },
  ]

  return (
    <footer className="border-t border-border bg-surface-dark text-surface-dark-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <BrandWordmark className="text-3xl font-semibold" />
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-surface-dark-foreground/60 text-pretty">
                {t.footer.tagline}
              </p>
              <div className="mt-6 space-y-2 text-sm">
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-surface-dark-foreground/80 transition-colors hover:text-pink"
                >
                  Telegram · {PHONE_UA}
                </a>
                <a
                  href={TELEGRAM_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-surface-dark-foreground/80 transition-colors hover:text-pink"
                >
                  {t.contact.channelLabel} · {TELEGRAM_CHANNEL_HANDLE}
                </a>
                <a href={PHONE_UA_HREF} className="block text-surface-dark-foreground/80 transition-colors hover:text-pink">
                  {PHONE_UA}
                </a>
                <a href={EMAIL_HREF} className="block text-surface-dark-foreground/80 transition-colors hover:text-pink">
                  {EMAIL}
                </a>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-3">
            <Reveal delay={0.04}>
              <div>
                <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-surface-dark-foreground/50">
                  {t.footer.colFormats.heading}
                </h3>
                <ul className="mt-5 space-y-3">
                  {learnLinks.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="text-sm text-surface-dark-foreground/80 transition-colors hover:text-pink">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div>
                <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-surface-dark-foreground/50">
                  {t.footer.colAcademy.heading}
                </h3>
                <ul className="mt-5 space-y-3">
                  {aboutLinks.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="text-sm text-surface-dark-foreground/80 transition-colors hover:text-pink">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div>
                <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-surface-dark-foreground/50">
                  {t.footer.colLegal.heading}
                </h3>
                <ul className="mt-5 space-y-3">
                  <li>
                    <Link href="/impressum" className="text-sm text-surface-dark-foreground/80 transition-colors hover:text-pink">
                      {t.footer.colLegal.links[0]}
                    </Link>
                  </li>
                  <li>
                    <Link href="/datenschutz" className="text-sm text-surface-dark-foreground/80 transition-colors hover:text-pink">
                      {t.footer.colLegal.links[1]}
                    </Link>
                  </li>
                  <li>
                    <Link href="/agb" className="text-sm text-surface-dark-foreground/80 transition-colors hover:text-pink">
                      {t.footer.colLegal.links[2]}
                    </Link>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={openCookieSettings}
                      className="text-sm text-surface-dark-foreground/80 transition-colors hover:text-pink"
                    >
                      {t.footer.colLegal.links[3]}
                    </button>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-surface-dark-foreground/15 pt-8 text-xs uppercase tracking-[0.15em] text-surface-dark-foreground/50 md:flex-row">
          <p>{t.footer.rights.replace('{year}', String(year))}</p>
          <p>{t.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  )
}

'use client'

import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
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

export function ApplySection() {
  const t = useDict()

  return (
    <section id="contact" className="scroll-mt-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:px-8 md:py-36 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col justify-center">
          <Reveal>
            <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              <span className="h-px w-8 bg-accent" />
              {t.contact.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-balance md:text-6xl">
              {t.contact.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground text-pretty">
              {t.contact.subtitle}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.12} y={48}>
          <div className="flex h-full flex-col justify-between gap-8 border border-border bg-card p-8 md:p-12">
            <div>
              <p className="font-serif text-2xl italic">Sonya Scandal</p>
              <Button
                asChild
                size="lg"
                className="mt-6 w-full rounded-none text-xs uppercase tracking-[0.18em]"
              >
                <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
                  {t.contact.telegramCta}
                </a>
              </Button>

              <dl className="mt-8 space-y-4 border-t border-border pt-6 text-sm">
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-muted-foreground">{t.contact.channelLabel}</dt>
                  <dd>
                    <a
                      href={TELEGRAM_CHANNEL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium underline-offset-4 hover:text-pink hover:underline"
                    >
                      {TELEGRAM_CHANNEL_HANDLE}
                    </a>
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-muted-foreground">{t.contact.phoneLabel}</dt>
                  <dd>
                    <a href={PHONE_UA_HREF} className="font-medium underline-offset-4 hover:text-pink hover:underline">
                      {PHONE_UA}
                    </a>
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-muted-foreground">{t.contact.emailLabel}</dt>
                  <dd>
                    <a href={EMAIL_HREF} className="font-medium underline-offset-4 hover:text-pink hover:underline">
                      {EMAIL}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <p className="text-xs leading-relaxed text-muted-foreground text-pretty">
              {t.contact.note}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

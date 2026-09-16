'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useDict } from '@/lib/i18n'
import {
  OPEN_COOKIE_SETTINGS_EVENT,
  getStoredConsent,
  saveConsent,
} from '@/lib/cookie-consent'
import { cn } from '@/lib/utils'

function ToggleRow({
  title,
  description,
  checked,
  disabled,
  alwaysOnLabel,
  onChange,
}: {
  title: string
  description: string
  checked: boolean
  disabled?: boolean
  alwaysOnLabel?: string
  onChange?: (v: boolean) => void
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-t border-border py-4 first:border-t-0">
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground text-pretty">{description}</p>
      </div>
      {disabled ? (
        <span className="mt-0.5 shrink-0 text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
          {alwaysOnLabel}
        </span>
      ) : (
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          onClick={() => onChange?.(!checked)}
          className={cn(
            'relative mt-0.5 h-6 w-11 shrink-0 rounded-full border border-border transition-colors',
            checked ? 'bg-accent' : 'bg-muted',
          )}
        >
          <span
            className={cn(
              'absolute top-[3px] h-[18px] w-[18px] rounded-full bg-background shadow transition-transform',
              checked ? 'translate-x-[22px]' : 'translate-x-[3px]',
            )}
          />
        </button>
      )}
    </div>
  )
}

export function CookieConsent() {
  const t = useDict()
  const [ready, setReady] = useState(false)
  const [showBanner, setShowBanner] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [analytics, setAnalytics] = useState(false)

  useEffect(() => {
    const stored = getStoredConsent()
    if (stored) {
      setAnalytics(stored.analytics)
      setShowBanner(false)
    } else {
      setShowBanner(true)
    }
    setReady(true)

    const onOpenSettings = () => {
      const current = getStoredConsent()
      if (current) setAnalytics(current.analytics)
      setSettingsOpen(true)
    }
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, onOpenSettings)
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, onOpenSettings)
  }, [])

  if (!ready) return null

  function acceptAll() {
    saveConsent(true)
    setAnalytics(true)
    setShowBanner(false)
    setSettingsOpen(false)
  }

  function necessaryOnly() {
    saveConsent(false)
    setAnalytics(false)
    setShowBanner(false)
    setSettingsOpen(false)
  }

  function saveCustom() {
    saveConsent(analytics)
    setShowBanner(false)
    setSettingsOpen(false)
  }

  return (
    <>
      {showBanner && (
        <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-popover/97 p-5 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] backdrop-blur-sm md:p-6">
          <div className="mx-auto flex max-w-5xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium">{t.cookies.bannerTitle}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground text-pretty">
                {t.cookies.bannerText}{' '}
                <Link href="/datenschutz" className="underline underline-offset-2 hover:text-pink">
                  {t.cookies.privacyLink}
                </Link>
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-2.5">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="rounded-none text-xs uppercase tracking-[0.1em]"
                onClick={() => setSettingsOpen(true)}
              >
                {t.cookies.customize}
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="rounded-none text-xs uppercase tracking-[0.1em]"
                onClick={necessaryOnly}
              >
                {t.cookies.necessaryOnly}
              </Button>
              <Button
                type="button"
                size="sm"
                className="rounded-none text-xs uppercase tracking-[0.1em]"
                onClick={acceptAll}
              >
                {t.cookies.acceptAll}
              </Button>
            </div>
          </div>
        </div>
      )}

      <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
        <DialogContent className="sm:max-w-md rounded-none">
          <DialogHeader>
            <DialogTitle>{t.cookies.settingsTitle}</DialogTitle>
            <DialogDescription>{t.cookies.bannerText}</DialogDescription>
          </DialogHeader>

          <div>
            <ToggleRow
              title={t.cookies.necessaryTitle}
              description={t.cookies.necessaryDesc}
              checked
              disabled
              alwaysOnLabel={t.cookies.alwaysOn}
            />
            <ToggleRow
              title={t.cookies.analyticsTitle}
              description={t.cookies.analyticsDesc}
              checked={analytics}
              onChange={setAnalytics}
            />
          </div>

          <DialogFooter className="rounded-none">
            <Button type="button" variant="outline" className="rounded-none text-xs uppercase tracking-[0.1em]" onClick={necessaryOnly}>
              {t.cookies.necessaryOnly}
            </Button>
            <Button type="button" className="rounded-none text-xs uppercase tracking-[0.1em]" onClick={saveCustom}>
              {t.cookies.save}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

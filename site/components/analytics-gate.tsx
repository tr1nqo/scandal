'use client'

import { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/next'
import { CONSENT_CHANGED_EVENT, type ConsentState, getStoredConsent } from '@/lib/cookie-consent'

/**
 * Only loads Vercel Analytics once the visitor has actively opted in to
 * the "analytics" cookie category — required so the site doesn't set
 * non-essential cookies before consent (ePrivacy / GDPR).
 */
export function AnalyticsGate() {
  const [allowed, setAllowed] = useState(false)

  useEffect(() => {
    setAllowed(getStoredConsent()?.analytics ?? false)
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<ConsentState>).detail
      setAllowed(detail?.analytics ?? false)
    }
    window.addEventListener(CONSENT_CHANGED_EVENT, onChange)
    return () => window.removeEventListener(CONSENT_CHANGED_EVENT, onChange)
  }, [])

  if (!allowed || process.env.NODE_ENV !== 'production') return null
  return <Analytics />
}

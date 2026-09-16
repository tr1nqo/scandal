'use client'

const STORAGE_KEY = 'sonya-scandal-cookie-consent'
const CONSENT_VERSION = 1
export const CONSENT_CHANGED_EVENT = 'sonya-scandal:consent-changed'
export const OPEN_COOKIE_SETTINGS_EVENT = 'sonya-scandal:open-cookie-settings'

export type ConsentState = {
  necessary: true
  analytics: boolean
  decidedAt: string
  version: number
}

export function getStoredConsent(): ConsentState | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as ConsentState
    if (parsed.version !== CONSENT_VERSION) return null
    return parsed
  } catch {
    return null
  }
}

export function saveConsent(analytics: boolean) {
  const state: ConsentState = {
    necessary: true,
    analytics,
    decidedAt: new Date().toISOString(),
    version: CONSENT_VERSION,
  }
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // If storage is unavailable, consent simply can't persist across visits.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, { detail: state }))
  return state
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))
}

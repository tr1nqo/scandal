'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { dictionaries, type Dictionary, type Locale } from '@/lib/dictionaries'

const LOCALE_STORAGE_KEY = 'sonya-scandal-locale'
export const LOCALES: Locale[] = ['uk', 'en', 'de']
export const DEFAULT_LOCALE: Locale = 'uk'

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function isLocale(value: string | null): value is Locale {
  return !!value && (LOCALES as string[]).includes(value)
}

function readInitialLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE
  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY)
    if (isLocale(stored)) return stored
    const nav = window.navigator.language?.slice(0, 2)
    if (nav === 'de') return 'de'
    if (nav === 'en') return 'en'
    if (nav === 'uk' || nav === 'ru') return 'uk'
  } catch {
    // localStorage unavailable (private mode, etc.) — fall back to default
  }
  return DEFAULT_LOCALE
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setLocaleState(readInitialLocale())
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    document.documentElement.lang = locale
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale)
    } catch {
      // best effort only — a language preference is not essential to store
    }
  }, [locale, hydrated])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
  }, [])

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, t: dictionaries[locale] }),
    [locale, setLocale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}

/** Convenience hook returning just the active dictionary. */
export function useDict() {
  return useLanguage().t
}

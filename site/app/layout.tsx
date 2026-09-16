import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/lib/i18n'
import { SITE_URL } from '@/lib/site'
import { CookieConsent } from '@/components/cookie-consent'
import { AnalyticsGate } from '@/components/analytics-gate'

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

const TITLE = 'Sonya Scandal — Академія іміджу та стилю'
const DESCRIPTION =
  'Персональна школа іміджу та стилю Sonya Scandal: індивідуальний супровід, менторство та навчання стилістиці. Запис особисто в Telegram.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  // app/opengraph-image.png and app/icon.png are picked up automatically
  openGraph: {
    type: 'website',
    siteName: 'Sonya Scandal',
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    locale: 'uk_UA',
    alternateLocale: ['en_US', 'de_AT'],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbf7f2' },
    { media: '(prefers-color-scheme: dark)', color: '#201a16' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk" className={`bg-background ${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
          <CookieConsent />
        </LanguageProvider>
        <AnalyticsGate />
      </body>
    </html>
  )
}

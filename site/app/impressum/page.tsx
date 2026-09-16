import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Impressum — Sonya Scandal',
}

export default function ImpressumPage() {
  return <LegalPage page="impressum" />
}

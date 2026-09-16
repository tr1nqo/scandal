import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung — Sonya Scandal',
}

export default function DatenschutzPage() {
  return <LegalPage page="privacy" />
}

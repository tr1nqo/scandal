import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'AGB — Sonya Scandal',
}

export default function AgbPage() {
  return <LegalPage page="terms" />
}

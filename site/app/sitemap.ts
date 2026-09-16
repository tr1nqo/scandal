import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// Обязательно при output: 'export' — иначе Next считает роут динамическим
// и сборка падает с "not configured on route ... with output: export".
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    { url: SITE_URL, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/impressum`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/datenschutz`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/agb`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
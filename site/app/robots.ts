import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// Обязательно при output: 'export' — иначе Next считает роут динамическим
// и сборка падает с "not configured on route ... with output: export".
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
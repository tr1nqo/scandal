/**
 * Canonical address of the site.
 *
 * Used for link previews (OpenGraph), robots.txt and sitemap.xml, all of which
 * need absolute URLs. Set NEXT_PUBLIC_SITE_URL in the hosting provider's
 * environment variables once the domain is connected, or simply edit the
 * fallback below — it must match the real domain, without a trailing slash.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://sonyascandal.com'

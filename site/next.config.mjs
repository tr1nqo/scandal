/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV !== 'production'

// A reasonably strict baseline CSP. Next.js self-hosts the Google fonts used
// here (next/font/google) at build time, so no runtime font/style requests
// leave the site. Vercel Analytics (opt-in only, see components/analytics-gate.tsx)
// needs its own connect-src entry to report vitals.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "media-src 'self'",
  "connect-src 'self' https://vitals.vercel-insights.com https://*.vercel-insights.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  'upgrade-insecure-requests',
].join('; ')

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()',
  },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
]

const nextConfig = {
  output: 'export',
  // The whole site renders on the client and has no API routes or server
  // actions, so it can be exported as plain static files and hosted free on
  // any CDN (Cloudflare Pages, Netlify, GitHub Pages). To do that, uncomment
  // the line below and run `pnpm build` — the result lands in ./out.
  // Note: with static export the headers() block further down is NOT applied,
  // because there is no Next.js server; public/_headers covers that instead.
  // output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}

export default nextConfig

/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV !== 'production'

// Static export is switched on by the CI build (STATIC_EXPORT=1), so locally
// `pnpm dev` / `pnpm build` still run the site as a normal Next.js app with
// real security headers, while GitHub Pages gets plain HTML in ./out.
const isStaticExport = process.env.STATIC_EXPORT === '1'

// GitHub Pages serves a project repo under /<repo-name>/. Set NEXT_BASE_PATH
// to "/<repo-name>" in that case. Leave it empty for a custom domain or for a
// <user>.github.io repo.
const basePath = process.env.NEXT_BASE_PATH ?? ''

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
  // With output: 'export' Next writes plain static files to ./out.
  ...(isStaticExport ? { output: 'export' } : {}),

  // Serves /impressum as /impressum/index.html — the safest shape for any
  // static host, GitHub Pages included.
  trailingSlash: true,

  basePath,

  typescript: {
    ignoreBuildErrors: true,
  },

  // Required for static export: there is no server to optimise images.
  images: {
    unoptimized: true,
  },

  // headers() needs a Next.js server, so it is incompatible with
  // output: 'export' — including it there fails the build. On static hosting
  // public/_headers covers the same policy (Cloudflare Pages, Netlify);
  // GitHub Pages cannot send custom headers at all.
  ...(isStaticExport
    ? {}
    : {
        async headers() {
          return [
            {
              source: '/:path*',
              headers: securityHeaders,
            },
          ]
        },
      }),
}

export default nextConfig

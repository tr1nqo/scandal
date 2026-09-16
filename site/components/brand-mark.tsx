import { cn } from '@/lib/utils'

/**
 * Small monogram echoing the brand's own oval "S" stickers
 * (see the founder's original sticker sheet in public/images/brand).
 */
export function BrandMonogram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      className={cn('h-8 w-12', className)}
      aria-hidden="true"
      focusable="false"
    >
      <ellipse
        cx="30"
        cy="20"
        rx="27"
        ry="17"
        transform="rotate(-18 30 20)"
        fill="var(--brand-rust)"
        stroke="var(--brand-blue)"
        strokeWidth="1.5"
      />
      <path
        d="M22 26c2 2 6 3 9 1.5 2.5-1.3 2-3.6-1-4.4-4-1-5-3-3-5 1.6-1.6 5-1.6 7.5 0"
        fill="none"
        stroke="#fbf7f2"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function BrandWordmark({ className }: { className?: string }) {
  return (
    <span className={cn('font-serif tracking-[0.08em]', className)}>
      Sonya <span className="italic">Scandal</span>
    </span>
  )
}

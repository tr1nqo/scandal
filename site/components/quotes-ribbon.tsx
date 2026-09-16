'use client'

import { useDict } from '@/lib/i18n'

/**
 * Slow scrolling ribbon of the founder's own one-liners.
 * Pauses on hover and freezes entirely under prefers-reduced-motion
 * (both handled by the .animate-marquee rules in globals.css).
 */
export function QuotesRibbon() {
  const t = useDict()
  const track = [...t.quotes, ...t.quotes]

  return (
    <section
      aria-label="Sonya Scandal"
      className="overflow-hidden border-y border-border bg-surface-dark py-7 text-surface-dark-foreground md:py-9"
    >
      <div className="marquee-mask relative flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10 md:gap-16 md:pr-16">
          {track.map((quote, i) => (
            <p
              key={`${i}-${quote.slice(0, 16)}`}
              className="flex shrink-0 items-center gap-10 whitespace-nowrap font-serif text-lg italic md:gap-16 md:text-2xl"
            >
              <span>{quote}</span>
              <span aria-hidden="true" className="text-2xl not-italic text-kummel-light md:text-3xl">
                ·
              </span>
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { Reveal } from '@/components/reveal'
import { useDict } from '@/lib/i18n'

function VideoCard({
  src,
  poster,
  title,
  caption,
}: {
  src: string
  poster: string
  title: string
  caption: string
}) {
  return (
    <figure className="flex flex-col overflow-hidden border border-border bg-secondary">
      <video
        controls
        playsInline
        preload="none"
        poster={poster}
        className="aspect-[9/16] w-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      <figcaption className="border-t border-border bg-card px-5 py-4">
        <p className="text-sm font-medium">{title}</p>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground text-pretty">{caption}</p>
      </figcaption>
    </figure>
  )
}

export function PortfolioSection() {
  const t = useDict()
  const clips = t.portfolio.media.clips

  const videos = clips.map((clip, i) => {
    const n = String(i + 1).padStart(2, '0')
    return {
      src: `/video/brunello-${n}.mp4`,
      poster: `/video/brunello-${n}-poster.jpg`,
      title: clip.title,
      caption: clip.caption,
    }
  })

  return (
    <section id="portfolio" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 md:px-8 md:py-36">
      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <Reveal>
            <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              <span className="h-px w-8 bg-accent" />
              {t.portfolio.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="max-w-xl font-serif text-4xl font-medium leading-tight tracking-tight text-balance md:text-5xl">
              {t.portfolio.heading}
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.12}>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground text-pretty">
            {t.portfolio.subtitle}
          </p>
        </Reveal>
      </div>

      {/* Live process footage from the collaboration with Brunello Cucinelli */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {videos.map((video, i) => (
          <Reveal key={video.src} delay={(i % 4) * 0.06}>
            <VideoCard src={video.src} poster={video.poster} title={video.title} caption={video.caption} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

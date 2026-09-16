/**
 * Brands and productions the founder has worked with.
 * Listed as work references — this is what substantiates the
 * "productions around the world" line in the About section.
 *
 * Only part of the list is published for now; the section subtitle says so
 * explicitly, so new entries can simply be appended here later.
 *
 * STATUS OF THE LINKS (last checked 15.09.2026):
 *  - seam.ua            — verified live (Ukrainian clothing manufacturer)
 *  - ricamare.com.ua    — verified live (the brand spells itself "RicaMare")
 *  - zuhvala.com        — confirmed by the client as the official domain
 *  - newway.ua          — NOT VERIFIED: the domain responds but is closed to
 *                         automated checks, so it could not be confirmed as
 *                         this brand. Kept live at the client's request —
 *                         open it once in a browser before launch.
 *  - facebook.com/angel.provocation — the brand's Facebook page, used because
 *                         it has no website. Note the page spells the name
 *                         "Angel Provocation".
 *
 * An entry without `url` renders as plain text, so nothing breaks while a
 * link is still being confirmed.
 */
export type Brand = {
  name: string
  url?: string
  /** Marks the founder's own label rather than a client project. */
  ownBrand?: boolean
}

export const BRANDS: Brand[] = [
  { name: 'Seam', url: 'https://seam.ua' },
  { name: 'RicaMare', url: 'https://ricamare.com.ua' },
  { name: 'Zuhvala', url: 'https://zuhvala.com' },
  { name: 'New Way', url: 'https://newway.ua' }, // TODO: open once in a browser to confirm
  { name: 'Angel Provocation', url: 'https://www.facebook.com/angel.provocation/' },
  { name: 'Sonya Scandal', ownBrand: true },
]

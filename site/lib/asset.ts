/**
 * Префикс для файлов из папки public.
 *
 * GitHub Pages отдаёт сайт из подпапки (/scandal/), и Next.js подставляет
 * basePath сам только в свои внутренние ресурсы (_next/...) и в next/link.
 * Обычные картинки и видео из public он оставляет как есть — поэтому пути
 * к ним нужно собирать через эту функцию.
 *
 * Значение приходит из next.config.mjs (поле env), так что basePath задан
 * ровно в одном месте.
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export function asset(path: string) {
  return `${BASE_PATH}${path}`
}

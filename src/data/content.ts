// All CMS-managed content lives in /public/content/<collection>/*.json.
// We use Vite's `import.meta.glob` with `eager: true` to import every JSON
// file at build time, so there's no runtime fetch and edits show up after
// the next save (Vite HMR) or rebuild (production).

import generalSettings from '../../public/content/settings/general.json'
import announcementSettings from '../../public/content/settings/announcement.json'

export type Sermon = {
  title: string
  reference: string
  pastor: string
  date: string
  video_url?: string
  image?: string
  notes?: string
}

export type Event = {
  title: string
  day: string
  time: string
  description: string
  order?: number
}

export type Leader = {
  name: string
  role: string
  image?: string
  bio?: string
  order?: number
}

export type PastEvent = {
  title: string
  date: string
  year: number
  place?: string
  description: string
  image?: string
}

export type Series = {
  book: string
  subtitle: string
  image?: string
  vimeo_url?: string
  order?: number
}

export type GeneralSettings = {
  name: string
  tagline: string
  address_street: string
  address_city: string
  phone: string
  facebook_url: string
  vimeo_url: string
  prayer_contact_name: string
  prayer_contact_phone: string
}

export type Announcement = {
  enabled: boolean
  message: string
  link_text?: string
  link_url?: string
}

function loadCollection<T>(modules: Record<string, unknown>): T[] {
  return Object.entries(modules).map(([path, mod]) => {
    const data = (mod as { default: T }).default
    return { __path: path, ...data } as T & { __path: string }
  })
}

export const sermons: Sermon[] = loadCollection<Sermon>(
  import.meta.glob('/public/content/sermons/*.json', { eager: true })
).sort((a, b) => (b.date || '').localeCompare(a.date || ''))

export const events: Event[] = loadCollection<Event>(
  import.meta.glob('/public/content/events/*.json', { eager: true })
).sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

export const leaders: Leader[] = loadCollection<Leader>(
  import.meta.glob('/public/content/leaders/*.json', { eager: true })
).sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

export const pastEvents: PastEvent[] = loadCollection<PastEvent>(
  import.meta.glob('/public/content/past_events/*.json', { eager: true })
).sort((a, b) => b.year - a.year)

export const series: Series[] = loadCollection<Series>(
  import.meta.glob('/public/content/series/*.json', { eager: true })
).sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

export const settings: GeneralSettings = generalSettings as GeneralSettings
export const announcement: Announcement = announcementSettings as Announcement

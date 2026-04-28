// All CMS-managed content lives in /public/content/<collection>/*.json.
// We use Vite's `import.meta.glob` with `eager: true` to import every JSON
// file at build time, so there's no runtime fetch and edits show up after
// the next save (Vite HMR) or rebuild (production).

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

function loadCollection<T>(modules: Record<string, unknown>): T[] {
  return Object.entries(modules)
    .map(([path, mod]) => {
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

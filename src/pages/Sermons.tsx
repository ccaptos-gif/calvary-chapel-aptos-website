import { PageHeader } from '../components/PageHeader'
import { SITE } from '../data/site'
import { sermons as RECENT } from '../data/content'

const SERIES = [
  { book: 'Gospel of John', verses: '21 chapters', image: '/images/img-13.jpg' },
  { book: 'Acts', verses: '28 chapters', image: '/images/img-08.jpg' },
  { book: 'Hebrews', verses: '13 chapters', image: '/images/img-09.jpg' },
  { book: 'Romans', verses: '16 chapters', image: '/images/img-07.jpg' },
  { book: 'Revelation', verses: '22 chapters', image: '/images/img-02.jpg' },
  { book: 'Ezra', verses: '10 chapters', image: '/images/img-04.jpg' },
]

export function Sermons() {
  return (
    <>
      <PageHeader
        eyebrow="The Word, taught simply"
        title="Archived Sermons"
        subtitle="Verse by verse through the books of the Bible. The full archive lives on Vimeo."
        image="/images/img-13.jpg"
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-sand-500">
                By the Book
              </p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl text-ink-900">
                Sermon Series
              </h2>
            </div>
            <a
              href={SITE.vimeo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-ocean-700 hover:text-ocean-900"
            >
              All sermons on Vimeo
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6">
            {SERIES.map((s) => (
              <a
                key={s.book}
                href={SITE.vimeo}
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-[4/5] overflow-hidden bg-ocean-900"
              >
                <img
                  src={s.image}
                  alt=""
                  className="h-full w-full object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-900 via-ocean-900/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="font-display text-2xl">{s.book}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.24em] text-sand-300">
                    {s.verses}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs uppercase tracking-[0.32em] text-sand-500">
            Recent
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl text-ink-900">
            Latest Messages
          </h2>
          <div className="mt-10 divide-y divide-sand-200 border-y border-sand-200 bg-white">
            {RECENT.map((s) => (
              <a
                key={s.title + s.date}
                href={s.video_url || SITE.vimeo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-6 p-6 hover:bg-sand-50 transition-colors group"
              >
                <div className="flex items-center gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ocean-700 text-white shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-ink-900">
                      {s.title}
                    </h3>
                    <p className="text-sm text-ink-500 italic">{s.reference}</p>
                  </div>
                </div>
                <div className="hidden sm:block text-sm text-ink-500">
                  {s.pastor}
                </div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="text-sand-400 group-hover:text-ocean-700 transition-colors"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

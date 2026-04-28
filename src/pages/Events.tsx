import { PageHeader } from '../components/PageHeader'
import { pastEvents as EVENTS } from '../data/content'

export function Events() {
  return (
    <>
      <PageHeader
        eyebrow="From the archives"
        title="Past Events"
        subtitle="A look back at gatherings, festivals, and special services."
        image="/images/img-08.jpg"
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <ol className="relative border-l border-sand-200 ml-3 space-y-12">
            {EVENTS.map((e) => (
              <li key={e.title + e.date} className="ml-8">
                <span className="absolute -left-2 flex h-4 w-4 items-center justify-center rounded-full bg-ocean-700 ring-4 ring-white" />
                <p className="text-xs uppercase tracking-[0.28em] text-sand-500">
                  {e.date}
                </p>
                <h2 className="mt-2 font-display text-3xl text-ink-900">
                  {e.title}
                </h2>
                <p className="mt-1 text-sm text-ocean-700 italic">{e.place}</p>
                <p className="mt-4 text-ink-700 leading-relaxed">{e.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}

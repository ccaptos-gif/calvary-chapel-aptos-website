import { PageHeader } from '../components/PageHeader'
import { leaders as LEADERS } from '../data/content'

function Initials({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ocean-700 to-ocean-900 font-display text-5xl text-sand-200">
      {initials}
    </div>
  )
}

export function Leadership() {
  return (
    <>
      <PageHeader
        eyebrow="Those who serve"
        title="Leadership"
        subtitle="Pastors and deacons shepherding the family of Calvary Chapel Aptos."
        image="/images/img-08.jpg"
      />
      <section className="bg-sand-50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {LEADERS.map((l) => (
              <article
                key={l.name}
                className="bg-white shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  {l.image ? (
                    <img
                      src={l.image}
                      alt={l.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Initials name={l.name} />
                  )}
                </div>
                <div className="p-7">
                  <p className="text-xs uppercase tracking-[0.28em] text-sand-500">
                    {l.role}
                  </p>
                  <h2 className="mt-2 font-display text-2xl text-ink-900">
                    {l.name}
                  </h2>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

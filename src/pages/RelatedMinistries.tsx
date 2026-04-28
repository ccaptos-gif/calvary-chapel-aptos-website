import { PageHeader } from '../components/PageHeader'
import { relatedMinistries as MINISTRIES } from '../data/content'

export function RelatedMinistries() {
  return (
    <>
      <PageHeader
        eyebrow="Partners in the Gospel"
        title="Related Ministries"
        subtitle="Churches and ministries we love, support, and labor alongside."
        image="/images/img-08.jpg"
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          {MINISTRIES.length === 0 ? (
            <p className="text-center text-ink-500">
              Related ministries will appear here.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {MINISTRIES.map((m) => {
                const Card = (
                  <article className="h-full bg-white border border-sand-100 hover:border-ocean-700/30 hover:shadow-xl transition-all">
                    {m.image ? (
                      <div className="aspect-[16/9] overflow-hidden bg-sand-50">
                        <img
                          src={m.image}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[16/9] bg-gradient-to-br from-ocean-700 to-ocean-900 flex items-center justify-center">
                        <span className="font-display text-4xl text-sand-200 px-6 text-center">
                          {m.name}
                        </span>
                      </div>
                    )}
                    <div className="p-7">
                      <h2 className="font-display text-2xl text-ink-900">
                        {m.name}
                      </h2>
                      <p className="mt-3 text-ink-700 leading-relaxed">
                        {m.description}
                      </p>
                      {m.url && (
                        <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ocean-700 group-hover:text-ocean-900">
                          Visit website
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      )}
                    </div>
                  </article>
                )
                return m.url ? (
                  <a
                    key={m.name}
                    href={m.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group block"
                  >
                    {Card}
                  </a>
                ) : (
                  <div key={m.name}>{Card}</div>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

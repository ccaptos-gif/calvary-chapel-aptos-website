import { PageHeader } from '../components/PageHeader'
import { SITE } from '../data/site'

const WEEKLY = [
  { day: 'Sunday', time: '10:00 AM', title: 'Worship Service' },
  { day: 'Wednesday', time: '7:00 PM', title: 'Mid-week Bible Study' },
  { day: 'Saturday', time: '10:30 AM', title: 'Prayer Meeting' },
]

const MONTHLY = [
  {
    when: 'First Sunday',
    title: 'Communion & Potluck',
    description: 'Communion at the close of the 10am service, followed by a fellowship potluck at 11:45 AM.',
  },
  {
    when: 'Second Saturday',
    title: 'Community Breakfast',
    description: 'Brothers and friends gathering for breakfast, encouragement, and the Word at 8:00 AM.',
  },
  {
    when: 'Third Saturday',
    title: 'Deacons & Elders Meeting',
    description: 'Leadership gathering for prayer, planning, and shepherding the church family.',
  },
]

export function Ministries() {
  return (
    <>
      <PageHeader
        eyebrow="Loving God by serving His people"
        title="Our Ministries"
        subtitle="Weekly rhythms and monthly gatherings that knit our church family together."
        image="/images/img-08.jpg"
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs uppercase tracking-[0.32em] text-sand-500">
            Weekly
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl text-ink-900">
            Every week at the chapel
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-px bg-sand-100 border border-sand-100">
            {WEEKLY.map((w) => (
              <div key={w.title} className="bg-white p-8">
                <span className="text-xs uppercase tracking-[0.28em] text-sand-500">
                  {w.day}
                </span>
                <div className="mt-2 font-display text-3xl text-ocean-700">
                  {w.time}
                </div>
                <h3 className="mt-4 font-display text-xl text-ink-900">
                  {w.title}
                </h3>
              </div>
            ))}
          </div>

          <p className="mt-16 text-xs uppercase tracking-[0.32em] text-sand-500">
            Monthly
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl text-ink-900">
            Throughout the month
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {MONTHLY.map((m) => (
              <article
                key={m.title}
                className="bg-sand-50 p-8 border border-sand-100"
              >
                <span className="text-xs uppercase tracking-[0.28em] text-sand-500">
                  {m.when}
                </span>
                <h3 className="mt-3 font-display text-2xl text-ink-900">
                  {m.title}
                </h3>
                <p className="mt-3 text-ink-700 leading-relaxed">
                  {m.description}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-6 text-sm text-ink-500">
            For Saturday Prayer, please call {SITE.prayer_contact.name} at{' '}
            <a
              href={`tel:${SITE.prayer_contact.phone.replace(/-/g, '')}`}
              className="text-ocean-700 hover:text-ocean-900"
            >
              {SITE.prayer_contact.phone}
            </a>{' '}
            to confirm.
          </p>
        </div>
      </section>

      <section className="bg-ocean-900 text-white py-20">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.32em] text-sand-300">
              Outreach
            </p>
            <h2 className="mt-3 font-display text-4xl text-white">
              Nursing Home Ministry
            </h2>
            <p className="mt-6 text-white/80 leading-relaxed text-lg">
              Each month, members of our fellowship visit local nursing homes
              to bring worship, prayer, and the simple comfort of God's Word
              to residents. It is one of the quiet, faithful joys of our life
              together.
            </p>
            <p className="mt-4 text-white/70 leading-relaxed">
              If you would like to come along or learn more, give the church
              office a call at{' '}
              <a
                href={`tel:${SITE.phone.replace(/-/g, '')}`}
                className="text-sand-200 hover:text-white"
              >
                {SITE.phone}
              </a>
              .
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-2xl">
              <img
                src="/images/img-07.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'
import { SITE } from '../data/site'
import { sermons as ALL_SERMONS, events as ALL_EVENTS } from '../data/content'

const SERMONS = ALL_SERMONS.slice(0, 3)
const EVENTS = ALL_EVENTS

function formatDate(iso: string) {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ocean-900 text-white">
      <div className="absolute inset-0">
        <img
          src="/images/img-04.jpg"
          alt="Calvary Chapel Aptos church building"
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/55 via-ocean-900/45 to-ocean-900/85" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-28 md:py-40">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <img src="/images/img-03.png" alt="" className="h-10 w-10 invert opacity-90" />
            <p className="text-xs uppercase tracking-[0.3em] text-sand-200">
              Welcome to
            </p>
          </div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[1.05] text-white">
            Calvary Chapel Aptos
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85 leading-relaxed">
            A body of believers gathered together in the Lordship of Jesus
            Christ, to worship Him, to be taught by His Word through the
            power of His Holy Spirit, and to grow in His agape love toward one
            another.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/sermons"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-ocean-900 hover:bg-sand-100 transition"
            >
              Watch Sermons
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition"
            >
              Plan Your Visit
            </Link>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-ocean-900/60 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0 px-6 lg:px-10">
          {[
            { label: 'Sunday Worship', value: '10:00 AM' },
            { label: 'Wednesday Bible Study', value: '6:30 PM' },
            { label: 'Address', value: '8065 Valencia St, Aptos' },
          ].map((item) => (
            <div key={item.label} className="py-6 md:px-8 first:md:pl-0">
              <div className="text-[11px] uppercase tracking-[0.28em] text-sand-300">
                {item.label}
              </div>
              <div className="mt-2 font-display text-2xl text-white">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Welcome() {
  return (
    <section className="bg-sand-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12 px-6 lg:px-10 py-24 md:py-32 items-center">
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.32em] text-sand-500">
            About Our Fellowship
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink-900 leading-tight">
            Rooted in Scripture.
            <br />
            Anchored on the coast of Aptos.
          </h2>
          <p className="mt-6 text-lg text-ink-700 leading-relaxed">
            Calvary Chapel Aptos has been a place where neighbors and travelers
            alike gather to know Jesus and make Him known. We teach the Bible
            simply, verse by verse, trusting that God's Word is sufficient for
            every season of life.
          </p>
          <p className="mt-4 text-lg text-ink-700 leading-relaxed">
            Whether you are exploring faith for the first time or have walked
            with the Lord for many years, you are welcome at our table.
          </p>
          <a
            href={SITE.facebook}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 text-sm text-ocean-700 hover:text-ocean-900 font-medium"
          >
            <img src="/images/img-06.png" alt="" className="h-5 w-5 rounded-sm" />
            Follow us on Facebook
          </a>
        </div>
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-xl">
              <img
                src="/images/img-09.jpg"
                alt="Inside the Calvary Chapel Aptos sanctuary"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden md:block w-48 aspect-square overflow-hidden rounded-sm border-8 border-sand-50 shadow-xl">
              <img
                src="/images/img-11.jpg"
                alt="Cross atop the church steeple"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Verse() {
  return (
    <section className="relative bg-ocean-900 py-24 md:py-32 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/img-01.jpg" alt="" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-ocean-900/60" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <svg viewBox="0 0 40 32" className="mx-auto h-8 w-10 text-sand-300" aria-hidden="true">
          <path
            d="M0 32V20C0 9 5 2 16 0v6C9 7 6 12 6 18h10v14H0zm24 0V20C24 9 29 2 40 0v6c-7 1-10 6-10 12h10v14H24z"
            fill="currentColor"
          />
        </svg>
        <p className="mt-8 font-display text-3xl md:text-4xl leading-snug italic">
          For where two or three are gathered together in My name, I am there
          in the midst of them.
        </p>
        <p className="mt-6 text-sm uppercase tracking-[0.32em] text-sand-300">
          Matthew 18:20
        </p>
      </div>
    </section>
  )
}

function Sermons() {
  return (
    <section className="bg-sand-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-sand-500">
              The Word Taught
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink-900">
              Sermons
            </h2>
          </div>
          <Link
            to="/sermons"
            className="inline-flex items-center gap-2 text-sm font-medium text-ocean-700 hover:text-ocean-900"
          >
            Browse the full archive
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {SERMONS.map((s) => (
            <a
              key={s.title + s.date}
              href={s.video_url || SITE.vimeo}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-sand-100">
                {s.image && (
                  <img
                    src={s.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/70 to-transparent" />
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-medium text-ocean-900">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch on Vimeo
                </div>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="text-xs uppercase tracking-[0.28em] text-sand-500">
                  {formatDate(s.date)}
                </p>
                <h3 className="mt-3 font-display text-2xl text-ink-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-ocean-700 italic">{s.reference}</p>
                <p className="mt-auto pt-6 text-sm text-ink-500">
                  Taught by {s.pastor}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Events() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-sand-500">
            Come and Gather
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink-900">
            Coming Events
          </h2>
          <p className="mt-4 text-ink-500">
            Our doors are open. There is always a seat at the table for you.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px bg-sand-100 md:grid-cols-2 border border-sand-100">
          {EVENTS.map((e) => (
            <div
              key={e.title}
              className="flex flex-col gap-3 bg-white p-8 md:p-10 hover:bg-sand-50 transition-colors"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-xs uppercase tracking-[0.28em] text-sand-500">
                  {e.day}
                </span>
                <span className="font-display text-xl text-ocean-700">
                  {e.time}
                </span>
              </div>
              <h3 className="font-display text-2xl text-ink-900">{e.title}</h3>
              <p className="text-ink-500 leading-relaxed">{e.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Verse />
      <Sermons />
      <Events />
    </>
  )
}

import { PageHeader } from '../components/PageHeader'

export function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Our Fellowship"
        title="About Us"
        subtitle="A body of believers gathered together in the Lordship of Jesus Christ."
        image="/images/img-09.jpg"
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-0 prose-content">
          <p className="text-lg text-ink-700 leading-relaxed">
            Calvary Chapel is a body of believers gathered together in the
            Lordship of Jesus Christ to worship Him, to be taught by His Word
            through the power of His Holy Spirit, and to grow in His agape love
            toward one another.
          </p>

          <h2 className="mt-12 font-display text-3xl text-ink-900">
            Why we worship
          </h2>
          <p className="mt-4 text-ink-700 leading-relaxed">
            We come to worship Jesus Christ because He is worthy to receive
            all glory, honor, and praise. He created all things, and so we
            emphasize songs of worship and songs of praise that lift His name.
          </p>

          <h2 className="mt-10 font-display text-3xl text-ink-900">
            Why we teach the Word
          </h2>
          <p className="mt-4 text-ink-700 leading-relaxed">
            We are taught by the Word of Jesus Christ because it is a lamp to
            our feet and a light to our path. His Word is living and powerful,
            given by inspiration of God for doctrine, reproof, correction, and
            instruction in righteousness, equipping every believer for every
            good work. So we emphasize the proclamation and teaching of God's
            Word, simply and verse by verse.
          </p>

          <h2 className="mt-10 font-display text-3xl text-ink-900">
            Why we grow in agape love
          </h2>
          <p className="mt-4 text-ink-700 leading-relaxed">
            We seek to grow continually in the agape, unconditional, love
            of Jesus Christ. He commands us to love one another, so that
            through His love at work in and through us, the world will know
            that we are His disciples. We emphasize unity and fellowship in
            the body of believers.
          </p>
        </div>
      </section>

      <section className="bg-sand-50 py-20">
        <div className="mx-auto max-w-5xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-xl max-w-sm">
              <img
                src="/images/img-12.jpg"
                alt="Senior Pastor Tom Meyers"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.32em] text-sand-500">
              Senior Pastor
            </p>
            <h2 className="mt-3 font-display text-4xl text-ink-900">
              Tom Meyers
            </h2>
            <p className="mt-6 text-ink-700 leading-relaxed">
              I'm a retired large animal veterinarian. With a scientific
              background, I know science attempts to explain the world
              according to natural laws; the supernatural is discounted. That
              is where God comes in: He specializes in the supernatural.
            </p>
            <p className="mt-4 text-ink-700 leading-relaxed">
              I love God and His Word, and I love teaching the truth of God,
              and so I serve as pastor at Calvary Chapel Aptos, 8065 Valencia
              Street. I want to invite all to make a decision for Christ
              based on facts and faith. What we teach here is a matter of
              life and death.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

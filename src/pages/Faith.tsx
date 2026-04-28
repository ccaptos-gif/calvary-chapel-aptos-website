import { PageHeader } from '../components/PageHeader'

const BELIEFS = [
  {
    title: 'The Holy Spirit',
    body: 'We believe in the Holy Spirit, who came forth from the Father and the Son to convict the world of sin, righteousness, and judgment, and to regenerate, sanctify, and empower for ministry all who believe in Christ. He indwells every believer as an abiding Helper, Teacher, and Guide, and we affirm the present ministry and the exercise of all Biblical gifts of the Spirit.',
  },
  {
    title: 'Sin & Salvation',
    body: 'We believe all are sinners by nature and choice, and so under condemnation. God regenerates by the Holy Spirit those who repent of their sins and confess Jesus Christ as Lord. Jesus Christ baptizes the seeking believer with the Holy Spirit and power for service, often subsequent to regeneration.',
  },
  {
    title: 'The Church',
    body: 'We believe in the universal Church, the living spiritual body of which Christ is the Head and all regenerated persons are members.',
  },
  {
    title: 'Ordinances',
    body: 'We believe the Lord Jesus Christ committed two ordinances to the Church: baptism and the Lord\'s Supper. We practice baptism by immersion, and communion is open to all believers. We affirm the laying on of hands for the baptism of the Holy Spirit, for the ordination of pastors, elders, and deacons, and for receiving gifts of the Spirit and healing.',
  },
  {
    title: 'The Return of Christ',
    body: 'We believe in the personal and visible return of Christ to earth and the establishment of His kingdom; in the resurrection of the body; the final judgment; the eternal blessing of the righteous; and the endless suffering of the wicked.',
  },
  {
    title: 'The Apostles\' Creed',
    body: 'We believe in what is termed "The Apostles\' Creed" as embodying fundamental facts of Christian faith.',
  },
]

export function Faith() {
  return (
    <>
      <PageHeader
        eyebrow="What we believe"
        title="Statement of Faith"
        image="/images/img-13.jpg"
      />
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid grid-cols-1 gap-px bg-sand-100 border border-sand-100">
            {BELIEFS.map((b, i) => (
              <article key={b.title} className="bg-white p-8 md:p-10">
                <div className="flex items-start gap-6">
                  <div className="font-display text-2xl text-sand-400 w-10 shrink-0 pt-1">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl text-ink-900">
                      {b.title}
                    </h2>
                    <p className="mt-3 text-ink-700 leading-relaxed">{b.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

import { PageHeader } from '../components/PageHeader'
import { SITE } from '../data/site'

export function Donate() {
  return (
    <>
      <PageHeader
        eyebrow="Partner with us"
        title="Donate"
        subtitle="Calvary Chapel Aptos is a non-profit 501(c)(3). All donations are tax deductible."
        image="/images/img-01.jpg"
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-lg text-ink-700 leading-relaxed">
            Our mission is to tell the truth about God directly using the
            Bible. Your generosity sustains the ministries of Calvary Chapel
            Aptos and brings the Gospel into our community. Every gift is a
            partnership in the work of the Lord.
          </p>

          <a
            href="https://www.paypal.com/ncp/payment/Y73SWR3UYY5RW"
            target="_blank"
            rel="noreferrer"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-ocean-700 px-8 py-4 text-sm font-medium text-white hover:bg-ocean-900 transition"
          >
            Give via PayPal
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <div className="mt-16 border-t border-sand-100 pt-12">
            <p className="text-xs uppercase tracking-[0.32em] text-sand-500">
              Or by mail
            </p>
            <address className="not-italic mt-4 text-lg text-ink-900 leading-relaxed">
              {SITE.name}
              <br />
              {SITE.address.street}
              <br />
              {SITE.address.city}
            </address>
            <p className="mt-6 text-sm text-ink-500">
              Questions? Call the church office at{' '}
              <a
                href={`tel:${SITE.phone.replace(/-/g, '')}`}
                className="text-ocean-700 hover:text-ocean-900"
              >
                {SITE.phone}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

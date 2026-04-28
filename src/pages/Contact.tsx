import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { SITE } from '../data/site'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <PageHeader
        eyebrow="We'd love to hear from you"
        title="Contact Us"
        subtitle="Drop us a line, or simply come visit us this Sunday."
        image="/images/img-04.jpg"
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl text-ink-900">
              Visit us in person
            </h2>
            <p className="mt-4 text-ink-700 leading-relaxed">
              Sunday worship is at 10:00 AM. The coffee is hot, the welcome is
              warm, and dress is casual. We'd love to meet you.
            </p>

            <dl className="mt-10 space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ocean-700 text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M12 22s8-7.5 8-13a8 8 0 10-16 0c0 5.5 8 13 8 13z" strokeLinejoin="round" />
                    <circle cx="12" cy="9" r="3" />
                  </svg>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.28em] text-sand-500">
                    Address
                  </dt>
                  <dd className="mt-1 text-lg text-ink-900">
                    {SITE.address.street}
                    <br />
                    {SITE.address.city}
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ocean-700 text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M22 16.92V21a1 1 0 01-1.09 1A19 19 0 012 4.09 1 1 0 013 3h4.09a1 1 0 011 .75 12 12 0 00.6 2.5 1 1 0 01-.27 1L6.91 8.91a16 16 0 008.18 8.18l1.66-1.51a1 1 0 011-.27 12 12 0 002.5.6 1 1 0 01.75 1z" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.28em] text-sand-500">
                    Phone
                  </dt>
                  <dd className="mt-1 text-lg text-ink-900">
                    <a href={`tel:${SITE.phone.replace(/-/g, '')}`} className="hover:text-ocean-700">
                      {SITE.phone}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ocean-700 text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M3 7l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.28em] text-sand-500">
                    Online
                  </dt>
                  <dd className="mt-1 text-lg text-ink-900">
                    <a
                      href={SITE.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-ocean-700"
                    >
                      Follow us on Facebook
                    </a>
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-sand-50 p-8 md:p-10 border border-sand-100">
              <h2 className="font-display text-3xl text-ink-900">Send a message</h2>
              {submitted ? (
                <div className="mt-6 rounded-md bg-white border border-sand-200 p-6 text-ink-700">
                  Thank you. Your message has been received. We will get back
                  to you as soon as we can.
                </div>
              ) : (
                <form
                  className="mt-6 space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSubmitted(true)
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <label className="block">
                      <span className="text-xs uppercase tracking-[0.24em] text-sand-500">
                        Name
                      </span>
                      <input
                        type="text"
                        required
                        className="mt-2 w-full rounded-sm border border-sand-200 bg-white px-4 py-3 text-ink-900 focus:border-ocean-700 focus:outline-none"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs uppercase tracking-[0.24em] text-sand-500">
                        Email
                      </span>
                      <input
                        type="email"
                        required
                        className="mt-2 w-full rounded-sm border border-sand-200 bg-white px-4 py-3 text-ink-900 focus:border-ocean-700 focus:outline-none"
                      />
                    </label>
                  </div>
                  <label className="block">
                    <span className="text-xs uppercase tracking-[0.24em] text-sand-500">
                      Subject
                    </span>
                    <input
                      type="text"
                      className="mt-2 w-full rounded-sm border border-sand-200 bg-white px-4 py-3 text-ink-900 focus:border-ocean-700 focus:outline-none"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs uppercase tracking-[0.24em] text-sand-500">
                      Message
                    </span>
                    <textarea
                      rows={6}
                      required
                      className="mt-2 w-full rounded-sm border border-sand-200 bg-white px-4 py-3 text-ink-900 focus:border-ocean-700 focus:outline-none"
                    />
                  </label>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-ocean-700 px-7 py-3 text-sm font-medium text-white hover:bg-ocean-900 transition"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

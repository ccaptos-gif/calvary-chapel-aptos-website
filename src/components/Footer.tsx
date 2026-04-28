import { Link } from 'react-router-dom'
import { SITE } from '../data/site'

export function Footer() {
  return (
    <footer id="contact" className="bg-ocean-900 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3">
              <img src="/images/img-05.png" alt="" className="h-10 w-10 brightness-0 invert opacity-90" />
              <div>
                <div className="font-display text-xl">{SITE.name}</div>
                <div className="text-[10px] uppercase tracking-[0.32em] text-sand-300">
                  {SITE.tagline}
                </div>
              </div>
            </Link>
            <p className="mt-6 text-white/70 leading-relaxed max-w-md">
              Worshipping Jesus, growing in His Word, and loving one another on
              the central California coast.
            </p>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-sand-200 hover:text-white"
            >
              <img src="/images/img-06.png" alt="" className="h-5 w-5 rounded-sm" />
              Follow us on Facebook
            </a>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display text-lg text-sand-200">Visit</h4>
            <address className="not-italic mt-4 text-white/70 leading-relaxed">
              {SITE.address.street}
              <br />
              {SITE.address.city}
              <br />
              <a
                href={`tel:${SITE.phone.replace(/-/g, '')}`}
                className="hover:text-white mt-2 inline-block"
              >
                {SITE.phone}
              </a>
            </address>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-display text-lg text-sand-200">Service Times</h4>
            <ul className="mt-4 space-y-2 text-white/70">
              <li className="flex justify-between">
                <span>Sunday Worship</span>
                <span>10:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Wednesday Bible Study</span>
                <span>6:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday Prayer (2nd Sat)</span>
                <span>10:30 AM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>“Grace and peace to you from God our Father and the Lord Jesus Christ.”</p>
        </div>
      </div>
    </footer>
  )
}

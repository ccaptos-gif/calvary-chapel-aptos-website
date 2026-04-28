import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { NAV } from '../data/site'

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-sand-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/img-05.png" alt="" className="h-9 w-9" />
          <div className="leading-tight">
            <div className="font-display text-lg text-ocean-900 tracking-wide">
              Calvary Chapel
            </div>
            <div className="text-[10px] uppercase tracking-[0.32em] text-sand-500">
              Aptos · California
            </div>
          </div>
        </Link>
        <nav className="hidden xl:flex items-center gap-1">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'text-ocean-900 bg-sand-100'
                    : 'text-ink-700 hover:text-ocean-700 hover:bg-sand-50'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden xl:flex">
          <Link
            to="/donate"
            className="inline-flex items-center rounded-full bg-ocean-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-ocean-900 transition"
          >
            Donate
          </Link>
        </div>
        <button
          onClick={() => setOpen((o) => !o)}
          className="xl:hidden rounded-md p-2 text-ink-700 hover:bg-sand-50"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="xl:hidden border-t border-sand-100 bg-white">
          <nav className="flex flex-col px-6 py-4">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 text-base border-b border-sand-50 last:border-b-0 ${
                    isActive ? 'text-ocean-900 font-medium' : 'text-ink-700'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/donate"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-ocean-700 px-5 py-3 text-sm font-medium text-white"
            >
              Donate
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

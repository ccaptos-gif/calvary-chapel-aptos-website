import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { settings } from '../data/content'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

// Loads Google Analytics 4 only when an ID is configured in Site Settings
// (public/content/settings/general.json → google_analytics_id).
// Tracks an initial page view, then every client-side route change.
export function Analytics() {
  const id = settings.google_analytics_id?.trim()
  const { pathname, search } = useLocation()
  const initialized = useRef(false)

  useEffect(() => {
    if (!id) return
    if (initialized.current) return
    initialized.current = true

    // Inject the gtag.js loader script
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer!.push(args)
    }
    window.gtag('js', new Date())
    // send_page_view: false because we handle pageviews on every route change
    window.gtag('config', id, { send_page_view: false })
  }, [id])

  useEffect(() => {
    if (!id || !window.gtag) return
    window.gtag('event', 'page_view', {
      page_path: pathname + search,
      page_location: window.location.href,
      page_title: document.title,
    })
  }, [id, pathname, search])

  return null
}

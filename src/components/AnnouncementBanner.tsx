import { announcement } from '../data/content'

export function AnnouncementBanner() {
  if (!announcement.enabled || !announcement.message) return null

  const hasLink = announcement.link_url && announcement.link_text

  return (
    <div className="bg-ocean-700 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-2.5 flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-1 text-center text-sm">
        <span>{announcement.message}</span>
        {hasLink && (
          <a
            href={announcement.link_url}
            className="inline-flex items-center gap-1 font-medium underline underline-offset-2 hover:text-sand-200"
          >
            {announcement.link_text}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        )}
      </div>
    </div>
  )
}

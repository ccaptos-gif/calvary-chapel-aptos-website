// Site-wide constants. The values come from the CMS-editable
// `public/content/settings/general.json` so the office can update
// address, phone, social URLs, etc. without a developer.

import { settings } from './content'

export const SITE = {
  name: settings.name,
  tagline: settings.tagline,
  address: {
    street: settings.address_street,
    city: settings.address_city,
  },
  phone: settings.phone,
  facebook: settings.facebook_url,
  vimeo: settings.vimeo_url,
  prayer_contact: {
    name: settings.prayer_contact_name,
    phone: settings.prayer_contact_phone,
  },
}

export const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Statement of Faith', to: '/faith' },
  { label: 'Leadership', to: '/leadership' },
  { label: 'Ministries', to: '/ministries' },
  { label: 'Sermons', to: '/sermons' },
  { label: 'Past Events', to: '/events' },
  { label: 'Contact', to: '/contact' },
]

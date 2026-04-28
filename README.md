# Calvary Chapel Aptos

The website for Calvary Chapel Aptos. Built with **React + Vite + Tailwind CSS** and content-managed through **Decap CMS** (committing to GitHub via Netlify Identity).

- **Live:** https://sunny-dragon-429bb9.netlify.app/ *(replace with custom domain when ready)*
- **Editor (drag-and-drop content management):** `/admin/`
- **Repo:** this directory
- **Hosting:** Netlify
- **Source for migration:** https://www.calvarychapelaptos.com/ (Wix)

---

## Quick start (developers)

```bash
bun install         # install deps
bun run dev         # site at http://localhost:5173
bun run cms         # in a SECOND terminal — local Decap backend on :8081
```

Then visit `http://localhost:5173/admin/` for the editor (no login needed locally).

| Script | What it does |
| --- | --- |
| `bun run dev` | Vite dev server with HMR |
| `bun run cms` | Decap local backend — required for CMS edits to write to disk in dev |
| `bun run build` | Production build to `dist/` |
| `bun run preview` | Serve the production build locally |
| `bun run lint` | Lint TypeScript |

---

## How content editing works

Editable content lives in **`public/content/`** as JSON files, one per item. The Decap admin UI at `/admin/` provides a friendly form for each collection and saves changes by committing to the GitHub repo.

```
public/
├── admin/
│   ├── index.html        ← Decap CMS shell + Netlify Identity widget
│   └── config.yml        ← Field definitions for each collection
└── content/
    ├── sermons/          ← One JSON per sermon
    ├── events/           ← Recurring weekly/monthly events
    ├── leaders/          ← Pastors and deacons
    ├── past_events/      ← Annual archive
    └── uploads/          ← Drag-dropped images land here
```

Changes flow:

1. Editor opens `/admin/`, signs in with Netlify Identity
2. Picks a collection (e.g. **Sermons** → **New Sermon**)
3. Fills the form, drag-drops a thumbnail into the image field
4. Clicks **Save** → Decap commits to the `main` branch via Git Gateway
5. Netlify auto-rebuilds → live in ~30 seconds

The site reads these files at build time via `import.meta.glob` in [`src/data/content.ts`](src/data/content.ts), so editing is instant in dev (Vite HMR) and rebuilt on every commit in production.

### Adding a new editable collection

1. Add a new entry in [`public/admin/config.yml`](public/admin/config.yml) under `collections:`
2. Add a corresponding `loadCollection<T>` call in [`src/data/content.ts`](src/data/content.ts)
3. Import that collection in whichever page should render it

---

## Deploying

The site deploys to Netlify on every push to `main`. Configuration lives in [`netlify.toml`](netlify.toml):

- Build: `bun run build`
- Publish: `dist/`
- `/admin/*` redirects to `/admin/index.html` (so Decap stays out of the SPA fallback)
- `/*` falls back to `/index.html` (so React Router deep links work)

### One-time Netlify dashboard setup

Done in the Netlify UI, **not** in code:

1. **Identity** tab → **Enable Identity**
2. Identity → *Settings and usage* → **Registration: Invite only** (so randos can't sign up)
3. Identity → *Services* → **Git Gateway → Enable** (lets Decap commit on the editor's behalf)
4. *(optional)* Identity → *External providers* → add **Google** for one-click login
5. Identity → **Invite users** — invite the pastor's email; he sets a password from the email link

---

## Project structure

```
src/
├── App.tsx                  Layout + ScrollToTop
├── main.tsx                 Router setup (createBrowserRouter)
├── components/
│   ├── Header.tsx           Sticky nav with mobile drawer
│   ├── Footer.tsx
│   └── PageHeader.tsx       Shared hero strip used on sub-pages
├── data/
│   ├── site.ts              Address, phone, social URLs (constants)
│   └── content.ts           Loads JSON content via import.meta.glob
└── pages/
    ├── Home.tsx             Hero, mission, sermons preview, events
    ├── About.tsx
    ├── Faith.tsx            Statement of Faith
    ├── Leadership.tsx       Reads from public/content/leaders/
    ├── Ministries.tsx
    ├── Sermons.tsx          Reads from public/content/sermons/
    ├── Events.tsx           Reads from public/content/past_events/
    ├── Donate.tsx
    └── Contact.tsx
```

Tailwind tokens (palette, fonts) are defined in [`src/index.css`](src/index.css) using Tailwind v4's `@theme` block.

---

## Tech notes

- **React 19**, **React Router v7** (data router API)
- **Tailwind CSS v4** via the official Vite plugin (no `tailwind.config.js`)
- **Vite v8** with a small custom middleware in [`vite.config.ts`](vite.config.ts) that serves `public/admin/index.html` for `/admin` and `/admin/` (otherwise the SPA fallback would catch it)
- **Decap CMS v3** loaded from CDN — no npm install needed for the editor itself, only `decap-server` for local dev
- All site images live in [`public/images/`](public/images/) (downloaded from the legacy Wix site)
- Donation goes to PayPal: `https://www.paypal.com/ncp/payment/Y73SWR3UYY5RW`

---

## Common tasks

**Add a new sermon**
Editor side: `/admin/` → Sermons → New Sermon → fill, save.
Code side: drop a JSON file into `public/content/sermons/`. The site sorts by `date` desc automatically.

**Replace a leader's photo**
Editor side: `/admin/` → Leadership → click the leader → drop a new image into the Photo field.
Code side: replace the `image` path in `public/content/leaders/<slug>.json`.

**Update mission text or the Statement of Faith**
These live in code (rare changes). Edit [`src/pages/About.tsx`](src/pages/About.tsx) or [`src/pages/Faith.tsx`](src/pages/Faith.tsx) directly.

**Update address, phone, Facebook URL**
Edit [`src/data/site.ts`](src/data/site.ts).

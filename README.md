# Michael Tardi — Event Specialist of Manhattan

A three-page bio and lead-capture site. React 19 + Vite, deployed as a static
build with one serverless function for the contact form.

## Quick start

```bash
npm install
npm run dev          # http://localhost:5173
```

| Command | What it does |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint over the whole project |
| `npm run images` | Resize + compress everything in `public/images` in place |

## Structure

```
api/contact.js          Serverless endpoint → forwards leads to n8n
public/images/          21 web-sized assets (3.9 MB total)
  michael/              9 portraits of Michael
scripts/                Image optimiser
src/
  data/site.js          ALL copy and image paths — the only file to edit
                        for content changes
  components/           Navbar, Footer, Reveal
  pages/                Home, About, Contact
  styles/variables.css  Design tokens
```

### Pages and sections

| Route | Sections |
|---|---|
| `/` | Hero (split, portrait right) + stat rail · About · Services · Venue network · Selected work · Testimonials · "The Pitch" CTA |
| `/about` | Masthead · Story · Timeline · The Entrepreneur · Personality · Off the Clock · Casting Snapshot · Companies founded · CTA |
| `/contact` | Masthead · Four ways to partner · Form |

## Editing content

Everything readable on the site lives in [`src/data/site.js`](src/data/site.js).
Change the text there and it updates everywhere — no other file hard-codes copy.

## Replacing images

See [ASSETS.md](ASSETS.md). Short version: drop a file at the same path with
the same name, then run `npm run images`.

Full-resolution source photography lives in `data/`, which is gitignored —
only the optimised copies in `public/images` are committed.

## Contact form

The form posts to `/api/contact`, which screens the submission and forwards it
to an n8n webhook. Four spam layers: a honeypot field, a minimum fill time,
optional reCAPTCHA v3, and per-IP rate limiting.

Copy `.env.example` to `.env.local` and fill in the n8n values. The form
returns a clear error until `N8N_LEAD_WEBHOOK_URL` is set.

## Deploying

See [DEPLOY.md](DEPLOY.md).

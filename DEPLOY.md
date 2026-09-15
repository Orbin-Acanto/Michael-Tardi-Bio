# Going Live

Written for: whoever ships this site.

The site is build-ready. What follows is everything that has to come from you —
nothing here can be filled in from the codebase.

---

## 1. What you need to supply

### A. Domain

The intended domain, and access to its DNS. The code currently assumes
`www.michaeltardi.com` in two places:

- `index.html` — the `canonical` and `og:url` tags
- `public/robots.txt` and `public/sitemap.xml` — the sitemap URL

If the domain is different, say so and it gets changed in one pass.

### B. n8n webhook credentials

Three values, set as environment variables on the host:

| Variable | What it is |
|---|---|
| `N8N_LEAD_WEBHOOK_URL` | Full URL of the n8n webhook that should receive leads |
| `N8N_USERNAME` | Basic-auth username for that webhook |
| `N8N_PASSWORD` | Basic-auth password for that webhook |

If the MMEink Worldwide n8n instance should also handle these leads, its
existing credentials work — the payload shape is deliberately compatible.

**Until these are set the contact form shows an error.** Everything else works.

### C. reCAPTCHA v3 keys — optional

| Variable | Notes |
|---|---|
| `VITE_RECAPTCHA_SITE_KEY` | Public, ships in the browser bundle |
| `RECAPTCHA_SECRET_KEY` | Secret, server only |

Leave both blank and the form still works — the honeypot, the minimum fill
time, and per-IP rate limiting stay active. Add them for bot scoring on top.

### D. Confirm the contact details

Currently in `src/data/site.js`, taken from the existing MMEink and 48 Wall
Street sites. Confirm each is right for Michael personally:

- Email — `mtardi@mmeink.com`
- Phone — `212-971-5353`
- LinkedIn — `linkedin.com/in/michael-tardi`
- Instagram — `instagram.com/mmeink` *(is there a personal account instead?)*

### E. Five remaining images

See [ASSETS.md](ASSETS.md). Michael's own photography is placed. What is left
is three event photos and two background images, all currently working
placeholders — not broken links.

### F. Content decisions

1. **Testimonials.** The three quotes in `src/data/site.js` are carried over
   from the previous build and are attributed to names that look like
   placeholders — Sarah Mitchell, James Romano, Lisa Torres. Either confirm
   they are real and approved for publication, supply real ones, or the section
   gets removed. **Publishing invented testimonials is the one thing here that
   would be a genuine problem**, so this needs an explicit answer.
2. **The three featured events.** 40/40 Club, Swiss Re, and Visit Mexico.
   Confirm Michael is comfortable naming these clients publicly.
3. **The personal details now on the About page.** Age 46, height, weight, the
   La Mer line, and photographs of Michael's niece and nephew. All came from
   the supplied bio, but a casting one-sheet is normally sent to a named
   recipient rather than published on the open web. Confirm Michael is happy
   for all of it — the children's photographs especially — to be public and
   indexable. If not, the Casting Snapshot and Off the Clock sections can be
   put behind a link shared only with producers.

---

## 1b. Resolved copy conflicts

The supplied bio disagreed with the previous site copy in four places. The new
bio won each time, and every mention across the site was updated. Worth a
check before launch:

| | Was | Now |
|---|---|---|
| Experience | "35+ years" | **32 years** (age 46, started at 14) |
| Started at | Age 13 | **Age 14** |
| Company name | MMEink | **MME Worldwide** |
| Origin story | "Mikey Mike Entertainment, a bedroom startup" | **"MC Mikey Mike," performing at Bar and Bat Mitzvahs** |

Two things the new bio did not settle:

- **The company URL is still `mmeink.com`** while the name now reads "MME
  Worldwide". If MME Worldwide has its own domain, say so. The "Mikey Mike
  Entertainment" and "MMEink South" logos also still appear in the Companies
  grid on the About page.
- **The eight-venue network** stayed on the home page. The new bio names only
  48 Wall Street. If the other seven are no longer his to claim, that section
  should be cut or trimmed.

---

## 2. Deploying to Vercel

The repo includes `vercel.json`, so this is mostly automatic.

```bash
npm i -g vercel
vercel link
vercel env add N8N_LEAD_WEBHOOK_URL     # repeat for the other variables
vercel --prod
```

Or through the dashboard: import the Git repo, and Vercel reads `vercel.json`
for the framework, the build command, the SPA rewrites, and the asset cache
headers. Add the environment variables under **Settings → Environment
Variables**, then attach the domain under **Settings → Domains**.

`api/contact.js` deploys as a serverless function automatically — there is no
separate backend to run or pay for.

### Deploying somewhere else

Anywhere that serves static files works for the site itself, but `api/contact.js`
is written against the Vercel/Web-standard handler signature.

- **Netlify** — move it to `netlify/functions/contact.js` and adjust the
  export signature, or point the form at a Netlify Form instead.
- **Cloudflare Pages** — move it to `functions/api/contact.js`; the
  `request.formData()` API is already compatible.
- **Static host with no functions** (S3, GitHub Pages, plain nginx) — the
  three pages work, but the contact form has nowhere to post. Swap it for
  Formspree or a direct n8n POST from the browser.

---

## 3. Pre-launch checklist

- [ ] Domain confirmed and DNS pointed
- [ ] `N8N_LEAD_WEBHOOK_URL`, `N8N_USERNAME`, `N8N_PASSWORD` set
- [ ] Test submission received in n8n, and the notification lands in the right inbox
- [ ] Email, phone, and social links confirmed
- [ ] Testimonials confirmed real or replaced or removed
- [ ] Featured events cleared for public naming
- [ ] Personal details and family photographs cleared for public publication
- [ ] Copy conflicts above confirmed (32 years, age 14, MME Worldwide)
- [ ] Remaining five images replaced and `npm run images` run
- [ ] `npm run build` passes
- [ ] Deep links checked — `/about` and `/contact` load directly, not just via nav

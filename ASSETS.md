# Assets to Supply

Written for: whoever is gathering photos and logos for the Michael Tardi site.

**Michael's own photography is done.** Nine shots from the supplied folder are
now placed across the site. What remains is a short list of event and venue
imagery, all of which currently has a working placeholder — nothing is broken
while you collect the real files.

Replacing an asset means dropping a file at the exact path given and keeping
the filename identical. No code changes needed. Then run once:

```bash
npm run images
```

That resizes and compresses everything in `public/images` in place, so you can
hand over full-resolution exports without thinking about file size.

---

## Done — Michael's photos

Placed from `MICHAEL TARDI'S PHOTOS`. Listed so you can swap any individual
pick without hunting for where it lives.

| Path | Source | Where it appears |
|---|---|---|
| `michael/hero-portrait.jpg` | M-13 | Home hero, right column. Also the social share image. |
| `michael/story.jpg` | M-18 | Home "About Michael" · About "The Story" |
| `michael/entrepreneur.jpg` | M-4 | About → The Entrepreneur |
| `michael/personality.jpg` | M-33 | About → Personality (dark section) |
| `michael/family-1.jpg` | M-11 | About → Off the Clock |
| `michael/family-2.jpg` | M-40 | About → Off the Clock |
| `michael/casting-1.jpg` | M-26 | About → Casting Snapshot strip |
| `michael/casting-2.jpg` | M-24 | About → Casting Snapshot strip |
| `michael/casting-3.jpg` | M-21 | About masthead background · Casting strip |

To swap one, re-crop from the original at the size in the table below and
overwrite the file.

| Slot | Shape | Supply at |
|---|---|---|
| hero-portrait | 2:3 portrait | 1000 × 1500 |
| story · entrepreneur · personality | 3:4 portrait | 1000 × 1333 |
| family-1 · family-2 | 3:2 landscape | 1400 × 933 |
| casting-1/2/3 | 3:4 portrait | 800 × 1067 |

---

## Still needed — four event and venue photos

These are the only images left that are not of Michael. All four are currently
placeholders drawn from the older photo library.

| # | File path | Shape | Supply at | What it should show |
|---|---|---|---|---|
| 1 | `public/images/hero.jpg` | 16:9 | 2000 × 1125 | Sits *behind* the home hero at 16% opacity, purely for depth. A wide, dark venue interior works best. Low priority — almost invisible by design. |
| 2 | `public/images/cta.jpg` | 16:7 | 2000 × 900 | Backs the closing "The Pitch" band on every page, darkened heavily behind centred text. Favour high contrast and clear shapes. |
| 3 | `public/images/work/40-40-club.jpg` | 4:3 | 1600 × 1200 | The 40/40 Club grand reopening. |
| 4 | `public/images/work/swiss-re.jpg` | 4:3 | 1600 × 1200 | Swiss Re 150th anniversary at Cipriani Downtown. |
| 5 | `public/images/work/visit-mexico.jpg` | 4:3 | 1600 × 1200 | Visit Mexico at 48 Wall Street. |

**Format:** JPG, sRGB. Do not pre-compress — `npm run images` handles it.

### If the three event photos do not exist

Common for older events. Either swap in events you *do* have photography for
(edit the `work` array in `src/data/site.js` — three names, clients, and
summaries) or use strong generic venue shots; the section reads fine either way.

---

## Logos

All twelve are in place using files from the existing library. Replace any that
look low-resolution or have a visibly cropped edge.

**Specs:** PNG with a transparent background (SVG better still), at least
600 px on the longest side, artwork trimmed tight. They render on white tiles,
so a white background is acceptable.

**Venues** — `public/images/venues/`
`48-wall-street.png` · `the-1912.png` · `midtown-veranda.png` ·
`manhattan-lofts.png` · `the-artistry.png` · `fidi-mezzanine.png` ·
`60-pine.png` · `tardis-cafe.png`

**Companies** — `public/images/companies/`
`mikey-mike-entertainment.png` · `fidi-hospitality.png` · `mmeink-south.png` ·
`tardis-catering.png` · `caviar-kart.svg` · `tardis-cafe.svg`

---

## What is no longer needed

The original build asked for roughly eighty images plus a video and a brochure.
Do not spend time on any of the following:

- The hero background video · seven unique page-hero backgrounds
- Thirty-two service carousel images · sixteen portfolio thumbnails
- Twenty-plus venue gallery photos · Opera House and The Studios logos
- Press and blog thumbnails · the brochure cover and PDF

---

## Design reference

| | |
|---|---|
| Gold | `#c19a4b` |
| Ivory (page background) | `#faf8f4` |
| Ink (dark sections) | `#14110f` |
| Display typeface | Cormorant Garamond |
| Body typeface | Inter |

Warm, restrained, expensive — deep shadows, gold accents, natural light.

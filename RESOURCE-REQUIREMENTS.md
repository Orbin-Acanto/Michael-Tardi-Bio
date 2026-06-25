# Michael Tardi Bio Website — Resource Requirements for Designer

This document outlines all visual resources needed for the Michael Tardi professional bio website. Each item includes the required aspect ratio, recommended pixel dimensions, usage context, and notes for the designer.

---

## Design System Reference

| Property | Value |
|---|---|
| **Primary Gold** | `#d2b371` |
| **Gold Light** | `#e8d4a0` |
| **Gold Dark** | `#b8963e` |
| **Background** | `#ffffff` |
| **Background Alt** | `#f8f7f5` |
| **Background Dark** | `#111111` |
| **Text Primary** | `#1a1a1a` |
| **Text Light** | `#555555` |
| **Heading Font** | Gilda Display (serif) |
| **Body Font** | Montserrat (sans-serif, 300/400/500/600/700) |
| **Max Content Width** | 1280px |

### Style Notes
- Aesthetic: Luxury, premium, sophisticated — think high-end hospitality brand
- Photo treatment: Dark, moody tones preferred for hero/CTA backgrounds; warm, natural tones for service/about sections
- All photos should be high-quality, professionally shot
- Export as optimized `.webp` with `.jpg` fallback
- All images should be web-optimized (max 300KB for standard images, 500KB for hero/full-width backgrounds)

---

## 1. HERO / HOME PAGE

### 1.1 Hero Background Video
- **Type:** Video (MP4, H.264)
- **Aspect Ratio:** 16:9
- **Dimensions:** 1920×1080
- **Duration:** 15–30 seconds, looping
- **Content:** Cinematic montage of Michael at events, venues, and in leadership moments. Dark, moody lighting with warm gold accents.
- **Status:** ❌ NOT PROVIDED — currently using fallback photo
- **Fallback Photo:** If no video, provide a wide cinematic shot (1920×1080, 16:9)

### 1.2 Hero Poster Image
- **Aspect Ratio:** 16:9
- **Dimensions:** 1920×1080
- **Content:** Still frame for video poster — first frame visible before video loads
- **Status:** ❌ NEEDED — currently reusing Banking Hall photo as fallback

---

## 2. PAGE HERO BACKGROUNDS (All Inner Pages)

Each inner page (About, Services, Portfolio, Work With Michael, Press, Insights, Contact) uses a full-width background photo behind the page title.

| Page | Aspect Ratio | Dimensions | Content Suggestion | Status |
|---|---|---|---|---|
| About | ~16:5 | 1920×600 | Michael at a venue or event, professional candid | ✅ Using Banking Hall |
| Services | ~16:5 | 1920×600 | Wide event production shot, behind-the-scenes | ✅ Using Event Production |
| Portfolio | ~16:5 | 1920×600 | Grand venue or event setup panorama | ✅ Using Event Setup |
| Work With Michael | ~16:5 | 1920×600 | Michael in professional/consulting setting | ✅ Using Branded Event |
| Press & Media | ~16:5 | 1920×600 | Media/press event or TV coverage moment | ✅ Using Marketing TV |
| Insights | ~16:5 | 1920×600 | Thought leadership — Michael speaking or at table | ✅ Using Service Platted |
| Contact | ~16:5 | 1920×600 | Warm, inviting venue interior | ✅ Using Venue Setup |

**Note:** These photos are darkened to ~25% opacity with a gradient overlay. High-contrast, detailed images work best. Current images are functional but **dedicated, unique hero images for each page would be ideal**.

---

## 3. ABOUT PAGE

### 3.1 Opening Portrait — Michael Tardi
- **Aspect Ratio:** 3:4 (portrait)
- **Dimensions:** 580×720 (render size), provide at 1160×1440 for retina
- **Content:** Professional portrait of Michael, either standing/leaning pose or seated. Warm, natural lighting preferred.
- **Status:** ✅ Using "Bank of New York" portrait (3024×4032)
- **Note:** This is the primary portrait on the About page. A gold-bordered decorative frame effect is applied via CSS.

### 3.2 Company Logos (Companies Michael Created)
These appear in a grid on a dark background section. Logos are rendered white via CSS `filter: invert`.

| Company | Dimensions | Format | Status |
|---|---|---|---|
| Mikey Mike Entertainment | ~300×150 (2:1) | PNG with transparency | ✅ Provided |
| FiDi Hospitality | ~300×150 (2:1) | PNG with transparency | ✅ Provided (black + white versions) |
| MMEink South | ~300×150 (2:1) | PNG with transparency | ✅ Provided |
| Tardi's Catering | ~300×150 (2:1) | PNG with transparency | ✅ Provided |
| Caviar Kart | ~300×150 (2:1) | SVG preferred | ✅ Provided |
| Tardi's Cafe | ~300×150 (2:1) | SVG preferred | ✅ Provided |

**Still Needed:**
- ❌ **MMEink (flagship)** — logo not provided
- ❌ **All That & More** — logo not provided
- ❌ **Boozypops** — logo not provided
- ❌ **Classic Carts** — logo not provided

**Logo Requirements:**
- Transparent background (PNG or SVG)
- Minimum 300px wide
- Single-color versions (black or white) — CSS handles color inversion
- Clean vector preferred (SVG)

---

## 4. SERVICES PAGE

Each service section features a **rotating image carousel** with 4 images. Images display at **4:3 aspect ratio** and are rendered at 600×440px (provide at 1200×880 for retina).

### 4.1 Event Production Strategy
| Slot | Description | Status |
|---|---|---|
| 1 | Luxurious table setup — corporate event | ✅ Corporate Event photo |
| 2 | Floor setup panorama — social or corporate | ✅ Event Production photo |
| 3 | Team building/setting up an event (behind-the-scenes) | ✅ Event Setup photo |
| 4 | Custom fabrication or themed prop | ✅ 1920s Theme photo |

### 4.2 Venue Operations Consulting
| Slot | Description | Status |
|---|---|---|
| 1 | 48 Wall Street Banking Hall — venue already set up | ✅ Banking Hall photo |
| 2 | Michael at Banking Hall | ✅ Provided |
| 3 | Artistry Estate venue — set up for event | ❌ NEEDED — using generic venue |
| 4 | FiDi Mezzanine or 60 Pine Street — set up | ❌ NEEDED — using generic venue |

**Needed:** Dedicated photos of Artistry Estate and FiDi Mezzanine venues ready for events.

### 4.3 Hospitality & Food Service Strategy
| Slot | Description | Status |
|---|---|---|
| 1 | Chef plating a dish (platted dinner) | ✅ Chef Platted photo |
| 2 | Beverage/cocktail service | ✅ Beverage Service photo |
| 3 | Bar setup (C1 Level) | ✅ Bar photo |
| 4 | Staffing/service team in action | ✅ Staffing photo |

**Additional provided but not used:** Food Set Up (portrait 2:3), Canapes 1 & 2, Service Platted — available as alternates.

### 4.4 Sales & Marketing Development
| Slot | Description | Status |
|---|---|---|
| 1 | Marketing on TV display — branded event | ✅ Marketing TV photo |
| 2 | YMCA branded event | ✅ YMCA photo |
| 3 | Registration/check-in area | ✅ Registration photo |
| 4 | Branded easels/signage | ✅ Easels photo |

**Still Needed:**
- ❌ Branded social event — **Prom** example photo
- ❌ **Wedding with couple's names** displayed — branded social example
- ❌ **Money Channel / Sandmark** branded event photo

### 4.5 Real Estate & Venue Development
| Slot | Description | Status |
|---|---|---|
| 1 | Real estate property exterior | ✅ Real Estate photo |
| 2 | 48 Wall Street building/interior | ✅ 48 Wall Street photo |
| 3 | The Loft space | ❌ NEEDED |
| 4 | Artistry Extended Tent | ❌ NEEDED |

**Still Needed:**
- ❌ **The Loft** — interior/setup photo (landscape 4:3, 1200×880)
- ❌ **Artistry Extended Tent** — exterior or interior (landscape 4:3, 1200×880)
- ❌ **The Manor House** — exterior or interior (landscape 4:3, 1200×880)

### 4.6 Entertainment Programming
| Slot | Description | Status |
|---|---|---|
| 1 | Themed entertainment event | ✅ Using 1920s Theme |
| 2 | Entertainment production | ✅ Using Event Setup |
| 3 | DJ/performer at event | ❌ NEEDED |
| 4 | Immersive experience/activation | ❌ NEEDED |

### 4.7 Finding the Perfect Venue (NEW SERVICE)
| Slot | Description | Status |
|---|---|---|
| 1 | Grand venue showcase | ✅ Main Venue photo |
| 2 | 60 Pine Street — corporate setup | ✅ Provided |
| 3 | 60 Pine Street — wedding setup | ✅ Provided |
| 4 | 60 Pine Street — milestone event | ✅ Provided |

**Available but not used:** 48 Wall Street interior photos, 5th Floor Hamilton Room, United Palace Theatre photos.

### 4.8 Logistics Training (NEW SERVICE)
| Slot | Description | Status |
|---|---|---|
| 1 | Logistics training in action | ✅ Provided |
| 2 | Venue logistics setup | ✅ Using venue setup |
| 3 | Team coordination/setup | ❌ NEEDED |
| 4 | Load-in/load-out operations | ❌ NEEDED |

---

## 5. PORTFOLIO PAGE

### 5.1 Venue Logos
Used in the venue cards. Square format, displayed at ~300×300px.

| Venue | Status |
|---|---|
| 48 Wall Street | ✅ Provided |
| The 1912 | ✅ Provided |
| Midtown Veranda | ✅ Provided |
| Manhattan Loft Spaces | ✅ Provided |
| The Artistry | ✅ Provided |
| FiDi Mezzanine | ✅ Provided |
| 60 Pine Street | ✅ Provided |
| Tardi's Cafe | ✅ Provided |
| Opera House | ❌ NEEDED — no logo provided |
| The Studios | ❌ NEEDED — no logo provided |

**Logo specs:** Square (1:1), 300×300px minimum, transparent background preferred.

### 5.2 Venue Gallery Photos
Each venue modal shows up to 4 gallery photos.

- **Primary:** 3:2 landscape (1200×800)
- **Accent:** 4:5 portrait (800×1000)

**Venues needing dedicated gallery photos:**
- ❌ Opera House — 3–4 interior/event photos
- ❌ The 1912 — 3–4 interior/event photos
- ❌ Midtown Veranda — 3–4 interior/event photos
- ❌ Manhattan Loft Spaces — 3–4 interior/event photos
- ❌ The Artistry — 3–4 interior/event photos (gardens, sculptures, estate)
- ❌ The Studios — 3–4 interior/production photos
- ❌ FiDi Mezzanine — 3–4 interior/event photos

### 5.3 Event Portfolio Thumbnails
Each event in the portfolio grid uses a **4:3 landscape** thumbnail.

- **Dimensions:** 800×600 (provide at 1600×1200 for retina)
- **Content:** Action shots, venue shots, or branded moments from each event

**All 16 portfolio events currently use placeholders.** Need 16 event-specific photos:

1. 48 Wall Street Visit Mexico
2. 40/40 Club Grand Reopening
3. Estée Lauder 50th Anniversary
4. Standard Chartered Forum
5. Swiss Re 150th Anniversary
6. Samsung Smart TV Unveiling
7. Skullcandy Crusher ANC Pop-Up
8. Blade Drive-In Movie
9. ASICS Quantum 360 Launch
10. Conductor C3 SEO Conference
11. Real Housewives NY Reunion Filming
12. Clase Azul Chef's Table
13. MongoDB Corporate Holiday Party
14. Lenovo Art Basel Troye Sivan
15. Gossip Girl Premiere Party
16. A+E Networks Upfront

---

## 6. BROCHURE

### 6.1 Brochure Cover Image
- **Aspect Ratio:** 3:4 (portrait)
- **Dimensions:** 640×850 (provide 1280×1700 for retina)
- **Content:** Professional portrait of Michael or venue collage with "Michael Tardi" title overlay
- **Status:** ❌ NEEDED — currently using headshot as placeholder

### 6.2 Brochure PDF
- **Format:** PDF, designed for digital viewing and print
- **Status:** ❌ NOT YET CREATED

**Suggested Brochure Structure:**
1. **Cover** — Michael Tardi name, title, hero photo
2. **About Michael** — Bio summary, career highlights, headshot
3. **Core Services** — Overview of all 8 service areas with icons
4. **Venue Portfolio** — Grid of venue logos with brief descriptions
5. **Notable Events** — Highlight 6–8 marquee events with photos
6. **Testimonials** — 2–3 partner quotes
7. **Partnership Options** — Consulting, Speaking, Investment overview
8. **Contact** — Email, LinkedIn, website, QR code to website
9. **Back Cover** — "Don't Be Tardi for the Party" tagline, logo

**Brochure Design Specs:**
- Pages: 8–12 pages
- Size: 8.5" × 11" or A4
- Color palette: Match website (gold #d2b371, dark #111111, white)
- Fonts: Gilda Display headings, Montserrat body
- Include bleed area (0.125") for print
- Export: High-res PDF (300 DPI) + web-optimized PDF (72 DPI)

---

## 7. CTA BACKGROUND IMAGES

Used in full-width call-to-action sections with dark overlays.

| Section | Aspect Ratio | Dimensions | Status |
|---|---|---|---|
| Home — Final CTA | ~16:5 | 1920×700 | ✅ Using 1920s Theme |
| About — CTA | ~16:5 | 1920×700 | ✅ Using Event Setup |
| Services — CTA | ~16:5 | 1920×700 | ✅ Using Event Production |
| Work With Michael — CTA | ~16:5 | 1920×700 | ✅ Using Corporate Event |

**Note:** Unique, dedicated CTA backgrounds would be ideal but current images are functional.

---

## 8. PRESS & INSIGHTS

### 8.1 Press Article Thumbnails
- **Aspect Ratio:** ~2:1
- **Dimensions:** 400×220 (800×440 retina)
- **Count:** 6 thumbnails for press articles
- **Content:** Publication logos or article header images
- **Status:** ❌ ALL PLACEHOLDERS — need real press images or publication logos

### 8.2 Insight/Blog Post Thumbnails
- **Aspect Ratio:** 5:3
- **Dimensions:** 400×240 (800×480 retina)
- **Count:** 6 thumbnails for blog preview cards
- **Content:** Topic-relevant imagery (events, venues, food, leadership)
- **Status:** ❌ ALL PLACEHOLDERS — needed when blog content is ready

---

## 9. IMAGE OPTIMIZATION GUIDELINES

| Image Type | Max File Size | Format | Notes |
|---|---|---|---|
| Hero/Full-width BG | 500 KB | WebP + JPG fallback | Compress with quality 80–85% |
| Service/Section photos | 300 KB | WebP + JPG fallback | Compress with quality 80% |
| Thumbnails/Cards | 150 KB | WebP + JPG fallback | Compress with quality 75% |
| Logos | 50 KB | SVG preferred, PNG fallback | Transparent background |
| Video | 10 MB max | MP4 (H.264) | 1080p, 24fps |

### Recommended Image Sizes

| Usage | Provide At (retina) | Renders At |
|---|---|---|
| Hero background | 1920×1080 | Full viewport |
| Page hero background | 1920×600 | Full width, ~600px height |
| About portrait | 1160×1440 | 580×720 |
| Service carousel | 1200×880 | 600×440 |
| Portfolio thumbnail | 1600×1200 | 800×600 |
| Venue gallery landscape | 2400×1600 | 1200×800 |
| Venue gallery portrait | 1600×2000 | 800×1000 |
| Company logo | 600×300 | 300×150 |
| Venue logo | 600×600 | 300×300 |
| Brochure cover | 1280×1700 | 640×850 |

---

## Summary: What's Still Needed

### Critical (Required for Complete Site)
- [ ] Hero background video OR high-quality cinematic photo (16:9, 1920×1080)
- [ ] 16 portfolio event photos (4:3, 800×600 each)
- [ ] Venue gallery photos — 3–4 per venue × 7 venues = ~21–28 photos
- [ ] Opera House and The Studios logos

### Important (For Polish)
- [ ] Dedicated unique hero backgrounds for each page (7 photos)
- [ ] Artistry Estate event-ready photo for Venue Operations carousel
- [ ] FiDi Mezzanine event-ready photo for Venue Operations carousel
- [ ] The Loft, Artistry Extended Tent, Manor House photos for Real Estate carousel
- [ ] Entertainment Programming carousel — DJ/performer and immersive experience photos
- [ ] Logistics Training — team coordination and load-in/load-out photos
- [ ] Branded social event photos (Prom, Wedding with names) for Sales & Marketing
- [ ] MMEink flagship logo, All That & More logo, Boozypops logo, Classic Carts logo

### Brochure (Separate Deliverable)
- [ ] Brochure cover design (3:4 portrait, 1280×1700)
- [ ] Full brochure PDF (8–12 pages, following structure above)

### Nice to Have
- [ ] Unique CTA background images for each section
- [ ] Press article thumbnails / publication logos
- [ ] Blog post topic thumbnails (when content is ready)
- [ ] Michael Tardi professional headshot — higher resolution version (current is 300×312)

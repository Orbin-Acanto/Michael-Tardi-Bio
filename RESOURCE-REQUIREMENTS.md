# Michael Tardi Bio Website - Resource Requirements for Designer

This document lists all the visual resources needed for the Michael Tardi professional bio website. Each item has the required aspect ratio, recommended pixel dimensions, where it's used, and notes for the designer.


## Design System Reference

| Property | Value |
|---|---|
| Primary Gold | #d2b371 |
| Gold Light | #e8d4a0 |
| Gold Dark | #b8963e |
| Background | #ffffff |
| Background Alt | #f8f7f5 |
| Background Dark | #111111 |
| Text Primary | #1a1a1a |
| Text Light | #555555 |
| Heading Font | Gilda Display (serif) |
| Body Font | Montserrat (sans-serif, weights 300 through 700) |
| Max Content Width | 1280px |

### Style Notes
- The look is luxury, premium, sophisticated. Think high-end hospitality brand.
- For hero and CTA backgrounds, go with dark, moody tones. For service and about sections, warmer natural tones work better.
- All photos should be high-quality and professionally shot.
- Export as optimized .webp with .jpg fallback.
- Keep file sizes down: max 300KB for standard images, 500KB for hero/full-width backgrounds.


## 1. Hero / Home Page

### 1.1 Hero Background Video
- Type: Video (MP4, H.264)
- Aspect Ratio: 16:9
- Dimensions: 1920x1080
- Duration: 15 to 30 seconds, looping
- Content: Cinematic montage of Michael at events, venues, and in leadership moments. Dark, moody lighting with warm gold accents.
- Status: NOT PROVIDED. Currently using a fallback photo.
- If no video is available, provide a wide cinematic still shot at 1920x1080 (16:9).

### 1.2 Hero Poster Image
- Aspect Ratio: 16:9
- Dimensions: 1920x1080
- Content: A still frame for the video poster, the first frame visible before the video loads.
- Status: NEEDED. Currently reusing the Banking Hall photo as a fallback.


## 2. Page Hero Backgrounds (All Inner Pages)

Each inner page (About, Services, Portfolio, Work With Michael, Press, Insights, Contact) uses a full-width background photo behind the page title.

| Page | Aspect Ratio | Dimensions | Content Suggestion | Status |
|---|---|---|---|---|
| About | roughly 16:5 | 1920x600 | Michael at a venue or event, professional candid | Using Banking Hall |
| Services | roughly 16:5 | 1920x600 | Wide event production shot, behind the scenes | Using Event Production |
| Portfolio | roughly 16:5 | 1920x600 | Grand venue or event setup panorama | Using Event Setup |
| Work With Michael | roughly 16:5 | 1920x600 | Michael in a professional/consulting setting | Using Branded Event |
| Press and Media | roughly 16:5 | 1920x600 | Media/press event or TV coverage moment | Using Marketing TV |
| Insights | roughly 16:5 | 1920x600 | Thought leadership, Michael speaking or at a table | Using Service Platted |
| Contact | roughly 16:5 | 1920x600 | Warm, inviting venue interior | Using Venue Setup |

These photos get darkened to about 25% opacity with a gradient overlay. High-contrast, detailed images work best. The current images are functional but dedicated, unique hero images for each page would be ideal.


## 3. About Page

### 3.1 Opening Portrait of Michael Tardi
- Aspect Ratio: 3:4 (portrait)
- Dimensions: 580x720 on screen, provide at 1160x1440 for retina
- Content: Professional portrait of Michael. Standing, leaning, or seated. Warm, natural lighting preferred.
- Status: Using the "Bank of New York" portrait (3024x4032).
- This is the primary portrait on the About page. A gold-bordered decorative frame effect is applied through CSS.

### 3.2 Company Logos (Companies Michael Created)
These appear in a grid on a light background section with original logo colors.

| Company | Dimensions | Format | Status |
|---|---|---|---|
| Mikey Mike Entertainment | roughly 300x150 | PNG with transparency | Provided |
| FiDi Hospitality | roughly 300x150 | PNG with transparency | Provided (black and white versions) |
| MMEink South | roughly 300x150 | PNG with transparency | Provided |
| Tardi's Catering | roughly 300x150 | PNG with transparency | Provided |
| Caviar Kart | roughly 300x150 | SVG preferred | Provided |
| Tardi's Cafe | roughly 300x150 | SVG preferred | Provided |

Still needed:
- MMEink (flagship) logo
- All That & More logo
- Boozypops logo
- Classic Carts logo

Logo requirements:
- Transparent background (PNG or SVG)
- Minimum 300px wide
- Clean vector preferred (SVG)


## 4. Services Page

Each service section has a rotating image carousel with 4 images. Images display at 4:3 aspect ratio, rendered at 600x440px. Provide at 1200x880 for retina.

### 4.1 Event Production Strategy
| Slot | Description | Status |
|---|---|---|
| 1 | Luxurious table setup, corporate event | Corporate Event photo provided |
| 2 | Floor setup panorama, social or corporate | Event Production photo provided |
| 3 | Team building or setting up an event, behind the scenes | Event Setup photo provided |
| 4 | Custom fabrication or themed prop | 1920s Theme photo provided |

### 4.2 Venue Operations Consulting
| Slot | Description | Status |
|---|---|---|
| 1 | 48 Wall Street Banking Hall, venue already set up | Banking Hall photo provided |
| 2 | Michael at Banking Hall | Provided |
| 3 | Artistry Estate venue, set up for event | NEEDED, using generic venue photo |
| 4 | FiDi Mezzanine or 60 Pine Street, set up | NEEDED, using generic venue photo |

Need dedicated photos of Artistry Estate and FiDi Mezzanine venues ready for events.

### 4.3 Hospitality & Food Service Strategy
| Slot | Description | Status |
|---|---|---|
| 1 | Chef plating a dish (platted dinner) | Chef Platted photo provided |
| 2 | Beverage/cocktail service | Beverage Service photo provided |
| 3 | Bar setup (C1 Level) | Bar photo provided |
| 4 | Staffing/service team in action | Staffing photo provided |

Extra images provided but not currently used: Food Set Up (portrait 2:3), Canapes 1 and 2, Service Platted. These are available as alternates.

### 4.4 Sales & Marketing Development
| Slot | Description | Status |
|---|---|---|
| 1 | Marketing on TV display, branded event | Marketing TV photo provided |
| 2 | YMCA branded event | YMCA photo provided |
| 3 | Registration/check-in area | Registration photo provided |
| 4 | Branded easels/signage | Easels photo provided |

Still needed:
- Branded social event, Prom example photo
- Wedding with couple's names displayed, branded social example
- Money Channel / Sandmark branded event photo

### 4.5 Real Estate & Venue Development
| Slot | Description | Status |
|---|---|---|
| 1 | Real estate property exterior | Real Estate photo provided |
| 2 | 48 Wall Street building/interior | 48 Wall Street photo provided |
| 3 | The Loft space | NEEDED |
| 4 | Artistry Extended Tent | NEEDED |

Still needed:
- The Loft interior/setup photo (landscape 4:3, 1200x880)
- Artistry Extended Tent exterior or interior (landscape 4:3, 1200x880)
- The Manor House exterior or interior (landscape 4:3, 1200x880)

### 4.6 Entertainment Programming
| Slot | Description | Status |
|---|---|---|
| 1 | Themed entertainment event | Using 1920s Theme |
| 2 | Entertainment production | Using Event Setup |
| 3 | DJ/performer at event | NEEDED |
| 4 | Immersive experience/activation | NEEDED |

### 4.7 Finding the Perfect Venue (new service)
| Slot | Description | Status |
|---|---|---|
| 1 | Grand venue showcase | Main Venue photo provided |
| 2 | 60 Pine Street, corporate setup | Provided |
| 3 | 60 Pine Street, wedding setup | Provided |
| 4 | 60 Pine Street, milestone event | Provided |

Also available but not used: 48 Wall Street interior photos, 5th Floor Hamilton Room, United Palace Theatre photos.

### 4.8 Logistics Training (new service)
| Slot | Description | Status |
|---|---|---|
| 1 | Logistics training in action | Provided |
| 2 | Venue logistics setup | Using venue setup |
| 3 | Team coordination/setup | NEEDED |
| 4 | Load-in/load-out operations | NEEDED |


## 5. Portfolio Page

### 5.1 Venue Logos
Used as an overlay badge on venue cards. Square format, displayed at roughly 300x300px.

| Venue | Status |
|---|---|
| 48 Wall Street | Provided |
| The 1912 | Provided |
| Midtown Veranda | Provided |
| Manhattan Loft Spaces | Provided |
| The Artistry | Provided |
| FiDi Mezzanine | Provided |
| 60 Pine Street | Provided |
| Tardi's Cafe | Provided |
| Opera House | NEEDED, no logo provided |
| The Studios | NEEDED, no logo provided |

Logo specs: Square (1:1), 300x300px minimum, transparent background preferred.

### 5.2 Venue Gallery Photos
Each venue modal shows up to 4 gallery photos.

- Primary shots: 3:2 landscape (1200x800)
- Accent shots: 4:5 portrait (800x1000)

Venues that still need dedicated gallery photos:
- Opera House: 3 to 4 interior/event photos
- The 1912: 3 to 4 interior/event photos
- Midtown Veranda: 3 to 4 interior/event photos
- Manhattan Loft Spaces: 3 to 4 interior/event photos
- The Artistry: 3 to 4 interior/event photos (gardens, sculptures, estate)
- The Studios: 3 to 4 interior/production photos
- FiDi Mezzanine: 3 to 4 interior/event photos

### 5.3 Event Portfolio Thumbnails
Each event in the portfolio grid uses a 4:3 landscape thumbnail.

- Dimensions: 800x600 (provide at 1600x1200 for retina)
- Content: Action shots, venue shots, or branded moments from each event

All 16 portfolio events currently use stand-in photos from the venue/service library. Need 16 event-specific photos:

1. 48 Wall Street Visit Mexico
2. 40/40 Club Grand Reopening
3. Estee Lauder 50th Anniversary
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


## 6. Brochure

### 6.1 Brochure Cover Image
- Aspect Ratio: 3:4 (portrait)
- Dimensions: 640x850 (provide 1280x1700 for retina)
- Content: Professional portrait of Michael or a venue collage with "Michael Tardi" title overlay
- Status: NEEDED. Currently using the headshot as a placeholder.

### 6.2 Brochure PDF
- Format: PDF, designed for digital viewing and print
- Status: Not yet created

Suggested brochure structure:
1. Cover: Michael Tardi name, title, hero photo
2. About Michael: Bio summary, career highlights, headshot
3. Core Services: Overview of all 8 service areas with icons
4. Venue Portfolio: Grid of venue logos with brief descriptions
5. Notable Events: Highlight 6 to 8 marquee events with photos
6. Testimonials: 2 to 3 partner quotes
7. Partnership Options: Consulting, Speaking, Investment overview
8. Contact: Email, LinkedIn, website, QR code to website
9. Back Cover: "Don't Be Tardi for the Party" tagline, logo

Brochure design specs:
- Pages: 8 to 12
- Size: 8.5 x 11 inches or A4
- Color palette: Match the website (gold #d2b371, dark #111111, white)
- Fonts: Gilda Display for headings, Montserrat for body
- Include bleed area (0.125 inches) for print
- Export: High-res PDF at 300 DPI plus a web-optimized PDF at 72 DPI


## 7. CTA Background Images

Used in full-width call-to-action sections with dark overlays.

| Section | Aspect Ratio | Dimensions | Status |
|---|---|---|---|
| Home, Final CTA | roughly 16:5 | 1920x700 | Using 1920s Theme |
| About, CTA | roughly 16:5 | 1920x700 | Using Event Setup |
| Services, CTA | roughly 16:5 | 1920x700 | Using Event Production |
| Work With Michael, CTA | roughly 16:5 | 1920x700 | Using Corporate Event |

Unique, dedicated CTA backgrounds would be a nice upgrade but the current images work fine.


## 8. Press & Insights

### 8.1 Press Article Thumbnails
- Aspect Ratio: roughly 2:1
- Dimensions: 400x220 (800x440 for retina)
- Count: 6 thumbnails for press articles
- Content: Publication logos or article header images
- Status: All placeholders. Need real press images or publication logos.

### 8.2 Insight/Blog Post Thumbnails
- Aspect Ratio: 5:3
- Dimensions: 400x240 (800x480 for retina)
- Count: 6 thumbnails for blog preview cards
- Content: Topic-relevant imagery (events, venues, food, leadership)
- Status: All placeholders. Needed when blog content is ready.


## 9. Image Optimization Guidelines

| Image Type | Max File Size | Format | Notes |
|---|---|---|---|
| Hero/Full-width BG | 500 KB | WebP with JPG fallback | Compress at quality 80 to 85% |
| Service/Section photos | 300 KB | WebP with JPG fallback | Compress at quality 80% |
| Thumbnails/Cards | 150 KB | WebP with JPG fallback | Compress at quality 75% |
| Logos | 50 KB | SVG preferred, PNG fallback | Transparent background |
| Video | 10 MB max | MP4 (H.264) | 1080p, 24fps |

### Recommended Image Sizes

| Usage | Provide At (retina) | Renders At |
|---|---|---|
| Hero background | 1920x1080 | Full viewport |
| Page hero background | 1920x600 | Full width, roughly 600px height |
| About portrait | 1160x1440 | 580x720 |
| Service carousel | 1200x880 | 600x440 |
| Portfolio thumbnail | 1600x1200 | 800x600 |
| Venue gallery landscape | 2400x1600 | 1200x800 |
| Venue gallery portrait | 1600x2000 | 800x1000 |
| Company logo | 600x300 | 300x150 |
| Venue logo | 600x600 | 300x300 |
| Brochure cover | 1280x1700 | 640x850 |


## Summary: What's Still Needed

### Critical (required for a complete site)
- [ ] Hero background video or high-quality cinematic photo (16:9, 1920x1080)
- [ ] 16 portfolio event photos (4:3, 800x600 each)
- [ ] Venue gallery photos, 3 to 4 per venue for 7 venues, so roughly 21 to 28 photos
- [ ] Opera House and The Studios logos

### Important (for polish)
- [ ] Dedicated unique hero backgrounds for each page (7 photos)
- [ ] Artistry Estate event-ready photo for the Venue Operations carousel
- [ ] FiDi Mezzanine event-ready photo for the Venue Operations carousel
- [ ] The Loft, Artistry Extended Tent, and Manor House photos for the Real Estate carousel
- [ ] Entertainment Programming carousel: DJ/performer and immersive experience photos
- [ ] Logistics Training: team coordination and load-in/load-out photos
- [ ] Branded social event photos (Prom, Wedding with names) for Sales & Marketing
- [ ] MMEink flagship logo, All That & More logo, Boozypops logo, Classic Carts logo

### Brochure (separate deliverable)
- [ ] Brochure cover design (3:4 portrait, 1280x1700)
- [ ] Full brochure PDF (8 to 12 pages, following the structure above)

### Nice to have
- [ ] Unique CTA background images for each section
- [ ] Press article thumbnails / publication logos
- [ ] Blog post topic thumbnails (when content is ready)
- [ ] Michael Tardi professional headshot at higher resolution (current one is only 300x312)

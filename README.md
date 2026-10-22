# Alfa Automotive & Tyre Centre: website

Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · Lucide icons.
Every page is pre-rendered to static HTML. The only server code is the booking endpoint.

```bash
npm install
cp .env.example .env.local
npm run dev            # http://localhost:3000
npm run build && npm start
npm run photos         # pull the client's full-resolution photos from the old site (do this before it goes offline)
```

## Design system (`app/globals.css`)

| | |
|---|---|
| Colour | Ink navy `ink-950…600`, white, steel greys `steel-50…700`, one gold accent `gold-300…600` |
| Gold is used for | Primary buttons, icons, eyebrow labels, highlights, hover states, trust marks |
| Type | Archivo variable, self-hosted. Headings 800 weight with tight tracking; `h-display`, `h-section`, `lead`, `eyebrow` |
| Shape | 4px cards and inputs, 6px buttons. No pills, no heavy rounding |
| Space | 8px grid. Sections `py-20 md:py-28`. Container 1240px (`container-x`) |
| Components | `btn-primary`, `btn-dark`, `btn-outline-light`, `btn-outline-dark`, `card`, `field`, `icon-chip` |
| Motion | `.reveal` fades sections in on scroll (CSS only, no JS). Off when the visitor prefers reduced motion |

## Structure

```
app/
  page.tsx                 Home
  [slug]/page.tsx          /roadworthy-certificate /car-service /tyres /mechanical-repairs
  about, contact, privacy-policy, terms, thank-you
  api/booking/route.ts     Booking form → email (Resend)
  sitemap.ts robots.ts manifest.ts opengraph-image.tsx icon.svg
components/
  AnnouncementBar Header Hero TrustBar ServiceCard ServicesGrid RoadworthySection
  WhyChooseUs StatsSection LocationSection BookingSection BookingForm FaqSection
  CTASection Footer MobileCTA PageHero Logo SocialIcons OpenStatus LazyMount JsonLd
lib/
  site.ts       Name, address, phone, hours, areas, socials, trust figures (edit here only)
  services.ts   Home service cards + all service page content and FAQs
  photos.ts     Every photo on the site
  schema.ts     JSON-LD builders
```

Add a service page by adding an entry to `SERVICE_PAGES` in `lib/services.ts`. The route, sitemap and schema follow.

## Performance & lazy loading

- **Images:** `next/image` everywhere: AVIF/WebP, responsive sizes, blur placeholders. Below-the-fold images are `loading="lazy"`; hero images use `preload`.
- **Booking form:** its JavaScript loads only when the form scrolls near the screen (`next/dynamic` + `LazyMount`).
- **Map:** the map iframe uses `loading="lazy"`.
- **Sections:** below-the-fold sections use `content-visibility: auto`.
- **Everything else:** fonts are self-hosted and the client JS is small. Only the header, open-status pill and form are client components.

## SEO

- Unique title, description and canonical URL on every page. One H1 per page. Open Graph tags plus a generated share image.
- JSON-LD:
  - `AutoRepair` + `TireShop` business: address, hours, 14 areas served, services
  - `Service`, `BreadcrumbList` and `FAQPage` on service pages
  - `FAQPage` on home
- `sitemap.xml` and `robots.txt`. 301/308 redirects from old WordPress URLs (`next.config.ts`).
- Internal links between all service pages, the footer and the "Other services" sidebar.

## Before launch: confirm with the client

- [ ] **`TRUST` in `lib/site.ts`:** the **4.9 Google rating** and **5000+ cars serviced** must be true. Match the rating to the live Google profile.
      The rating is deliberately not added to schema, because Google ignores self-published review stars.
- [ ] "Family-run" wording in `components/WhyChooseUs.tsx`, the 24-hour towing claim, and the hours (Mon–Fri 9–5, Sat 9–1).
- [ ] **Photos:** the current images in `assets/images/` were cut from the design mockup at about 200–480px wide and upscaled.
      They look soft on large screens. Replace each with its full-size original (same file name, ideally 1600px+ wide):
      `hero`, `rwc-inspection`, `workshop-team` and the six `card-*` files.
      `client-storefront` and `client-lounge` are the client's real photos; `npm run photos` pulls their originals.
      If the mockup photos are AI-generated, consider swapping in real workshop photos over time. Real photos of the team build more trust.
- [ ] **Links and tokens:**
  - Google Business Profile link in `SOCIAL.google` (shows the G icon and makes the rating badge clickable)
  - Instagram, if they have it
  - `BIZ.geo` coordinates
  - Search Console token in `app/layout.tsx`
- [ ] Review the starter Privacy Policy and Terms pages.
- [ ] Replace the text logo in `components/Logo.tsx` with an SVG of the final logo if wanted.

## Deploy (Vercel)

1. Push to GitHub, then import the repo in Vercel. The framework is detected automatically.
2. Environment variables:
   - `NEXT_PUBLIC_SITE_URL=https://alfaauto.com.au`
   - `RESEND_API_KEY`
   - `BOOKING_TO_EMAIL`
   - `BOOKING_FROM_EMAIL` (verify the domain in Resend)
3. Add the domain `alfaauto.com.au` and redirect `www` to it.

Without email settings, the live form returns "temporarily unavailable" rather than silently losing bookings.

## Week 1 after launch (this drives local rankings)

1. **Google Business Profile:**
   - Primary category: Auto repair shop. Secondary: Tire shop and Car inspection station.
   - Name, address and phone exactly as on the site. Website `https://alfaauto.com.au/`.
2. **Search Console:** submit `/sitemap.xml` and request indexing for every page.
3. **Reviews:** text every customer the review link and reply to each review.
4. **Directories:** use identical details on AutoGuru, Yellow Pages, True Local, Hotfrog, Facebook and the VACC directory.

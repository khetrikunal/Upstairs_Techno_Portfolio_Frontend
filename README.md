<<<<<<< HEAD
# Upstairs Techno — Enterprise Website

A full-stack implementation of the Upstairs Techno marketing site: Next.js
(App Router) frontend, API routes backend, and a small content layer for
blog posts, case studies, job listings, and form submissions.

## Design language

"Working Drawing" — the brand name is about ascension, so the site leans on
blueprint/drafting motifs: hairline grids, registration corner marks, and a
fixed **ascent gauge** on the right edge of the screen that fills as you
scroll, mapping page position to "floors" (Ground → Summit). Palette,
typography, and rationale are documented at the top of `app/globals.css`.

## Stack

- **Frontend:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4
- **Animation:** Framer Motion
- **Icons:** lucide-react
- **Validation:** zod
- **Backend:** Next.js API routes (`app/api/**/route.ts`)
- **Data:** a JSON-file repository (`lib/data/`) — see note below

## Running it

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

```bash
npm run build && npm run start   # production build
```

## Data layer — and how to move to a real database

This project ships with a file-backed repository (`lib/data/store.ts` +
`lib/data/repository.ts`) instead of a live database, purely because the
environment this was built in has no network access to Prisma's binary CDN.
The repository's function signatures already match a real schema
(`prisma/schema.prisma`, included as a reference/production target), so
swapping in Postgres is mechanical:

1. `npm install prisma @prisma/client`
2. `npx prisma generate && npx prisma migrate dev`
3. Replace the bodies of the functions in `lib/data/repository.ts` with
   `prisma.blogPost.findMany()`-style calls — the call sites elsewhere in
   the app (API routes, `app/page.tsx`, detail pages) don't need to change.

Until then, content lives in `data/*.json`, seeded on first read from
`lib/data/seed-data.ts`. Contact form submissions and job applications are
appended to `data/contact-submissions.json` and `data/job-applications.json`
respectively — inspect those files to see stored submissions, or wire the
`createContactSubmission` / `createJobApplication` functions in
`lib/data/repository.ts` to also send a transactional email (Resend,
SendGrid, etc.) or push to a CRM.

## API routes

| Route | Method | Purpose |
|---|---|---|
| `/api/blog` | GET | List blog posts |
| `/api/blog/[slug]` | GET | Single blog post |
| `/api/case-studies` | GET | List case studies |
| `/api/case-studies/[slug]` | GET | Single case study |
| `/api/jobs` | GET | List open roles |
| `/api/jobs/[slug]` | GET / POST | Single role / submit application |
| `/api/contact` | POST | Submit contact form (validated with zod) |

## Structure

```
app/
  page.tsx                      Homepage — assembles all sections, fetches data server-side
  blog/[slug]/page.tsx          Blog post detail page
  case-studies/[slug]/page.tsx  Case study detail page
  api/                          Backend routes
components/                     One component per site section
lib/data/                       Repository + JSON store + seed content
prisma/schema.prisma            Reference schema for a production Postgres upgrade
```

## Notes on fonts

The design calls for Space Grotesk (display), IBM Plex Sans (body), and IBM
Plex Mono (captions/data). Font-family stacks are declared in
`app/globals.css`, but the actual font files aren't bundled since this
environment has no access to Google Fonts' CDN. In a normal deployment,
either:

- add them via `next/font/google` in `app/layout.tsx`, or
- self-host the `.woff2` files and `@font-face` them in `globals.css`.

Until then, the stacks fall back to close system equivalents.

## What's stubbed vs. fully built

Fully built: navbar with scroll transition + mega menu, hero with staggered
headline/parallax/floating shapes, services grid, blog (DB-backed), animated
stats, process timeline, technologies grid with modal, testimonials
carousel, case studies (DB-backed), careers with working apply flow, contact
form with floating labels and real persistence, footer, custom cursor,
reduced-motion support, and the ascent-gauge signature element.

Not implemented (noted for scope): background video on the careers section,
full-page transition animations between routes, and a loading screen with
progress animation — these are polish layers that don't affect the
functional full-stack architecture and can be added incrementally.
=======
# Upstairs-Techno-Portfolio-Frontend
UpStairs Techno is a technology-driven company delivering software, web and mobile applications, AI solutions, IT consulting, digital transformation, and business automation. We also provide technology education, coding competitions, workshops, and internships, helping businesses grow and individuals develop future-ready skills.
>>>>>>> e41ac8c228c718833070697f2a41e62d371cbc99

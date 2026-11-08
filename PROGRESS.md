# Project Progress: Shohoj Khamar (সহজ খামার)

## Current Development Phase
- **Phase 1: Project Initialization & Homepage Recreation** — ✅ **COMPLETED**
- **Phase 2: Bird Landing Pages & Day-Range Farming Guide System** — ✅ **COMPLETED**
- **Phase 3: Connected Blog System** — ✅ **COMPLETED**
- **Current Phase:** Phase 5 (Vaccination Page, SEO & Ads) — implementation complete; production domain configuration remains deployment-specific.

---

## Completed Features

### Homepage Feed Calculator
- [x] Added a homepage calculator entry point and bilingual `/feed-calculator` tool for flock size, production goal, daily feed rate, and duration.
- [x] Calculates daily and period totals, including Japanese quail growth/layer feed plans, and adds a Fayoumi batch mixer for starter, grower, pre-layer (50:50), and Layer-1 phases; chicken daily rates remain user-entered where the guides do not give quantities.

### Phase 1 (Homepage & Core Theme)
- [x] Initialized Next.js 16 App Router project with TypeScript and Tailwind CSS v4.
- [x] Configured Google Fonts: `Noto Sans Bengali` (Bangla) and `Inter` (English).
- [x] Global color system: Warm cream background (`#FAF8F3`), Forest green primary (`#1A4331`), Sage card containers (`#E6ECE5`, `#DFEDE1`), and Crisp white content cards.
- [x] Built Header component with logo, navigation links, and functional Bangla/English toggle.
- [x] Built Hero section matching visual reference with tag badge, 2-line heading, subtitle, dual action buttons, and farm mascot placeholder card.
- [x] Created scalable, pixel-accurate `BirdIllustration` SVG component with active (dark green) and muted (sage/olive) variants.
- [x] Built Bird Selection grid (6 cards): Japanese Quail active + 5 upcoming breeds in amber badges.
- [x] Built "কীভাবে কাজ করে" (How It Works) 3-step section with dark green numbered indicators on pure white background.
- [x] Built Vaccination Schedule callout banner with veterinary review notice and CTA button.
- [x] Built Dark forest green Footer with mandatory veterinary disclaimer and English tagline.
- [x] Created reusable `AdPlaceholder` component for AdSense spaces.
- [x] Implemented `LanguageContext` supporting live switching between Bangla and English.

### Phase 2 (Bird Landing & Day-Range Farming Guide System)
- [x] Created extensible data models:
  - `birdsData.ts` for species, variety metrics, housing & feeding overviews.
  - `quailStagesData.ts` for authentic age stages (Day 1 through Egg Production).
- [x] Integrated real-world field guidelines from `Koel Guide/Koel Guide.txt` (Author: Fahim, Rajshahi Binodpur):
  - Lysovit, sugar-lemon water alternative, crushed broiler starter, Doxy-A/Cefa-1 cold care, Zinc B (Square), Calplex (Square), Vital Amino Forte, 50% starter + 50% layer-1 transition, morning E-Sel + night Calplex protocol, and ACME Egg Formula.
- [x] Reusable Bird Landing Page (`/birds/quail/japanese`):
  - Metrics grid, 8-stage interactive guide jump cards, breed comparison, housing & feeding summaries, and veterinary notice.
- [x] Day-Range Guide System (`/birds/quail/japanese/[stage]`):
  - Sticky Left Sidebar for desktop with active stage indicators.
  - Horizontal touch-scrollable stage selector for mobile (`MobileStageNav.tsx`).
  - Stage Content Card with temperature, light photoperiod, and feed type badges.
  - Structured sections: Feed Management, Water Management, Temperature/Ventilation, Interactive Checklist with clickable state, Warnings & Behavioral Signs, and Veterinary Review Advisory.
  - Next/Previous stage pagination controls.
  - Embedded in-article AdSense placeholder slots.

### Phase 3 (Connected Blog System)
- [x] Structured Blog Data Model (`data/blogData.ts`):
  - 7 practical poultry articles covering Quail egg timeline, 100-quail cost/profit, feed formulation, Sonali, Fayoumi, Broiler, and disease prevention.
  - 6 categories: All Articles, Quail Farming, Chicken Farming, Feed & Nutrition, Health & Disease, Cost & Profit.
- [x] Blog Index Page (`/blog`):
  - Interactive category pill bar filter and real-time search input (`CategoryFilter.tsx`).
  - Featured article hero card (`BlogCard.tsx` with featured style).
  - Responsive 3-column article card grid with read time, publication date, tags, and category badges.
  - In-feed AdSense banner placeholder.
- [x] Individual Article Page (`/blog/[slug]`):
  - Static generation via `generateStaticParams()` and dynamic SEO metadata.
  - Breadcrumb navigation (`হোম` > `ব্লগ` > `ক্যাটাগরি`).
  - **Connected Bird Guide Widget**: Direct callout linking the article to the relevant bird variety farming guide.
  - Formatted content body with clean typography, headings, and bullet points.
  - Tags and statutory veterinary disclaimer.
  - In-article AdSense banner placeholder.
  - Related articles grid (3 cards).
- [x] Integrated "ব্লগ" (Blog) link in main desktop and mobile navigation header.
- [x] Connected quail-related blog articles directly on the Japanese Quail landing page.
- [x] Connected Sonali, Fayoumi, and Broiler landing pages to bird-specific articles, with article pages linking back to each bird's day-one guide.
- [x] Build verified: all 25 static pages compiled with zero errors (`npm run build`).

---

## Upcoming Phases
- **Phase 4 (Supabase Database & Admin Dashboard):**
  - [x] Supabase PostgreSQL schemas for birds, guide stages, blog articles, and vaccines.
  - [x] Row Level Security with public published-content reads and writes restricted to users with `app_metadata.role = admin`.
  - [x] Supabase Auth login and admin-role gate for the dashboard.
  - [x] Content management UI for blog articles and quail guide stages; bird varieties are seeded and listed, and vaccine CRUD is available in the admin area.
  - [x] Initial content sync checks database errors and preserves rows already edited in the dashboard.
  - [x] Public blog, bird, and guide routes read published database content and fall back to local starter content if Supabase is not configured or the query fails.
  - [ ] Apply the updated `supabase_schema.sql` to the connected Supabase project, assign the admin app_metadata claim, and run the initial sync.
- **Phase 5 (Vaccination Page, SEO, Ads):**
  - [x] Dedicated bilingual vaccination card view with source text and verified/under-review badges (`/vaccination`).
  - [x] Page metadata, generated sitemap, robots.txt, and canonical URLs for public pages.
  - [x] Vaccination page ad placement plus existing blog and guide ad slots.
  - [ ] Set `NEXT_PUBLIC_SITE_URL` to the production domain and publish expert-reviewed schedule records.
- **Phase 6 (Testing & Production Polish):**
  - [x] Phase 6 started (2026-11-08): production build passes with no prerender/cache errors; focused ESLint passes for changed files.
  - [ ] Full-project ESLint cleanup: currently reports 25 errors and 22 warnings across the project.
  - [ ] Cross-device accessibility audits.
  - [ ] Lighthouse audits (SEO, Accessibility, Performance); no browser or Lighthouse runner is installed in this environment.
  - [ ] Vercel deployment readiness.

## Known Issues
- Phase 6 remains in progress: full-project ESLint findings and browser-based accessibility/Lighthouse audits are outstanding.

### Search and deployment preparation (2026-11-08)
- [x] Marked the feed calculator as coming soon on the homepage and route; retained its implementation for later and set the route to `noindex`.
- [x] Expanded the sitemap to all implemented bird varieties, their guide stages, and published blog articles; excluded the unfinished calculator.
- [x] Added Vercel production-domain fallback for canonical URLs and sitemap generation, explicit `OAI-SearchBot` access, corrected global Bangla metadata, and added WebSite/BlogPosting structured data.
- [x] Documented Vercel environment variables and Search Console sitemap submission in README.
- [ ] Create/connect the GitHub remote and push after the repository URL is provided; this workspace currently has no Git repository configured.

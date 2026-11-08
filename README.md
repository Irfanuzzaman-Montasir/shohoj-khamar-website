# সহজ খামার (Shohoj Khamar)

**Shohoj Khamar (সহজ খামার)** is a modern, Bangla-first poultry farming guidance and educational platform designed for farmers in Bangladesh. It provides structured day-by-day and age-range care instructions, feeding and watering guidelines, housing management, and verified vaccination schedules.

---

## 🛠 Tech Stack
- **Framework**: [Next.js](https://nextjs.org/) (App Router, Version 16+)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Google Fonts (`Noto Sans Bengali` for Bengali, `Inter` for Latin)
- **Database & Auth**: Supabase PostgreSQL, Supabase Auth, and Storage
- **Deployment**: Vercel ready

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18.18+ or v20+ (Node v26 verified)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repo-url>
cd Sohoj-Khamar

# Install dependencies
npm install

# Run the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Shohoj Khamar

Shohoj Khamar is a Bangla-first poultry education website for farmers in Bangladesh. It provides practical, age-based guides for Japanese quail, Fayoumi, Broiler, and Sonali birds, plus poultry articles and vaccination schedules.

### What the site includes

- Bird landing pages with quick facts, care summaries, and links to age-based guide stages.
- Detailed stage guides covering feed, water, temperature, ventilation, care checklists, and veterinary notes.
- A searchable poultry blog with related-guide links.
- A vaccination schedule page with review/source status.
- A Supabase-backed admin area for managing published content and site images.
- Bangla and English interface text.
- Feed calculator currently marked **Coming soon**; its implementation is retained for a later release.

### Run locally

Requirements: Node.js 20+ and npm.

```bash
npm install
Copy-Item .env.example .env.local
npm run dev
```

Open http://localhost:3000. Configure the Supabase values in `.env.local` before using database-backed admin features. Never commit `.env.local`, passwords, or service-role keys.

### Deploy with Vercel and publish to search

1. Push this repository to GitHub and import it into Vercel.
2. Add `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `NEXT_PUBLIC_SITE_URL`, and `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Vercel's environment settings. Set the site URL to the production domain, such as `https://example.com`, and use the GA4 web stream ID that starts with `G-`.
3. Deploy, then check `https://your-domain/robots.txt` and `https://your-domain/sitemap.xml`.
4. Verify the site in Google Search Console and submit the sitemap. Search engines decide whether and when to index pages; rankings cannot be guaranteed.
5. Public pages allow search crawlers, including `OAI-SearchBot`; do not block it in hosting or CDN firewall rules if you want ChatGPT search discovery.

The sitemap includes published articles and implemented bird guides. The coming-soon calculator is marked `noindex`. Google AI search uses the same fundamentals as regular search: accessible, helpful pages, clear links, and crawl permission. A special `llms.txt` file is not required for Google AI features.

### Supabase setup (Phase 4)

1. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` from the Supabase project settings. Do not expose a service-role key in a `NEXT_PUBLIC_` variable or browser code.
   Set `NEXT_PUBLIC_SITE_URL` to the public site origin (for example, `https://your-domain.com`) before production deployment so canonical links and the sitemap use the correct host.
2. Run `supabase_schema.sql` in the Supabase SQL Editor. The script creates the content tables, RLS policies, and the `blog-images` storage bucket.
3. Create the administrator account in Supabase Auth. Then set that user's **app_metadata** to `{ "role": "admin" }` from the Supabase dashboard or trusted server-side tooling. Never set this role in user-editable `user_metadata`.
4. Sign out and back in after changing app_metadata so the refreshed access token contains the admin role. Admin writes are permitted only when that claim is present; public visitors can read published content.
5. Open `/admin` and use **ডাটাবেস সিঙ্ক ও ইনিশিয়ালাইজ** to insert the starter bird, guide, and article content. Existing rows are preserved by the initializer.

The dashboard uses the Supabase anon key with RLS. Keep `SUPABASE_SERVICE_ROLE_KEY` server-only; this app does not need it for browser-side admin operations.

### Production Build
```bash
npm run build
npm run start
```

### Deploying to Vercel and enabling search

1. Push the project to a GitHub repository, then import that repository in Vercel.
2. Add `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and `NEXT_PUBLIC_SITE_URL` in the Vercel project environment settings. Use the public production origin for `NEXT_PUBLIC_SITE_URL` (for example, `https://example.com`). Keep `.env.local` and all secret keys out of GitHub. The sitemap and canonical URLs can fall back to Vercel's production project domain if the site URL is omitted.
3. Deploy to production and confirm `/robots.txt` and `/sitemap.xml` load on the production domain.
4. Verify the domain in Google Search Console, submit the sitemap URL, and inspect important public guide pages. Indexing and rankings take time and are decided by search engines; no code change can guarantee a position.
5. Public pages are crawlable by default, including `OAI-SearchBot` for ChatGPT search discovery. Keep that crawler allowed in any CDN or hosting firewall rules. Admin routes remain disallowed and the unfinished calculator is marked `noindex`.

Search visibility depends on useful, original, accurate pages, clear internal links, and allowing crawlers to access the site. There is no special `llms.txt` file required for Google AI features; maintain the same accessible, helpful page content used for regular search.

---

## 📁 Project Structure
```
Sohoj-Khamar/
├── app/
│   ├── layout.tsx         # Root layout with fonts, metadata, language provider
│   ├── page.tsx           # Homepage composing Hero, Birds, HowItWorks, Vaccination
│   └── globals.css        # Tailwind theme tokens and base styles
├── components/
│   ├── layout/
│   │   ├── Header.tsx     # Logo, navigation links, and Bangla/English toggle
│   │   └── Footer.tsx     # Brand info, veterinary disclaimer, and English tagline
│   ├── home/
│   │   ├── HeroSection.tsx        # Hero banner, action buttons, illustrated card
│   │   ├── BirdSelection.tsx      # 6 bird breed cards with ready/coming-soon badges
│   │   ├── HowItWorks.tsx         # 3-step numbered workflow on white background
│   │   └── VaccinationBanner.tsx  # Vaccination callout card with disclaimer note
│   └── common/
│       ├── BirdIllustration.tsx   # Custom SVG mascot (active & muted variants)
│       └── AdPlaceholder.tsx      # AdSense-ready placeholder component
├── context/
│   └── LanguageContext.tsx        # Bilingual client state (Bangla & English)
├── DESIGN_REFERENCE/
│   └── Homepage@1x.png            # Visual design benchmark
├── PROGRESS.md                    # Live development tracking log
└── README.md                      # Documentation
```

---

## 📌 Development Roadmap (Phases)
- **Phase 1 [Completed]**: Project initialization, theme setup, typography, and pixel-accurate homepage implementation matching design reference.
- **Phase 2 [Completed]**: Reusable bird landing pages, Japanese Quail guide, and clickable day-range navigation.
- **Phase 3 [Completed]**: Connected blog system with categories and related articles.
- **Phase 4 [Implementation complete; Supabase setup pending]**: Database integration, role-based admin access, and content administration dashboard.
- **Phase 5 [Implementation complete]**: Public vaccination schedule, review/source badges, canonical metadata, sitemap, robots.txt, and ad slots. Configure `NEXT_PUBLIC_SITE_URL` for production.
- **Phase 6**: Cross-device testing, accessibility audits, and deployment optimization.

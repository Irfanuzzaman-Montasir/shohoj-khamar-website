# Shohoj Khamar Project Notes

Last updated: 15 November 2026

## Project overview

Shohoj Khamar is a Bangla-first poultry and bird-keeping information website. It is built with Next.js 16.4.5, React, TypeScript, Tailwind CSS 4, and Supabase. The site provides practical bird guides and vaccination information, with public pages intended to be easy to scan on mobile.

## Work completed so far

- **Guides and content:** Phase 4 admin-managed guide and article work was completed, followed by Phase 5 and Phase 6 work. Bird guides were added or customized for Japanese quail, Fayoumi (shown as **ফাওমি**), Broiler, and Sonali. The Koel guide was used as the reference for concise, at-a-glance information such as feed, temperature, and medicine. Bird pages have bird-specific related-information sections.
- **Vaccination pages:** Users can choose a bird card and view its vaccine schedule as a table, based on the supplied spreadsheet information.
- **Admin:** Admin routes support guide/article management and homepage/site image settings. Admin access relies on Supabase Auth `app_metadata.role = "admin"` and matching row-level security policies. SQL updates are maintained in `supabase_schema.sql`.
- **Homepage and design:** Homepage cards, bird selection, guide promotions, and image sections have been customized. A feed calculator/mix-feed idea for Fayoumi was discussed; the calculator is currently marked as a coming-soon feature for later implementation. The Bangla font and page layouts were also adjusted during customization.
- **SEO and analytics:** Metadata, canonical site URL handling, `robots.txt`, sitemap generation, Google Search Console verification, Google Analytics, and Vercel Speed Insights have been added. Localhost URLs are excluded from the production sitemap; production deployment should use the correct public site URL.
- **Hosting and source control:** The project is connected to the public GitHub repository `Irfanuzzaman-Montasir/shohoj-khamar-website` and is intended for Vercel hosting. Environment variables and Supabase connection details must be configured in the Vercel project settings.

## Current technical note: Tailwind CSS

The project uses Tailwind CSS 4. The CSS pipeline was adjusted to use `@tailwindcss/postcss` through the root `postcss.config.mjs`; the old `@tailwindcss/turbopack` setup was removed. If utility styles appear missing, restart the Next.js dev server after dependency/config changes, then inspect the generated CSS and browser cache. Preserve the user's local homepage edits when troubleshooting.

## Deployment checklist

1. Push the intended changes to the GitHub `main` branch.
2. Import the repository into Vercel and use the Next.js defaults (`npm install`, `npm run build`).
3. Configure `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Vercel for the appropriate environments. Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` if Analytics is enabled.
4. Configure the production site URL used by metadata and sitemap generation (for example, the production domain or Vercel production project domain), never `http://localhost:3000`.
5. Add the deployed domain to Supabase Auth's allowed redirect URLs and verify Supabase Storage/database policies for public images and admin writes.
6. Deploy, then check the homepage, bird guides, vaccination tables, admin login and image upload, `/sitemap.xml`, `/robots.txt`, and analytics in the production deployment.
7. Submit the production sitemap URL to Google Search Console after deployment.

## Planned and follow-up work

- Implement the Fayoumi feed-mixing/calculation feature when its nutritional inputs and calculation rules are ready. Keep the homepage calculator promotion disabled or labeled **Coming soon** until then.
- Continue reviewing admin image uploads and guide editing against the live Supabase schema and RLS policies.
- Finish production-domain SEO checks and monitor indexing in Search Console.
- Revisit homepage styling if CSS utilities are missing after a clean server restart; recent CSS configuration changes still need confirmation in the user's running development environment.
- Keep bird-care advice clear, concise, and tied to reliable sources; have a veterinarian review vaccine and medicine schedules before presenting them as authoritative recommendations.

## Sensitive configuration

Do not commit `.env.local`, Supabase service-role keys, passwords, or personal access tokens. Use Vercel environment variables for deployment secrets. Only the Supabase anon key belongs in `NEXT_PUBLIC_SUPABASE_ANON_KEY`; never expose a service-role key to browser code. If a credential pasted into chat is still active, revoke and replace it.

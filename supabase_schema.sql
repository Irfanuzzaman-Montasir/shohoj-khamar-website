

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. BIRD VARIETIES TABLE
CREATE TABLE IF NOT EXISTS public.bird_varieties (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    species TEXT NOT NULL,
    variety_slug TEXT NOT NULL UNIQUE,
    name_bn TEXT NOT NULL,
    name_en TEXT NOT NULL,
    scientific_name TEXT,
    tagline_bn TEXT,
    tagline_en TEXT,
    description_bn TEXT,
    description_en TEXT,
    stats JSONB DEFAULT '[]'::jsonb,
    varieties JSONB DEFAULT '[]'::jsonb,
    housing_overview_bn TEXT,
    housing_overview_en TEXT,
    feeding_overview_bn TEXT,
    feeding_overview_en TEXT,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. GUIDE STAGES TABLE (Day-by-Day / Age-range stages)
CREATE TABLE IF NOT EXISTS public.guide_stages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    species TEXT NOT NULL DEFAULT 'quail',
    variety_slug TEXT NOT NULL DEFAULT 'japanese',
    stage_slug TEXT NOT NULL,
    stage_number INTEGER NOT NULL,
    title_bn TEXT NOT NULL,
    title_en TEXT NOT NULL,
    age_range_bn TEXT NOT NULL,
    age_range_en TEXT NOT NULL,
    temperature_bn TEXT,
    temperature_en TEXT,
    light_hours_bn TEXT,
    light_hours_en TEXT,
    feed_type_bn TEXT,
    feed_type_en TEXT,
    feed_management_bn TEXT,
    feed_management_en TEXT,
    water_management_bn TEXT,
    water_management_en TEXT,
    temperature_env_bn TEXT,
    temperature_env_en TEXT,
    medicines JSONB DEFAULT '[]'::jsonb,
    farmer_tips_bn TEXT,
    farmer_tips_en TEXT,
    checklist_bn TEXT[] DEFAULT ARRAY[]::TEXT[],
    checklist_en TEXT[] DEFAULT ARRAY[]::TEXT[],
    special_instructions_bn TEXT,
    special_instructions_en TEXT,
    vaccine_notes_bn TEXT,
    vaccine_notes_en TEXT,
    review_status_bn TEXT DEFAULT 'পোল্ট্রি বিশেষজ্ঞ পর্যালোচনাধীন',
    review_status_en TEXT DEFAULT 'Under Veterinary Review',
    source_bn TEXT,
    source_en TEXT,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(species, variety_slug, stage_slug)
);

-- 4. BLOG ARTICLES TABLE
CREATE TABLE IF NOT EXISTS public.blog_articles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT NOT NULL UNIQUE,
    title_bn TEXT NOT NULL,
    title_en TEXT NOT NULL,
    seo_title_bn TEXT,
    seo_title_en TEXT,
    meta_desc_bn TEXT,
    meta_desc_en TEXT,
    excerpt_bn TEXT,
    excerpt_en TEXT,
    category_slug TEXT NOT NULL,
    category_name_bn TEXT NOT NULL,
    category_name_en TEXT NOT NULL,
    tags TEXT[] DEFAULT ARRAY[]::TEXT[],
    featured_image_url TEXT,
    published_date DATE DEFAULT CURRENT_DATE,
    read_time_bn TEXT DEFAULT '৫ মিনিট পাঠ',
    read_time_en TEXT DEFAULT '5 min read',
    author_bn TEXT DEFAULT 'সহজ খামার সম্পাদকীয় টিম',
    author_en TEXT DEFAULT 'Shohoj Khamar Editorial',
    content_bn TEXT[] DEFAULT ARRAY[]::TEXT[],
    content_en TEXT[] DEFAULT ARRAY[]::TEXT[],
    is_published BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. VACCINATION SCHEDULES TABLE
CREATE TABLE IF NOT EXISTS public.vaccination_schedules (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    bird_species TEXT NOT NULL,
    age_recommended_bn TEXT NOT NULL,
    age_recommended_en TEXT NOT NULL,
    vaccine_name_bn TEXT NOT NULL,
    vaccine_name_en TEXT NOT NULL,
    target_disease_bn TEXT NOT NULL,
    target_disease_en TEXT NOT NULL,
    administration_method_bn TEXT NOT NULL,
    administration_method_en TEXT NOT NULL,
    instructions_bn TEXT,
    instructions_en TEXT,
    review_status_bn TEXT DEFAULT 'পোল্ট্রি বিশেষজ্ঞ পর্যালোচনাধীন',
    review_status_en TEXT DEFAULT 'Under Veterinary Review',
    source_bn TEXT,
    source_en TEXT,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. PUBLIC SITE SETTINGS (only non-sensitive display settings belong here)
CREATE TABLE IF NOT EXISTS public.site_settings (
    setting_key TEXT PRIMARY KEY,
    setting_value JSONB NOT NULL DEFAULT '{}'::jsonb,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- The guide initializer uses this natural key for safe, non-destructive upserts.
-- CREATE TABLE IF NOT EXISTS does not add constraints to an existing table,
-- so create the unique index separately for databases created from older schemas.
CREATE UNIQUE INDEX IF NOT EXISTS guide_stages_species_variety_stage_uidx
    ON public.guide_stages (species, variety_slug, stage_slug);

-- 6. ENABLE ROW LEVEL SECURITY (RLS)
ALTER TABLE public.bird_varieties ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.guide_stages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vaccination_schedules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Admin role is set in Supabase Auth app_metadata (never user_metadata).
-- Set it from the Supabase dashboard or a trusted server using the service role.
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY INVOKER
SET search_path = ''
AS $$
  SELECT COALESCE((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin', false);
$$;

-- Drop earlier broad policies so rerunning this schema cannot leave them active.
DROP POLICY IF EXISTS "Public users can view published bird varieties" ON public.bird_varieties;
DROP POLICY IF EXISTS "Public users can view published guide stages" ON public.guide_stages;
DROP POLICY IF EXISTS "Public users can view published blog articles" ON public.blog_articles;
DROP POLICY IF EXISTS "Public users can view published vaccines" ON public.vaccination_schedules;
DROP POLICY IF EXISTS "Admins full access to bird varieties" ON public.bird_varieties;
DROP POLICY IF EXISTS "Admins full access to guide stages" ON public.guide_stages;
DROP POLICY IF EXISTS "Admins full access to blog articles" ON public.blog_articles;
DROP POLICY IF EXISTS "Admins full access to vaccines" ON public.vaccination_schedules;
DROP POLICY IF EXISTS "Public users can view site settings" ON public.site_settings;
DROP POLICY IF EXISTS "Admins full access to site settings" ON public.site_settings;

-- 7. PUBLIC READ POLICIES (Allows public users to view published content)
CREATE POLICY "Public users can view published bird varieties"
    ON public.bird_varieties FOR SELECT
    TO anon, authenticated
    USING (is_published = true OR public.is_admin());

CREATE POLICY "Public users can view published guide stages"
    ON public.guide_stages FOR SELECT
    TO anon, authenticated
    USING (is_published = true OR public.is_admin());

CREATE POLICY "Public users can view published blog articles"
    ON public.blog_articles FOR SELECT
    TO anon, authenticated
    USING (is_published = true OR public.is_admin());

CREATE POLICY "Public users can view published vaccines"
    ON public.vaccination_schedules FOR SELECT
    TO anon, authenticated
    USING (is_published = true OR public.is_admin());

-- 8. AUTHENTICATED ADMIN FULL ACCESS POLICIES
-- Only users with the trusted app_metadata role can manage content.
CREATE POLICY "Admins full access to bird varieties"
    ON public.bird_varieties FOR ALL
    TO authenticated
    USING (public.is_admin())
    WITH CHECK (public.is_admin());

CREATE POLICY "Admins full access to guide stages"
    ON public.guide_stages FOR ALL
    TO authenticated
    USING (public.is_admin())
    WITH CHECK (public.is_admin());

CREATE POLICY "Admins full access to blog articles"
    ON public.blog_articles FOR ALL
    TO authenticated
    USING (public.is_admin())
    WITH CHECK (public.is_admin());

CREATE POLICY "Admins full access to vaccines"
    ON public.vaccination_schedules FOR ALL
    TO authenticated
    USING (public.is_admin())
    WITH CHECK (public.is_admin());

CREATE POLICY "Public users can view site settings"
    ON public.site_settings FOR SELECT
    TO anon, authenticated
    USING (true);

CREATE POLICY "Admins full access to site settings"
    ON public.site_settings FOR ALL
    TO authenticated
    USING (public.is_admin())
    WITH CHECK (public.is_admin());

-- 9. STORAGE BUCKET FOR FEATURED IMAGES
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-images', 'blog-images', true)
ON CONFLICT (id) DO NOTHING;

DROP POLICY IF EXISTS "Public can view blog images" ON storage.objects;
CREATE POLICY "Public can view blog images"
    ON storage.objects FOR SELECT
    USING (bucket_id = 'blog-images');

DROP POLICY IF EXISTS "Admins can upload blog images" ON storage.objects;
DROP POLICY IF EXISTS "Admins can update or delete blog images" ON storage.objects;
DROP POLICY IF EXISTS "Admins can delete blog images" ON storage.objects;

CREATE POLICY "Admins can upload blog images"
    ON storage.objects FOR INSERT
    TO authenticated
    WITH CHECK (bucket_id = 'blog-images' AND public.is_admin());

CREATE POLICY "Admins can update or delete blog images"
    ON storage.objects FOR UPDATE
    TO authenticated
    USING (bucket_id = 'blog-images' AND public.is_admin())
    WITH CHECK (bucket_id = 'blog-images' AND public.is_admin());

CREATE POLICY "Admins can delete blog images"
    ON storage.objects FOR DELETE
    TO authenticated
    USING (bucket_id = 'blog-images' AND public.is_admin());

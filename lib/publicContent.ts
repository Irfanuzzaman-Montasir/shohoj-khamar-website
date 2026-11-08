import "server-only";

import { createClient } from "@supabase/supabase-js";
import { cacheLife } from "next/cache";
import { blogArticles } from "@/data/blogData";
import type { BlogArticle } from "@/data/blogData";
import { birdsCatalog } from "@/data/birdsData";
import type { BirdData } from "@/data/birdsData";
import { quailStages } from "@/data/quailStagesData";
import type { GuideStage } from "@/data/quailStagesData";
import { fayoumiStages } from "@/data/fayoumiStagesData";
import { broilerStages } from "@/data/broilerStagesData";
import { sonaliStages } from "@/data/sonaliStagesData";

export interface VaccinationSchedule {
  id: string;
  birdSpecies: string;
  ageRecommendedBn: string;
  ageRecommendedEn: string;
  vaccineNameBn: string;
  vaccineNameEn: string;
  targetDiseaseBn: string;
  targetDiseaseEn: string;
  administrationMethodBn: string;
  administrationMethodEn: string;
  instructionsBn: string;
  instructionsEn: string;
  reviewStatusBn: string;
  reviewStatusEn: string;
  sourceBn: string;
  sourceEn: string;
}

type ContentRow = Record<string, unknown>;

function text(row: ContentRow, key: string, fallback = ""): string {
  const value = row[key];
  return typeof value === "string" ? value : fallback;
}

function stringList(row: ContentRow, key: string, fallback: string[] = []): string[] {
  const value = row[key];
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : fallback;
}

function createPublicClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;

  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

function toArticle(row: ContentRow): BlogArticle {
  const slug = text(row, "slug");
  const local = blogArticles.find((article) => article.slug === slug);
  return {
    id: text(row, "id", local?.id ?? slug),
    slug,
    titleBn: text(row, "title_bn", local?.titleBn),
    titleEn: text(row, "title_en", local?.titleEn),
    seoTitleBn: text(row, "seo_title_bn", local?.seoTitleBn ?? text(row, "title_bn")),
    seoTitleEn: text(row, "seo_title_en", local?.seoTitleEn ?? text(row, "title_en")),
    metaDescBn: text(row, "meta_desc_bn", local?.metaDescBn ?? text(row, "excerpt_bn")),
    metaDescEn: text(row, "meta_desc_en", local?.metaDescEn ?? text(row, "excerpt_en")),
    excerptBn: text(row, "excerpt_bn", local?.excerptBn),
    excerptEn: text(row, "excerpt_en", local?.excerptEn),
    categorySlug: text(row, "category_slug", local?.categorySlug ?? "quail"),
    categoryNameBn: text(row, "category_name_bn", local?.categoryNameBn),
    categoryNameEn: text(row, "category_name_en", local?.categoryNameEn),
    tags: stringList(row, "tags", local?.tags ?? []),
    publishedDate: text(row, "published_date", local?.publishedDate),
    readTimeBn: text(row, "read_time_bn", local?.readTimeBn ?? "৫ মিনিট পাঠ"),
    readTimeEn: text(row, "read_time_en", local?.readTimeEn ?? "5 min read"),
    authorBn: text(row, "author_bn", local?.authorBn ?? "সহজ খামার সম্পাদকীয় টিম"),
    authorEn: text(row, "author_en", local?.authorEn ?? "Shohoj Khamar Editorial"),
    relatedBirdVariety: local?.relatedBirdVariety,
    relatedArticleSlugs: local?.relatedArticleSlugs ?? [],
    isPublished: typeof row.is_published === "boolean" ? row.is_published : local?.isPublished ?? false,
    contentBn: stringList(row, "content_bn", local?.contentBn ?? []),
    contentEn: stringList(row, "content_en", local?.contentEn ?? []),
  };
}

export async function getPublicArticles(): Promise<BlogArticle[]> {
  "use cache";
  cacheLife("minutes");
  const client = createPublicClient();
  if (!client) return blogArticles.filter((article) => article.isPublished);

  const { data, error } = await client
    .from("blog_articles")
    .select("*")
    .eq("is_published", true)
    .order("published_date", { ascending: false });

  if (error) return blogArticles.filter((article) => article.isPublished);
  return (data ?? []).map((row) => toArticle(row));
}

export async function getPublicArticleBySlug(slug: string): Promise<BlogArticle | null> {
  "use cache";
  cacheLife("minutes");
  const client = createPublicClient();
  if (!client) return blogArticles.find((article) => article.slug === slug && article.isPublished) ?? null;

  const { data, error } = await client
    .from("blog_articles")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .maybeSingle();

  if (error) return blogArticles.find((article) => article.slug === slug && article.isPublished) ?? null;
  return data ? toArticle(data) : null;
}

export async function getPublicRelatedArticles(slug: string, limit = 3): Promise<BlogArticle[]> {
  "use cache";
  cacheLife("minutes");
  const current = await getPublicArticleBySlug(slug);
  if (!current) return [];
  const client = createPublicClient();
  if (current.relatedArticleSlugs.length === 0) return [];
  if (!client) {
    return blogArticles
      .filter((article) => current.relatedArticleSlugs.includes(article.slug) && article.isPublished)
      .slice(0, limit);
  }

  const { data, error } = await client
    .from("blog_articles")
    .select("*")
    .in("slug", current.relatedArticleSlugs)
    .eq("is_published", true);
  if (error) {
    return blogArticles
      .filter((article) => current.relatedArticleSlugs.includes(article.slug) && article.isPublished)
      .slice(0, limit);
  }
  return (data ?? []).map((row) => toArticle(row)).slice(0, limit);
}

export async function getPublicBird(species: string, variety: string): Promise<BirdData | null> {
  "use cache";
  cacheLife("minutes");
  const client = createPublicClient();
  const local = birdsCatalog[`${species}-${variety}`];
  if (!client) return local ?? null;

  const { data, error } = await client
    .from("bird_varieties")
    .select("*")
    .eq("species", species)
    .eq("variety_slug", variety)
    .eq("is_published", true)
    .maybeSingle();
  if (error) return local ?? null;
  if (!data) return local ?? null;

  return {
    species: text(data, "species", species),
    varietySlug: text(data, "variety_slug", variety),
    nameBn: text(data, "name_bn"),
    nameEn: text(data, "name_en"),
    scientificName: text(data, "scientific_name"),
    taglineBn: text(data, "tagline_bn"),
    taglineEn: text(data, "tagline_en"),
    descriptionBn: text(data, "description_bn"),
    descriptionEn: text(data, "description_en"),
    stats: Array.isArray(data.stats) ? data.stats as BirdData["stats"] : [],
    varieties: Array.isArray(data.varieties) ? data.varieties as BirdData["varieties"] : [],
    housingOverviewBn: text(data, "housing_overview_bn"),
    housingOverviewEn: text(data, "housing_overview_en"),
    feedingOverviewBn: text(data, "feeding_overview_bn"),
    feedingOverviewEn: text(data, "feeding_overview_en"),
    firstStageSlug: local?.firstStageSlug ?? "day-1",
  };
}

export async function getPublicSiteImages(): Promise<Record<string, string>> {
  "use cache";
  cacheLife("minutes");
  const client = createPublicClient();
  if (!client) return {};

  const { data, error } = await client
    .from("site_settings")
    .select("setting_value")
    .eq("setting_key", "site_images")
    .maybeSingle();
  if (error || !data || typeof data.setting_value !== "object" || data.setting_value === null) return {};

  return Object.fromEntries(
    Object.entries(data.setting_value as Record<string, unknown>).filter(
      (entry): entry is [string, string] => typeof entry[1] === "string" && entry[1].trim().length > 0
    )
  );
}

export async function getPublicGuideStages(species: string, variety: string): Promise<GuideStage[]> {
  "use cache";
  cacheLife("minutes");
  const client = createPublicClient();
  const local = species === "quail" && variety === "japanese"
    ? quailStages
    : species === "chicken" && variety === "fayoumi"
      ? fayoumiStages
      : species === "chicken" && variety === "broiler"
        ? broilerStages
      : species === "chicken" && variety === "sonali"
        ? sonaliStages
      : [];
  if (!client) return local;

  const { data, error } = await client
    .from("guide_stages")
    .select("*")
    .eq("species", species)
    .eq("variety_slug", variety)
    .eq("is_published", true)
    .order("stage_number", { ascending: true });
  if (error) return local;
  if (!data?.length) return local;

  return data.map((row) => {
    const fallback = local.find((stage) => stage.slug === row.stage_slug);
    const fayoumiScheduleNeedsRefresh =
      species === "chicken" &&
      variety === "fayoumi" &&
      text(row, "source_bn") ===
        "ব্যবহারকারীর দেওয়া ফাওমি পালন নির্দেশিকা; ওষুধ ও টিকার সূচি স্থানীয় পশুচিকিৎসকের সঙ্গে যাচাই করুন।";
    return {
      slug: text(row, "stage_slug"),
      stageNumber: typeof row.stage_number === "number" ? row.stage_number : 0,
      titleBn: text(row, "title_bn"),
      titleEn: text(row, "title_en"),
      ageRangeBn: text(row, "age_range_bn"),
      ageRangeEn: text(row, "age_range_en"),
      temperatureBn: text(row, "temperature_bn"),
      temperatureEn: text(row, "temperature_en"),
      lightHoursBn: text(row, "light_hours_bn"),
      lightHoursEn: text(row, "light_hours_en"),
      feedTypeBn: text(row, "feed_type_bn"),
      feedTypeEn: text(row, "feed_type_en"),
      feedManagementBn: text(row, "feed_management_bn"),
      feedManagementEn: text(row, "feed_management_en"),
      waterManagementBn: text(row, "water_management_bn"),
      waterManagementEn: text(row, "water_management_en"),
      temperatureEnvironmentBn: text(row, "temperature_env_bn"),
      temperatureEnvironmentEn: text(row, "temperature_env_en"),
      medicines: fayoumiScheduleNeedsRefresh && fallback
        ? fallback.medicines
        : Array.isArray(row.medicines) ? row.medicines as GuideStage["medicines"] : [],
      farmerTipsBn: text(row, "farmer_tips_bn"),
      farmerTipsEn: text(row, "farmer_tips_en"),
      checklistBn: stringList(row, "checklist_bn"),
      checklistEn: stringList(row, "checklist_en"),
      specialInstructionsBn: fayoumiScheduleNeedsRefresh && fallback ? fallback.specialInstructionsBn : text(row, "special_instructions_bn"),
      specialInstructionsEn: fayoumiScheduleNeedsRefresh && fallback ? fallback.specialInstructionsEn : text(row, "special_instructions_en"),
      vaccineNotesBn: fayoumiScheduleNeedsRefresh && fallback ? fallback.vaccineNotesBn : text(row, "vaccine_notes_bn"),
      vaccineNotesEn: fayoumiScheduleNeedsRefresh && fallback ? fallback.vaccineNotesEn : text(row, "vaccine_notes_en"),
      reviewStatusBn: fayoumiScheduleNeedsRefresh && fallback ? fallback.reviewStatusBn : text(row, "review_status_bn"),
      reviewStatusEn: fayoumiScheduleNeedsRefresh && fallback ? fallback.reviewStatusEn : text(row, "review_status_en"),
      sourceBn: fayoumiScheduleNeedsRefresh && fallback ? fallback.sourceBn : text(row, "source_bn", fallback?.sourceBn),
      sourceEn: fayoumiScheduleNeedsRefresh && fallback ? fallback.sourceEn : text(row, "source_en", fallback?.sourceEn),
    };
  });
}

export async function getPublicVaccinationSchedules(): Promise<VaccinationSchedule[]> {
  "use cache";
  cacheLife("minutes");
  const client = createPublicClient();
  if (!client) return [];

  const { data, error } = await client
    .from("vaccination_schedules")
    .select("*")
    .eq("is_published", true)
    .order("bird_species", { ascending: true })
    .order("created_at", { ascending: true });

  if (error || !data) return [];
  return data.map((row) => {
    const sourceBn = text(row, "source_bn");
    const sourceEn = text(row, "source_en");
    const legacyPlaceholderSource = "BLRI ও প্রাণিসম্পদ অধিদপ্তর নির্দেশিকা";
    return {
    id: text(row, "id"),
    birdSpecies: text(row, "bird_species"),
    ageRecommendedBn: text(row, "age_recommended_bn"),
    ageRecommendedEn: text(row, "age_recommended_en"),
    vaccineNameBn: text(row, "vaccine_name_bn"),
    vaccineNameEn: text(row, "vaccine_name_en"),
    targetDiseaseBn: text(row, "target_disease_bn"),
    targetDiseaseEn: text(row, "target_disease_en"),
    administrationMethodBn: text(row, "administration_method_bn"),
    administrationMethodEn: text(row, "administration_method_en"),
    instructionsBn: text(row, "instructions_bn"),
    instructionsEn: text(row, "instructions_en"),
    reviewStatusBn: text(row, "review_status_bn", "পোল্ট্রি বিশেষজ্ঞ পর্যালোচনাধীন"),
    reviewStatusEn: text(row, "review_status_en", "Under Veterinary Review"),
    sourceBn: sourceBn === legacyPlaceholderSource ? "" : sourceBn,
    sourceEn,
  };
  });
}

import { supabase } from "@/lib/supabaseClient";
import { birdsCatalog } from "@/data/birdsData";
import { quailStages } from "@/data/quailStagesData";
import { fayoumiStages } from "@/data/fayoumiStagesData";
import { broilerStages } from "@/data/broilerStagesData";
import { sonaliStages } from "@/data/sonaliStagesData";
import { blogArticles } from "@/data/blogData";

const bengaliDigits = "০১২৩৪৫৬৭৮৯";

function toDatabaseDate(value: string): string {
  const asciiDate = value.replace(/[০-৯]/g, (digit) =>
    String(bengaliDigits.indexOf(digit))
  );
  if (!/^\d{4}-\d{2}-\d{2}$/.test(asciiDate)) {
    throw new Error(`Invalid published date: ${value}`);
  }

  const date = new Date(`${asciiDate}T00:00:00.000Z`);
  if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== asciiDate) {
    throw new Error(`Invalid published date: ${value}`);
  }
  return asciiDate;
}

export async function syncDatabaseWithInitialContent(): Promise<{
  success: boolean;
  message: string;
  counts: { birds: number; stages: number; articles: number };
}> {
  try {
    const upsertInitialRows = async (
      table: string,
      rows: Record<string, unknown>[],
      onConflict: string
    ) => {
      const { error } = await supabase.from(table).upsert(rows, {
        onConflict,
        ignoreDuplicates: true,
      });
      if (error) throw new Error(`${table}: ${error.message}`);
    };

    // 1. Sync Bird Varieties
    const birdsToInsert = Object.values(birdsCatalog).map((b) => ({
      species: b.species,
      variety_slug: b.varietySlug,
      name_bn: b.nameBn,
      name_en: b.nameEn,
      scientific_name: b.scientificName,
      tagline_bn: b.taglineBn,
      tagline_en: b.taglineEn,
      description_bn: b.descriptionBn,
      description_en: b.descriptionEn,
      stats: b.stats,
      varieties: b.varieties,
      housing_overview_bn: b.housingOverviewBn,
      housing_overview_en: b.housingOverviewEn,
      feeding_overview_bn: b.feedingOverviewBn,
      feeding_overview_en: b.feedingOverviewEn,
      is_published: true,
    }));

    await upsertInitialRows("bird_varieties", birdsToInsert, "variety_slug");

    // 2. Sync Guide Stages
    const stagesToInsert = [
      ...quailStages.map((s) => ({ stage: s, species: "quail", varietySlug: "japanese" })),
      ...fayoumiStages.map((s) => ({ stage: s, species: "chicken", varietySlug: "fayoumi" })),
      ...broilerStages.map((s) => ({ stage: s, species: "chicken", varietySlug: "broiler" })),
      ...sonaliStages.map((s) => ({ stage: s, species: "chicken", varietySlug: "sonali" })),
    ].map(({ stage: s, species, varietySlug }) => ({
      species,
      variety_slug: varietySlug,
      stage_slug: s.slug,
      stage_number: s.stageNumber,
      title_bn: s.titleBn,
      title_en: s.titleEn,
      age_range_bn: s.ageRangeBn,
      age_range_en: s.ageRangeEn,
      temperature_bn: s.temperatureBn,
      temperature_en: s.temperatureEn,
      light_hours_bn: s.lightHoursBn,
      light_hours_en: s.lightHoursEn,
      feed_type_bn: s.feedTypeBn,
      feed_type_en: s.feedTypeEn,
      feed_management_bn: s.feedManagementBn,
      feed_management_en: s.feedManagementEn,
      water_management_bn: s.waterManagementBn,
      water_management_en: s.waterManagementEn,
      temperature_env_bn: s.temperatureEnvironmentBn,
      temperature_env_en: s.temperatureEnvironmentEn,
      medicines: s.medicines,
      farmer_tips_bn: s.farmerTipsBn,
      farmer_tips_en: s.farmerTipsEn,
      checklist_bn: s.checklistBn,
      checklist_en: s.checklistEn,
      special_instructions_bn: s.specialInstructionsBn,
      special_instructions_en: s.specialInstructionsEn,
      vaccine_notes_bn: s.vaccineNotesBn,
      vaccine_notes_en: s.vaccineNotesEn,
      review_status_bn: s.reviewStatusBn,
      review_status_en: s.reviewStatusEn,
      source_bn: s.sourceBn,
      source_en: s.sourceEn,
      is_published: true,
    }));

    await upsertInitialRows(
      "guide_stages",
      stagesToInsert,
      "species,variety_slug,stage_slug"
    );

    // 3. Sync Blog Articles
    const articlesToInsert = blogArticles.map((a) => ({
      slug: a.slug,
      title_bn: a.titleBn,
      title_en: a.titleEn,
      seo_title_bn: a.seoTitleBn,
      seo_title_en: a.seoTitleEn,
      meta_desc_bn: a.metaDescBn,
      meta_desc_en: a.metaDescEn,
      excerpt_bn: a.excerptBn,
      excerpt_en: a.excerptEn,
      category_slug: a.categorySlug,
      category_name_bn: a.categoryNameBn,
      category_name_en: a.categoryNameEn,
      tags: a.tags,
      published_date: toDatabaseDate(a.publishedDate),
      read_time_bn: a.readTimeBn,
      read_time_en: a.readTimeEn,
      author_bn: a.authorBn,
      author_en: a.authorEn,
      content_bn: a.contentBn,
      content_en: a.contentEn,
      is_published: a.isPublished,
    }));

    await upsertInitialRows("blog_articles", articlesToInsert, "slug");

    return {
      success: true,
      message: "সকল কনটেন্ট সফলভাবে ডাটাবেসে সিঙ্ক হয়েছে।",
      counts: {
        birds: birdsToInsert.length,
        stages: stagesToInsert.length,
        articles: articlesToInsert.length,
      },
    };
  } catch (error: unknown) {
    console.error("Database sync error:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "সিঙ্ক করতে সমস্যা হয়েছে।",
      counts: { birds: 0, stages: 0, articles: 0 },
    };
  }
}

"use client";

import Link from "next/link";
import { BirdData } from "@/data/birdsData";
import { GuideStage, quailStages } from "@/data/quailStagesData";
import type { BlogArticle } from "@/data/blogData";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Calendar, ChevronRight, HeartPulse } from "lucide-react";

interface BirdLandingViewProps {
  bird: BirdData;
  stages?: GuideStage[];
  relatedArticles?: BlogArticle[];
}

const quailRelatedArticles = [
  { href: "/blog/quail-egg-laying-timeline", titleEn: "When Do Quails Start Laying Eggs?", titleBn: "কোয়েল কখন ডিম দেওয়া শুরু করে?" },
  { href: "/blog/cost-profit-100-quail-farming", titleEn: "Cost and Profit of Raising 100 Quails", titleBn: "১০০টি কোয়েল পালনের খরচ ও লাভ" },
  { href: "/blog/quail-feed-preparation-guide", titleEn: "Quail Feed Formulation Guide", titleBn: "কোয়েলের খাবার তৈরির নির্দেশিকা" },
];

export default function BirdLandingView({ bird, stages = quailStages, relatedArticles = [] }: BirdLandingViewProps) {
  const { language } = useLanguage();
  const isBn = language === "bn";

  return (
    <div className="py-7 sm:py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <nav aria-label={isBn ? "ব্রেডক্রাম্ব" : "Breadcrumb"} className="flex items-center gap-2 text-xs text-[#668070] mb-6">
          <Link href="/" className="hover:text-[#1A4331]">{isBn ? "হোম" : "Home"}</Link>
          <ChevronRight size={14} />
          <Link href="/#birds-section" className="hover:text-[#1A4331]">{isBn ? "পাখি" : "Birds"}</Link>
          <ChevronRight size={14} />
          <span className="font-semibold text-[#1A4331]">{isBn ? bird.nameBn : bird.nameEn}</span>
        </nav>

        <section className="rounded-3xl bg-white border border-[#DFE7DE] px-5 py-7 sm:px-8 sm:py-9 mb-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-wide text-[#668070] mb-2">{isBn ? "কোয়েল পালন নির্দেশিকা" : "QUAIL FARMING GUIDE"}</p>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A4331]">{isBn ? bird.nameBn : bird.nameEn}</h1>
            <p className="mt-1 text-sm italic text-[#668070]">{bird.scientificName}</p>
            <p className="mt-4 text-base sm:text-lg font-semibold text-[#355541]">{isBn ? bird.taglineBn : bird.taglineEn}</p>
            <p className="mt-2 text-sm text-[#526B5D] leading-relaxed line-clamp-3">{isBn ? bird.descriptionBn : bird.descriptionEn}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link href={`/birds/${bird.species}/${bird.varietySlug}/${bird.firstStageSlug}`} className="px-5 py-3 rounded-xl bg-[#1A4331] text-white font-bold text-sm hover:bg-[#143628] transition-colors inline-flex items-center gap-2">
                {isBn ? "প্রথম দিনের গাইড" : "Start Day 1 Guide"}<ArrowRight size={17} />
              </Link>
              <Link href="/vaccination" className="px-4 py-3 rounded-xl bg-[#F4F7F2] border border-[#DCE6DA] text-[#1A4331] font-semibold text-sm hover:bg-[#EDF3EB] transition-colors inline-flex items-center gap-2">
                <HeartPulse size={17} />{isBn ? "টিকার সময়সূচি" : "Vaccine Schedule"}
              </Link>
            </div>
          </div>
        </section>

        <section aria-labelledby="quail-stats" className="mb-9">
          <div className="flex items-center gap-2 mb-3"><span className="text-[#1A4331]"><Calendar size={19} /></span><h2 id="quail-stats" className="text-lg font-bold text-[#1A4331]">{isBn ? "দ্রুত তথ্য" : "Quick facts"}</h2></div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {bird.stats.slice(0, 4).map((stat) => <div key={stat.labelEn} className="p-4 rounded-2xl bg-white border border-[#E2E8E0]"><p className="text-xs text-[#668070] font-medium">{isBn ? stat.labelBn : stat.labelEn}</p><p className="mt-1 text-base sm:text-lg font-bold text-[#1A4331]">{isBn ? stat.valueBn : stat.valueEn}</p></div>)}
          </div>
        </section>

        <section aria-labelledby="stage-list" className="mb-10">
          <div className="mb-4">
            <h2 id="stage-list" className="text-xl sm:text-2xl font-bold tracking-tight text-[#1A4331]">{isBn ? "বয়স অনুযায়ী পরিচর্যা" : "Care by age"}</h2>
            <p className="mt-1 text-sm text-[#668070]">{isBn ? "আপনার কোয়েলের বর্তমান বয়সের ধাপটি বেছে নিন।" : "Choose the stage that matches your flock’s age."}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {stages.map((stage) => (
              <Link key={stage.slug} href={`/birds/${bird.species}/${bird.varietySlug}/${stage.slug}`} className="group p-4 sm:p-5 rounded-2xl bg-white border border-[#DFE7DE] hover:border-[#76977E] hover:shadow-xs transition-all">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-[#668070]">{isBn ? stage.ageRangeBn : stage.ageRangeEn}</p>
                    <h3 className="mt-1 text-base font-bold leading-snug text-[#1A4331]">{isBn ? stage.titleBn : stage.titleEn}</h3>
                  </div>
                  <ArrowRight size={18} className="mt-1 shrink-0 text-[#668070] group-hover:text-[#1A4331] group-hover:translate-x-0.5 transition-all" />
                </div>
                <div className="mt-4 pt-3 border-t border-[#EDF2EB] grid grid-cols-2 gap-3 text-xs">
                  <p className="min-w-0"><span className="block text-[#668070]">{isBn ? "তাপমাত্রা" : "Temperature"}</span><span className="block mt-0.5 font-semibold text-[#355541]">{isBn ? stage.temperatureBn : stage.temperatureEn}</span></p>
                  <p className="min-w-0"><span className="block text-[#668070]">{isBn ? "খাবার" : "Feed"}</span><span className="block mt-0.5 font-semibold text-[#355541] line-clamp-1">{isBn ? stage.feedTypeBn : stage.feedTypeEn}</span></p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <details className="group rounded-2xl border border-[#DFE7DE] bg-white mb-8">
          <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between gap-3 font-bold text-[#1A4331] [&::-webkit-details-marker]:hidden">
            <span>{isBn ? `${bird.nameBn} পালন সম্পর্কে আরও তথ্য` : `More about ${bird.nameEn} care`}</span>
            <span className="text-xs font-semibold text-[#668070] group-open:hidden">{isBn ? "দেখুন +" : "Show +"}</span>
            <span className="text-xs font-semibold text-[#668070] hidden group-open:inline">{isBn ? "বন্ধ করুন −" : "Close −"}</span>
          </summary>
          <div className="px-5 pb-5 border-t border-[#EDF2EB]">
            {bird.stats.length > 4 && <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-b border-[#EDF2EB]">{bird.stats.slice(4).map((stat) => <div key={stat.labelEn} className="p-3 rounded-xl bg-[#FAF8F3]"><p className="text-xs text-[#668070]">{isBn ? stat.labelBn : stat.labelEn}</p><p className="mt-1 text-sm font-bold text-[#1A4331]">{isBn ? stat.valueBn : stat.valueEn}</p></div>)}</div>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5">
              <section><h3 className="font-bold text-[#1A4331] mb-1">{isBn ? "বাসস্থান" : "Housing"}</h3><p className="text-sm leading-relaxed text-[#526B5D]">{isBn ? bird.housingOverviewBn : bird.housingOverviewEn}</p></section>
              <section><h3 className="font-bold text-[#1A4331] mb-1">{isBn ? "খাবার ও পুষ্টি" : "Feed & nutrition"}</h3><p className="text-sm leading-relaxed text-[#526B5D]">{isBn ? bird.feedingOverviewBn : bird.feedingOverviewEn}</p></section>
            </div>
            <div className="pt-4 border-t border-[#EDF2EB]">
              <h3 className="font-bold text-[#1A4331] mb-3">{isBn ? (bird.species === "quail" ? "কোয়েলের জাত" : "মুরগির ধরন") : (bird.species === "quail" ? "Quail varieties" : "Chicken varieties")}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {bird.varieties.map((item) => <div key={item.nameEn} className="p-4 rounded-xl bg-[#FAF8F3]"><p className="font-semibold text-sm text-[#1A4331]">{isBn ? item.nameBn : item.nameEn}</p><p className="mt-1 text-xs text-[#668070]">{isBn ? `ওজন: ${item.weightBn}` : `Weight: ${item.weightEn}`}</p><p className="mt-2 text-xs leading-relaxed text-[#526B5D]">{isBn ? item.descBn : item.descEn}</p></div>)}
              </div>
            </div>
            {bird.species === "quail" && <div className="pt-4 mt-4 border-t border-[#EDF2EB]">
              <div className="flex items-center justify-between gap-3 mb-3"><h3 className="font-bold text-[#1A4331]">{isBn ? "আরও পড়ুন" : "Related reading"}</h3><Link href="/blog" className="text-xs font-bold text-[#1A4331] hover:underline">{isBn ? "সব লেখা" : "All articles"}</Link></div>
              <ul className="space-y-2">{quailRelatedArticles.map((article) => <li key={article.href}><Link href={article.href} className="text-sm text-[#355541] hover:text-[#1A4331] hover:underline">{isBn ? article.titleBn : article.titleEn}</Link></li>)}</ul>
            </div>}
            {bird.species === "chicken" && relatedArticles.length > 0 && <div className="pt-4 mt-4 border-t border-[#EDF2EB]">
              <div className="flex items-center justify-between gap-3 mb-3"><h3 className="font-bold text-[#1A4331]">{isBn ? "সম্পর্কিত ব্লগ" : "Related articles"}</h3><Link href="/blog" className="text-xs font-bold text-[#1A4331] hover:underline">{isBn ? "সব লেখা" : "All articles"}</Link></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{relatedArticles.map((article) => <Link key={article.slug} href={`/blog/${article.slug}`} className="rounded-xl bg-[#FAF8F3] border border-[#E4ECE2] p-4 hover:border-[#9BB5A1] transition-colors"><span className="text-[11px] font-semibold text-[#668070]">{isBn ? article.categoryNameBn : article.categoryNameEn} · {isBn ? article.readTimeBn : article.readTimeEn}</span><span className="mt-1 block font-bold text-sm text-[#1A4331]">{isBn ? article.titleBn : article.titleEn}</span><span className="mt-1 block text-xs text-[#526B5D] leading-relaxed line-clamp-2">{isBn ? article.excerptBn : article.excerptEn}</span></Link>)}</div>
            </div>}
          </div>
        </details>

        <p className="text-xs leading-relaxed text-[#668070]">{isBn ? "অসুস্থতা বা ওষুধ ব্যবহারের ক্ষেত্রে স্থানীয় প্রাণিসম্পদ কর্মকর্তা বা পশুচিকিৎসকের পরামর্শ নিন।" : "For illness or medication, consult your local livestock officer or veterinarian."}</p>
      </div>
    </div>
  );
}



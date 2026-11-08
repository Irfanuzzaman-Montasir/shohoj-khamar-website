"use client";

import React from "react";
import Link from "next/link";
import { BlogArticle } from "@/data/blogData";
import { useLanguage } from "@/context/LanguageContext";
import BlogCard from "@/components/blog/BlogCard";
import AdPlaceholder from "@/components/common/AdPlaceholder";
import {
  Calendar,
  Clock,
  User,
  ChevronRight,
  ArrowRight,
  Tag,
  ShieldCheck,
  Compass,
} from "lucide-react";

interface ArticleDetailViewProps {
  article: BlogArticle;
  relatedArticles: BlogArticle[];
}

export default function ArticleDetailView({
  article,
  relatedArticles,
}: ArticleDetailViewProps) {
  const { language } = useLanguage();
  const isBn = language === "bn";

  const content = isBn ? article.contentBn : article.contentEn;

  return (
    <article className="py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb Navigation */}
        <nav className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#5C7264] mb-6">
          <Link href="/" className="hover:text-[#1A4331] transition-colors">
            {isBn ? "হোম" : "Home"}
          </Link>
          <ChevronRight size={14} />
          <Link href="/blog" className="hover:text-[#1A4331] transition-colors">
            {isBn ? "ব্লগ" : "Blog"}
          </Link>
          <ChevronRight size={14} />
          <span className="text-[#1A4331] font-semibold truncate max-w-xs">
            {isBn ? article.categoryNameBn : article.categoryNameEn}
          </span>
        </nav>

        {/* Header Container */}
        <div className="bg-white rounded-3xl border border-[#DFE7DE] p-6 sm:p-10 shadow-xs mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-md bg-[#DFEDE1] text-[#1A4331] text-xs font-bold">
              {isBn ? article.categoryNameBn : article.categoryNameEn}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-[#5D7365]">
              <Calendar size={13} />
              <span>{article.publishedDate}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#5D7365]">
              <Clock size={13} />
              <span>{isBn ? article.readTimeBn : article.readTimeEn}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#5D7365]">
              <User size={13} />
              <span>{isBn ? article.authorBn : article.authorEn}</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1A4331] tracking-tight leading-snug">
            {isBn ? article.titleBn : article.titleEn}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#3E5446] leading-relaxed font-medium pt-4 border-t border-[#EDF2EB]">
            {isBn ? article.excerptBn : article.excerptEn}
          </p>

          {/* Connected Bird Guide Widget */}
          {article.relatedBirdVariety && (
            <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-[#F4F9F4] border border-[#CDE3D1] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#1A4331] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Compass size={20} />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-[#577263] block">
                    {isBn ? "সম্পর্কিত পালন নির্দেশিকা" : "Connected Farming Guide"}
                  </span>
                  <p className="text-sm font-bold text-[#1A4331] mt-0.5">
                    {isBn ? article.relatedBirdVariety.nameBn : article.relatedBirdVariety.nameEn} — {isBn ? "ধাপে ধাপে বয়স অনুযায়ী গাইড" : "Step-by-step age guide"}
                  </p>
                </div>
              </div>

              <Link
                href={article.relatedBirdVariety.guideLink}
                className="shrink-0 px-4 py-2.5 rounded-xl bg-[#1A4331] text-white text-xs sm:text-sm font-bold hover:bg-[#143628] transition-all flex items-center gap-1.5 shadow-2xs"
              >
                <span>{isBn ? "গাইড দেখুন" : "View Guide"}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          )}
        </div>

        {/* Main Article Content Body */}
        <div className="bg-white rounded-3xl border border-[#DFE7DE] p-6 sm:p-10 shadow-xs mb-8">
          <div className="prose prose-emerald max-w-none space-y-5 text-[#2E4537] text-base leading-relaxed">
            {content.map((paragraph, idx) => {
              // Heading level 2
              if (paragraph.startsWith("## ")) {
                return (
                  <h2
                    key={idx}
                    className="text-xl sm:text-2xl font-bold text-[#1A4331] pt-4 pb-1 border-b border-[#E8EDE7] tracking-tight"
                  >
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }

              // Bullet item
              if (paragraph.startsWith("- ")) {
                return (
                  <div key={idx} className="flex items-start gap-2.5 pl-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1A4331] mt-2.5 shrink-0" />
                    <p className="text-[#364D3F] leading-relaxed">
                      {paragraph.replace("- ", "")}
                    </p>
                  </div>
                );
              }

              return (
                <p key={idx} className="text-[#364D3F] leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* In-Article Advertisement Slot */}
          <AdPlaceholder slotName="ইন-আর্টিকেল ব্যানার বিজ্ঞাপন" format="horizontal" />

          {/* Tags */}
          <div className="mt-8 pt-6 border-t border-[#EDF2EB] flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-[#637D6F] flex items-center gap-1 mr-1">
              <Tag size={13} />
              {isBn ? "ট্যাগসমূহ:" : "Tags:"}
            </span>
            {article.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1 rounded-lg bg-[#FAF8F3] border border-[#CCD8CC] text-[#344F3F] font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Veterinary Disclaimer Alert */}
          <div className="mt-8 p-4 rounded-xl bg-[#FAF8F3] border border-[#D5E1D5] flex items-start gap-3 text-xs text-[#4F685A]">
            <ShieldCheck size={18} className="text-[#1A4331] shrink-0 mt-0.5" />
            <p>
              {isBn
                ? "দাবিত্যাগ: এই আর্টিকেলের তথ্যসমূহ অভিজ্ঞ খামারি ও পোল্ট্রি গাইডলাইন অনুযায়ী সাধারণ নির্দেশনার উদ্দেশ্যে রচিত। জরুরি রোগব্যাধি বা অ্যান্টিবায়োটিক প্রয়োগের পূর্বে অবশ্যই স্থানীয় প্রাণিসম্পদ কর্মকর্তা বা রেজিস্টার্ড ভেটেরিনারি চিকিৎসকের পরামর্শ নিন।"
                : "Disclaimer: This content is for general poultry educational purposes. Always consult a licensed veterinarian or your local livestock authority before administering medications."}
            </p>
          </div>
        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1A4331] mb-6 tracking-tight">
              {isBn ? "সম্পর্কিত অন্যান্য আর্টিকেল" : "Related Articles"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((art) => (
                <BlogCard key={art.id} article={art} />
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

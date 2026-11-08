"use client";

import React from "react";
import Link from "next/link";
import { BlogArticle } from "@/data/blogData";
import { useLanguage } from "@/context/LanguageContext";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

interface BlogCardProps {
  article: BlogArticle;
  featured?: boolean;
}

export default function BlogCard({ article, featured = false }: BlogCardProps) {
  const { language } = useLanguage();
  const isBn = language === "bn";

  if (featured) {
    return (
      <div className="rounded-3xl bg-white border-2 border-[#1A4331] p-6 sm:p-10 shadow-xs flex flex-col justify-between group hover:shadow-md transition-all">
        <div>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-md bg-[#1A4331] text-white text-xs font-bold tracking-wide">
              {isBn ? "বিশেষ ফিচার্ড আর্টিকেল" : "Featured Article"}
            </span>
            <span className="px-3 py-1 rounded-md bg-[#E8EFE8] text-[#1A4331] text-xs font-semibold">
              {isBn ? article.categoryNameBn : article.categoryNameEn}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-[#5D7365]">
              <Clock size={13} />
              <span>{isBn ? article.readTimeBn : article.readTimeEn}</span>
            </div>
          </div>

          <Link href={`/blog/${article.slug}`}>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A4331] group-hover:text-[#112E22] transition-colors leading-snug">
              {isBn ? article.titleBn : article.titleEn}
            </h2>
          </Link>

          <p className="mt-3 text-sm sm:text-base text-[#465B4E] leading-relaxed line-clamp-3">
            {isBn ? article.excerptBn : article.excerptEn}
          </p>

          <div className="flex flex-wrap items-center gap-2 mt-5">
            {article.tags.map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-md bg-[#FAF8F3] border border-[#D5E1D5] text-[#3E5748]"
              >
                <Tag size={10} />
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#EDF2EB] flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-[#6A8273]">
            <Calendar size={14} />
            <span>{article.publishedDate}</span>
          </div>

          <Link
            href={`/blog/${article.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1A4331] group-hover:translate-x-1 transition-transform"
          >
            <span>{isBn ? "সম্পূর্ণ পড়ুন" : "Read Full Article"}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white border border-[#DFE7DE] hover:border-[#1A4331] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded-md bg-[#E8EFE8] text-[#1A4331] text-xs font-semibold">
            {isBn ? article.categoryNameBn : article.categoryNameEn}
          </span>
          <div className="flex items-center gap-1 text-[11px] text-[#698172]">
            <Clock size={12} />
            <span>{isBn ? article.readTimeBn : article.readTimeEn}</span>
          </div>
        </div>

        <Link href={`/blog/${article.slug}`}>
          <h3 className="text-lg font-bold text-[#1A4331] group-hover:text-[#0F291E] transition-colors leading-snug">
            {isBn ? article.titleBn : article.titleEn}
          </h3>
        </Link>

        <p className="mt-2 text-xs sm:text-sm text-[#4E6456] leading-relaxed line-clamp-3">
          {isBn ? article.excerptBn : article.excerptEn}
        </p>

        <div className="flex flex-wrap items-center gap-1.5 mt-4">
          {article.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] px-2 py-0.5 rounded bg-[#FAF8F3] border border-[#CCD8CC] text-[#3D5547]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 pt-3 border-t border-[#EDF2EB] flex items-center justify-between">
        <span className="text-[11px] text-[#718A7A]">{article.publishedDate}</span>
        <Link
          href={`/blog/${article.slug}`}
          className="inline-flex items-center gap-1 text-xs font-bold text-[#1A4331] group-hover:translate-x-1 transition-transform"
        >
          <span>{isBn ? "পড়ুন" : "Read"}</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}

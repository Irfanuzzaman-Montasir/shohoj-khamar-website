"use client";

import React, { useState, useMemo } from "react";
import { BlogArticle, BlogCategory } from "@/data/blogData";
import { useLanguage } from "@/context/LanguageContext";
import BlogCard from "@/components/blog/BlogCard";
import CategoryFilter from "@/components/blog/CategoryFilter";
import AdPlaceholder from "@/components/common/AdPlaceholder";
import { BookOpen } from "lucide-react";

interface BlogListViewProps {
  initialArticles: BlogArticle[];
  categories: BlogCategory[];
}

export default function BlogListView({
  initialArticles,
  categories,
}: BlogListViewProps) {
  const { language } = useLanguage();
  const isBn = language === "bn";

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredArticles = useMemo(() => {
    return initialArticles.filter((article) => {
      const matchCat =
        activeCategory === "all" || article.categorySlug === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchSearch =
        !q ||
        article.titleBn.toLowerCase().includes(q) ||
        article.titleEn.toLowerCase().includes(q) ||
        article.tags.some((t) => t.toLowerCase().includes(q)) ||
        article.excerptBn.toLowerCase().includes(q);

      return matchCat && matchSearch;
    });
  }, [initialArticles, activeCategory, searchQuery]);

  const featured = filteredArticles[0];
  const rest = filteredArticles.slice(1);

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Page Header */}
        <div className="mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#DFEDE1] text-[#1A4331] text-xs font-semibold mb-3">
            <BookOpen size={14} />
            <span>{isBn ? "পোল্ট্রি জ্ঞান ও খামারি অভিজ্ঞতা" : "Poultry Knowledge & Farm Insights"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1A4331] tracking-tight">
            {isBn ? "সহজ খামার ব্লগ" : "Shohoj Khamar Blog"}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-[#465E50] max-w-2xl leading-relaxed">
            {isBn
              ? "কোয়েল ও মুরগি পালন, লাভজনক খামার ব্যবস্থাপনা, কম খরচে খাবার তৈরি ও রোগ প্রতিরোধে নিয়মিত শিক্ষামূলক নির্দেশিকা।"
              : "Practical poultry guides on quail and chicken farming, economic cost breakdowns, feed formulation, and biosecurity."}
          </p>
        </div>

        {/* Category Filter & Search Bar */}
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Articles List / Grid */}
        {filteredArticles.length === 0 ? (
          <div className="py-16 text-center rounded-2xl bg-white border border-[#DFE7DE] p-8">
            <p className="text-base font-bold text-[#1A4331]">
              {isBn ? "কোনো আর্টিকেল পাওয়া যায়নি" : "No articles found"}
            </p>
            <p className="text-xs sm:text-sm text-[#5C7466] mt-1">
              {isBn
                ? "অনুগ্রহ করে অন্য কোনো কি-ওয়ার্ড দিয়ে খুঁজুন বা ক্যাটাগরি ফিল্টার পরিবর্তন করুন।"
                : "Please try another keyword or select a different category."}
            </p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-[#1A4331] text-white text-xs font-semibold hover:bg-[#143628]"
            >
              {isBn ? "সব আর্টিকেল দেখুন" : "View All Articles"}
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Featured Hero Article */}
            {featured && (
              <div>
                <BlogCard article={featured} featured={true} />
              </div>
            )}

            {/* In-feed Ad Banner */}
            <AdPlaceholder slotName="ব্লগ লিস্টিং ইন-ফিড অ্যাড" format="horizontal" />

            {/* Remaining Grid */}
            {rest.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-[#1A4331] mb-5 tracking-tight">
                  {isBn ? "আরও গুরুত্বপূর্ণ আর্টিকেলসমূহ" : "More Related Articles"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map((art) => (
                    <BlogCard key={art.id} article={art} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

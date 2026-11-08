"use client";

import React from "react";
import { BlogCategory } from "@/data/blogData";
import { useLanguage } from "@/context/LanguageContext";
import { Search } from "lucide-react";

interface CategoryFilterProps {
  categories: BlogCategory[];
  activeCategory: string;
  onSelectCategory: (slug: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}: CategoryFilterProps) {
  const { language } = useLanguage();
  const isBn = language === "bn";

  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        {categories.map((cat) => {
          const isActive = cat.slug === activeCategory;
          return (
            <button
              key={cat.slug}
              onClick={() => onSelectCategory(cat.slug)}
              className={`shrink-0 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#1A4331] text-white shadow-xs"
                  : "bg-white text-[#4A5F52] border border-[#D7E2D6] hover:bg-[#FAF8F3] hover:text-[#1A4331]"
              }`}
            >
              {isBn ? cat.nameBn : cat.nameEn}
            </button>
          );
        })}
      </div>

      {/* Search Input Box */}
      <div className="relative shrink-0 w-full md:w-64">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={isBn ? "আর্টিকেল খুঁজুন..." : "Search articles..."}
          className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-white border border-[#D5E1D5] focus:outline-hidden focus:border-[#1A4331] text-[#1A4331] placeholder-[#799081]"
        />
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[#799081]"
        />
      </div>
    </div>
  );
}

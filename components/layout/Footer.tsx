"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-[#153928] text-white pt-10 pb-12 mt-12 border-t border-[#1C4B35]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Left Side: Brand & Veterinary Disclaimer */}
        <div className="max-w-xl">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
            {t("brandName")}
          </h2>
          <p className="text-xs sm:text-sm text-[#A9C7B6] leading-relaxed">
            {t("footerDisclaimer")}
          </p>
        </div>

        {/* Right Side: Simple Farming Guidance Tagline */}
        <div className="md:text-right">
          <p className="text-sm font-medium text-[#CDE0D4] tracking-wide">
            Simple Farming Guidance — From Day One to Production.
          </p>
          <p className="text-xs text-[#87A895] mt-1.5">
            © 2026 Shohoj Khamar (সহজ খামার). সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  );
}

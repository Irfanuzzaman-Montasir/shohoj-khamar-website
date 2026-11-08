"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import BirdIllustration from "@/components/common/BirdIllustration";

export default function HeroSection({ imageUrl = "" }: { imageUrl?: string }) {
  const { language, t } = useLanguage();

  return (
    <section className="pt-8 pb-14 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, description, and action buttons */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Pill Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-md bg-[#E4ECE3] text-[#1A4331] text-xs sm:text-sm font-semibold tracking-wide mb-5">
              {t("heroBadge")}
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#1A4331] leading-[1.2] tracking-tight">
              {language === "bn" ? (
                <>
                  পাখি পালনের প্রতিদিনের
                  <br />
                  সহজ গাইড
                </>
              ) : (
                <>
                  Daily Simple Guide for
                  <br />
                  Poultry Farming
                </>
              )}
            </h1>

            {/* Description */}
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#405448] leading-relaxed max-w-xl">
              {t("heroDescription")}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <Link
                href="/birds/quail/japanese"
                className="w-full sm:w-auto text-center px-6 py-3.5 rounded-lg bg-[#1A4331] text-white font-semibold text-sm sm:text-base hover:bg-[#143628] active:scale-[0.99] transition-all shadow-xs"
              >
                {t("btnStartQuail")}
              </Link>
              <Link
                href="/vaccination"
                className="w-full sm:w-auto text-center px-6 py-3.5 rounded-lg bg-transparent border border-[#BAC7BB] text-[#1A4331] font-semibold text-sm sm:text-base hover:bg-white/80 transition-all shadow-xs"
              >
                {t("btnVaccineSchedule")}
              </Link>
            </div>
          </div>

          {/* Right Column: Illustrated Farm Preview Placeholder */}
          <div className="lg:col-span-5 w-full">
            <div
              className="relative w-full h-[280px] sm:h-[340px] rounded-3xl bg-[#E5EDE5] border border-[#D5E1D5] flex flex-col items-center justify-center p-8 transition-transform hover:shadow-xs overflow-hidden"
              style={imageUrl ? { backgroundImage: `linear-gradient(0deg, rgba(15,40,29,.62), rgba(15,40,29,0) 58%), url("${imageUrl}")`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
              role={imageUrl ? "img" : undefined}
              aria-label={imageUrl ? (language === "bn" ? "সহজ খামার হোমপেজের প্রধান ছবি" : "Shohoj Khamar homepage hero image") : undefined}
            >
              {!imageUrl && <div className="transform transition-transform hover:scale-105 duration-300"><BirdIllustration variant="active" width={112} height={94} /></div>}
              <p className={`mt-6 text-xs sm:text-sm font-medium text-center tracking-wide ${imageUrl ? "absolute bottom-7 text-white drop-shadow" : "text-[#446050]"}`}>
                {t("heroPlaceholderText")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

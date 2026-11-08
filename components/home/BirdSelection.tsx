"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import BirdIllustration from "@/components/common/BirdIllustration";

function BirdCardIllustration({ imageUrl, variant, alt }: { imageUrl?: string; variant: "active" | "muted"; alt: string }) {
  return imageUrl ? (
    <Image src={imageUrl} alt={alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
  ) : (
    <div className="flex h-full w-full items-center justify-center p-4">
      <BirdIllustration variant={variant} width={78} height={65} />
    </div>
  );
}

export default function BirdSelection({ images = {} }: { images?: Record<string, string> }) {
  const { language, t } = useLanguage();

  return (
    <section id="birds-section" className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A4331] tracking-tight">
            {t("birdSelectionTitle")}
          </h2>
          <p className="mt-1.5 text-sm sm:text-base text-[#4A5D52]">
            {t("birdSelectionSubtitle")}
          </p>
        </div>

        {/* 6 Bird Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Japanese Quail (Active Guide) */}
          <div className="rounded-2xl overflow-hidden bg-white border-2 border-[#1A4331] shadow-xs flex flex-col justify-between transition-all hover:shadow-md group">
            <div className="relative h-36 w-full overflow-hidden bg-[#E6ECE5]">
              <div className="h-full w-full transform transition-transform group-hover:scale-105 duration-300">
                <BirdCardIllustration imageUrl={images["bird_quail_japanese"]} variant="active" alt={language === "bn" ? "জাপানি কোয়েল" : "Japanese quail"} />
              </div>
            </div>
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="inline-block px-2.5 py-1 rounded-md bg-[#1A4331] text-white text-xs font-semibold mb-3">
                  {t("badgeReady")}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#1A4331]">
                  {t("quailTitle")}
                </h3>
                <div className="mt-1.5 text-xs text-[#4A5D52] leading-relaxed">
                  <p>{t("quailSubtitleBn")}</p>
                  {language === "bn" && (
                    <p className="text-[#6D8376] mt-0.5">
                      Japanese · European Super Giant Coturnix · Deshi
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5 pt-2">
                <Link
                  href="/birds/quail/japanese"
                  className="inline-flex items-center text-sm font-bold text-[#1A4331] hover:text-[#112F22] group-hover:translate-x-0.5 transition-transform"
                >
                  {t("btnViewGuide")}
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Sonali Chicken (Guide Ready) */}
          <Link href="/birds/chicken/sonali" className="rounded-2xl overflow-hidden bg-white border-2 border-[#1A4331] shadow-xs flex flex-col justify-between transition-all hover:shadow-md group">
            <div className="relative h-36 w-full overflow-hidden bg-[#E6ECE5]">
              <div className="h-full w-full transform transition-transform group-hover:scale-105 duration-300"><BirdCardIllustration imageUrl={images["bird_chicken_sonali"]} variant="active" alt={language === "bn" ? "সোনালি মুরগি" : "Sonali chicken"} /></div>
            </div>
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="inline-block px-2.5 py-1 rounded-md bg-[#1A4331] text-white text-xs font-semibold mb-3">
                  {t("badgeReady")}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#1A4331]">
                  {t("sonaliChicken")}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#5B7163]">Sonali Chicken</p>
                <p className="mt-4 text-sm font-bold text-[#1A4331]">{t("btnViewGuide")}</p>
              </div>
            </div>
          </Link>

          {/* Card 3: Broiler (Guide Ready) */}
          <Link href="/birds/chicken/broiler" className="rounded-2xl overflow-hidden bg-white border-2 border-[#1A4331] shadow-xs flex flex-col justify-between transition-all hover:shadow-md group">
            <div className="relative h-36 w-full overflow-hidden bg-[#E6ECE5]">
              <div className="h-full w-full transform transition-transform group-hover:scale-105 duration-300"><BirdCardIllustration imageUrl={images["bird_chicken_broiler"]} variant="active" alt={language === "bn" ? "ব্রয়লার মুরগি" : "Broiler chicken"} /></div>
            </div>
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="inline-block px-2.5 py-1 rounded-md bg-[#1A4331] text-white text-xs font-semibold mb-3">
                  {t("badgeReady")}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#1A4331]">
                  {t("broiler")}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#5B7163]">Broiler Chicken</p>
                <p className="mt-4 text-sm font-bold text-[#1A4331]">{t("btnViewGuide")}</p>
              </div>
            </div>
          </Link>

          {/* Card 4: Fayoumi (Guide Ready) */}
          <Link href="/birds/chicken/fayoumi" className="rounded-2xl overflow-hidden bg-white border-2 border-[#1A4331] shadow-xs flex flex-col justify-between transition-all hover:shadow-md group">
            <div className="relative h-36 w-full overflow-hidden bg-[#E6ECE5]">
              <div className="h-full w-full transform transition-transform group-hover:scale-105 duration-300"><BirdCardIllustration imageUrl={images["bird_chicken_fayoumi"]} variant="active" alt={language === "bn" ? "ফাওমি মুরগি" : "Fayoumi chicken"} /></div>
            </div>
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="inline-block px-2.5 py-1 rounded-md bg-[#1A4331] text-white text-xs font-semibold mb-3">
                  {t("badgeReady")}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#1A4331]">
                  {t("fayoumi")}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#5B7163]">Fayoumi Chicken</p>
                <p className="mt-4 text-sm font-bold text-[#1A4331]">{t("btnViewGuide")}</p>
              </div>
            </div>
          </Link>

          {/* Card 5: Tiger Chicken (Coming Soon) */}
          <div className="rounded-2xl overflow-hidden bg-white border border-[#E1E8E0] shadow-xs flex flex-col justify-between transition-all hover:border-[#CCD8CB]">
            <div className="relative h-36 w-full overflow-hidden bg-[#E6ECE5]">
              <BirdCardIllustration imageUrl={images["bird_chicken_tiger"]} variant="muted" alt={language === "bn" ? "টাইগার মুরগি" : "Tiger chicken"} />
            </div>
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="inline-block px-2.5 py-1 rounded-md bg-[#D97706] text-white text-xs font-semibold mb-3">
                  {t("badgeComingSoon")}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#1A4331]">
                  {t("tigerChicken")}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#5B7163]">Tiger Chicken</p>
              </div>
            </div>
          </div>

          {/* Card 6: Color Bird (Coming Soon) */}
          <div className="rounded-2xl overflow-hidden bg-white border border-[#E1E8E0] shadow-xs flex flex-col justify-between transition-all hover:border-[#CCD8CB]">
            <div className="relative h-36 w-full overflow-hidden bg-[#E6ECE5]">
              <BirdCardIllustration imageUrl={images["bird_chicken_color"]} variant="muted" alt={language === "bn" ? "কালার বার্ড" : "Color bird"} />
            </div>
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="inline-block px-2.5 py-1 rounded-md bg-[#D97706] text-white text-xs font-semibold mb-3">
                  {t("badgeComingSoon")}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#1A4331]">
                  {t("colorBird")}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#5B7163]">Color Bird</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

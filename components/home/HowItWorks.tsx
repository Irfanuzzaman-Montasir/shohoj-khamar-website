"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-white py-16 sm:py-20 border-y border-[#ECEFEA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1A4331] tracking-tight mb-10 sm:mb-12">
          {t("howItWorksTitle")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {/* Step 1 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#1A4331] text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-xs">
              {t("step1Num")}
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1A4331] mb-1.5">
                {t("step1Title")}
              </h3>
              <p className="text-sm sm:text-base text-[#45594D] leading-relaxed">
                {t("step1Desc")}
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#1A4331] text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-xs">
              {t("step2Num")}
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1A4331] mb-1.5">
                {t("step2Title")}
              </h3>
              <p className="text-sm sm:text-base text-[#45594D] leading-relaxed">
                {t("step2Desc")}
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#1A4331] text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-xs">
              {t("step3Num")}
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1A4331] mb-1.5">
                {t("step3Title")}
              </h3>
              <p className="text-sm sm:text-base text-[#45594D] leading-relaxed">
                {t("step3Desc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

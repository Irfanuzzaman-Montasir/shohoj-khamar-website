"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function VaccinationBanner() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-[#DFEDE1] border border-[#CADBCE] p-6 sm:p-9 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
          {/* Information & Disclaimer Text */}
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A4331] tracking-tight mb-2.5">
              {t("vaccineBannerTitle")}
            </h2>
            <p className="text-sm sm:text-base text-[#344F3F] leading-relaxed">
              {t("vaccineBannerDesc")}
            </p>
          </div>

          {/* Action Button */}
          <div className="shrink-0 w-full sm:w-auto">
            <Link
              href="/vaccination"
              className="inline-block w-full sm:w-auto text-center px-6 py-3.5 rounded-lg bg-[#1A4331] text-white font-semibold text-sm sm:text-base hover:bg-[#143628] active:scale-[0.99] transition-all shadow-xs"
            >
              {t("btnViewVaccineGuide")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { GuideStage } from "@/data/quailStagesData";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowLeft, CheckCircle2, ChevronRight, Syringe } from "lucide-react";

interface GuideSidebarProps {
  stages: GuideStage[];
  currentSlug: string;
  species: string;
  variety: string;
}

export default function GuideSidebar({
  stages,
  currentSlug,
  species,
  variety,
}: GuideSidebarProps) {
  const { language } = useLanguage();
  const isBn = language === "bn";

  return (
    <aside className="w-full lg:w-72 shrink-0">
      <div className="bg-white rounded-2xl border border-[#DFE7DE] p-4 sm:p-5 shadow-2xs sticky top-24">
        {/* Back Link to Bird Profile */}
        <Link
          href={`/birds/${species}/${variety}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#546E5F] hover:text-[#1A4331] transition-colors mb-4 pb-3 border-b border-[#EDF2EB] w-full"
        >
          <ArrowLeft size={14} />
          <span>{isBn ? `${species === "chicken" ? (variety === "broiler" ? "ব্রয়লার" : variety === "sonali" ? "সোনালি" : "ফাওমি") : "কোয়েল"} পরিচিতিতে ফিরুন` : `Back to ${species === "chicken" ? (variety === "broiler" ? "Broiler" : variety === "sonali" ? "Sonali" : "Fayoumi") : "Quail"} Overview`}</span>
        </Link>

        {/* Sidebar Title */}
        <div className="mb-3 px-1">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#698273]">
            {isBn ? "বয়সভিত্তিক দিন পর্যায়" : "Age-Range Stages"}
          </h3>
          <p className="text-[11px] text-[#869E8F] mt-0.5">
            {isBn ? "ধাপে ধাপে নিয়মিত যত্ন নির্দেশিকা" : "Step-by-step care timeline"}
          </p>
        </div>

        {/* Stages List */}
        <nav className="flex flex-col gap-1.5" aria-label="Day-range Guide Navigation">
          {stages.map((stage) => {
            const isActive = stage.slug === currentSlug;
            return (
              <Link
                key={stage.slug}
                href={`/birds/${species}/${variety}/${stage.slug}`}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? "bg-[#1A4331] text-white shadow-xs font-bold"
                    : "text-[#3B5244] hover:bg-[#EBF1EA] hover:text-[#1A4331]"
                }`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-[#EBF1EA] text-[#1A4331]"
                    }`}
                  >
                    {stage.stageNumber}
                  </span>
                  <span className="truncate">
                    {isBn ? stage.ageRangeBn : stage.ageRangeEn}
                  </span>
                </div>

                {isActive ? (
                  <CheckCircle2 size={16} className="text-[#A2DEB5] shrink-0" />
                ) : (
                  <ChevronRight size={14} className="text-[#A0B5A7] shrink-0" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Vaccination Schedule Shortcut */}
        <div className="mt-5 pt-4 border-t border-[#EDF2EB]">
          <Link
            href="/vaccination"
            className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAF8F3] border border-[#CCD8CC] text-[#1A4331] hover:bg-[#EFF4EE] transition-colors text-xs font-semibold"
          >
            <Syringe size={16} className="text-[#1A4331] shrink-0" />
            <span>{isBn ? "টিকার সময়সূচি নির্দেশিকা" : "Vaccination Schedule"}</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}

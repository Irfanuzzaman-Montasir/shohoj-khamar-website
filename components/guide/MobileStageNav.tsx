"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { GuideStage } from "@/data/quailStagesData";
import { useLanguage } from "@/context/LanguageContext";

interface MobileStageNavProps {
  stages: GuideStage[];
  currentSlug: string;
  species: string;
  variety: string;
}

export default function MobileStageNav({
  stages,
  currentSlug,
  species,
  variety,
}: MobileStageNavProps) {
  const { language } = useLanguage();
  const isBn = language === "bn";
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-scroll active item into view on mobile
    if (scrollRef.current) {
      const activeEl = scrollRef.current.querySelector('[data-active="true"]');
      if (activeEl) {
        activeEl.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [currentSlug]);

  return (
    <div className="lg:hidden mb-6 sticky top-20 z-30 bg-[#FAF8F3]/95 backdrop-blur-xs py-2 border-b border-[#E3ECE2]">
      <div className="flex items-center justify-between px-4 mb-2">
        <span className="text-xs font-bold text-[#1A4331]">
          {isBn ? "দিন ও বয়সভিত্তিক পর্যায় নির্বাচন:" : "Select Growth Stage:"}
        </span>
        <Link
          href={`/birds/${species}/${variety}`}
          className="text-xs text-[#526B5D] underline font-medium"
        >
          {isBn ? `${species === "chicken" ? (variety === "broiler" ? "ব্রয়লার" : variety === "sonali" ? "সোনালি" : "ফাওমি") : "কোয়েল"} পরিচিতি` : `${species === "chicken" ? (variety === "broiler" ? "Broiler" : variety === "sonali" ? "Sonali" : "Fayoumi") : "Quail"} Info`}
        </Link>
      </div>

      <div
        ref={scrollRef}
        className="flex items-center gap-2 overflow-x-auto no-scrollbar px-4 pb-1"
      >
        {stages.map((stage) => {
          const isActive = stage.slug === currentSlug;
          return (
            <Link
              key={stage.slug}
              href={`/birds/${species}/${variety}/${stage.slug}`}
              data-active={isActive ? "true" : "false"}
              className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? "bg-[#1A4331] text-white shadow-xs"
                  : "bg-white text-[#384F41] border border-[#D5E0D5]"
              }`}
            >
              {isBn ? stage.ageRangeBn : stage.ageRangeEn}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

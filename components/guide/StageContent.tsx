"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GuideStage } from "@/data/quailStagesData";
import { useLanguage } from "@/context/LanguageContext";
import AdPlaceholder from "@/components/common/AdPlaceholder";
import {
  Thermometer, Utensils, Droplets, CheckSquare, AlertTriangle, Syringe,
  ArrowLeft, ArrowRight, ShieldAlert, BookOpen, Pill, Clock, Lightbulb,
  Sparkles,
} from "lucide-react";

interface StageContentProps {
  stage: GuideStage;
  prevStage: GuideStage | null;
  nextStage: GuideStage | null;
  species: string;
  variety: string;
  totalStages: number;
}

export default function StageContent({ stage, prevStage, nextStage, species, variety, totalStages }: StageContentProps) {
  const { language } = useLanguage();
  const isBn = language === "bn";
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const checklist = isBn ? stage.checklistBn : stage.checklistEn;
  const toggleCheck = (index: number) => setCheckedItems((prev) => ({ ...prev, [index]: !prev[index] }));

  return (
    <article className="flex-1 w-full max-w-3xl">
      <header className="bg-white rounded-3xl border border-[#DFE7DE] p-6 sm:p-8 shadow-xs mb-6">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-md bg-[#1A4331] text-white text-xs font-bold tracking-wide">
            {isBn ? stage.ageRangeBn : stage.ageRangeEn}
          </span>
          <span className="text-xs font-semibold text-[#577263]">
            {isBn ? `পর্যায় ${stage.stageNumber} / ${totalStages}` : `Stage ${stage.stageNumber} of ${totalStages}`}
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1A4331] tracking-tight leading-snug">
          {isBn ? stage.titleBn : stage.titleEn}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-[#EDF2EB]">
          <section className="min-h-32 p-5 rounded-2xl bg-[#FAF8F3] border border-[#E3ECE2]">
            <div className="flex items-center gap-2 text-[#577263] mb-3"><Utensils size={18} /><h2 className="text-sm font-bold">{isBn ? "খাবার" : "Feed"}</h2></div>
            <p className="text-base sm:text-lg font-bold text-[#1A4331] leading-snug">{isBn ? stage.feedTypeBn : stage.feedTypeEn}</p>
          </section>
          <section className="min-h-32 p-5 rounded-2xl bg-[#FAF8F3] border border-[#E3ECE2]">
            <div className="flex items-center gap-2 text-[#577263] mb-3"><Thermometer size={18} /><h2 className="text-sm font-bold">{isBn ? "তাপমাত্রা" : "Temperature"}</h2></div>
            <p className="text-base sm:text-lg font-bold text-[#1A4331] leading-snug">{isBn ? stage.temperatureBn : stage.temperatureEn}</p>
          </section>
          <section className="min-h-32 p-5 rounded-2xl bg-[#FAF8F3] border border-[#E3ECE2]">
            <div className="flex items-center gap-2 text-[#577263] mb-3"><Pill size={18} /><h2 className="text-sm font-bold">{isBn ? "ওষুধ" : "Medicine"}</h2></div>
            {stage.medicines.length ? <ul className="space-y-3">{stage.medicines.map((med, idx) => { const antimicrobial = /antibiotic|enrofloxacin|doxy|cefa/i.test(`${med.nameEn} ${med.brandOrTypeEn}`); return <li key={idx} className="text-sm font-semibold text-[#1A4331] leading-snug">{isBn ? med.nameBn : med.nameEn}<span className="block mt-1 text-xs font-medium text-[#577263]">{isBn ? med.doseBn : med.doseEn}</span>{antimicrobial && <span className="block mt-1 text-[11px] font-medium text-[#9A4D12]">{isBn ? "DLS নির্দেশনা: নিশ্চিত রোগে প্রেসক্রিপশন অনুযায়ী দিন; withdrawal period মানুন।" : "DLS guidance: use for confirmed disease as prescribed; observe the withdrawal period."}</span>}</li>; })}</ul> : <p className="text-sm font-semibold text-[#1A4331]">{isBn ? "নিয়মিত ওষুধ উল্লেখ নেই" : "No routine medicine listed"}</p>}
          </section>
        </div>
      </header>

      <details className="group mb-8 rounded-2xl border border-[#DFE7DE] bg-white open:pb-5">
        <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between gap-4 text-[#1A4331] font-bold [&::-webkit-details-marker]:hidden">
          <span>{isBn ? "বিস্তারিত পরিচর্যা ও সতর্কতা" : "More care details & precautions"}</span>
          <span className="text-xs font-semibold text-[#577263] group-open:hidden">{isBn ? "দেখুন +" : "View +"}</span>
          <span className="text-xs font-semibold text-[#577263] hidden group-open:inline">{isBn ? "বন্ধ করুন −" : "Close −"}</span>
        </summary>
        <div className="px-5 sm:px-6 pt-3 border-t border-[#EDF2EB]">

          {stage.farmerTipsBn && <section className="bg-[#F6FAF6] rounded-2xl border border-[#CCE2CF] p-5 sm:p-6 mb-6"><h2 className="flex items-center gap-2 text-[#1A4331] mb-2 font-bold text-sm sm:text-base"><Lightbulb size={20} className="text-[#D97706]" />{isBn ? "খামারির অভিজ্ঞতা ও পরামর্শ" : "Farmer's Field Advice"}</h2><p className="text-sm text-[#274834] leading-relaxed italic">“{isBn ? stage.farmerTipsBn : stage.farmerTipsEn}”</p></section>}

          {stage.medicines.length > 0 && <section className="bg-white rounded-2xl border border-[#DFE7DE] p-5 sm:p-6 mb-6"><h2 className="flex items-center gap-2.5 mb-4 text-lg font-bold text-[#1A4331]"><Pill size={18} />{isBn ? "ওষুধ ও ভিটামিনের বিস্তারিত" : "Medicine & Supplement Details"}</h2><div className="space-y-3">{stage.medicines.map((med, idx) => <div key={idx} className={`p-4 rounded-xl border ${med.isAlternative ? "bg-[#FCFAF7] border-[#ECDDC9]" : "bg-[#FAF8F3] border-[#DEE8DD]"}`}><div className="flex flex-wrap items-center justify-between gap-2 mb-2"><div className="flex items-center gap-2"><h3 className="font-bold text-sm sm:text-base text-[#1A4331]">{isBn ? med.nameBn : med.nameEn}</h3>{med.isAlternative && <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FEF3C7] text-[#92400E] font-semibold flex items-center gap-1"><Sparkles size={10} />{isBn ? "বিকল্প / ঐচ্ছিক" : "Alternative / Optional"}</span>}</div><span className="text-xs text-[#4F685A] font-medium flex items-center gap-1"><Clock size={13} />{isBn ? med.timingBn : med.timingEn}</span></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 pt-3 border-t border-[#E8EDE6] text-xs"><p><strong className="block text-[#1A4331]">{isBn ? "মাত্রা:" : "Dosage:"}</strong><span className="text-[#2C4A38] font-semibold text-sm">{isBn ? med.doseBn : med.doseEn}</span></p><p><strong className="block text-[#1A4331]">{isBn ? "উদ্দেশ্য:" : "Purpose:"}</strong><span className="text-[#4A6454]">{isBn ? med.purposeBn : med.purposeEn}</span></p></div></div>)}</div></section>}

          <section className="bg-white rounded-2xl border border-[#DFE7DE] p-5 sm:p-6 mb-6"><h2 className="flex items-center gap-2.5 mb-3 text-lg font-bold text-[#1A4331]"><Utensils size={18} />{isBn ? "খাবার ও পুষ্টি" : "Feed & Nutrition"}</h2><p className="text-sm sm:text-base text-[#3C5243] leading-relaxed">{isBn ? stage.feedManagementBn : stage.feedManagementEn}</p></section>
          <section className="bg-white rounded-2xl border border-[#DFE7DE] p-5 sm:p-6 mb-6"><h2 className="flex items-center gap-2.5 mb-3 text-lg font-bold text-[#1A4331]"><Droplets size={18} />{isBn ? "পানি" : "Water"}</h2><p className="text-sm sm:text-base text-[#3C5243] leading-relaxed">{isBn ? stage.waterManagementBn : stage.waterManagementEn}</p></section>
          <section className="bg-white rounded-2xl border border-[#DFE7DE] p-5 sm:p-6 mb-6"><h2 className="flex items-center gap-2.5 mb-3 text-lg font-bold text-[#1A4331]"><Thermometer size={18} />{isBn ? "তাপমাত্রা ও পরিবেশ" : "Temperature & Environment"}</h2><p className="text-sm sm:text-base text-[#3C5243] leading-relaxed">{isBn ? stage.temperatureEnvironmentBn : stage.temperatureEnvironmentEn}</p><p className="mt-3 text-sm text-[#577263]"><strong>{isBn ? "আলোর সময়: " : "Light schedule: "}</strong>{isBn ? stage.lightHoursBn : stage.lightHoursEn}</p></section>

          <section className="bg-white rounded-2xl border border-[#DFE7DE] p-5 sm:p-6 mb-6"><h2 className="flex items-center gap-2.5 mb-4 text-lg font-bold text-[#1A4331]"><CheckSquare size={18} />{isBn ? "দৈনিক পরিচর্যার তালিকা" : "Daily Care Checklist"}</h2><div className="space-y-2">{checklist.map((item, idx) => { const done = !!checkedItems[idx]; return <button key={idx} type="button" onClick={() => toggleCheck(idx)} className={`w-full text-left p-3 rounded-xl border flex items-start gap-3 transition-colors ${done ? "bg-[#F0F7F2] border-[#C3DEC9] text-[#1E3E29]" : "bg-[#FAF8F3]/60 border-[#E4ECE2] text-[#3C5243]"}`}><span className={`w-5 h-5 rounded-md border flex items-center justify-center mt-0.5 shrink-0 ${done ? "bg-[#1A4331] border-[#1A4331] text-white" : "border-[#A0B8A7] bg-white"}`}>{done && <CheckSquare size={14} />}</span><span className={`text-xs sm:text-sm leading-relaxed ${done ? "line-through opacity-70" : ""}`}>{item}</span></button>; })}</div></section>

          <section className="bg-[#FFFBF5] rounded-2xl border border-[#F3DFC1] p-5 sm:p-6 mb-6"><h2 className="flex items-center gap-2.5 mb-2.5 text-[#B45309] text-base sm:text-lg font-bold"><AlertTriangle size={20} />{isBn ? "সতর্কতা ও লক্ষণ" : "Precautions & Warning Signs"}</h2><p className="text-sm text-[#78350F] leading-relaxed">{isBn ? stage.specialInstructionsBn : stage.specialInstructionsEn}</p></section>

          <section className="bg-[#DFEDE1] rounded-2xl border border-[#CADBCE] p-5 sm:p-6 mb-4"><div className="flex items-center justify-between gap-3 mb-2.5"><h2 className="flex items-center gap-2 text-[#1A4331] text-base sm:text-lg font-bold"><Syringe size={20} />{isBn ? "টিকা ও স্বাস্থ্য পরামর্শ" : "Vaccination & Health Advice"}</h2><span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-white text-[#2C4A38] font-medium"><ShieldAlert size={13} />{isBn ? stage.reviewStatusBn : stage.reviewStatusEn}</span></div><p className="text-xs sm:text-sm text-[#274433] leading-relaxed mb-4">{isBn ? stage.vaccineNotesBn : stage.vaccineNotesEn}</p><div className="pt-3 border-t border-[#CADBCE]/70 flex flex-wrap items-center justify-between gap-3"><span className="text-xs text-[#3E5C4A]">{isBn ? "অ্যান্টিবায়োটিকের অযথা ব্যবহার এড়িয়ে চলুন। রোগ বা ওষুধের বিষয়ে পশুচিকিৎসকের পরামর্শ নিন।" : "Avoid misuse of antibiotics. Consult a veterinarian about illness or medication."}</span><Link href="/vaccination" className="text-xs font-bold text-[#1A4331] underline hover:text-[#0F281D]">{isBn ? "টিকা গাইড দেখুন →" : "View Vaccine Guide →"}</Link></div></section>
        </div>
      </details>

      <AdPlaceholder slotName={isBn ? "গাইডের বিজ্ঞাপন" : "Guide content ad"} format="horizontal" />

      <nav className="pt-6 border-t border-[#DFE7DE] flex flex-col sm:flex-row items-center justify-between gap-4" aria-label={isBn ? "ধাপ পরিবর্তন" : "Stage navigation"}>
        {prevStage ? <Link href={`/birds/${species}/${variety}/${prevStage.slug}`} className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white border border-[#CCD8CC] text-[#1A4331] hover:bg-[#FAF8F3] transition-all flex items-center justify-center gap-2 text-xs sm:text-sm font-bold shadow-2xs"><ArrowLeft size={16} /><span>{isBn ? `আগের ধাপ: ${prevStage.ageRangeBn}` : `Previous: ${prevStage.ageRangeEn}`}</span></Link> : <div className="hidden sm:block" />}
        {nextStage ? <Link href={`/birds/${species}/${variety}/${nextStage.slug}`} className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#1A4331] text-white hover:bg-[#143628] transition-all flex items-center justify-center gap-2 text-xs sm:text-sm font-bold shadow-xs"><span>{isBn ? `পরের ধাপ: ${nextStage.ageRangeBn}` : `Next: ${nextStage.ageRangeEn}`}</span><ArrowRight size={16} /></Link> : <Link href={`/birds/${species}/${variety}`} className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#1A4331] text-white hover:bg-[#143628] transition-all flex items-center justify-center gap-2 text-xs sm:text-sm font-bold shadow-xs">{isBn ? `${species === "chicken" ? (variety === "broiler" ? "ব্রয়লার" : variety === "sonali" ? "সোনালি" : "ফাওমি") : "কোয়েল"} পরিচিতিতে ফিরুন` : "Back to Overview"}</Link>}
      </nav>
    </article>
  );
}


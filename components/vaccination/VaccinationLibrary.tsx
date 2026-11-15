"use client";

import React, { useState } from "react";
import {
  Syringe,
  Droplets,
  Eye,
  Feather,
  Calendar,
  CheckCircle2,
  Printer,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { chickenVaccinationGuides } from "@/data/vaccinationGuideData";
import Link from "next/link";

export default function VaccinationLibrary() {
  const { language } = useLanguage();
  const isBn = language === "bn";

  // Default to the first guide (Sonali)
  const [activeSlug, setActiveSlug] = useState<string>("sonali");
  const selectedGuide = chickenVaccinationGuides.find((g) => g.slug === activeSlug) || chickenVaccinationGuides[0];

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  // Helper to determine route method icon & styling
  const getMethodBadge = (methodText: string) => {
    const text = methodText.toLowerCase();
    if (text.includes("চোখ") || text.includes("eye")) {
      return {
        icon: <Eye className="w-3.5 h-3.5 text-blue-700" />,
        bg: "bg-blue-50 text-blue-800 border-blue-200",
        label: isBn ? "চোখের ফোঁটা" : "Eye Drop",
      };
    }
    if (text.includes("পানি") || text.includes("water")) {
      return {
        icon: <Droplets className="w-3.5 h-3.5 text-teal-700" />,
        bg: "bg-teal-50 text-teal-800 border-teal-200",
        label: isBn ? "পানিতে মিশিয়ে" : "Drinking Water",
      };
    }
    if (text.includes("ডানা") || text.includes("wing") || text.includes("পক্স")) {
      return {
        icon: <Feather className="w-3.5 h-3.5 text-purple-700" />,
        bg: "bg-purple-50 text-purple-800 border-purple-200",
        label: isBn ? "ডানার চামড়া ফুঁড়ে" : "Wing Web",
      };
    }
    return {
      icon: <Syringe className="w-3.5 h-3.5 text-amber-700" />,
      bg: "bg-amber-50 text-amber-900 border-amber-200",
      label: isBn ? "ইনজেকশন" : "Injection",
    };
  };

  return (
    <section aria-labelledby="vaccine-schedule-title" className="mt-6">
      {/* 1. Bird Switcher Segmented Tabs */}
      <div className="bg-white/80 backdrop-blur-md p-1.5 sm:p-2 rounded-2xl border border-[#E3ECE1] shadow-xs flex flex-wrap gap-1.5 sm:gap-2">
        {chickenVaccinationGuides.map((guide) => {
          const isActive = guide.slug === activeSlug;
          return (
            <button
              key={guide.slug}
              type="button"
              onClick={() => setActiveSlug(guide.slug)}
              className={`flex-1 min-w-[120px] sm:min-w-[140px] py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                isActive
                  ? "bg-[#1A4331] text-white shadow-md shadow-[#1A4331]/20 scale-[1.01]"
                  : "bg-transparent text-[#476050] hover:bg-[#F2F6F1] hover:text-[#1A4331]"
              }`}
            >
              <span>{isBn ? guide.nameBn : guide.nameEn}</span>
              <span
                className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                  isActive ? "bg-[#295A44] text-[#E4F2E7]" : "bg-[#E6EDE4] text-[#4F6859]"
                }`}
              >
                {guide.rows.length} {isBn ? "টি" : ""}
              </span>
            </button>
          );
        })}
      </div>

      {/* 2. Main Schedule Container */}
      <div className="mt-6 bg-white rounded-3xl border border-[#E1EAE0] shadow-sm overflow-hidden">
        {/* Header Bar */}
        <div className="p-5 sm:p-7 border-b border-[#E8EDE6] bg-gradient-to-b from-[#FAFBF8] to-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-[#EAF2E8] text-[#1A4331] flex items-center justify-center font-bold">
                <Syringe size={20} />
              </span>
              <div>
                <h2 id="vaccine-schedule-title" className="text-xl sm:text-2xl font-extrabold text-[#1A4331]">
                  {isBn ? selectedGuide.nameBn : selectedGuide.nameEn}
                </h2>
                <p className="text-xs sm:text-sm text-[#5D7365] mt-0.5">
                  {isBn ? selectedGuide.descriptionBn : selectedGuide.descriptionEn}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-[#D5E1D3] text-xs font-semibold text-[#30533F] hover:bg-[#F0F5EE] hover:text-[#1A4331] transition-colors cursor-pointer"
              title={isBn ? "শিডিউল প্রিন্ট করুন" : "Print Schedule"}
            >
              <Printer size={15} />
              <span>{isBn ? "প্রিন্ট করুন" : "Print Schedule"}</span>
            </button>
            <span className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-xl bg-[#EEF5EC] text-xs font-bold text-[#235338] border border-[#DEEADE]">
              {selectedGuide.rows.length} {isBn ? "টি টিকার ধাপ" : "Vaccination steps"}
            </span>
          </div>
        </div>

        {/* 3. MOBILE VIEW: Visual Timeline Cards (hidden on desktop) */}
        <div className="block md:hidden p-4 sm:p-5 space-y-3.5 bg-[#FBFDFB]">
          {selectedGuide.rows.map((row, idx) => {
            const badge = getMethodBadge(row.methodEn || row.methodBn);

            return (
              <div
                key={`mobile-step-${idx}`}
                className="relative bg-white rounded-2xl p-4 border border-[#E3EDE1] shadow-xs"
              >
                {/* Step Connector Line & Indicator */}
                <div className="flex items-start justify-between gap-3 pb-2.5 border-b border-[#F0F4EF]">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1A4331] text-white text-xs font-black flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#FAF4E5] border border-[#EEDFBF] text-[#785412] text-xs font-bold">
                      <Calendar size={13} className="text-[#A27318]" />
                      {isBn ? row.ageBn : row.ageEn}
                    </span>
                  </div>
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold border ${badge.bg}`}
                  >
                    {badge.icon}
                    <span>{badge.label}</span>
                  </span>
                </div>

                {/* Content Details */}
                <div className="pt-3 space-y-2">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#738B7C] block">
                      {isBn ? "ভ্যাকসিনের নাম" : "Vaccine Name"}
                    </span>
                    <h3 className="text-base font-extrabold text-[#1A4331] mt-0.5">
                      {isBn ? row.vaccineBn : row.vaccineEn}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-2 pt-1 text-xs">
                    <div className="bg-[#F8FAF7] p-2.5 rounded-xl border border-[#EDF3EC]">
                      <span className="text-[#647C6E] font-medium block">
                        {isBn ? "প্রতিরোধক রোগ:" : "Target Disease:"}
                      </span>
                      <span className="font-bold text-[#2A4B37] text-sm mt-0.5 block">
                        {isBn ? row.diseaseBn : row.diseaseEn}
                      </span>
                    </div>

                    <div className="bg-[#FAF8F3] p-2.5 rounded-xl border border-[#ECE6D8]">
                      <span className="text-[#786D58] font-medium block">
                        {isBn ? "প্রয়োগের সঠিক নিয়ম:" : "Administration Detail:"}
                      </span>
                      <span className="font-semibold text-[#4F4432] mt-0.5 block">
                        {isBn ? row.methodBn : row.methodEn}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4. DESKTOP VIEW: High-Contrast Modern Data Table (hidden on mobile) */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-[#F3F7F2] text-xs font-extrabold tracking-wider text-[#2B4C38] border-b border-[#DEE7DD]">
                <th scope="col" className="py-4 px-6 w-16 text-center">
                  #
                </th>
                <th scope="col" className="py-4 px-6 w-36">
                  {isBn ? "বয়স / সময়" : "Age / Timing"}
                </th>
                <th scope="col" className="py-4 px-6">
                  {isBn ? "টিকার নাম" : "Vaccine Name"}
                </th>
                <th scope="col" className="py-4 px-6">
                  {isBn ? "প্রতিরোধক রোগ" : "Target Disease"}
                </th>
                <th scope="col" className="py-4 px-6">
                  {isBn ? "প্রয়োগ পদ্ধতি ও নিয়ম" : "Administration & Route"}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EBF2EA] text-[#2F4738]">
              {selectedGuide.rows.map((row, idx) => {
                const badge = getMethodBadge(row.methodEn || row.methodBn);
                const isEven = idx % 2 === 1;

                return (
                  <tr
                    key={`desktop-row-${idx}`}
                    className={`transition-colors duration-150 ${
                      isEven ? "bg-[#FAFBF9]" : "bg-white"
                    } hover:bg-[#F2F7F0]`}
                  >
                    <td className="py-4 px-6 text-center font-bold text-xs text-[#6F887A]">
                      {idx + 1}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF4E5] border border-[#EEDFBF] text-[#785412] text-xs font-extrabold shadow-2xs">
                        <Calendar size={13} className="text-[#A27318]" />
                        {isBn ? row.ageBn : row.ageEn}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-extrabold text-base text-[#1A4331] block">
                        {isBn ? row.vaccineBn : row.vaccineEn}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-block font-semibold text-sm text-[#274834] bg-[#EDF4EC] px-2.5 py-1 rounded-md">
                        {isBn ? row.diseaseBn : row.diseaseEn}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex flex-col gap-1 items-start">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold border ${badge.bg}`}
                        >
                          {badge.icon}
                          <span>{badge.label}</span>
                        </span>
                        <span className="text-xs text-[#526D5D] font-medium mt-0.5">
                          {isBn ? row.methodBn : row.methodEn}
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* 5. Expert Advisory Card at bottom of schedule */}
        <div className="p-4 sm:p-6 bg-[#FAF6EC] border-t border-[#EAE1D0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <span className="p-2 rounded-xl bg-[#F0E6D0] text-[#7A5B18] shrink-0">
              <ShieldAlert size={20} />
            </span>
            <div className="text-xs sm:text-sm text-[#5B4922] leading-relaxed">
              <p className="font-bold text-[#453410]">
                {isBn ? "গুরুত্বপূর্ণ সতর্কতা ও হ্যাচারি তথ্য:" : "Important Field Notice:"}
              </p>
              <p className="mt-0.5">
                {isBn
                  ? "টিকা প্রয়োগের আগে হ্যাচারির প্রাপ্ত টিকার রেকর্ড পরীক্ষা করুন। অসুস্থ পাখিকে কখনো টিকা দেবেন না। নির্ভরযোগ্য কোম্পানির অরিজিনাল ভ্যাকসিন ব্যবহার করুন।"
                  : "Check the hatchery certificate before giving vaccines. Never vaccinate sick or stressed birds, and ensure vaccines remain properly chilled (2°C–8°C) until use."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Professional Best Practice Guide Cards (Water mixing, Timing, Cold Chain) */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white p-5 rounded-2xl border border-[#DFE8DD] shadow-xs hover:border-[#CADAC8] transition-colors">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center font-bold mb-3.5">
            <Droplets size={20} />
          </div>
          <h3 className="font-extrabold text-[#1A4331] text-base">
            {isBn ? "পানিতে টিকা দেওয়ার নিয়ম" : "Water Vaccination Rule"}
          </h3>
          <p className="text-xs sm:text-sm text-[#556F60] mt-2 leading-relaxed">
            {isBn
              ? "টিকা দেওয়ার ২ ঘণ্টা আগে পানির পাত্র সরিয়ে রাখুন যাতে তৃষ্ণার্ত হয়। ক্লোরিনমুক্ত পানিতে প্রতি লিটারে ২ গ্রাম স্কিমড মিল্ক পাউডার (দুধের গুঁড়ো) মিশিয়ে নিলে টিকার গুণাগুণ অটুট থাকে।"
              : "Withhold water for 1.5–2 hours prior to vaccination so birds drink promptly. Mix skim milk powder (2g/L) into chlorine-free water to neutralize sanitizers."}
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#DFE8DD] shadow-xs hover:border-[#CADAC8] transition-colors">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold mb-3.5">
            <Calendar size={20} />
          </div>
          <h3 className="font-extrabold text-[#1A4331] text-base">
            {isBn ? "টিকার আদর্শ সময়" : "Optimal Vaccination Timing"}
          </h3>
          <p className="text-xs sm:text-sm text-[#556F60] mt-2 leading-relaxed">
            {isBn
              ? "দিনের গরমের সময় কখনো টিকা দেবেন না। খুব সকালে অথবা সন্ধ্যার ঠান্ডা আবহাওয়ায় টিকা প্রয়োগ করুন যাতে পাখির ওপর তাপজনিত কোনো ধকল (heat stress) না পড়ে।"
              : "Never vaccinate during high heat. Perform vaccination during the cool morning or late afternoon to prevent temperature stress on the flock."}
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#DFE8DD] shadow-xs hover:border-[#CADAC8] transition-colors">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold mb-3.5">
            <CheckCircle2 size={20} />
          </div>
          <h3 className="font-extrabold text-[#1A4331] text-base">
            {isBn ? "কোল্ড চেইন (তাপমাত্রা নিয়ন্ত্রণ)" : "Cold Chain Integrity"}
          </h3>
          <p className="text-xs sm:text-sm text-[#556F60] mt-2 leading-relaxed">
            {isBn
              ? "লাইভ ভ্যাকসিন সব সময় ২°C থেকে ৮°C তাপমাত্রায় ফ্লাস্ক বা আইসবক্সে সংরক্ষণ করুন। প্রয়োগের জন্য খোলার পর ১ থেকে ২ ঘণ্টার মধ্যে সম্পূর্ণ দ্রবণ শেষ করুন।"
              : "Keep live vaccines stored strictly between 2°C and 8°C in insulated ice boxes. Once reconstituted, finish administration within 1 to 2 hours."}
          </p>
        </div>
      </div>

      {/* 7. Japanese Quail Vaccine & Disease Guide Note */}
      <div className="mt-6 bg-[#EDF3EC] p-5 sm:p-6 rounded-2xl border border-[#D5E3D2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#355D46] block">
            {isBn ? "কোয়েল পাখির খামারিদের জন্য" : "For Quail Farmers"}
          </span>
          <h4 className="text-lg font-extrabold text-[#1A4331] mt-0.5">
            {isBn ? "কোয়েল পাখির কি টিকা দিতে হয়?" : "Do Japanese Quails Need Vaccines?"}
          </h4>
          <p className="text-xs sm:text-sm text-[#4E6B5A] mt-1 max-w-2xl leading-relaxed">
            {isBn
              ? "কোয়েল পাখির রোগ প্রতিরোধ ক্ষমতা প্রাকৃতিকভাবে অত্যন্ত বেশি। বাণিজ্যিকভাবে এদের রুটিন টিকা দেওয়ার প্রয়োজন হয় না; কেবল পরিষ্কার বাসস্থান, বিশুদ্ধ পানি ও নিয়মিত লিটার শুকনা রাখাই প্রধান প্রতিরোধ।"
              : "Japanese quails have robust natural disease resistance. Commercial routine vaccination is generally not required; maintaining strict biosecurity and dry litter is sufficient."}
          </p>
        </div>
        <Link
          href="/birds/quail/japanese"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#1A4331] text-white text-xs sm:text-sm font-bold shadow-xs hover:bg-[#25553F] transition-colors shrink-0"
        >
          <span>{isBn ? "কোয়েল গাইড দেখুন" : "View Quail Guide"}</span>
          <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}

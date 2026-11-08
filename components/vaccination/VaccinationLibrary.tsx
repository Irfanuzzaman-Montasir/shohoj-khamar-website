"use client";

import { useState } from "react";
import { ArrowLeft, ChevronRight, Syringe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import BirdIllustration from "@/components/common/BirdIllustration";
import { chickenVaccinationGuides } from "@/data/vaccinationGuideData";

export default function VaccinationLibrary() {
  const { language } = useLanguage();
  const isBn = language === "bn";
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const selectedGuide = chickenVaccinationGuides.find((guide) => guide.slug === selectedSlug);

  return (
    <section aria-labelledby="chicken-vaccine-guides-title" className="mt-8">
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#597364]">
          {isBn ? "মুরগির টিকা" : "Chicken Vaccines"}
        </p>
        <h2 id="chicken-vaccine-guides-title" className="mt-1 text-2xl font-extrabold tracking-tight text-[#1A4331]">
          {isBn ? "মুরগির ধরন বেছে নিন" : "Choose a chicken type"}
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#52685A]">
          {isBn
            ? "কার্ডে চাপ দিলে আপনার স্প্রেডশিটের টিকার তালিকা টেবিল আকারে দেখাবে।"
            : "Select a card to view the vaccine list from your spreadsheet as a table."}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {chickenVaccinationGuides.map((guide) => {
          const isSelected = selectedSlug === guide.slug;
          return (
            <button
              key={guide.slug}
              type="button"
              onClick={() => setSelectedSlug(isSelected ? null : guide.slug)}
              aria-pressed={isSelected}
              className={`group flex flex-col justify-between overflow-hidden rounded-2xl bg-white text-left shadow-xs transition-all hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A4331] ${isSelected ? "border-2 border-[#1A4331]" : "border border-[#E1E8E0] hover:border-[#CCD8CB]"}`}
            >
              <span className="flex h-36 w-full items-center justify-center bg-[#E6ECE5] p-4">
                <span className="transform transition-transform duration-300 group-hover:scale-105">
                  <BirdIllustration variant={isSelected ? "active" : "muted"} width={78} height={65} />
                </span>
              </span>
              <span className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                <span>
                  <span className={`mb-3 inline-block rounded-md px-2.5 py-1 text-xs font-semibold text-white ${isSelected ? "bg-[#1A4331]" : "bg-[#D97706]"}`}>
                    {isBn ? `${guide.rows.length}টি টিকা` : `${guide.rows.length} vaccines`}
                  </span>
                  <span className="block text-lg font-bold text-[#1A4331] sm:text-xl">
                    {isBn ? guide.nameBn : guide.nameEn}
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-[#5B7163]">
                    {isBn ? guide.descriptionBn : guide.descriptionEn}
                  </span>
                </span>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#1A4331]">
                  {isBn ? "টিকার তালিকা দেখুন" : "View vaccine list"}
                  <ChevronRight size={16} aria-hidden="true" />
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {selectedGuide && (
        <section className="mt-8 overflow-hidden rounded-2xl border border-[#DFE7DE] bg-white shadow-xs" aria-labelledby="selected-vaccine-guide-title">
          <header className="flex flex-col gap-4 border-b border-[#E8EDE6] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <button
                type="button"
                onClick={() => setSelectedSlug(null)}
                className="mb-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#52685A] hover:text-[#1A4331]"
              >
                <ArrowLeft size={16} aria-hidden="true" />
                {isBn ? "সব মুরগির কার্ডে ফিরুন" : "Back to chicken cards"}
              </button>
              <h3 id="selected-vaccine-guide-title" className="flex items-center gap-2 text-xl font-extrabold text-[#1A4331] sm:text-2xl">
                <Syringe size={21} aria-hidden="true" />
                {isBn ? selectedGuide.nameBn : selectedGuide.nameEn}
              </h3>
              <p className="mt-1 text-xs text-[#718477]">
                {isBn ? "স্প্রেডশিট:" : "Spreadsheet:"} {selectedGuide.spreadsheetName}
              </p>
            </div>
            <span className="inline-flex w-fit items-center rounded-full bg-[#EDF2EB] px-3 py-1.5 text-xs font-bold text-[#365542]">
              {selectedGuide.rows.length} {isBn ? "টি রেকর্ড" : selectedGuide.rows.length === 1 ? "record" : "records"}
            </span>
          </header>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead className="bg-[#F3F6F1] text-xs font-bold uppercase tracking-wide text-[#405B4A]">
                <tr>
                  <th scope="col" className="border-b border-[#DFE7DE] px-4 py-3.5 sm:px-5">{isBn ? "বয়স (দিন)" : "Age (days)"}</th>
                  <th scope="col" className="border-b border-[#DFE7DE] px-4 py-3.5 sm:px-5">{isBn ? "ভ্যাকসিনের নাম" : "Vaccine name"}</th>
                  <th scope="col" className="border-b border-[#DFE7DE] px-4 py-3.5 sm:px-5">{isBn ? "রোগের নাম" : "Disease"}</th>
                  <th scope="col" className="border-b border-[#DFE7DE] px-4 py-3.5 sm:px-5">{isBn ? "প্রয়োগের নিয়ম" : "Administration"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EDF2EB] text-[#344D3E]">
                {selectedGuide.rows.map((row, index) => (
                  <tr key={`${selectedGuide.slug}-${index}`} className="align-top transition-colors hover:bg-[#FAFBF8]">
                    <th scope="row" className="whitespace-nowrap px-4 py-4 font-bold text-[#1A4331] sm:px-5">
                      {isBn ? row.ageBn : row.ageEn}
                    </th>
                    <td className="px-4 py-4 font-semibold sm:px-5">{isBn ? row.vaccineBn : row.vaccineEn}</td>
                    <td className="px-4 py-4 sm:px-5">{isBn ? row.diseaseBn : row.diseaseEn}</td>
                    <td className="px-4 py-4 sm:px-5">{isBn ? row.methodBn : row.methodEn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="border-t border-[#E8EDE6] bg-[#FFF9E9] px-5 py-4 text-xs leading-5 text-[#614C25] sm:px-6">
            {isBn
              ? "এই তালিকা আপনার দেওয়া স্প্রেডশিট থেকে সাজানো। প্রয়োগের আগে হ্যাচারির রেকর্ড, ভ্যাকসিনের লেবেল এবং স্থানীয় প্রাণিসম্পদ কর্মকর্তা বা নিবন্ধিত পোল্ট্রি পশুচিকিৎসকের সঙ্গে সময়সূচি নিশ্চিত করুন।"
              : "This table is organized from your supplied spreadsheet. Confirm timing against hatchery records, the vaccine label, and a local livestock officer or registered poultry veterinarian before use."}
          </p>
        </section>
      )}
    </section>
  );
}

"use client";

import { Calculator, Clock3 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FeedCalculatorPromo() {
  const { language } = useLanguage();
  const isBn = language === "bn";

  return (
    <section className="px-4 py-6 sm:px-6 sm:py-8" aria-label={isBn ? "ফিড ক্যালকুলেটর" : "Feed calculator"}>
      <div className="mx-auto flex max-w-6xl flex-col gap-5 overflow-hidden rounded-3xl border border-[#D7E3D7] bg-[#EAF1E8] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-bold text-[#1A4331]">
            <Calculator size={15} aria-hidden="true" />
            {isBn ? "শীঘ্রই আসছে" : "Coming soon"}
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#1A4331] sm:text-3xl">
            {isBn ? "পাখির খাবারের হিসাব" : "Bird feed calculator"}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[#405448] sm:text-base">
            {isBn
              ? "দৈনিক খাবার ও ফাওমির ফিড মিশ্রণের হিসাব করার সুবিধাটি শিগগিরই আসছে।"
              : "Daily feed estimates and Fayoumi feed mix calculations will be available soon."}
          </p>
        </div>
        <span
          aria-disabled="true"
          className="inline-flex shrink-0 cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-[#708276] px-5 py-3 text-sm font-bold text-white"
        >
          <Clock3 size={17} aria-hidden="true" />
          {isBn ? "এখনও চালু হয়নি" : "Not available yet"}
        </span>
      </div>
    </section>
  );
}

"use client";

import { Calculator, Clock3 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FeedCalculatorComingSoon() {
  const { language } = useLanguage();
  const isBn = language === "bn";

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:py-24">
      <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E6ECE5] text-[#1A4331]">
        <Calculator size={30} aria-hidden="true" />
      </span>
      <p className="mt-6 text-sm font-bold uppercase tracking-wider text-[#587263]">
        {isBn ? "শীঘ্রই আসছে" : "Coming soon"}
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-[#1A4331] sm:text-4xl">
        {isBn ? "ফিড ক্যালকুলেটর" : "Feed calculator"}
      </h1>
      <p className="mx-auto mt-4 max-w-xl leading-7 text-[#52645A]">
        {isBn
          ? "দৈনিক খাবারের হিসাব এবং ফাওমির বয়সভিত্তিক ফিড মিশ্রণের সুবিধাটি তৈরি হচ্ছে। প্রস্তুত হলে এখানে চালু হবে।"
          : "Daily feed estimates and age-based Fayoumi feed mix calculations are being prepared. The tool will be available here when it is ready."}
      </p>
      <span className="mt-8 inline-flex cursor-not-allowed items-center gap-2 rounded-xl bg-[#708276] px-5 py-3 text-sm font-bold text-white" aria-disabled="true">
        <Clock3 size={17} aria-hidden="true" />
        {isBn ? "এখনও চালু হয়নি" : "Not available yet"}
      </span>
    </section>
  );
}

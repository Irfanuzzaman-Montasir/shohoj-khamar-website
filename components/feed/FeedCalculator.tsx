"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calculator, Egg, Wheat } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type BirdKey = "quail" | "broiler" | "sonali" | "fayoumi";
type Goal = "growth" | "eggs";
type CalculatorMode = "estimate" | "fayoumi-mix";
type FeedMix = { nameBn: string; nameEn: string; percent: number };

const BIRDS: Record<BirdKey, { nameBn: string; nameEn: string }> = {
  quail: { nameBn: "জাপানি কোয়েল", nameEn: "Japanese quail" },
  broiler: { nameBn: "ব্রয়লার", nameEn: "Broiler" },
  sonali: { nameBn: "সোনালি মুরগি", nameEn: "Sonali chicken" },
  fayoumi: { nameBn: "ফাওমি মুরগি", nameEn: "Fayoumi chicken" },
};

const CHICKEN_GROWTH_FEEDS: Record<Exclude<BirdKey, "quail">, { value: string; bn: string; en: string }[]> = {
  broiler: [
    { value: "starter", bn: "ব্রয়লার স্টার্টার", en: "Broiler starter" },
    { value: "grower", bn: "ব্রয়লার গ্রোয়ার", en: "Broiler grower" },
    { value: "finisher", bn: "ব্রয়লার ফিনিশার", en: "Broiler finisher" },
  ],
  sonali: [
    { value: "starter", bn: "সোনালি / চিকেন স্টার্টার", en: "Sonali / chicken starter" },
    { value: "grower", bn: "গ্রোয়ার", en: "Grower" },
  ],
  fayoumi: [
    { value: "starter", bn: "চিকেন স্টার্টার", en: "Chicken starter" },
    { value: "grower", bn: "গ্রোয়ার", en: "Grower" },
  ],
};

const QUAIL_MIX: FeedMix[] = [
  { nameBn: "লেয়ার-১ ফিড", nameEn: "Layer-1 feed", percent: 80 },
  { nameBn: "ব্রয়লার স্টার্টার", nameEn: "Broiler starter", percent: 20 },
];

function numberInput(value: string, min: number, max: number): number {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return min;
  return Math.min(max, Math.max(min, parsed));
}

function formatAmount(value: number, language: string): string {
  return new Intl.NumberFormat(language === "bn" ? "bn-BD" : "en-US", {
    maximumFractionDigits: 2,
  }).format(value);
}

function FayoumiFeedMixer() {
  const { language } = useLanguage();
  const isBn = language === "bn";
  const [phase, setPhase] = useState("prelay");
  const [batchKg, setBatchKg] = useState("10");
  const batch = numberInput(batchKg, 0.1, 10000);
  const phaseOptions = [
    { value: "starter", bn: "স্টার্টার · ১–৪৫ দিন", en: "Starter · 1–45 days", feeds: [{ nameBn: "সোনালি/ব্রয়লার স্টার্টার", nameEn: "Sonali/broiler starter", percent: 100 }] },
    { value: "grower", bn: "গ্রোয়ার · ৪৬–৯০ দিন", en: "Grower · 46–90 days", feeds: [{ nameBn: "সোনালি গ্রোয়ার", nameEn: "Sonali grower", percent: 100 }] },
    { value: "prelay", bn: "প্রি-লেয়ার · ৯১–১২০ দিন", en: "Pre-layer · 91–120 days", feeds: [{ nameBn: "সোনালি গ্রোয়ার", nameEn: "Sonali grower", percent: 50 }, { nameBn: "লেয়ার-১", nameEn: "Layer-1", percent: 50 }] },
    { value: "laying", bn: "লেয়ার-১ · ১২০ দিন থেকে", en: "Layer-1 · from day 120", feeds: [{ nameBn: "লেয়ার-১", nameEn: "Layer-1", percent: 100 }] },
  ];
  const selectedPhase = phaseOptions.find((option) => option.value === phase) ?? phaseOptions[2];

  return (
    <section className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
      <div className="rounded-3xl border border-[#DFE7DE] bg-white p-5 shadow-xs sm:p-7">
        <h2 className="mb-5 text-lg font-bold text-[#1A4331]">{isBn ? "ফাওমির বয়সভিত্তিক মিক্স" : "Fayoumi age-based mix"}</h2>
        <div>
          <label htmlFor="fayoumi-feed-phase" className="mb-1.5 block text-sm font-bold text-[#1A4331]">{isBn ? "বয়স / ফিডের পর্যায়" : "Age / feed phase"}</label>
          <select id="fayoumi-feed-phase" value={phase} onChange={(event) => setPhase(event.target.value)} className="w-full rounded-xl border border-[#CCD8CC] bg-white px-3.5 py-3 text-sm text-[#1A4331] outline-none focus:border-[#1A4331] focus:ring-2 focus:ring-[#1A4331]/15">
            {phaseOptions.map((option) => <option key={option.value} value={option.value}>{isBn ? option.bn : option.en}</option>)}
          </select>
        </div>
        <div className="mt-4">
          <label htmlFor="fayoumi-batch-kg" className="mb-1.5 block text-sm font-bold text-[#1A4331]">{isBn ? "মোট মিক্স কত কেজি বানাবেন?" : "How many kilograms to mix?"}</label>
          <input id="fayoumi-batch-kg" type="number" min="0.1" max="10000" step="0.1" inputMode="decimal" value={batchKg} onChange={(event) => setBatchKg(event.target.value)} className="w-full rounded-xl border border-[#CCD8CC] bg-white px-3.5 py-3 text-sm text-[#1A4331] outline-none focus:border-[#1A4331] focus:ring-2 focus:ring-[#1A4331]/15" />
        </div>
        <p className="mt-5 rounded-xl border border-[#D7E3D7] bg-[#F3F6F1] p-3 text-xs leading-relaxed text-[#526B5D]">
          {isBn ? "এটি আপনার ফাওমি গাইডে দেওয়া বাণিজ্যিক সম্পূর্ণ ফিডের অনুপাত হিসাব করে; ভুট্টা/সয়াবিনসহ কাঁচামাল দিয়ে পুষ্টিসম্পন্ন রেশন ফর্মুলা তৈরি করে না। প্যাকেটের বয়স ও প্রয়োগ নির্দেশনা মিলিয়ে নিন।" : "This calculates the commercial complete-feed ratios in your Fayoumi guide; it does not formulate a nutrient-balanced ration from raw ingredients. Check the feed bag’s age and use instructions."}
        </p>
      </div>

      <div className="rounded-3xl border border-[#D7E3D7] bg-[#F3F6F1] p-5 sm:p-7" aria-live="polite">
        <p className="text-sm font-semibold text-[#61776A]">{isBn ? "আপনার ব্যাচ" : "Your batch"}</p>
        <p className="mt-1 text-3xl font-extrabold text-[#1A4331]">{batchKg.trim() ? `${formatAmount(batch, language)} kg` : "—"}</p>
        <h3 className="mb-2 mt-6 text-sm font-bold text-[#1A4331]">{isBn ? "এই পরিমাণে মেশান" : "Mix these amounts"}</h3>
        <div className="space-y-2">
          {selectedPhase.feeds.map((feed) => (
            <div key={feed.nameEn} className="flex items-center justify-between gap-3 rounded-xl bg-white px-4 py-3">
              <span className="text-sm font-semibold text-[#405448]">{isBn ? feed.nameBn : feed.nameEn} <span className="text-xs text-[#728477]">({feed.percent}%)</span></span>
              <span className="whitespace-nowrap text-sm font-extrabold text-[#1A4331]">{batchKg.trim() ? `${formatAmount((batch * feed.percent) / 100, language)} kg` : "—"}</span>
            </div>
          ))}
        </div>
        {phase === "laying" && <p className="mt-3 rounded-xl bg-white p-3 text-xs leading-relaxed text-[#526B5D]">{isBn ? "গাইডে ঝিনুকের গুঁড়া আলাদা পাত্রে ফ্রি-চয়েসে রাখার কথা বলা আছে; এটি মিক্সের কেজির মধ্যে যোগ করবেন না।" : "The guide says to offer oyster shell separately, free-choice; it is not included in the mix weight."}</p>}
      </div>
    </section>
  );
}

export default function FeedCalculator() {
  const { language } = useLanguage();
  const isBn = language === "bn";
  const [mode, setMode] = useState<CalculatorMode>("estimate");
  const [bird, setBird] = useState<BirdKey>("quail");
  const [goal, setGoal] = useState<Goal>("growth");
  const [flockSize, setFlockSize] = useState("100");
  const [dailyGrams, setDailyGrams] = useState("13");
  const [days, setDays] = useState("30");
  const [growthFeed, setGrowthFeed] = useState("starter");

  const quail = bird === "quail";
  const feedMix = useMemo<FeedMix[]>(() => {
    if (quail && goal === "eggs") return QUAIL_MIX;
    if (quail) return [{ nameBn: "ব্রয়লার স্টার্টার", nameEn: "Broiler starter", percent: 100 }];
    if (goal === "eggs") return [{ nameBn: "কমপ্লিট লেয়ার ফিড", nameEn: "Complete layer feed", percent: 100 }];

    const selected = CHICKEN_GROWTH_FEEDS[bird].find((feed) => feed.value === growthFeed) ?? CHICKEN_GROWTH_FEEDS[bird][0];
    return [{ nameBn: selected.bn, nameEn: selected.en, percent: 100 }];
  }, [bird, goal, growthFeed, quail]);

  const intakeRange = quail ? (goal === "eggs" ? "22–25" : "10–16") : null;
  const hasDailyRate = dailyGrams.trim() !== "" && Number.isFinite(Number(dailyGrams)) && Number(dailyGrams) > 0;
  const currentRate = hasDailyRate ? numberInput(dailyGrams, 1, 1000) : 0;
  const currentFlock = numberInput(flockSize, 1, 1000000);
  const currentDays = numberInput(days, 1, 365);
  const dailyTotalKg = (currentFlock * currentRate) / 1000;
  const periodTotalKg = dailyTotalKg * currentDays;

  const changeBird = (nextBird: BirdKey) => {
    setBird(nextBird);
    if (nextBird === "quail") {
      setDailyGrams(goal === "eggs" ? "23.5" : "13");
      setGrowthFeed("starter");
    } else {
      setDailyGrams("");
    }
  };

  const changeGoal = (nextGoal: Goal) => {
    setGoal(nextGoal);
    if (bird === "quail") setDailyGrams(nextGoal === "eggs" ? "23.5" : "13");
  };

  const labelClass = "mb-1.5 block text-sm font-bold text-[#1A4331]";
  const inputClass = "w-full rounded-xl border border-[#CCD8CC] bg-white px-3.5 py-3 text-sm text-[#1A4331] outline-none focus:border-[#1A4331] focus:ring-2 focus:ring-[#1A4331]/15";

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <Link href="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#50685A] hover:text-[#1A4331]">
        <ArrowLeft size={16} />{isBn ? "হোমপেজে ফিরুন" : "Back to home"}
      </Link>

      <header className="mt-5 rounded-3xl bg-[#EAF1E8] p-6 sm:p-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-bold text-[#1A4331]"><Calculator size={14} />{isBn ? "ফিড ক্যালকুলেটর" : "Feed calculator"}</span>
        <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-[#1A4331] sm:text-4xl">{isBn ? "পাখির খাবারের পরিমাণ হিসাব করুন" : "Estimate your flock’s feed"}</h1>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#405448] sm:text-base">
          {isBn ? "পাখির সংখ্যা, দৈনিক খাবার ও দিনের সংখ্যা দিন। ক্যালকুলেটর মোট ফিড এবং মিশ্রণের প্রতিটি অংশ দেখাবে।" : "Enter flock size, daily feed per bird, and number of days. The calculator shows the total and each part of a feed blend."}
        </p>
      </header>

      <div className="mt-6 grid grid-cols-2 gap-3 rounded-2xl border border-[#DFE7DE] bg-white p-2">
        <button type="button" aria-pressed={mode === "estimate"} onClick={() => setMode("estimate")} className={`rounded-xl px-3 py-3 text-sm font-bold transition-colors ${mode === "estimate" ? "bg-[#1A4331] text-white" : "text-[#53695B] hover:bg-[#F3F6F1]"}`}>
          {isBn ? "দৈনিক ফিডের হিসাব" : "Daily feed estimate"}
        </button>
        <button type="button" aria-pressed={mode === "fayoumi-mix"} onClick={() => setMode("fayoumi-mix")} className={`rounded-xl px-3 py-3 text-sm font-bold transition-colors ${mode === "fayoumi-mix" ? "bg-[#1A4331] text-white" : "text-[#53695B] hover:bg-[#F3F6F1]"}`}>
          {isBn ? "ফাওমি ফিড মিক্স" : "Fayoumi feed mix"}
        </button>
      </div>

      {mode === "fayoumi-mix" ? <FayoumiFeedMixer /> : <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
        <section className="rounded-3xl border border-[#DFE7DE] bg-white p-5 shadow-xs sm:p-7" aria-labelledby="feed-input-heading">
          <h2 id="feed-input-heading" className="mb-5 text-lg font-bold text-[#1A4331]">{isBn ? "খামারের তথ্য" : "Flock details"}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="feed-bird" className={labelClass}>{isBn ? "পাখির ধরন" : "Bird type"}</label>
              <select id="feed-bird" value={bird} onChange={(event) => changeBird(event.target.value as BirdKey)} className={inputClass}>
                {Object.entries(BIRDS).map(([key, name]) => <option key={key} value={key}>{isBn ? name.nameBn : name.nameEn}</option>)}
              </select>
            </div>
            <fieldset className="sm:col-span-2">
              <legend className={labelClass}>{isBn ? "উৎপাদনের লক্ষ্য" : "Production goal"}</legend>
              <div className="grid grid-cols-2 gap-3">
                <button type="button" aria-pressed={goal === "growth"} onClick={() => changeGoal("growth")} className={`rounded-xl border px-3 py-3 text-sm font-bold ${goal === "growth" ? "border-[#1A4331] bg-[#EAF1E8] text-[#1A4331]" : "border-[#CCD8CC] text-[#53695B]"}`}><Wheat className="mr-2 inline" size={16} />{isBn ? "ওজন বৃদ্ধি" : "Weight gain"}</button>
                <button type="button" aria-pressed={goal === "eggs"} onClick={() => changeGoal("eggs")} className={`rounded-xl border px-3 py-3 text-sm font-bold ${goal === "eggs" ? "border-[#1A4331] bg-[#EAF1E8] text-[#1A4331]" : "border-[#CCD8CC] text-[#53695B]"}`}><Egg className="mr-2 inline" size={16} />{isBn ? "ডিম উৎপাদন" : "Egg production"}</button>
              </div>
            </fieldset>
            {bird !== "quail" && goal === "growth" && (
              <div className="sm:col-span-2">
                <label htmlFor="growth-feed" className={labelClass}>{isBn ? "বয়স অনুযায়ী ফিডের ধাপ" : "Feed phase for the bird’s age"}</label>
                <select id="growth-feed" value={growthFeed} onChange={(event) => setGrowthFeed(event.target.value)} className={inputClass}>
                  {CHICKEN_GROWTH_FEEDS[bird].map((feed) => <option key={feed.value} value={feed.value}>{isBn ? feed.bn : feed.en}</option>)}
                </select>
              </div>
            )}
            <div>
              <label htmlFor="flock-size" className={labelClass}>{isBn ? "পাখির সংখ্যা" : "Number of birds"}</label>
              <input id="flock-size" type="number" min="1" max="1000000" step="1" inputMode="numeric" value={flockSize} onChange={(event) => setFlockSize(event.target.value)} className={inputClass} />
            </div>
            <div>
              <label htmlFor="feed-rate" className={labelClass}>{isBn ? "প্রতি পাখির দৈনিক ফিড (গ্রাম)" : "Daily feed per bird (grams)"}</label>
              <input id="feed-rate" type="number" min="1" max="1000" step="0.1" inputMode="decimal" value={dailyGrams} onChange={(event) => setDailyGrams(event.target.value)} placeholder={isBn ? "ফিডের লেবেল/গাইড দেখুন" : "Check feed label or guide"} className={inputClass} />
              <p className="mt-1.5 text-xs leading-relaxed text-[#61776A]">
                {quail
                  ? (goal === "growth"
                    ? (isBn ? `আপনার গাইডে ১৩–৪০ দিনের বৃদ্ধির পর্যায়ের জন্য ${intakeRange} গ্রাম/পাখি/দিন দেওয়া আছে।` : `Your guide lists ${intakeRange} g per bird per day for the 13–40 day growth stage.`)
                    : (isBn ? `আপনার গাইডে পূর্ণ ডিম উৎপাদন পর্যায়ের জন্য ${intakeRange} গ্রাম/পাখি/দিন দেওয়া আছে।` : `Your guide lists ${intakeRange} g per bird per day for peak laying.`))
                  : (isBn ? "আপনার গাইডে দৈনিক গ্রাম নির্দিষ্ট নেই। ফিডের লেবেল বা স্থানীয় নির্দেশনা অনুযায়ী লিখুন।" : "Your guide does not specify daily grams. Enter the amount from the feed label or local guidance.")}
              </p>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="feed-days" className={labelClass}>{isBn ? "কত দিনের জন্য" : "Number of days"}</label>
              <input id="feed-days" type="number" min="1" max="365" step="1" inputMode="numeric" value={days} onChange={(event) => setDays(event.target.value)} className={inputClass} />
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-[#D7E3D7] bg-[#F3F6F1] p-5 sm:p-7" aria-live="polite" aria-labelledby="feed-result-heading">
          <h2 id="feed-result-heading" className="text-lg font-bold text-[#1A4331]">{isBn ? "আপনার আনুমানিক হিসাব" : "Estimated feed amount"}</h2>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-white p-4">
              <p className="text-xs font-semibold text-[#61776A]">{isBn ? "প্রতিদিন" : "Per day"}</p>
              <p className="mt-1 text-2xl font-extrabold text-[#1A4331]">{hasDailyRate ? formatAmount(dailyTotalKg, language) : "—"} <span className="text-sm">kg</span></p>
            </div>
            <div className="rounded-2xl bg-white p-4">
              <p className="text-xs font-semibold text-[#61776A]">{isBn ? `${formatAmount(currentDays, language)} দিনের মোট` : `Total for ${formatAmount(currentDays, language)} days`}</p>
              <p className="mt-1 text-2xl font-extrabold text-[#1A4331]">{hasDailyRate ? formatAmount(periodTotalKg, language) : "—"} <span className="text-sm">kg</span></p>
            </div>
          </div>

          <h3 className="mb-2 mt-6 text-sm font-bold text-[#1A4331]">{isBn ? "ফিডের ধরন ও পরিমাণ" : "Feed types and amounts"}</h3>
          <div className="space-y-2">
            {feedMix.map((feed) => (
              <div key={feed.nameEn} className="flex items-center justify-between gap-3 rounded-xl bg-white px-4 py-3">
                <span className="text-sm font-semibold text-[#405448]">{isBn ? feed.nameBn : feed.nameEn} <span className="text-xs text-[#728477]">({feed.percent}%)</span></span>
                <span className="whitespace-nowrap text-sm font-extrabold text-[#1A4331]">
                  {hasDailyRate ? `${formatAmount((periodTotalKg * feed.percent) / 100, language)} kg` : "—"}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-4 rounded-xl border border-[#D7E3D7] bg-white/70 p-3 text-xs leading-relaxed text-[#526B5D]">
            {isBn
              ? "এটি হিসাবের আনুমানিক পরিমাণ, চিকিৎসা বা পুষ্টি-প্রেসক্রিপশন নয়। বয়স, জাত, আবহাওয়া, শরীরের অবস্থা ও ফিডের লেবেল অনুযায়ী পরিমাণ বদলাতে পারে। পানির ব্যবস্থা রাখুন এবং অবশিষ্ট ফিড/অপচয় হিসাব করুন।"
              : "This is a quantity estimate, not a veterinary or nutrition prescription. Needs vary with age, strain, weather, body condition, and feed label. Keep clean water available and account for leftover feed and waste."}
          </p>
        </section>
      </div>}
    </div>
  );
}

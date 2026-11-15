import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import VaccinationScheduleView from "@/components/vaccination/VaccinationScheduleView";
import VaccinationLibrary from "@/components/vaccination/VaccinationLibrary";
import AdPlaceholder from "@/components/common/AdPlaceholder";
import { getPublicVaccinationSchedules } from "@/lib/publicContent";
import { canonicalAlternates } from "@/lib/seo";
import { Syringe, ShieldCheck, HeartHandshake } from "lucide-react";

export const instant = false;

export const metadata: Metadata = {
  title: "পোল্ট্রি টিকা সময়সূচি ও পর্যালোচনা — সহজ খামার",
  description:
    "সোনালি, ফাওমি ও ব্রয়লার মুরগির টিকা দেওয়ার সঠিক সময়, রোগের নাম ও প্রয়োগের সহজ ব্যবহারিক গাইড।",
  keywords: ["পোল্ট্রি টিকা", "কোয়েল টিকা সময়সূচি", "মুরগির টিকা", "বাংলাদেশ পোল্ট্রি", "রানিখেত টিকা", "গামবোরো টিকা"],
  alternates: canonicalAlternates("/vaccination"),
  openGraph: {
    title: "পোল্ট্রি টিকা সময়সূচি — সহজ খামার",
    description: "সহজে বোঝার মতো সোনালি, ফাওমি ও ব্রয়লার মুরগির সম্পূর্ণ টিকা সময়সূচি ও ব্যবহারিক নিয়ম।",
    type: "website",
  },
};

export default async function VaccinationPage() {
  const schedules = await getPublicVaccinationSchedules();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F3]">
      <Header />
      <main className="flex-1 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Hero Banner with Modern Organic Card */}
          <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1A4331] via-[#1E4D38] to-[#143728] p-6 sm:p-10 text-white shadow-md">
            <div className="relative z-10 max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#C1DFCE] border border-white/15 text-xs font-semibold backdrop-blur-sm">
                <Syringe size={13} className="text-[#86EFAC]" />
                সহজ খামার · পোল্ট্রি স্বাস্থ্য সুরক্ষা
              </span>
              <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                টিকা সময়সূচি ও প্রয়োগ গাইড
              </h1>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#D2E7DC] max-w-2xl">
                সোনালি, ফাওমি বা ব্রয়লার মুরগির জন্য বয়সভিত্তিক সঠিক টিকার তালিকা, রোগের নাম এবং নিরাপদ প্রয়োগের সহজ নিয়ম এক নজরে দেখুন।
              </p>

              {/* Quick Feature Highlights */}
              <div className="mt-6 flex flex-wrap gap-4 pt-4 border-t border-white/15 text-xs text-[#E1EFE7]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-[#86EFAC]" />
                  <span>বয়সভিত্তিক স্পষ্ট তালিকা</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <HeartHandshake size={16} className="text-[#86EFAC]" />
                  <span>বাস্তব খামারিদের অভিজ্ঞতায় প্রস্তুত</span>
                </div>
              </div>
            </div>

            {/* Subtle background decoration */}
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          </header>

          {/* Statutory Veterinary Notice Banner */}
          <div className="mt-6 rounded-2xl border border-[#E9DCB8] bg-[#FFF9E8] p-4 sm:p-5 text-xs sm:text-sm leading-relaxed text-[#6B5324] shadow-2xs flex items-start gap-3">
            <span className="text-lg shrink-0">⚠️</span>
            <div>
              <span className="font-extrabold text-[#523E16]">জরুরি খামারি সতর্কতা: </span>
              এই তালিকা সাধারণ নির্দেশনার জন্য তৈরি। আপনার ব্যাচের সার্বিক স্বাস্থ্য পরিস্থিতি বিবেচনা করে চূড়ান্ত টিকা পরিকল্পনা স্থানীয় উপজেলা প্রাণিসম্পদ দপ্তর বা নিবন্ধিত পোল্ট্রি পশুচিকিৎসকের পরামর্শ অনুযায়ী প্রয়োগ করুন।
            </div>
          </div>

          {/* Interactive Modern Vaccination Library */}
          <VaccinationLibrary />

          {/* Middle In-Article Ad Slot */}
          {schedules.length > 6 && (
            <AdPlaceholder
              slotName="টিকা তালিকার মাঝামাঝি"
              format="horizontal"
              className="my-10"
            />
          )}

          {/* Optional Database Published Schedules (if available) */}
          {schedules.length > 0 && (
            <section className="mt-12 border-t border-[#DFE7DE] pt-8">
              <h2 className="mb-5 text-xl font-bold text-[#1A4331]">ডাটাবেজে সংরক্ষিত অতিরিক্ত টিকার রেকর্ড</h2>
              <VaccinationScheduleView schedules={schedules} />
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import VaccinationScheduleView from "@/components/vaccination/VaccinationScheduleView";
import VaccinationLibrary from "@/components/vaccination/VaccinationLibrary";
import AdPlaceholder from "@/components/common/AdPlaceholder";
import { getPublicVaccinationSchedules } from "@/lib/publicContent";
import { canonicalAlternates } from "@/lib/seo";

export const instant = false;

export const metadata: Metadata = {
  title: "পোল্ট্রি টিকা সময়সূচি ও পর্যালোচনা — সহজ খামার",
  description:
    "কোয়েল ও মুরগির প্রকাশিত টিকা-তথ্য, প্রয়োগের বয়স, পদ্ধতি, উৎস এবং বিশেষজ্ঞ পর্যালোচনার অবস্থা দেখুন।",
  keywords: ["পোল্ট্রি টিকা", "কোয়েল টিকা সময়সূচি", "মুরগির টিকা", "বাংলাদেশ পোল্ট্রি"],
  alternates: canonicalAlternates("/vaccination"),
  openGraph: {
    title: "পোল্ট্রি টিকা সময়সূচি — সহজ খামার",
    description: "প্রকাশিত টিকা-তথ্যের উৎস ও পর্যালোচনার অবস্থা একসঙ্গে দেখুন।",
    type: "website",
  },
};

export default async function VaccinationPage() {
  const schedules = await getPublicVaccinationSchedules();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F3]">
      <Header />
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <header className="max-w-3xl mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#597364]">
              Shohoj Khamar · Poultry health
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A4331]">
              টিকা সময়সূচি
            </h1>
            <p className="mt-3 text-sm sm:text-base leading-7 text-[#465E50]">
              সোনালি, ফাওমি বা ব্রয়লার কার্ড বেছে নিয়ে স্প্রেডশিটের টিকার বয়স, নাম, রোগ ও প্রয়োগের নিয়ম দেখুন।
            </p>
          </header>

          <div className="rounded-2xl border border-[#E7D9B5] bg-[#FFF9E9] p-4 sm:p-5 text-sm leading-6 text-[#614C25]">
            এই তালিকা সাধারণ তথ্যের জন্য। আপনার খামারের টিকা পরিকল্পনা স্থানীয় প্রাণিসম্পদ
            কর্মকর্তা বা নিবন্ধিত পোল্ট্রি পশুচিকিৎসকের সঙ্গে নিশ্চিত করুন। কোনো রেকর্ড
            “পর্যালোচনাধীন” হলে সেটিকে যাচাইকৃত চিকিৎসা-পরামর্শ হিসেবে ব্যবহার করবেন না।
          </div>

          <VaccinationLibrary />

          {schedules.length > 6 && (
            <AdPlaceholder
              slotName="টিকা তালিকার মাঝামাঝি"
              format="horizontal"
              className="my-8"
            />
          )}
          {schedules.length > 0 && (
            <section className="mt-10 border-t border-[#DFE7DE] pt-8">
              <h2 className="mb-5 text-xl font-bold text-[#1A4331]">প্রকাশিত অতিরিক্ত টিকার তথ্য</h2>
              <VaccinationScheduleView schedules={schedules} />
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HomeImageSections from "@/components/home/HomeImageSections";
import FeedCalculatorPromo from "@/components/home/FeedCalculatorPromo";
import HowItWorks from "@/components/home/HowItWorks";
import VaccinationBanner from "@/components/home/VaccinationBanner";
import { canonicalAlternates } from "@/lib/seo";

export const metadata = {
  alternates: canonicalAlternates("/"),
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F3]">
      {/* Top Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HomeImageSections />

        {/* Feed calculator callout */}
        <FeedCalculatorPromo />

        {/* 3. How It Works (White background section) */}
        <HowItWorks />

        {/* 4. Vaccination Schedule Banner */}
        <VaccinationBanner />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FeedCalculatorComingSoon from "@/components/feed/FeedCalculatorComingSoon";
import { canonicalAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "ফিড ক্যালকুলেটর শীঘ্রই আসছে | সহজ খামার",
  description: "পাখির দৈনিক খাবার ও ফাওমির ফিড মিশ্রণের ক্যালকুলেটরটি শিগগিরই চালু হবে।",
  alternates: canonicalAlternates("/feed-calculator"),
  robots: { index: false, follow: false },
};

export default function FeedCalculatorPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F3]">
      <Header />
      <main>
        <FeedCalculatorComingSoon />
      </main>
      <Footer />
    </div>
  );
}

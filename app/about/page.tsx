import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutPageClient from "./AboutPageClient";
import { canonicalAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "আমাদের সম্পর্কে — সহজ খামার",
  description:
    "সহজ খামার কীভাবে শুরু হলো, আমরা কী স্বপ্ন দেখি এবং বাংলাদেশের ক্ষুদ্র খামারিদের জন্য কী করছি — সেই গল্প এখানে।",
  alternates: canonicalAlternates("/about"),
  openGraph: {
    title: "আমাদের সম্পর্কে — সহজ খামার",
    description: "বাংলাদেশের খামারিদের সেরা ডিজিটাল সঙ্গী হওয়ার গল্প।",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F3]">
      <Header />
      <main className="flex-1">
        <AboutPageClient />
      </main>
      <Footer />
    </div>
  );
}

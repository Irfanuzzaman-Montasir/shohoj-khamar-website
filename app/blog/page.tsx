import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogListView from "@/components/blog/BlogListView";
import { blogCategories } from "@/data/blogData";
import { getPublicArticles } from "@/lib/publicContent";
import { canonicalAlternates } from "@/lib/seo";

export const instant = false;

export const metadata: Metadata = {
  title: "পোল্ট্রি ব্লগ ও খামারি সহায়িকা — সহজ খামার",
  alternates: canonicalAlternates("/blog"),
  description:
    "কোয়েল ও মুরগি পালন, লাভজনক খামার পরিচালনা, খাবার তৈরির নিয়ম ও রোগ প্রতিরোধে সহজ বাংলায় নির্ভরযোগ্য দিকনির্দেশনা।",
  keywords: [
    "সহজ খামার ব্লগ",
    "কোয়েল পালন ব্লগ",
    "কোয়েল ডিম",
    "সোনালি মুরগি গাইড",
    "পোল্ট্রি ফিড ফর্মুলা",
    "Shohoj Khamar Blog",
  ],
  openGraph: {
    title: "পোল্ট্রি ব্লগ ও খামারি সহায়িকা — সহজ খামার",
    description:
      "কোয়েল ও মুরগি পালন, লাভজনক খামার পরিচালনা, খাবার তৈরির নিয়ম ও রোগ প্রতিরোধে সহজ বাংলায় নির্ভরযোগ্য দিকনির্দেশনা।",
  },
};

export default async function BlogPage() {
  const articles = await getPublicArticles();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F3]">
      <Header />
      <main className="flex-1">
        <BlogListView initialArticles={articles} categories={blogCategories} />
      </main>
      <Footer />
    </div>
  );
}

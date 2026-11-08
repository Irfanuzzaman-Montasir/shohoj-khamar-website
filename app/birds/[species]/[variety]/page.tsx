import { notFound } from "next/navigation";
import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BirdLandingView from "@/components/birds/BirdLandingView";
import { getPublicArticles, getPublicBird, getPublicGuideStages } from "@/lib/publicContent";
import { canonicalAlternates } from "@/lib/seo";

export const instant = false;

interface PageProps {
  params: Promise<{
    species: string;
    variety: string;
  }>;
}

export async function generateStaticParams() {
  return [
    { species: "quail", variety: "japanese" },
    { species: "chicken", variety: "fayoumi" },
    { species: "chicken", variety: "broiler" },
    { species: "chicken", variety: "sonali" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { species, variety } = await params;
  const bird = await getPublicBird(species, variety);

  if (!bird) {
    return {
      title: "পাখি পাওয়া যায়নি — সহজ খামার",
    };
  }

  return {
    title: `${bird.nameBn} (${bird.nameEn}) পালন নির্দেশিকা — সহজ খামার`,
    alternates: canonicalAlternates(`/birds/${species}/${variety}`),
    description: bird.descriptionBn.slice(0, 160),
    openGraph: {
      title: `${bird.nameBn} পালন নির্দেশিকা — সহজ খামার`,
      description: bird.descriptionBn.slice(0, 160),
    },
  };
}

export default async function BirdLandingPage({ params }: PageProps) {
  const { species, variety } = await params;
  const [bird, stages, articles] = await Promise.all([
    getPublicBird(species, variety),
    getPublicGuideStages(species, variety),
    getPublicArticles(),
  ]);

  if (!bird) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F3]">
      <Header />
      <main className="flex-1">
        <BirdLandingView
          bird={bird}
          stages={stages}
          relatedArticles={articles.filter(
            (article) =>
              article.relatedBirdVariety?.species === species &&
              article.relatedBirdVariety?.varietySlug === variety
          )}
        />
      </main>
      <Footer />
    </div>
  );
}

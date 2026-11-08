import { notFound } from "next/navigation";
import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GuideSidebar from "@/components/guide/GuideSidebar";
import MobileStageNav from "@/components/guide/MobileStageNav";
import StageContent from "@/components/guide/StageContent";
import { quailStages } from "@/data/quailStagesData";
import { fayoumiStages } from "@/data/fayoumiStagesData";
import { broilerStages } from "@/data/broilerStagesData";
import { sonaliStages } from "@/data/sonaliStagesData";
import { getPublicBird, getPublicGuideStages } from "@/lib/publicContent";
import { canonicalAlternates } from "@/lib/seo";

export const instant = false;

interface PageProps {
  params: Promise<{
    species: string;
    variety: string;
    stage: string;
  }>;
}

export async function generateStaticParams() {
  return [
    ...quailStages.map((stage) => ({ species: "quail", variety: "japanese", stage: stage.slug })),
    ...fayoumiStages.map((stage) => ({ species: "chicken", variety: "fayoumi", stage: stage.slug })),
    ...broilerStages.map((stage) => ({ species: "chicken", variety: "broiler", stage: stage.slug })),
    ...sonaliStages.map((stage) => ({ species: "chicken", variety: "sonali", stage: stage.slug })),
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { species, variety, stage: stageSlug } = await params;
  const stages = await getPublicGuideStages(species, variety);
  const currentStage = stages.find((s) => s.slug === stageSlug);

  if (!currentStage) {
    return {
      title: "গাইড পাওয়া যায়নি — সহজ খামার",
    };
  }

  const bird = await getPublicBird(species, variety);
  const birdName = bird ? bird.nameBn : species === "chicken" ? (variety === "broiler" ? "ব্রয়লার" : variety === "sonali" ? "সোনালি" : "ফাওমি") : "কোয়েল";

  return {
    title: `${currentStage.titleBn} | ${birdName} গাইড — সহজ খামার`,
    alternates: canonicalAlternates(`/birds/${species}/${variety}/${stageSlug}`),
    description: currentStage.feedManagementBn.slice(0, 160),
    openGraph: {
      title: `${currentStage.titleBn} | ${birdName} গাইড`,
      description: currentStage.feedManagementBn.slice(0, 160),
    },
  };
}

export default async function GuideStagePage({ params }: PageProps) {
  const { species, variety, stage: stageSlug } = await params;

  const stages = await getPublicGuideStages(species, variety);
  const stageIndex = stages.findIndex((s) => s.slug === stageSlug);
  if (stageIndex === -1) {
    notFound();
  }

  const currentStage = stages[stageIndex];
  const prevStage = stageIndex > 0 ? stages[stageIndex - 1] : null;
  const nextStage = stageIndex < stages.length - 1 ? stages[stageIndex + 1] : null;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F3]">
      <Header />

      {/* Mobile Horizontal Stage Bar */}
      <MobileStageNav
        stages={stages}
        currentSlug={stageSlug}
        species={species}
        variety={variety}
      />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Desktop Left Sticky Sidebar */}
          <div className="hidden lg:block">
            <GuideSidebar
              stages={stages}
              currentSlug={stageSlug}
              species={species}
              variety={variety}
            />
          </div>

          {/* Right Main Stage Content */}
          <StageContent
            stage={currentStage}
            prevStage={prevStage}
            nextStage={nextStage}
            species={species}
            variety={variety}
            totalStages={stages.length}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

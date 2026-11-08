import type { MetadataRoute } from "next";
import { getPublicArticles, getPublicGuideStages } from "@/lib/publicContent";
import { siteBaseUrl } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!siteBaseUrl) return [];

  const birds = [
    { species: "quail", variety: "japanese" },
    { species: "chicken", variety: "fayoumi" },
    { species: "chicken", variety: "broiler" },
    { species: "chicken", variety: "sonali" },
  ];
  const [articles, ...stagesByBird] = await Promise.all([
    getPublicArticles(),
    ...birds.map(({ species, variety }) => getPublicGuideStages(species, variety)),
  ]);
  const base = siteBaseUrl;

  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/vaccination`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/birds/quail/japanese`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, changeFrequency: "weekly", priority: 0.8 },
    ...birds.flatMap(({ species, variety }, index) => [
      { url: `${base}/birds/${species}/${variety}`, changeFrequency: "monthly" as const, priority: 0.8 },
      ...stagesByBird[index].map((stage) => ({
        url: `${base}/birds/${species}/${variety}/${stage.slug}`,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
    ]),
    ...articles.map((article) => ({
      url: `${base}/blog/${article.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}

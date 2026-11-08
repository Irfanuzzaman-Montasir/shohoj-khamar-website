import { notFound } from "next/navigation";
import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ArticleDetailView from "@/components/blog/ArticleDetailView";
import {
  getPublishedArticles,
} from "@/data/blogData";
import {
  getPublicArticleBySlug,
  getPublicRelatedArticles,
} from "@/lib/publicContent";
import { canonicalAlternates, canonicalUrl } from "@/lib/seo";

export const instant = false;

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const articles = getPublishedArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getPublicArticleBySlug(slug);

  if (!article) {
    return {
      title: "আর্টিকেল পাওয়া যায়নি — সহজ খামার",
    };
  }

  return {
    title: `${article.seoTitleBn}`,
    alternates: canonicalAlternates(`/blog/${slug}`),
    description: article.metaDescBn,
    keywords: article.tags,
    openGraph: {
      title: article.seoTitleBn,
      description: article.metaDescBn,
      type: "article",
      publishedTime: article.publishedDate,
      authors: [article.authorBn],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getPublicArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const related = await getPublicRelatedArticles(slug, 3);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.seoTitleBn || article.titleBn,
    description: article.metaDescBn || article.excerptBn,
    datePublished: article.publishedDate,
    author: { "@type": "Organization", name: article.authorBn || "Shohoj Khamar" },
    publisher: { "@type": "Organization", name: "Shohoj Khamar" },
    ...(canonicalUrl(`/blog/${slug}`) ? { mainEntityOfPage: canonicalUrl(`/blog/${slug}`) } : {}),
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F3]">
      <Header />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }}
        />
        <ArticleDetailView article={article} relatedArticles={related} />
      </main>
      <Footer />
    </div>
  );
}

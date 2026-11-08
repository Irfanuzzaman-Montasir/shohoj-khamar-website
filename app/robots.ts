import type { MetadataRoute } from "next";
import { siteBaseUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/admin", "/admin/"] },
      { userAgent: "OAI-SearchBot", allow: "/", disallow: ["/admin", "/admin/"] },
    ],
    ...(siteBaseUrl ? { sitemap: `${siteBaseUrl}/sitemap.xml` } : {}),
  };
}

import type { Metadata, Viewport } from "next";
import { Noto_Sans_Bengali, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { canonicalAlternates, siteBaseUrl } from "@/lib/seo";
import { SpeedInsights } from "@vercel/speed-insights/next";

const notoSansBengali = Noto_Sans_Bengali({
  weight: ["400", "500", "600", "700"],
  subsets: ["bengali"],
  variable: "--font-noto-sans-bengali",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  themeColor: "#FAF8F3",
};

export const metadata: Metadata = {
  ...(siteBaseUrl ? { metadataBase: new URL(siteBaseUrl) } : {}),
  title: "সহজ খামার | পাখি পালনের বাংলা গাইড",
  description: "বাংলাদেশে কোয়েল ও মুরগি পালনের ব্যবহারিক গাইড: খাবার, পানি, তাপমাত্রা, পরিচর্যা ও টিকা।",
  applicationName: "Shohoj Khamar",
  authors: [{ name: "Shohoj Khamar" }],
  alternates: canonicalAlternates("/"),
  openGraph: {
    type: "website",
    siteName: "Shohoj Khamar",
    locale: "bn_BD",
    title: "সহজ খামার | পাখি পালনের বাংলা গাইড",
    description: "বাংলাদেশে কোয়েল ও মুরগি পালনের ব্যবহারিক বাংলা গাইড।",
  },
  twitter: { card: "summary", title: "সহজ খামার | Shohoj Khamar" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = siteBaseUrl
    ? {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Shohoj Khamar",
        alternateName: "সহজ খামার",
        url: siteBaseUrl,
        inLanguage: ["bn-BD", "en"],
      }
    : null;

  return (
    <html lang="bn" className={`${notoSansBengali.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#FAF8F3] text-[#1A3025]">
        {websiteSchema ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c") }}
          />
        ) : null}
        <LanguageProvider>{children}</LanguageProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}

"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "bn" | "en";

interface Translations {
  [key: string]: {
    bn: string;
    en: string;
  };
}

export const translations: Translations = {
  // Brand
  brandName: {
    bn: "সহজ খামার",
    en: "Shohoj Khamar",
  },
  brandTagline: {
    bn: "সহজ পাখি পালন নির্দেশিকা — প্রথম দিন থেকে উৎপাদন পর্যন্ত।",
    en: "Simple Farming Guidance — From Day One to Production.",
  },

  // Navigation
  navQuail: {
    bn: "কোয়েল পালন",
    en: "Quail Farming",
  },
  navChicken: {
    bn: "মুরগি পালন",
    en: "Chicken Farming",
  },
  navVaccine: {
    bn: "টিকা গাইড",
    en: "Vaccine Guide",
  },
  navBlog: {
    bn: "ব্লগ",
    en: "Blog",
  },
  navAbout: {
    bn: "আমাদের সম্পর্কে",
    en: "About Us",
  },

  // Hero
  heroBadge: {
    bn: "প্রথম দিন থেকে উৎপাদন পর্যন্ত",
    en: "From Day One to Production",
  },
  heroHeadingLine1: {
    bn: "পাখি পালনের প্রতিদিনের",
    en: "Daily Simple Guide for",
  },
  heroHeadingLine2: {
    bn: "সহজ গাইড",
    en: "Poultry Farming",
  },
  heroDescription: {
    bn: "খাদ্য, পানি, পরিবেশ আর যত্ন — বয়স অনুযায়ী সহজ বাংলায়। কোনো নিবন্ধন লাগবে না।",
    en: "Feed, water, environment, and daily care — age-wise in simple language. No registration required.",
  },
  btnStartQuail: {
    bn: "কোয়েলের গাইড শুরু করুন",
    en: "Start Quail Guide",
  },
  btnVaccineSchedule: {
    bn: "টিকার সময়সূচি",
    en: "Vaccination Schedule",
  },
  heroPlaceholderText: {
    bn: "[ খামারের ছবি এখানে যুক্ত হবে ]",
    en: "[ Farm image will be added here ]",
  },

  // Bird Selection
  birdSelectionTitle: {
    bn: "আপনার পাখি বেছে নিন",
    en: "Choose Your Bird",
  },
  birdSelectionSubtitle: {
    bn: "যে পাখি পালন করছেন, তার গাইড খুলুন।",
    en: "Open the guide for the bird you are raising.",
  },
  badgeReady: {
    bn: "গাইড প্রস্তুত",
    en: "Guide Ready",
  },
  badgeComingSoon: {
    bn: "শীঘ্রই আসছে",
    en: "Coming Soon",
  },
  btnViewGuide: {
    bn: "গাইড দেখুন →",
    en: "View Guide →",
  },

  // Bird Names
  quailTitle: {
    bn: "কোয়েল (৩টি জাত)",
    en: "Quail (3 Varieties)",
  },
  quailSubtitleBn: {
    bn: "জাপানি · ইউরোপিয়ান সুপার জায়ান্ট কোটার্নিক্স · দেশি",
    en: "Japanese · European Super Giant Coturnix · Deshi",
  },
  quailSubtitleEn: {
    bn: "Japanese · European Super Giant Coturnix · Deshi",
    en: "Japanese · European Super Giant Coturnix · Deshi",
  },
  sonaliChicken: {
    bn: "সোনালী মুরগি",
    en: "Sonali Chicken",
  },
  broiler: {
    bn: "ব্রয়লার",
    en: "Broiler",
  },
  fayoumi: {
    bn: "ফাওমি",
    en: "Fayoumi",
  },
  tigerChicken: {
    bn: "টাইগার মুরগি",
    en: "Tiger Chicken",
  },
  colorBird: {
    bn: "কালার বার্ড",
    en: "Color Bird",
  },

  // How It Works
  howItWorksTitle: {
    bn: "কীভাবে কাজ করে",
    en: "How It Works",
  },
  step1Num: {
    bn: "১",
    en: "1",
  },
  step1Title: {
    bn: "পাখি বেছে নিন",
    en: "Choose a Bird",
  },
  step1Desc: {
    bn: "যে জাতের পাখি পালন করছেন তা নির্বাচন করুন।",
    en: "Select the variety of bird you are raising on your farm.",
  },
  step2Num: {
    bn: "২",
    en: "2",
  },
  step2Title: {
    bn: "বয়স বেছে নিন",
    en: "Select the Age",
  },
  step2Desc: {
    bn: "পাখির বয়স অনুযায়ী দিন বা সময়কাল খুলুন।",
    en: "Open the specific day or growth stage of your flock.",
  },
  step3Num: {
    bn: "৩",
    en: "3",
  },
  step3Title: {
    bn: "সহজ নির্দেশনা পড়ুন",
    en: "Read Simple Steps",
  },
  step3Desc: {
    bn: "খাদ্য, পানি, পরিবেশ ও দৈনিক যত্নের ছোট ছোট ধাপ।",
    en: "Bite-sized, practical instructions for feed, water, and care.",
  },

  // Vaccination Banner
  vaccineBannerTitle: {
    bn: "টিকার সময়সূচি",
    en: "Vaccination Schedule",
  },
  vaccineBannerDesc: {
    bn: "প্রতিটি প্রকাশিত তথ্যের সঙ্গে উৎস ও পর্যালোচনার অবস্থা দেখানো হবে। যাচাই না হলে তা “পর্যালোচনাধীন” লেখা থাকবে।",
    en: "Published schedule entries show their source and review status. Unverified entries remain clearly marked 'Under Review'.",
  },
  btnViewVaccineGuide: {
    bn: "টিকা গাইড দেখুন",
    en: "View Vaccine Guide",
  },

  // Footer
  footerDisclaimer: {
    bn: "এটি সাধারণ দিকনির্দেশনা। রোগ বা ওষুধের ক্ষেত্রে অবশ্যই পোল্ট্রি পশুচিকিৎসক বা স্থানীয় প্রাণিসম্পদ অফিসের পরামর্শ নিন।",
    en: "This is general guidance. For illness or medication, always consult a registered poultry veterinarian or your local livestock department.",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "bn",
  setLanguage: () => {},
  t: (key) => translations[key]?.bn || String(key),
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("bn");

  useEffect(() => {
    const saved = localStorage.getItem("shohoj_lang") as Language;
    if (saved === "bn" || saved === "en") {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("shohoj_lang", lang);
  };

  const t = (key: keyof typeof translations): string => {
    const entry = translations[key];
    if (!entry) return String(key);
    return entry[language] || entry.bn;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

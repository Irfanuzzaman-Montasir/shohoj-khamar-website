export interface BlogCategory {
  id: string;
  slug: string;
  nameBn: string;
  nameEn: string;
}

export interface BlogArticle {
  id: string;
  slug: string;
  titleBn: string;
  titleEn: string;
  seoTitleBn: string;
  seoTitleEn: string;
  metaDescBn: string;
  metaDescEn: string;
  excerptBn: string;
  excerptEn: string;
  categorySlug: string;
  categoryNameBn: string;
  categoryNameEn: string;
  tags: string[];
  publishedDate: string;
  readTimeBn: string;
  readTimeEn: string;
  authorBn: string;
  authorEn: string;
  relatedBirdVariety?: {
    species: string;
    varietySlug: string;
    nameBn: string;
    nameEn: string;
    guideLink: string;
  };
  relatedArticleSlugs: string[];
  isPublished: boolean;
  contentBn: string[];
  contentEn: string[];
}

export const blogCategories: BlogCategory[] = [
  { id: "all", slug: "all", nameBn: "সকল আর্টিকেল", nameEn: "All Articles" },
  { id: "quail", slug: "quail", nameBn: "কোয়েল পালন", nameEn: "Quail Farming" },
  { id: "chicken", slug: "chicken", nameBn: "মুরগি পালন", nameEn: "Chicken Farming" },
  { id: "feed", slug: "feed", nameBn: "খাবার ও পুষ্টি", nameEn: "Feed & Nutrition" },
  { id: "health", slug: "health", nameBn: "রোগ ও চিকিৎসা", nameEn: "Health & Disease" },
  { id: "economics", slug: "economics", nameBn: "লাভ-ক্ষতির হিসাব", nameEn: "Cost & Profit" },
];

export const blogArticles: BlogArticle[] = [
  {
    id: "art-1",
    slug: "quail-egg-laying-timeline",
    titleBn: "কোয়েল পাখি কত দিনে ডিম দেয়? ডিমের উৎপাদন বাড়ানোর প্রমাণিত উপায়",
    titleEn: "When Do Quails Start Laying Eggs? Proven Methods to Maximize Egg Yield",
    seoTitleBn: "কোয়েল পাখি কত দিনে ডিম দেয়? ডিম উৎপাদন বৃদ্ধির নিয়ম — সহজ খামার",
    seoTitleEn: "When Do Quails Lay Eggs? Complete Egg Yield Guide — Shohoj Khamar",
    metaDescBn: "জাপানি কোয়েল কত দিনে প্রথম ডিম দেয় এবং কী খাবার ও ওষুধ দিলে ডিমের শতকরা হার ৮০-৮৫% পর্যন্ত বজায় থাকে, তার বিস্তারিত জেনে নিন।",
    metaDescEn: "Learn the exact timeline when Japanese Quails begin laying and practical nutrition tips to sustain 80-85% peak production.",
    excerptBn:
      "জাপানি কোয়েল সাধারণত ৪৫ থেকে ৫০ দিনের মধ্যে প্রথম ডিম দেওয়া শুরু করে। সঠিক পুষ্টি, ১৬ ঘণ্টার আলো ও ক্যালসিয়াম নিশ্চিত করলে একটি কোয়েল বছরে ২৫০-৩০০টি ডিম দিয়ে থাকে।",
    excerptEn:
      "Japanese Quails typically start laying between 45 and 50 days of age. Providing balanced nutrition, a 16-hour photoperiod, and adequate calcium ensures 250-300 eggs annually.",
    categorySlug: "quail",
    categoryNameBn: "কোয়েল পালন",
    categoryNameEn: "Quail Farming",
    tags: ["কোয়েল ডিম", "ডিম উৎপাদন", "ই-সেল", "ক্যালপ্লেক্স", "আলোর সময়সূচি"],
    publishedDate: "২০২৬-১১-০১",
    readTimeBn: "৫ মিনিট পাঠ",
    readTimeEn: "5 min read",
    authorBn: "সহজ খামার সম্পাদকীয় টিম",
    authorEn: "Shohoj Khamar Editorial",
    relatedBirdVariety: {
      species: "quail",
      varietySlug: "japanese",
      nameBn: "জাপানি কোয়েল",
      nameEn: "Japanese Quail",
      guideLink: "/birds/quail/japanese/day-40-55",
    },
    relatedArticleSlugs: ["quail-feed-preparation-guide", "cost-profit-100-quail-farming"],
    isPublished: true,
    contentBn: [
      "কোয়েল পালন বাংলাদেশের অন্যতম দ্রুত বর্ধনশীল ও লাভজনক পোল্ট্রি খাত। নতুন খামারিদের সবচেয়ে সাধারণ প্রশ্ন হলো: 'কোয়েল পাখি কত দিনে ডিম দেয়?' এবং 'কীভাবে সারা বছর ভালো ডিম উৎপাদন ধরে রাখা যায়?'",
      "## ১. কোয়েল কত দিনে প্রথম ডিম দেয়?",
      "উন্নত জাতের জাপানি কোয়েল (Japanese Coturnix Quail) মাত্র **৪৫ থেকে ৫০ দিনের মধ্যে** প্রথম ডিম দেওয়া শুরু করে। ৫৫ থেকে ৬০ দিনের মধ্যে খামারের উৎপাদন ৭০% থেকে ৮০%-এ উন্নীত হয়। মুরগির যেখানে ডিম দিতে ৫ থেকে ৬ মাস সময় লাগে, সেখানে কোয়েল মাত্র দেড় মাসেই বাণিজ্যিক উৎপাদনে চলে আসে।",
      "## ২. ডিমের উৎপাদন বাড়ানোর ৫টি গোপন কৌশল",
      "খামারিদের মাঠপর্যায়ের অভিজ্ঞতা অনুযায়ী ভালো ডিম পেতে হলে নিচের ৫টি নিয়ম কঠোরভাবে অনুসরণ করতে হবে:",
      "- **১৬ ঘণ্টার অপরিবর্তনশীল আলো:** কোয়েলের মস্তিষ্কের পিটুইটারি গ্রন্থি আলোকে উদ্দীপিত হয়ে ডিম ছাড়ার হরমোন নিঃসরণ করে। প্রাকৃতিক দিনের আলোর সাথে সকাল ও সন্ধ্যায় অতিরিক্ত কৃত্রিম আলো দিয়ে দৈনিক ১৬ ঘণ্টা আলো নিশ্চিত করতে হবে।",
      "- **সকালে ই-সেল ও রাতে ক্যালপ্লেক্স:** ডিম্বাশয়ের বিকাশ ও ফার্টিলিটির জন্য সকালে পানিতে **ই-সেল (E-Sel)** এবং রাতে ডিমের খোসা মজবুত করার জন্য **ক্যালপ্লেক্স (Calplex)** দেওয়া অত্যন্ত জরুরি।",
      "- **খাবারে ২০% ব্রয়লার স্টার্টার ফিড রাখা:** লেয়ার-১ ফিডের সাথে অন্তত ২০% ভালো ব্রয়লার স্টার্টার ফিড মিশিয়ে খাওয়ালে খাবারে প্রয়োজনীয় মেটাবোলাইজেবল এনার্জি ও ক্রুড প্রোটিন বজায় থাকে, যা ডিমের সংখ্যা বাড়ায়।",
      "- **বিকালের শান্ত পরিবেশ:** কোয়েল সাধারণত বিকাল ৩টা থেকে সন্ধ্যার মধ্যে ডিম পাড়ে। এ সময় শেডে অতিরিক্ত কোলাহল বা বাইরের লোক ঢোকানো যাবে না।",
      "- **অপরিহার্য তাজা পানি:** ডিমের ওজনের প্রায় ৬৫% পানি। পানি পানে কোনো বাধা সৃষ্টি হলে ডিম উৎপাদন সাথে সাথে কমে যাবে।",
      "## ৩. ডিম উৎপাদন বন্ধ হওয়ার সাধারণ কারণসমূহ",
      "হঠাৎ তাপমাত্রা বৃদ্ধি বা ঠান্ডা লাগা, লিটার ভেজা থাকা, আলো কমে যাওয়া এবং খাবারে প্রোটিন বা ক্যালসিয়ামের অভাব হলে ডিমের হার ৫০%-এর নিচে নেমে যেতে পারে। তাই কোনো ঘাটতি দেখা দিলে দ্রুত সংশোধন করুন।",
    ],
    contentEn: [
      "Quail farming is one of the fastest-growing poultry businesses in Bangladesh. One of the top questions among beginner farmers is: 'When do quails start laying eggs?' and 'How do we maintain high peak lay persistence?'",
      "## 1. When Do Quails Lay Their First Egg?",
      "Healthy Japanese Quails begin laying their first eggs between **45 to 50 days of age**. By Day 55 to 60, the flock reaches 70% to 80% lay rate. Unlike commercial chickens which require 5–6 months, quails enter production in just 6 weeks.",
      "## 2. Five Proven Rules to Maximize Egg Yield",
      "- **16 Hours Constant Light:** Quail ovaries respond directly to day length. Supplement natural sunlight with early morning and evening lighting.",
      "- **Morning E-Sel & Evening Calplex:** Vitamin E + Selenium stimulates the ovaries in the morning, while liquid calcium (Calplex) at night guarantees thick, crack-free eggshells.",
      "- **Retain 20% Broiler Starter in Layer Ration:** Blending 20% high-energy broiler starter into commercial layer mash supplies the amino acid density required for peak laying.",
      "- **Peaceful Afternoon Environment:** Most quails oviposit between 3 PM and dusk. Avoid loud noises or disturbances during this window.",
      "- **Continuous Fresh Cool Water:** Water deprivation even for a few hours causes an immediate slump in egg output.",
    ],
  },
  {
    id: "art-2",
    slug: "cost-profit-100-quail-farming",
    titleBn: "১০০টি কোয়েল পালনে কত টাকা খরচ ও লাভ হয়? বিস্তারিত খাঁচা ও খাবার হিসাব",
    titleEn: "Cost and Profit Breakdown of Raising 100 Quails: Real-World Farm Economics",
    seoTitleBn: "১০০টি কোয়েল পালনে কত টাকা খরচ ও লাভ? লাভ-ক্ষতির পূর্ণ হিসাব — সহজ খামার",
    seoTitleEn: "Cost & Profit of 100 Quails Farming: Detailed Economics — Shohoj Khamar",
    metaDescBn: "১০০টি জাপানি কোয়েল পালনে খাঁচা, বাচ্চা, খাবার ও ওষুধের খরচ কত? মাসে কত টাকা নিট লাভ থাকে? বিস্তারিত বাস্তবসম্মত হিসাব দেখে নিন।",
    metaDescEn: "Detailed realistic cost and profit breakdown for 100 Japanese quails including chicks, cages, feed, medicine and net monthly returns.",
    excerptBn:
      "১০০টি কোয়েল পালনে প্রাথমিক বিনিয়োগ প্রায় ৫,০০০–৭,০০০ টাকা। ডিম বিক্রি থেকে প্রতি মাসে প্রায় ২,৫০০–৩,৫০০ টাকা পর্যন্ত নিট লাভ করা সম্ভব।",
    excerptEn:
      "Starting with 100 quails requires an initial capital of around 5,000–7,000 BDT, generating a steady monthly net profit of 2,500–3,500 BDT from egg sales.",
    categorySlug: "economics",
    categoryNameBn: "লাভ-ক্ষতির হিসাব",
    categoryNameEn: "Cost & Profit",
    tags: ["কোয়েল খরচ", "লাভের হিসাব", "১০০ কোয়েল", "পোল্ট্রি ব্যবসা", "বাণিজ্যিক খামার"],
    publishedDate: "২০২৬-১০-২৮",
    readTimeBn: "৬ মিনিট পাঠ",
    readTimeEn: "6 min read",
    authorBn: "সহজ খামার সম্পাদকীয় টিম",
    authorEn: "Shohoj Khamar Editorial",
    relatedBirdVariety: {
      species: "quail",
      varietySlug: "japanese",
      nameBn: "জাপানি কোয়েল",
      nameEn: "Japanese Quail",
      guideLink: "/birds/quail/japanese",
    },
    relatedArticleSlugs: ["quail-egg-laying-timeline", "quail-feed-preparation-guide"],
    isPublished: true,
    contentBn: [
      "স্বল্প পুঁজিতে ঘরে বসে বা ছাদ-বাগানে পোল্ট্রি ব্যবসা শুরু করার জন্য ১০০টি কোয়েল পালন একটি আদর্শ পারিবারিক ও ক্ষুদ্র বাণিজ্যিক উদ্যোগ।",
      "## ১. প্রাথমিক স্থায়ী খরচ (এককালীন)",
      "- **১০০টি কোয়েল বাচ্চা (১ দিন বয়স):** ১০০ × ১৫ টাকা = ১,৫০০ টাকা।",
      "- **৪ তলা বিশিষ্ট ১০০ কোয়েলের খাঁচা:** প্রায় ৩,৫০০ – ৪,০০০ টাকা।",
      "- **ব্রুডিং বাল্ব, থার্মোমিটার ও ড্রিংকার-ফিডার:** ৫০০ টাকা।",
      "**মোট এককালীন প্রারম্ভিক খরচ:** প্রায় ৫,৫০০ – ৬,০০০ টাকা।",
      "## ২. ডিম আসা পর্যন্ত মাসিক চলতি খরচ (প্রথম ৪৫ দিন)",
      "একটি কোয়েল বাচ্চা ১ দিন থেকে ৪৫ দিন পর্যন্ত মোট প্রায় ৫০০–৬০০ গ্রাম খাবার খায়।",
      "- ১০০টি বাচ্চার জন্য মোট খাবার = প্রায় ৫০–৬০ কেজি।",
      "- ভালো মানের ব্রয়লার স্টার্টার ফিডের দাম (৭০ টাকা/কেজি) = ৩,৫০০ – ৪,২০০ টাকা।",
      "- লাইসোভিট, জিংক বি, ক্যালপ্লেক্স ও অন্যান্য সাপ্লিমেন্ট = প্রায় ৩০০ – ৪০০ টাকা।",
      "## ৩. নিয়মিত ডিম উৎপাদনকালীন মাসিক আয়-ব্যয় (পূর্ণ ডিম পর্যায়)",
      "১০০টি কোয়েলের মধ্যে ৮০টি স্ত্রী পাখি দিনে গড়ে ৮০% হারে প্রায় **৬৫–৭০টি ডিম** দেয়।",
      "- **মাসিক ডিম উৎপাদন:** ৬৫টি × ৩০ দিন = ১,৯৫০টি ডিম।",
      "- **ডিম বিক্রির আয় (পাইকারি ৩.০০ টাকা/ডিম):** ১,৯৫০ × ৩.০০ = **৫,৮৫০ টাকা** (খুচরা বিক্রিতে ৪.০০ টাকা পর্যন্ত হতে পারে, যা প্রায় ৭,৮০০ টাকা)।",
      "- **মাসিক খাবার খরচ:** ১০০ পাখি × ২৫ গ্রাম = ২.৫ কেজি খাবার/দিন × ৩০ দিন = ৭৫ কেজি ফিড × ৬৫ টাকা = **৪,৮৭৫ টাকা**।",
      "- **মাসিক ওষুধ ও যত্ন খরচ:** প্রায় ২৫০ টাকা।",
      "## ৪. নিট মাসিক মুনাফা",
      "খুচরা পর্যায়ে ডিম বিক্রি করলে প্রতি মাসে **২,৫০০ থেকে ৩,৫০০ টাকা** নিট লাভ থাকে। খামার বড় করে ৫০০ বা ১০০০ কোয়েল করলে এই লাভ বহুগুণে বৃদ্ধি পায়।",
    ],
    contentEn: [
      "Starting a backyard or rooftop poultry business with 100 quails requires minimal investment and generates quick monthly cash flow.",
      "## 1. Initial Fixed Capital (One-Time)",
      "- 100 day-old chicks @ 15 BDT = 1,500 BDT",
      "- 4-tier wire cage for 100 quails = 3,500–4,000 BDT",
      "- Drinkers, feeders, brooding lamp = 500 BDT",
      "**Total initial investment:** ~5,500 – 6,000 BDT.",
      "## 2. Monthly Feed & Medicine Costs",
      "Adult quails consume 20-25g feed per day. 100 birds consume 75 kg feed monthly, costing around 4,800 BDT.",
      "## 3. Revenue & Net Profit",
      "80 adult females laying at 80% produce ~1,950 eggs monthly. At retail rates of 3.50–4.00 BDT per egg, gross income is 7,000–7,800 BDT, leaving **2,500–3,200 BDT net monthly profit** after feed and supplement costs.",
    ],
  },
  {
    id: "art-3",
    slug: "quail-feed-preparation-guide",
    titleBn: "কোয়েল পাখির খাবার তৈরির নিয়ম ও ঘরোয়া পুষ্টি ফর্মুলা",
    titleEn: "Quail Feed Formulation Guide: Ingredients and Nutrition Ratios",
    seoTitleBn: "কোয়েল পাখির খাবার তৈরির নিয়ম ও ফর্মুলা — সহজ খামার",
    seoTitleEn: "Quail Feed Formulation & Nutrition Guide — Shohoj Khamar",
    metaDescBn: "কোয়েলের বাচ্চা, গ্রোয়ার ও ডিমপাড়া বয়সে কী কী উপাদান দিয়ে খাবার তৈরি করতে হয়? ভুট্টা, খৈল, শুঁটকি ও ক্যালসিয়াম অনুপাতের সহজ গাইড।",
    metaDescEn: "Step-by-step quail feed formulation ratios using corn, soybean meal, fishmeal, and limestone for starters, growers, and layers.",
    excerptBn:
      "কোয়েলের খাবারে মুরগির চেয়ে বেশি প্রোটিন লাগে। বাচ্চা বয়সে ২৪–২৬% এবং ডিমপাড়া বয়সে ১৮–২০% প্রোটিন ও ৩% ক্যালসিয়ামযুক্ত খাবার দিতে হয়।",
    excerptEn:
      "Quails require higher protein than chickens: 24–26% crude protein for starters and 18–20% protein with 3% calcium for active layers.",
    categorySlug: "feed",
    categoryNameBn: "খাবার ও পুষ্টি",
    categoryNameEn: "Feed & Nutrition",
    tags: ["কোয়েল খাবার", "ফিড ফর্মুলা", "প্রোটিন", "ক্যালসিয়াম", "লেয়ার ফিড"],
    publishedDate: "২০২৬-১০-১৫",
    readTimeBn: "৫ মিনিট পাঠ",
    readTimeEn: "5 min read",
    authorBn: "সহজ খামার সম্পাদকীয় টিম",
    authorEn: "Shohoj Khamar Editorial",
    relatedBirdVariety: {
      species: "quail",
      varietySlug: "japanese",
      nameBn: "জাপানি কোয়েল",
      nameEn: "Japanese Quail",
      guideLink: "/birds/quail/japanese/day-9-13",
    },
    relatedArticleSlugs: ["quail-egg-laying-timeline", "cost-profit-100-quail-farming"],
    isPublished: true,
    contentBn: [
      "কোয়েল পালনে মোট খরচের প্রায় ৭০% ব্যয় হয় খাবারের পেছনে। তাই খাবারের গুণগত মান ঠিক রাখা এবং অপচয় রোধ করাই সফলতার মূল চাবিকাঠি।",
      "## ১. কোয়েলের বিভিন্ন বয়সে পুষ্টির চাহিদা",
      "- **স্টার্টার পর্যায় (১–১৪ দিন):** ২৪% থেকে ২৬% ক্রুড প্রোটিন (CP)। বাচ্চা বয়সে মাংসপেশি ও পালক দ্রুত বৃদ্ধির জন্য উচ্চ প্রোটিন প্রয়োজন।",
      "- **গ্রোয়ার পর্যায় (১৫–৪০ দিন):** ২০% থেকে ২২% প্রোটিন।",
      "- **লেয়ার পর্যায় (৪০ দিন+):** ১৯% থেকে ২০% প্রোটিন এবং ৩.০% থেকে ৩.৫% ক্যালসিয়াম।",
      "## ২. ১০০ কেজি কোয়েল লেয়ার ফিড তৈরির ঘরোয়া ফর্মুলা",
      "যদি আপনি নিজস্ব ফিড মিল বা ব্লেন্ডিং মেশিনে খাবার তৈরি করতে চান, তবে নিচের মিশ্রণটি মানসম্মত:",
      "- **ভুট্টা ভাঙা (Maize):** ৫০ কেজি",
      "- **সয়াবিন মিল (Soybean Meal):** ২৫ কেজি",
      "- **ভালো মানের শুঁটকি গুঁড়ো (Fish Meal 60% CP):** ১২ কেজি",
      "- **রাইস পলিশ বা গমের ভুসি:** ৫ কেজি",
      "- **ঝিনুক চূর্ণ বা চুনাপাথর (Limestone/Calcium):** ৬.৫ কেজি",
      "- **ডাই-ক্যালসিয়াম ফসফেট (DCP):** ১ কেজি",
      "- **ভিটামিন-মিনারেল প্রিমিক্স ও লবণ:** ০.৫ কেজি",
      "## ৩. প্রস্তুতকৃত বাণিজ্যিক ফিড ব্যবহারের নিয়ম",
      "ক্ষুদ্র খামারিদের জন্য নিজস্ব খাবার তৈরি করার চেয়ে বাজারে পাওয়া ভালো ব্র্যান্ডের (যেমন নারিশ, কাজী, আমান, সিপি, প্রভিটা) ব্রয়লার স্টার্টার ও লেয়ার-১ ফিড কিনে ব্যবহার করা বেশি নিরাপদ ও সুবিধাজনক।",
    ],
    contentEn: [
      "Feed accounts for approximately 70% of total operational expenses in quail farming. Optimal nutrition ensures sustained profitability.",
      "## 1. Nutritional Requirements by Growth Stage",
      "- **Starter (0–2 weeks):** 24–26% Crude Protein (CP)",
      "- **Grower (3–5 weeks):** 20–22% CP",
      "- **Layer (6 weeks+):** 19–20% CP with 3.0–3.5% Calcium",
      "## 2. 100 kg Layer Ration Formulation",
      "- Ground Yellow Maize: 50 kg",
      "- Soybean Meal (44% CP): 25 kg",
      "- Quality Fish Meal: 12 kg",
      "- Rice Polish: 5 kg",
      "- Coarse Oyster Shell / Limestone: 6.5 kg",
      "- DCP: 1 kg",
      "- Vitamin-Mineral Premix & Salt: 0.5 kg",
    ],
  },
  {
    id: "art-4",
    slug: "sonali-chicken-farming-guide",
    titleBn: "সোনালি মুরগি পালনের সম্পূর্ণ গাইড ও ব্রুডিং প্রস্তুতি",
    titleEn: "Complete Guide to Sonali Chicken Farming and Brooding Setup",
    seoTitleBn: "সোনালি মুরগি পালনের সম্পূর্ণ গাইড ও ব্রুডিং — সহজ খামার",
    seoTitleEn: "Sonali Chicken Farming Guide & Brooding Setup — Shohoj Khamar",
    metaDescBn: "সোনালি মুরগির বাচ্চার ব্রুডিং, খাবার তালিকা, ওজন বৃদ্ধি ও রোগ প্রতিরোধ ব্যবস্থাপনা নিয়ে নতুন খামারিদের জন্য পূর্ণাঙ্গ নির্দেশিকা।",
    metaDescEn: "Complete guide on Sonali Chicken brooding setup, feeding schedule, target weights, and biosecurity precautions.",
    excerptBn:
      "বাংলাদেশে সোনালি মুরগির মাংসের চাহিদা অত্যন্ত বেশি। ৬০ থেকে ৭০ দিনে ৮০০–১০০০ গ্রাম ওজন আনতে সঠিক ব্রুডিং ও খাদ্য ব্যবস্থাপনা অপরিহার্য।",
    excerptEn:
      "Sonali chickens are in high demand in Bangladesh. Achieving 800-1000g live body weight in 60-70 days demands meticulous brooding and feeding management.",
    categorySlug: "chicken",
    categoryNameBn: "মুরগি পালন",
    categoryNameEn: "Chicken Farming",
    tags: ["সোনালি মুরগি", "ব্রুডিং", "পোল্ট্রি মাংস", "মুরগির খাবার", "খামার ব্যবস্থাপনা"],
    publishedDate: "২০২৬-১০-০৫",
    readTimeBn: "৭ মিনিট পাঠ",
    readTimeEn: "7 min read",
    authorBn: "সহজ খামার সম্পাদকীয় টিম",
    authorEn: "Shohoj Khamar Editorial",
    relatedBirdVariety: {
      species: "chicken",
      varietySlug: "sonali",
      nameBn: "সোনালি মুরগি",
      nameEn: "Sonali Chicken",
      guideLink: "/birds/chicken/sonali/day-1",
    },
    relatedArticleSlugs: ["fayoumi-chicken-care-guide", "broiler-chicken-brooding-guide"],
    isPublished: true,
    contentBn: [
      "সোনালি মুরগি হলো ফাইয়ূমী মোরগ এবং রোড আইল্যান্ড রেড (RIR) মুরগির একটি সংকর জাত। এটি দেশি মুরগির মতো স্বাদ ও রোগপ্রতিরোধী হওয়ায় বাংলাদেশের ভোক্তাদের কাছে অত্যন্ত জনপ্রিয়।",
      "## ১. সোনালি বাচ্চার ব্রুডিং ব্যবস্থাপনা",
      "প্রথম সপ্তাহে বাচ্চার তাপমাত্রা ৯৫° ফারেনহাইটে রাখতে হবে এবং প্রতি সপ্তাহে ৫° করে কমিয়ে চতুর্থ সপ্তাহে স্বাভাবিক তাপমাত্রায় আনতে হবে। মেঝের কাঠের গুঁড়ো বা তুষের লিটার সবসময় শুকনা রাখতে হবে।",
      "## ২. খাদ্য ও বৃদ্ধির টার্গেট",
      "- **১–২৮ দিন:** সোনালি স্টার্টার ফিড।",
      "- **২৯–৬০ দিন:** সোনালি গ্রোয়ার ফিড।",
      "- **টার্গেট ওজন:** ৬০ দিনে গড়ে ৮০০–৯০০ গ্রাম এবং ৭০ দিনে ১ কেজি।",
      "## ৩. নিয়মিত টিকা ও জৈব নিরাপত্তা",
      "মুরগিতে রানিক্ষেত (ND) ও গামবোরো (IBD) রোগের টিকা সময়মতো দেওয়া বাধ্যতামূলক। টিকা সংক্রান্ত বিস্তারিত নির্দেশিকা আমাদের টিকা গাইড পাতায় দেখুন।",
    ],
    contentEn: [
      "Sonali is a cross between Fayoumi and Rhode Island Red (RIR), highly prized for its resemblance to native chicken in meat texture and flavor.",
      "## 1. Brooding Management",
      "Maintain Day 1 brooding temperature at 95°F and decrease by 5°F weekly. Keep pine shaving litter dry.",
      "## 2. Feeding & Growth Targets",
      "- Starter phase: Days 1–28",
      "- Grower phase: Days 29–60",
      "- Target live weight: 800–900g by Day 60, reaching 1 kg by Day 70.",
    ],
  },
  {
    id: "art-6",
    slug: "fayoumi-chicken-care-guide",
    titleBn: "ফাওমি মুরগি পালন: বাচ্চা থেকে ডিম পর্যন্ত পরিচর্যা",
    titleEn: "Fayoumi Chicken Care: From Chicks to Laying",
    seoTitleBn: "ফাওমি মুরগি পালন ও ডিমের প্রস্তুতি — সহজ খামার",
    seoTitleEn: "Fayoumi Chicken Rearing and Pre-lay Care — Shohoj Khamar",
    metaDescBn: "ফাওমি মুরগির ব্রুডিং, স্টার্টার ও গ্রোয়ার ফিড, ডিমের আগে ফিড পরিবর্তন, আলো এবং পরিচ্ছন্নতা নিয়ে ব্যবহারিক নির্দেশিকা।",
    metaDescEn: "A practical Fayoumi guide to brooding, starter and grower feed, pre-lay feed changes, lighting, and hygiene.",
    excerptBn: "ফাওমি বাচ্চাকে প্রথম দিন থেকে ডিম পাড়া পর্যন্ত বয়স অনুযায়ী খাবার, উষ্ণতা, শুকনো লিটার ও আলো দিন।",
    excerptEn: "Care for Fayoumi chicks through laying with age-appropriate feed, warmth, dry litter, and a steady lighting plan.",
    categorySlug: "chicken",
    categoryNameBn: "মুরগি পালন",
    categoryNameEn: "Chicken Farming",
    tags: ["ফাওমি মুরগি", "ব্রুডিং", "লেয়ার ফিড", "ডিম উৎপাদন", "পোল্ট্রি পরিচর্যা"],
    publishedDate: "২০২৬-১১-০৬",
    readTimeBn: "৬ মিনিট পাঠ",
    readTimeEn: "6 min read",
    authorBn: "সহজ খামার সম্পাদকীয় টিম",
    authorEn: "Shohoj Khamar Editorial",
    relatedBirdVariety: {
      species: "chicken",
      varietySlug: "fayoumi",
      nameBn: "ফাওমি মুরগি",
      nameEn: "Fayoumi Chicken",
      guideLink: "/birds/chicken/fayoumi/day-1",
    },
    relatedArticleSlugs: ["sonali-chicken-farming-guide", "broiler-chicken-brooding-guide"],
    isPublished: true,
    contentBn: [
      "ফাওমি পালন শুরু করার আগে বাচ্চার জন্য শুকনো, বাতাসের ঝাপটামুক্ত ব্রুডার এবং পরিষ্কার পানি প্রস্তুত করুন। বাচ্চার উচ্চতায় তাপমাত্রা মাপুন এবং তাদের ছড়িয়ে থাকা বা গাদাগাদি করার আচরণ দেখে তাপ ঠিক করুন।",
      "## বয়স অনুযায়ী খাবার",
      "প্রথম দিকে সোনালি বা ব্রয়লার স্টার্টার হালকা গুঁড়া করে দিন। বাচ্চা সহজে খেতে পারলে দানাদার স্টার্টারে যান। বড় হওয়ার পর গ্রোয়ার ফিড দিন এবং ডিমের প্রস্তুতির সময় গ্রোয়ার থেকে লেয়ার-১ ফিডে ধীরে পরিবর্তন করুন।",
      "## পানি, লিটার ও চলাফেরা",
      "পানির পাত্র নিয়মিত ধুয়ে দিন এবং ভেজা লিটার দ্রুত সরান। ফাওমি সক্রিয় পাখি, তাই নিরাপদ ঘেরা জায়গায় চলাফেরার সুযোগ রাখা যায়; শিকারি ও পালিয়ে যাওয়ার ঝুঁকি কমাতে বেড়া ঠিক রাখুন।",
      "## ডিমের প্রস্তুতি",
      "ডিমের আগে ফিড পরিবর্তন ও আলোর সময়সূচি ধীরে সমন্বয় করুন। হঠাৎ খাদ্য বা আলো বদলাবেন না। ডিম পাড়া শুরু হলে সম্পূর্ণ লেয়ার ফিড ও পরিষ্কার পানির ধারাবাহিক ব্যবস্থা রাখুন, এবং ডিম নিয়মিত সংগ্রহ করুন।",
      "## টিকা ও ওষুধ",
      "হ্যাচারির টিকা রেকর্ড সংরক্ষণ করে স্থানীয় পশুচিকিৎসক বা প্রাণিসম্পদ কর্মকর্তার পরামর্শে পরবর্তী টিকা ঠিক করুন। ওষুধ বা কৃমিনাশক ব্যবহারের আগে পণ্যের লেবেল, প্রেসক্রিপশন এবং ডিমের withdrawal period যাচাই করুন।",
      "বয়সভিত্তিক খাবার, তাপমাত্রা, পরিচর্যা ও টিকার নোট দেখতে ফাওমি পালন নির্দেশিকা খুলুন।",
    ],
    contentEn: [
      "Before starting a Fayoumi flock, prepare a dry, draft-free brooder and clean water. Measure heat at chick height and adjust it based on whether the chicks spread evenly or huddle together.",
      "## Feed by age",
      "Start with lightly crumbled Sonali or broiler starter. Move to starter crumbles when chicks can eat them easily. Offer grower feed as birds mature, then transition gradually from grower to layer-1 feed before laying.",
      "## Water, litter, and activity",
      "Wash drinkers regularly and remove wet litter promptly. Fayoumi are active birds, so a secure enclosed area can support movement and foraging. Keep fencing in good condition to reduce escape and predator risks.",
      "## Preparing for eggs",
      "Adjust feed and lighting gradually before laying. Avoid sudden changes. Once laying begins, provide a complete layer ration, clean water, and regular egg collection.",
      "## Vaccines and medicines",
      "Keep hatchery vaccine records and plan later vaccines with a local veterinarian or livestock officer. Before using medicines or dewormers, check the product label, prescription, and egg withdrawal period.",
      "Open the Fayoumi care guide for its age-based feed, temperature, care, and vaccine notes.",
    ],
  },
  {
    id: "art-7",
    slug: "broiler-chicken-brooding-guide",
    titleBn: "ব্রয়লার মুরগির ব্রুডিং, খাবার ও বিক্রির প্রস্তুতি",
    titleEn: "Broiler Brooding, Feeding, and Market Preparation",
    seoTitleBn: "ব্রয়লার মুরগির খাবার ও ব্রুডিং গাইড — সহজ খামার",
    seoTitleEn: "Broiler Chicken Brooding and Feeding Guide — Shohoj Khamar",
    metaDescBn: "ব্রয়লার বাচ্চার প্রথম দিনের প্রস্তুতি, স্টার্টার-গ্রোয়ার-ফিনিশার ফিড, তাপমাত্রা, লিটার ও বিক্রির আগের সতর্কতা জানুন।",
    metaDescEn: "Learn broiler chick preparation, starter-grower-finisher feeding, brooding temperature, litter care, and pre-sale precautions.",
    excerptBn: "ব্রয়লারের দ্রুত বৃদ্ধির জন্য পরিষ্কার ব্রুডার, সহজে পাওয়া খাবার-পানি, শুকনো লিটার এবং ধাপে ধাপে ফিড পরিবর্তন গুরুত্বপূর্ণ।",
    excerptEn: "Broilers need a clean brooder, accessible feed and water, dry litter, and gradual feed transitions for steady growth.",
    categorySlug: "chicken",
    categoryNameBn: "মুরগি পালন",
    categoryNameEn: "Chicken Farming",
    tags: ["ব্রয়লার মুরগি", "ব্রুডিং", "স্টার্টার ফিড", "ফিনিশার ফিড", "খামার ব্যবস্থাপনা"],
    publishedDate: "২০২৬-১১-০৬",
    readTimeBn: "৬ মিনিট পাঠ",
    readTimeEn: "6 min read",
    authorBn: "সহজ খামার সম্পাদকীয় টিম",
    authorEn: "Shohoj Khamar Editorial",
    relatedBirdVariety: {
      species: "chicken",
      varietySlug: "broiler",
      nameBn: "ব্রয়লার মুরগি",
      nameEn: "Broiler Chicken",
      guideLink: "/birds/chicken/broiler/day-1",
    },
    relatedArticleSlugs: ["sonali-chicken-farming-guide", "fayoumi-chicken-care-guide"],
    isPublished: true,
    contentBn: [
      "বাচ্চা আসার আগে ব্রুডার পরিষ্কার করে উষ্ণ করুন, পানির পাত্র বসান এবং স্টার্টার খাবার প্রস্তুত রাখুন। খাবার অগভীর পাত্রে বা পরিষ্কার কাগজে ছড়িয়ে দিলে বাচ্চারা সহজে খুঁজে পায়।",
      "## ব্রুডিং তাপ ও আচরণ",
      "প্রথম সপ্তাহে বাচ্চার উচ্চতায় তাপমাত্রা মাপুন এবং পরে বয়সের সঙ্গে ধীরে কমান। বাচ্চা সমানভাবে ছড়িয়ে থাকলে সাধারণত স্বস্তিতে থাকে; গাদাগাদি করলে ঠান্ডা, আর তাপের উৎস থেকে দূরে সরে গেলে অতিরিক্ত গরম হতে পারে।",
      "## বয়স অনুযায়ী ফিড",
      "স্টার্টার দিয়ে শুরু করুন, পরে বয়স ও ব্যবস্থাপনা অনুযায়ী গ্রোয়ার ফিডে যান। বিক্রির আগের পর্যায়ে ফিনিশার ফিড দিন। ফিড পরিবর্তন ধীরে করুন এবং ফিডার এমনভাবে রাখুন যাতে সব পাখি পৌঁছাতে পারে।",
      "## পানি, লিটার ও বাতাস চলাচল",
      "সবসময় পরিষ্কার পানি দিন। ভেজা লিটার দ্রুত সরিয়ে ঘরে পর্যাপ্ত বাতাস চলাচল রাখুন; পানির ছিটা ও জমে থাকা আর্দ্রতা নিয়ন্ত্রণ করুন।",
      "## টিকা ও ওষুধের সতর্কতা",
      "আপনার খামারের টিকার পরিকল্পনা হ্যাচারির রেকর্ড ও স্থানীয় পশুচিকিৎসকের সঙ্গে মিলিয়ে নিন। অসুস্থতার লক্ষণ দেখা দিলে রোগ নির্ণয় ছাড়া অ্যান্টিবায়োটিক শুরু করবেন না। ওষুধের লেবেল এবং মাংসের withdrawal period বিক্রির আগে যাচাই করুন।",
      "বয়সভিত্তিক খাবার, তাপমাত্রা, টিকা ও পরিচর্যার তালিকার জন্য ব্রয়লার গাইড দেখুন।",
    ],
    contentEn: [
      "Clean and warm the brooder before chicks arrive. Set up drinkers and prepare starter feed. Scattering feed in shallow trays or on clean paper helps chicks find it.",
      "## Brooding heat and behavior",
      "Measure temperature at chick height during the first week and reduce supplemental heat gradually as birds grow. Evenly spread chicks are usually comfortable; huddling can indicate cold, while moving away from the heat can indicate overheating.",
      "## Feed by age",
      "Start with starter feed, transition to grower feed as appropriate, then offer finisher feed before market. Make feed changes gradually and position feeders so all birds can reach them.",
      "## Water, litter, and ventilation",
      "Provide clean water at all times. Remove wet litter promptly and maintain adequate ventilation. Control water spills and damp areas.",
      "## Vaccines and medicine precautions",
      "Confirm the flock vaccination plan against hatchery records and local veterinary advice. Do not start antibiotics without a diagnosis. Check product labels and meat withdrawal periods before sale.",
      "Open the Broiler guide for age-based feed, temperature, vaccine, and care notes.",
    ],
  },
  {
    id: "art-5",
    slug: "quail-disease-prevention-care",
    titleBn: "কোয়েল পাখির সাধারণ রোগ, লক্ষণ ও প্রাথমিক চিকিৎসা সতর্কতা",
    titleEn: "Common Quail Diseases, Symptoms, and Biosecurity Safeguards",
    seoTitleBn: "কোয়েল পাখির রোগ ও চিকিৎসা সতর্কতা — সহজ খামার",
    seoTitleEn: "Quail Diseases & Prevention Guide — Shohoj Khamar",
    metaDescBn: "কোয়েলের কক্সিডিওসিস, ঠান্ডা লাগা ও আমাশয় রোগের লক্ষণ এবং প্রতিকারের সঠিক নিয়ম। অ্যান্টিবায়োটিকের অপব্যবহার রোধে বিশেষ সতর্কতা।",
    metaDescEn: "Recognizing coccidiosis, respiratory distress, and enteritis in quails. Prevention protocols and avoiding unprescribed antibiotic usage.",
    excerptBn:
      "কোয়েল মুরগির চেয়ে অনেক বেশি রোগপ্রতিরোধী হলেও ভেজা লিটার ও ঠান্ডা আবহাওয়ায় কিছু রোগ দেখা দিতে পারে। সঠিক সময়ে পদক্ষেপ নিলে মৃত্যুহার শূন্যে রাখা সম্ভব।",
    excerptEn:
      "Although quails are hardier than chickens, damp litter and sudden weather chills can trigger enteritis and respiratory distress if neglected.",
    categorySlug: "health",
    categoryNameBn: "রোগ ও চিকিৎসা",
    categoryNameEn: "Health & Disease",
    tags: ["কোয়েল রোগ", "কক্সিডিওসিস", "ঠান্ডা লাগা", "ভেটেরিনারি সতর্কতা", "বায়োসিকিউরিটি"],
    publishedDate: "২০২৬-০৯-২০",
    readTimeBn: "৫ মিনিট পাঠ",
    readTimeEn: "5 min read",
    authorBn: "সহজ খামার সম্পাদকীয় টিম",
    authorEn: "Shohoj Khamar Editorial",
    relatedBirdVariety: {
      species: "quail",
      varietySlug: "japanese",
      nameBn: "জাপানি কোয়েল",
      nameEn: "Japanese Quail",
      guideLink: "/birds/quail/japanese/day-2-4",
    },
    relatedArticleSlugs: ["quail-egg-laying-timeline", "quail-feed-preparation-guide"],
    isPublished: true,
    contentBn: [
      "কোয়েল পাখির প্রাকৃতিক রোগ প্রতিরোধ ক্ষমতা সাধারণ ব্রয়লার বা লেয়ার মুরগির চেয়ে অনেক গুণ বেশি। এদের সাধারণত রানীক্ষেত বা গামবোরোর মতো ভয়াবহ মহামারীর প্রাদুর্ভাব কম হয়। তবে পরিচ্ছন্নতার অভাব হলে কয়েকটি সাধারণ রোগ দেখা দিতে পারে।",
      "## ১. কোয়েলের কক্সিডিওসিস (রক্ত আমাশয়)",
      "- **লক্ষণ:** লিটার ভিজে থাকলে বা মল জমাট বাঁধলে রক্তমিশ্রিত বা বাদামি মল, পালক ফোলা ও ঝিমুনি দেখা দেয়।",
      "- **প্রতিরোধ:** মেঝের লিটার প্রতিদিন উল্টেপাল্টে শুকনা রাখুন এবং ড্রিংকারের পানি উপচে পড়তে দেবেন না।",
      "## ২. শ্বাসতন্ত্রের রোগ ও সর্দি-ঠান্ডা",
      "- **লক্ষণ:** নাক দিয়ে জলীয় পদার্থ বের হওয়া, হাঁচি ও মাথার পালক ভিজে যাওয়া।",
      "- **প্রতিকার:** খসখসে সরাসরি ঠান্ডা বাতাস বন্ধ করুন। প্রয়োজনে হালকা নাপা সিরাপ বা রেজিস্টার্ড ভেটেরিনারি চিকিৎসকের পরামর্শ অনুযায়ী অ্যান্টিবায়োটিক ব্যবহার করুন।",
      "## ৩. সতর্কবার্তা: অ্যান্টিবায়োটিকের অনিয়ন্ত্রিত ব্যবহার বর্জন করুন",
      "মনে রাখবেন, সুস্থ পাখিতে রুটিন হিসেবে কোনো অ্যান্টিবায়োটিক প্রয়োগ করবেন না। এটি পাখির অভ্যন্তরীণ রোগ প্রতিরোধ ক্ষমতা নষ্ট করে এবং ডিম ও মাংসের মাধ্যমে মানবদেহে অ্যান্টিবায়োটিক রেজিস্ট্যান্স তৈরি করে।",
    ],
    contentEn: [
      "Quails have high natural immunity compared to commercial chickens, but poor hygiene and wet litter can cause preventable ailments.",
      "## 1. Coccidiosis",
      "- **Symptoms:** Ruffled feathers, lethargy, reddish-brown droppings.",
      "- **Prevention:** Maintain bone-dry litter and avoid water spillage.",
      "## 2. Respiratory Distress",
      "- **Symptoms:** Sneezing, nasal discharge.",
      "- **Control:** Prevent drafty winds; consult a veterinarian for therapeutic dosage.",
      "## 3. Mandatory Warning: Avoid Unprescribed Antibiotics",
      "Never administer prophylactic antibiotics to healthy flocks. Maintain biosecurity instead.",
    ],
  },
];

export function getPublishedArticles(): BlogArticle[] {
  return blogArticles.filter((a) => a.isPublished);
}

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((a) => a.slug === slug && a.isPublished);
}

export function getRelatedArticles(currentSlug: string, limit = 3): BlogArticle[] {
  const current = blogArticles.find((a) => a.slug === currentSlug);
  if (!current) return [];

  return blogArticles
    .filter((a) => a.slug !== currentSlug && a.isPublished)
    .filter(
      (a) =>
        a.categorySlug === current.categorySlug ||
        current.relatedArticleSlugs.includes(a.slug)
    )
    .slice(0, limit);
}

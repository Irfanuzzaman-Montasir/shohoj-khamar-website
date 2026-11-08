export interface BirdQuickStat {
  labelBn: string;
  labelEn: string;
  valueBn: string;
  valueEn: string;
  iconName?: string;
}

export interface BirdVariety {
  nameBn: string;
  nameEn: string;
  descBn: string;
  descEn: string;
  weightBn: string;
  weightEn: string;
}

export interface BirdData {
  species: string;
  varietySlug: string;
  nameBn: string;
  nameEn: string;
  scientificName: string;
  taglineBn: string;
  taglineEn: string;
  descriptionBn: string;
  descriptionEn: string;
  stats: BirdQuickStat[];
  varieties: BirdVariety[];
  housingOverviewBn: string;
  housingOverviewEn: string;
  feedingOverviewBn: string;
  feedingOverviewEn: string;
  firstStageSlug: string;
}

export const birdsCatalog: Record<string, BirdData> = {
  "chicken-sonali": {
    species: "chicken",
    varietySlug: "sonali",
    nameBn: "সোনালি মুরগি",
    nameEn: "Sonali Chicken",
    scientificName: "Gallus gallus domesticus",
    taglineBn: "মাংস ও ডিমের জন্য বয়সভিত্তিক পরিচর্যা",
    taglineEn: "Age-based care for meat and egg production",
    descriptionBn: "সোনালি মুরগির বাচ্চা পালন, খাবার, টিকা এবং মাংস বা ডিম উৎপাদনের জন্য পর্যায়ভিত্তিক পরিচর্যা নির্দেশিকা।",
    descriptionEn: "A stage-by-stage guide to Sonali chick care, feeding, vaccination, and meat or egg production.",
    firstStageSlug: "day-1",
    stats: [
      { labelBn: "মাংসের জন্য বিক্রির বয়স", labelEn: "Meat market age", valueBn: "৬০–৭০ দিন", valueEn: "60–70 days" },
      { labelBn: "পরিচর্যার ধাপ", labelEn: "Care stages", valueBn: "৯টি", valueEn: "9" },
      { labelBn: "মাংসের জন্য ওজন", labelEn: "Meat bird weight", valueBn: "গাইডে ৮০০ গ্রাম–১ কেজি", valueEn: "Guide lists 800 g–1 kg" },
      { labelBn: "ডিমের জন্য ফিড", labelEn: "Layer feed", valueBn: "১৪১ দিন থেকে", valueEn: "From day 141" },
    ],
    varieties: [{ nameBn: "সোনালি", nameEn: "Sonali", descBn: "মাংস ও ডিম উভয় উদ্দেশ্যে পালন করা হয়।", descEn: "Raised for both meat and egg production.", weightBn: "গাইডে বিক্রির ওজন ৮০০ গ্রাম–১ কেজি", weightEn: "Guide lists 800 g–1 kg at sale" }],
    housingOverviewBn: "ব্রুডার আগে গরম করুন, ঘর বাতাস চলাচলযোগ্য রাখুন এবং লিটার শুকনো রাখুন।",
    housingOverviewEn: "Preheat the brooder, provide ventilation, and keep litter dry.",
    feedingOverviewBn: "বাচ্চায় স্টার্টার, মাংসের পাখিতে গ্রোয়ার এবং ডিমের জন্য ধীরে গ্রোয়ার থেকে লেয়ার-১ ফিডে পরিবর্তন করুন।",
    feedingOverviewEn: "Use starter for chicks, grower for meat birds, and gradually transition egg birds from grower to layer-1 feed.",
  },
  "quail-japanese": {
    species: "quail",
    varietySlug: "japanese",
    nameBn: "জাপানি কোয়েল",
    nameEn: "Japanese Quail",
    scientificName: "Coturnix japonica",
    taglineBn: "স্বল্প পুঁজিতে দ্রুত ডিম ও মাংস উৎপাদনের আদর্শ জাত",
    taglineEn: "The ideal breed for rapid egg and meat production with low capital",
    descriptionBn:
      "জাপানি কোয়েল বিশ্বব্যাপী সবচেয়ে জনপ্রিয় বাণিজ্যিক কোয়েলের জাত। এটি মাত্র ৪৫ থেকে ৫০ দিনে ডিম দেওয়া শুরু করে এবং বছরে ২৫০ থেকে ৩০০টি পর্যন্ত পুষ্টিকর ডিম দিয়ে থাকে। এদের রোগবালাই সাধারণ মুরগির তুলনায় অনেক কম এবং খুব অল্প জায়গায় খাঁচায় বা লিটারে সহজে পালন করা যায়। বাংলাদেশের আবহাওয়ায় কোয়েল পালন অত্যন্ত লাভজনক ও কম ঝুঁকিপূর্ণ একটি পোল্ট্রি উদ্যোগ।",
    descriptionEn:
      "Japanese Quail (Coturnix japonica) is the most popular commercial quail breed worldwide. It starts laying eggs in just 45 to 50 days and produces 250 to 300 nutritious eggs annually. They have high natural disease resistance compared to chickens and thrive in compact cage or litter systems, making them highly profitable for farmers in Bangladesh.",
    firstStageSlug: "day-1",
    stats: [
      {
        labelBn: "ডিম দেওয়া শুরু",
        labelEn: "First Egg",
        valueBn: "৪৫–৫০ দিন",
        valueEn: "45–50 Days",
      },
      {
        labelBn: "বার্ষিক গড় ডিম",
        labelEn: "Annual Eggs",
        valueBn: "২৫০–৩০০ টি",
        valueEn: "250–300 Eggs",
      },
      {
        labelBn: "পূর্ণাঙ্গ পাখির ওজন",
        labelEn: "Adult Weight",
        valueBn: "১৫০–২০০ গ্রাম",
        valueEn: "150–200 g",
      },
      {
        labelBn: "দৈনিক খাবার গ্রহণ",
        labelEn: "Daily Feed",
        valueBn: "২০–২৫ গ্রাম",
        valueEn: "20–25 g",
      },
      {
        labelBn: "বাচ্চার ব্রুডিং সময়",
        labelEn: "Brooding Period",
        valueBn: "১৪–২১ দিন",
        valueEn: "14–21 Days",
      },
      {
        labelBn: "ডিম ফোটার সময়কাল",
        labelEn: "Incubation Time",
        valueBn: "১৬–১৮ দিন",
        valueEn: "16–18 Days",
      },
    ],
    varieties: [
      {
        nameBn: "জাপানি স্ট্যান্ডার্ড (Japanese Standard)",
        nameEn: "Japanese Standard Coturnix",
        descBn: "উচ্চ ডিম উৎপাদনশীল সাধারণ জাত, ধূসর-বাদামি পালক এবং দ্রুত ডিম দেওয়ার সক্ষমতা।",
        descEn: "High egg production standard breed with brown-grey plumage.",
        weightBn: "১৫০–১৮০ গ্রাম",
        weightEn: "150–180 g",
      },
      {
        nameBn: "ইউরোপিয়ান সুপার জায়ান্ট (European Super Giant)",
        nameEn: "European Super Giant Coturnix",
        descBn: "তুলনামূলক ভারী জাত, মাংস ও বড় আকারের ডিম উভয়ের জন্য অত্যন্ত উপযোগী।",
        descEn: "Heavier variety ideal for both meat yield and larger eggs.",
        weightBn: "২৫০–৩৫০ গ্রাম",
        weightEn: "250–350 g",
      },
      {
        nameBn: "দেশি জাত (Local / Deshi Quail)",
        nameEn: "Deshi (Rain Quail / Native)",
        descBn: "স্থানীয় আবহাওয়ায় অভিযোজিত, অত্যন্ত কষ্টসহিষ্ণু ও কম খাদ্যগ্রহণকারী জাত।",
        descEn: "Native adaptable breed, highly resilient with minimal feed needs.",
        weightBn: "১০০–১৩০ গ্রাম",
        weightEn: "100–130 g",
      },
    ],
    housingOverviewBn:
      "কোয়েল পালনে প্রতিটি পূর্ণবয়স্ক কোয়েলের জন্য খাঁচায় প্রায় ১০০ থেকে ১২০ বর্গ সেন্টিমিটার এবং মেঝেতে (ডিপ লিটার পদ্ধতিতে) ১৫০ থেকে ২০০ বর্গ সেন্টিমিটার জায়গা লাগে। সঠিক বাতাস চলাচল এবং শুকনো লিটার কোয়েলের সুস্থতার মূল শর্ত।",
    housingOverviewEn:
      "For adult quails, approximately 100-120 sq cm per bird is recommended in cages, or 150-200 sq cm in deep litter flooring. Proper air ventilation and dry litter are essential.",
    feedingOverviewBn:
      "বাচ্চা বয়সে উচ্চ প্রোটিনযুক্ত (২৪–২৬%) কোয়েল স্টার্টার ফিড দিতে হয়। গ্রোয়ার পর্যায়ে ২০–২২% এবং ডিমপাড়া বয়সে ১৮–২০% প্রোটিন ও পর্যাপ্ত ক্যালসিয়ামযুক্ত লেয়ার ম্যাশ ফিড দিতে হবে।",
    feedingOverviewEn:
      "Chicks require 24–26% high-protein starter mash. Growers need 20–22% protein, while laying birds require 18–20% protein with fortified calcium (3.0–3.5%).",
  },
  "chicken-fayoumi": {
    species: "chicken",
    varietySlug: "fayoumi",
    nameBn: "ফাওমি",
    nameEn: "Fayoumi Chicken",
    scientificName: "Gallus gallus domesticus",
    taglineBn: "প্রথম দিন থেকে ডিম পাড়া পর্যন্ত বয়সভিত্তিক পরিচর্যা",
    taglineEn: "Age-based care from hatch to the first egg",
    descriptionBn: "ফাওমি মুরগির খাবার, পরিচর্যা ও ডিম পাড়ার প্রস্তুতির জন্য এই নির্দেশিকায় বয়স অনুযায়ী ধাপ দেওয়া হয়েছে।",
    descriptionEn: "This guide organizes Fayoumi feeding, care, and laying preparation into age-based stages.",
    firstStageSlug: "day-1",
    stats: [
      { labelBn: "প্রথম ডিম", labelEn: "First egg", valueBn: "প্রায় ১২০ দিন থেকে", valueEn: "Around day 120 onward" },
      { labelBn: "পরিচর্যার ধাপ", labelEn: "Care stages", valueBn: "৯টি", valueEn: "9" },
      { labelBn: "দৈনিক খাবারের পরিমাণ", labelEn: "Daily feed amount", valueBn: "নির্দেশিকায় নেই", valueEn: "Not specified" },
      { labelBn: "পূর্ণবয়স্ক ওজন", labelEn: "Adult weight", valueBn: "নির্দেশিকায় নেই", valueEn: "Not specified" },
      { labelBn: "ব্রুডিং সময়", labelEn: "Brooding period", valueBn: "প্রথম কয়েক সপ্তাহ", valueEn: "First few weeks" },
      { labelBn: "ডিম উৎপাদনের হার", labelEn: "Egg production rate", valueBn: "নির্দেশিকায় নেই", valueEn: "Not specified" },
    ],
    varieties: [
      { nameBn: "ফাওমি", nameEn: "Fayoumi", descBn: "ছেড়ে পালনের উপযোগী সক্রিয় মুরগির জাত।", descEn: "An active chicken breed suited to free-range systems.", weightBn: "উল্লেখ নেই", weightEn: "Not specified" },
    ],
    housingOverviewBn: "ঘর ও লিটার শুকনো, পরিষ্কার ও বাতাস চলাচলযোগ্য রাখুন। নিরাপদ বেড়া এবং শিকারি থেকে সুরক্ষা দিন।",
    housingOverviewEn: "Keep housing and litter dry, clean, and ventilated. Provide secure fencing and predator protection.",
    feedingOverviewBn: "বাচ্চায় স্টার্টার, বাড়ন্ত বয়সে গ্রোয়ার এবং ডিম পাড়ার আগে ধীরে লেয়ার ফিডে পরিবর্তন করুন। সম্পূর্ণ ফিডকে ঘাস বা শাকসবজি দিয়ে প্রতিস্থাপন করবেন না।",
    feedingOverviewEn: "Use starter for chicks, grower during development, then transition gradually to layer feed before laying. Do not replace a complete ration with greens or grass.",
  },
  "chicken-broiler": {
    species: "chicken",
    varietySlug: "broiler",
    nameBn: "ব্রয়লার মুরগি",
    nameEn: "Broiler Chicken",
    scientificName: "Gallus gallus domesticus",
    taglineBn: "প্রথম দিন থেকে বিক্রি পর্যন্ত বয়সভিত্তিক পরিচর্যা",
    taglineEn: "Age-based care from day one through market age",
    descriptionBn: "ব্রয়লার মুরগির ব্রুডিং, খাবার, পানি ও বিক্রির প্রস্তুতির জন্য বয়স অনুযায়ী সাতটি ধাপ।",
    descriptionEn: "Seven age-based stages for broiler brooding, feeding, water, and market preparation.",
    firstStageSlug: "day-1",
    stats: [
      { labelBn: "বিক্রির বয়স", labelEn: "Market age", valueBn: "৩০–৩৫/৪০ দিন", valueEn: "30–35/40 days" },
      { labelBn: "পরিচর্যার ধাপ", labelEn: "Care stages", valueBn: "৭টি", valueEn: "7" },
      { labelBn: "ফিডের পর্যায়", labelEn: "Feed phases", valueBn: "স্টার্টার, গ্রোয়ার, ফিনিশার", valueEn: "Starter, grower, finisher" },
      { labelBn: "দৈনিক খাবারের পরিমাণ", labelEn: "Daily feed amount", valueBn: "নির্দেশিকায় নেই", valueEn: "Not specified" },
      { labelBn: "ব্রুডিং তাপমাত্রা", labelEn: "Brooding temperature", valueBn: "প্রথম সপ্তাহে ৩৩–৩৫°C", valueEn: "92–95°F in week one" },
      { labelBn: "বিক্রির ওজন", labelEn: "Market weight", valueBn: "নির্দেশিকায় নেই", valueEn: "Not specified" },
    ],
    varieties: [
      { nameBn: "বাণিজ্যিক ব্রয়লার", nameEn: "Commercial broiler", descBn: "মাংস উৎপাদনের জন্য দ্রুত বৃদ্ধির মুরগি।", descEn: "Fast-growing chicken raised for meat production.", weightBn: "উল্লেখ নেই", weightEn: "Not specified" },
    ],
    housingOverviewBn: "ব্রুডার আগে থেকে গরম করুন, ঘরে পর্যাপ্ত বাতাস চলাচল রাখুন এবং লিটার শুকনো রাখুন। ভেজা লিটার অ্যামোনিয়া ও ককসিডিওসিসের ঝুঁকি বাড়াতে পারে।",
    housingOverviewEn: "Preheat the brooder, provide adequate ventilation, and keep litter dry. Wet litter can increase ammonia and coccidiosis risk.",
    feedingOverviewBn: "প্রথমে ব্রয়লার স্টার্টার, এরপর গ্রোয়ার এবং শেষ পর্যায়ে ফিনিশার ফিড দিন। বয়সভিত্তিক ধাপ অনুযায়ী ধীরে ফিড পরিবর্তন করুন।",
    feedingOverviewEn: "Feed broiler starter first, then grower, and finisher in the final stage. Transition feed gradually according to age.",
  },
};

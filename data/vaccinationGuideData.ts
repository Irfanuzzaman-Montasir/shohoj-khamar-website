export interface SpreadsheetVaccineRow {
  ageBn: string;
  ageEn: string;
  vaccineBn: string;
  vaccineEn: string;
  diseaseBn: string;
  diseaseEn: string;
  methodBn: string;
  methodEn: string;
}

export interface ChickenVaccinationGuide {
  slug: string;
  nameBn: string;
  nameEn: string;
  descriptionBn: string;
  descriptionEn: string;
  spreadsheetName: string;
  rows: SpreadsheetVaccineRow[];
}

export const chickenVaccinationGuides: ChickenVaccinationGuide[] = [
  {
    slug: "sonali",
    nameBn: "সোনালি মুরগি",
    nameEn: "Sonali Chicken",
    descriptionBn: "সোনালি মুরগির টিকার বয়স, নাম, রোগ ও প্রয়োগের নিয়ম।",
    descriptionEn: "Vaccine age, name, target disease, and administration method for Sonali chickens.",
    spreadsheetName: "Sonali Vaccine.xlsx",
    rows: [
      { ageBn: "১ম দিন", ageEn: "Day 1", vaccineBn: "মারেক্স", vaccineEn: "Marex", diseaseBn: "মারেক্স", diseaseEn: "Marek’s disease", methodBn: "হ্যাচারিতে ইনজেকশন", methodEn: "Injection at the hatchery" },
      { ageBn: "৭ম দিন", ageEn: "Day 7", vaccineBn: "BCRDV / ND+IB", vaccineEn: "BCRDV / ND+IB", diseaseBn: "রানিখেত ও ব্রঙ্কাইটিস", diseaseEn: "Newcastle and bronchitis", methodBn: "চোখে ১ ফোঁটা", methodEn: "1 eye drop" },
      { ageBn: "১২–১৪তম দিন", ageEn: "Days 12–14", vaccineBn: "Gumboro", vaccineEn: "Gumboro", diseaseBn: "গামবোরো (১ম ডোজ)", diseaseEn: "Gumboro (first dose)", methodBn: "খাবারের পানিতে", methodEn: "In drinking water" },
      { ageBn: "২১–২২তম দিন", ageEn: "Days 21–22", vaccineBn: "Gumboro Booster", vaccineEn: "Gumboro Booster", diseaseBn: "গামবোরো (বুস্টার)", diseaseEn: "Gumboro (booster)", methodBn: "খাবারের পানিতে", methodEn: "In drinking water" },
      { ageBn: "২৮–৩০তম দিন", ageEn: "Days 28–30", vaccineBn: "BCRDV (Booster)", vaccineEn: "BCRDV (Booster)", diseaseBn: "রানিখেত (বুস্টার)", diseaseEn: "Newcastle (booster)", methodBn: "চোখে ১ ফোঁটা বা পানিতে", methodEn: "1 eye drop or in drinking water" },
      { ageBn: "৩৫–৪০ দিন", ageEn: "Days 35–40", vaccineBn: "Fowl Pox (ডিমের জন্য হলে)", vaccineEn: "Fowl Pox (if kept for eggs)", diseaseBn: "ফাউল পক্স (বসন্ত)", diseaseEn: "Fowl pox", methodBn: "ডানার চামড়ায় ফুঁড়ে", methodEn: "Wing-web puncture" },
      { ageBn: "৬০–৬৫ দিন", ageEn: "Days 60–65", vaccineBn: "RDV (ডিমের জন্য রাখা হলে)", vaccineEn: "RDV (if kept for eggs)", diseaseBn: "রানিখেত", diseaseEn: "Newcastle disease", methodBn: "মাংসে ১ মিলি ইনজেকশন", methodEn: "1 ml intramuscular injection" },
    ],
  },
  {
    slug: "fayoumi",
    nameBn: "ফাওমি মুরগি",
    nameEn: "Fayoumi Chicken",
    descriptionBn: "ফাওমি মুরগির টিকার বয়স, নাম, রোগ ও প্রয়োগের নিয়ম।",
    descriptionEn: "Vaccine age, name, target disease, and administration method for Fayoumi chickens.",
    spreadsheetName: "Faomi Vaccine.xlsx",
    rows: [
      { ageBn: "১ম দিন", ageEn: "Day 1", vaccineBn: "Marex Vaccine (হ্যাচারিতে দেওয়া হয়)", vaccineEn: "Marek’s vaccine (given at hatchery)", diseaseBn: "মারেক্স", diseaseEn: "Marek’s disease", methodBn: "চামড়ার নিচে ইনজেকশন", methodEn: "Subcutaneous injection" },
      { ageBn: "৭ম দিন", ageEn: "Day 7", vaccineBn: "BCRDV / ND+IB", vaccineEn: "BCRDV / ND+IB", diseaseBn: "রানিখেত ও ব্রঙ্কাইটিস", diseaseEn: "Newcastle and bronchitis", methodBn: "চোখে ১ ফোঁটা", methodEn: "1 eye drop" },
      { ageBn: "১৪তম দিন", ageEn: "Day 14", vaccineBn: "Gumboro (Gumboral / MA5)", vaccineEn: "Gumboro (Gumboral / MA5)", diseaseBn: "গামবোরো", diseaseEn: "Gumboro", methodBn: "খাবারের পানিতে", methodEn: "In drinking water" },
      { ageBn: "২১তম দিন", ageEn: "Day 21", vaccineBn: "Gumboro Booster", vaccineEn: "Gumboro Booster", diseaseBn: "গামবোরো (বুস্টার)", diseaseEn: "Gumboro (booster)", methodBn: "খাবারের পানিতে", methodEn: "In drinking water" },
      { ageBn: "২৮তম দিন", ageEn: "Day 28", vaccineBn: "BCRDV (Booster)", vaccineEn: "BCRDV (Booster)", diseaseBn: "রানিখেত (বুস্টার)", diseaseEn: "Newcastle (booster)", methodBn: "চোখে ১ ফোঁটা বা পানিতে", methodEn: "1 eye drop or in drinking water" },
      { ageBn: "৩৫–৪০ দিন", ageEn: "Days 35–40", vaccineBn: "Fowl Pox", vaccineEn: "Fowl Pox", diseaseBn: "বসন্ত (ফাউল পক্স)", diseaseEn: "Fowl pox", methodBn: "ডানার চামড়ায় ফুঁড়ে (Pox needle)", methodEn: "Wing-web puncture (pox needle)" },
      { ageBn: "৬০–৬৫ দিন", ageEn: "Days 60–65", vaccineBn: "RDV (MUKTESWAR)", vaccineEn: "RDV (MUKTESWAR)", diseaseBn: "রানিখেত (বড় মুরগির)", diseaseEn: "Newcastle (older birds)", methodBn: "রানের মাংসে ১ মিলি ইনজেকশন", methodEn: "1 ml injection in thigh muscle" },
      { ageBn: "৮০–৮৫ দিন", ageEn: "Days 80–85", vaccineBn: "Fowl Cholera", vaccineEn: "Fowl Cholera", diseaseBn: "ফাউল কলেরিয়া", diseaseEn: "Fowl cholera", methodBn: "বুকের মাংসে ০.৫ মিলি ইনজেকশন", methodEn: "0.5 ml injection in breast muscle" },
    ],
  },
  {
    slug: "broiler",
    nameBn: "ব্রয়লার মুরগি",
    nameEn: "Broiler Chicken",
    descriptionBn: "ব্রয়লার মুরগির টিকার বয়স, নাম, রোগ ও প্রয়োগের নিয়ম।",
    descriptionEn: "Vaccine age, name, target disease, and administration method for broiler chickens.",
    spreadsheetName: "Broiler Vaccine.xlsx",
    rows: [
      { ageBn: "১ম দিন", ageEn: "Day 1", vaccineBn: "Marex (সাধারণত হ্যাচারিতে দেওয়া থাকে)", vaccineEn: "Marek’s (usually given at hatchery)", diseaseBn: "মারেক্স", diseaseEn: "Marek’s disease", methodBn: "চামড়ার নিচে ইনজেকশন", methodEn: "Subcutaneous injection" },
      { ageBn: "৪–৫ম দিন", ageEn: "Days 4–5", vaccineBn: "BCRDV / ND Clone", vaccineEn: "BCRDV / ND Clone", diseaseBn: "রানিখেত", diseaseEn: "Newcastle disease", methodBn: "চোখে ১ ফোঁটা", methodEn: "1 eye drop" },
      { ageBn: "১১–১২তম দিন", ageEn: "Days 11–12", vaccineBn: "Gumboro (Intermediate)", vaccineEn: "Gumboro (Intermediate)", diseaseBn: "গামবোরো (১ম ডোজ)", diseaseEn: "Gumboro (first dose)", methodBn: "খাবারের পানিতে", methodEn: "In drinking water" },
      { ageBn: "১৭–১৮তম দিন", ageEn: "Days 17–18", vaccineBn: "Gumboro Booster", vaccineEn: "Gumboro Booster", diseaseBn: "গামবোরো (বুস্টার)", diseaseEn: "Gumboro (booster)", methodBn: "খাবারের পানিতে", methodEn: "In drinking water" },
    ],
  },
];

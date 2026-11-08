export interface MedicineDosage {
  nameBn: string;
  nameEn: string;
  brandOrTypeBn: string;
  brandOrTypeEn: string;
  doseBn: string;
  doseEn: string;
  timingBn: string;
  timingEn: string;
  purposeBn: string;
  purposeEn: string;
  isAlternative?: boolean;
}

export interface GuideStage {
  slug: string;
  stageNumber: number;
  titleBn: string;
  titleEn: string;
  ageRangeBn: string;
  ageRangeEn: string;
  temperatureBn: string;
  temperatureEn: string;
  lightHoursBn: string;
  lightHoursEn: string;
  feedTypeBn: string;
  feedTypeEn: string;
  feedManagementBn: string;
  feedManagementEn: string;
  waterManagementBn: string;
  waterManagementEn: string;
  temperatureEnvironmentBn: string;
  temperatureEnvironmentEn: string;
  medicines: MedicineDosage[];
  farmerTipsBn: string;
  farmerTipsEn: string;
  checklistBn: string[];
  checklistEn: string[];
  specialInstructionsBn: string;
  specialInstructionsEn: string;
  vaccineNotesBn: string;
  vaccineNotesEn: string;
  reviewStatusBn: string;
  reviewStatusEn: string;
  sourceBn: string;
  sourceEn: string;
}

export const quailStages: GuideStage[] = [
  {
    slug: "day-1",
    stageNumber: 1,
    titleBn: "১ম দিন :  বাচ্চার আগমন, লাইসোভিট পানি ও গুঁড়ো স্টার্টার ফিড",
    titleEn: "Day 1 :  Arrival, Lysovit Hydration & Crushed Starter Feed",
    ageRangeBn: "১ম দিন",
    ageRangeEn: "Day 1",
    temperatureBn: "৯৫° ফারেনহাইট (৩৫° সেলসিয়াস)",
    temperatureEn: "95°F (35°C)",
    lightHoursBn: "২৪ ঘণ্টা সার্বক্ষণিক মৃদু আলো (৬০–১০০ ওয়াট বাল্ব)",
    lightHoursEn: "24 Hours continuous soft light (60–100W bulb)",
    feedTypeBn: "ব্রয়লার স্টার্টার ফিড ভালো করে মিহি গুঁড়া করে (Crushed Starter Mash)",
    feedTypeEn: "Finely crushed Broiler Starter feed",
    feedManagementBn:
      "বাচ্চা আনার প্রথম ২ ঘণ্টা কোনো শক্ত খাবার দেবেন না। প্রথমে শুধু হালকা কুসুম গরম পানির ব্যবস্থা করুন। ২ ঘণ্টা পর ব্রয়লার স্টার্টার ফিড পাটায় বা ব্লেন্ডারে ভালো করে মিহি গুঁড়া করে ব্রুডারের নিচে বিছানো খবরের কাগজের ওপর আলতো করে ছড়িয়ে দিন। ছোট কোয়েল বাচ্চা ফিডারে যেতে পারে না, তাই কাগজের ওপর ছড়িয়ে দিলে সহজে খুঁটে খেতে শেখে।",
    feedManagementEn:
      "Do not feed solid feed for the first 2 hours. Offer warm water first. After 2 hours, grind commercial broiler starter feed finely and scatter thinly across newsprint paper on the brooder floor.",
    waterManagementBn:
      "বাচ্চারা খামারে পৌঁছার সাথে সাথে হালকা কুসুম গরম পানিতে লাইসোভিট বা গ্লুকোজ মিশিয়ে দিন। ছোট কোয়েল বাচ্চা ড্রিংকারের পানিতে পড়ে ভিজে যেতে পারে, তাই ড্রিংকারে মার্বেল বা ছোট পরিষ্কার পাথর দিয়ে রাখুন যেন শুধু ঠোঁট ভিজিয়ে পানি খেতে পারে।",
    waterManagementEn:
      "Provide lukewarm water mixed with Lysovit or glucose. Place clean marbles in drinkers to prevent tiny chicks from drowning or soaking their feathers.",
    temperatureEnvironmentBn:
      "বাচ্চা আসার অন্তত ৪ ঘণ্টা আগেই ব্রুডারের তাপমাত্রা ৯৫° ফারেনহাইটে প্রি-হিট করে রাখুন। বাচ্চারা যদি বাল্বের নিচে গাদাগাদি করে তবে ঠান্ডা বেশি; যদি বাল্ব থেকে দূরে পালায় তবে অতিরিক্ত গরম; আর যদি ছড়িয়ে ছিটিয়ে খেলা করে তবে তাপমাত্রা একদম সঠিক।",
    temperatureEnvironmentEn:
      "Preheat the brooder ring to 95°F (35°C) 4 hours in advance. Evenly dispersed chicks indicate ideal temperature.",
    medicines: [
      {
        nameBn: "লাইসোভিট (Lysovit)",
        nameEn: "Lysovit (Water Soluble Vitamin/Electrolyte)",
        brandOrTypeBn: "অপরিহার্য প্রথম দিনের সাপ্লিমেন্ট",
        brandOrTypeEn: "Essential First-day Supplement",
        doseBn: "১ গ্রাম প্রতি ২ লিটার পানিতে",
        doseEn: "1 g per 2 liters of water",
        timingBn: "বাচ্চা আসার পর সারাদিন চলবে",
        timingEn: "Continuous throughout Day 1",
        purposeBn: "ভ্রমণজনিত ক্লান্তি ও স্ট্রেস দূরীকরণ এবং তাৎক্ষণিক শক্তি প্রদান",
        purposeEn: "Relieves transit stress, dehydration and provides rapid energy",
      },
      {
        nameBn: "চিনির পানি ও লেবুর রস (ঘরোয়া বিকল্প)",
        nameEn: "Sugar Water with Lemon Juice (Home Alternative)",
        brandOrTypeBn: "জরুরি প্রাকৃতিক বিকল্প (লাইসোভিট না থাকলে)",
        brandOrTypeEn: "Home Emergency Alternative",
        doseBn: "১ চামচ চিনি + ১ চা চামচ লেবুর রস প্রতি ১ লিটার পানিতে",
        doseEn: "1 tbsp sugar + 1 tsp lemon juice per 1 liter water",
        timingBn: "লাইসোভিট হাতের কাছে না থাকলে ১ম দিন",
        timingEn: "Day 1 if commercial electrolyte is unavailable",
        purposeBn: "পানিশূন্যতা দূর করা ও দ্রুত শক্তি সঞ্চার",
        purposeEn: "Rehydration and instant glucose replenishment",
        isAlternative: true,
      },
    ],
    farmerTipsBn:
      "লাইসোভিট না থাকলে ১ লিটার পানিতে ১ চামচ চিনি এবং ১ চা চামচ লেবুর রস মিশিয়ে দিলে বাচ্চার পানিশূন্যতা ও ধকল দ্রুত কেটে যায়। কোয়েল বাচ্চা আসার প্রথম ২ ঘণ্টা খাবার ছাড়া শুধু পানি দিলে বাচ্চার অন্ত্র পরিষ্কার হয়।",
    farmerTipsEn:
      "If Lysovit is not at hand, 1 tbsp sugar and 1 tsp fresh lemon juice per liter of water rehydrates chicks safely. Offer water alone for the first 2 hours.",
    checklistBn: [
      "ব্রুডার ঘর ৪ ঘণ্টা আগে জীবাণুমুক্ত ও ৯৫° ফারেনহাইটে প্রি-হিট করা হয়েছে কি না নিশ্চিত করুন।",
      "ড্রিংকারে মার্বেল দিয়ে লাইসোভিট মিশ্রিত কুসুম গরম পানি প্রস্তুত রাখুন।",
      "মেঝেতে কাগজের ২-৩টি স্তর বিছিয়ে ব্রুডার গার্ড গোলাকার রাখুন।",
      "প্রথম ২ ঘণ্টা শুধু পানি পান করান, তারপর মিহি গুঁড়ো স্টার্টার ফিড ছিটিয়ে দিন।",
      "তাপমাত্রা থার্মোমিটার দিয়ে নিয়মিত যাচাই করুন।",
    ],
    checklistEn: [
      "Ensure brooder ring is sanitized and preheated to 95°F 4 hours before arrival.",
      "Prepare Lysovit-infused lukewarm water in marble-filled shallow drinkers.",
      "Lay 2-3 layers of clean newsprint paper with round corners.",
      "Provide water only for first 2 hours, then scatter finely ground starter feed.",
      "Monitor thermometer temperature at chick eye level.",
    ],
    specialInstructionsBn:
      "কোয়েল বাচ্চা মাত্র ৬–৮ গ্রাম ওজনের অত্যন্ত নরম প্রাণী। ব্রুডার গার্ডের কোণা সবসময় গোলাকার রাখবেন যেন কোণায় স্তূপ হয়ে দম বন্ধ না হয়। ঘরে কোনো ঠান্ডা বাতাস বা খসখসে বাতাস ঢুকতে দেবেন না।",
    specialInstructionsEn:
      "Chicks weigh only 6–8 grams. Circular brooder guards prevent smothering in corners. Shield completely from drafty winds.",
    vaccineNotesBn:
      "১ম দিনে কোনো টিকার প্রয়োজন নেই। কোনো রুটিন অ্যান্টিবায়োটিক প্রয়োগ করবেন না।",
    vaccineNotesEn:
      "No vaccine required on Day 1. Avoid routine prophylactic antibiotics.",
    reviewStatusBn: "ফিল্ড প্র্যাকটিস ও বিশেষজ্ঞ পর্যালোচনাধীন",
    reviewStatusEn: "Field Practice & Under Review",
    sourceBn: " খামারি অভিজ্ঞতা ও BLRI কোয়েল নির্দেশিকা",
    sourceEn: " Field Experience & BLRI Quail Manual",
  },
  {
    slug: "day-2-4",
    stageNumber: 2,
    titleBn: "২–৪ দিন :  গুঁড়ো স্টার্টার ফিড ও ঠান্ডা প্রতিরোধ ব্যবস্থাপনা",
    titleEn: "Days 2–4 :  Crushed Starter Feed & Cold Prevention Care",
    ageRangeBn: "২–৪ দিন",
    ageRangeEn: "Days 2–4",
    temperatureBn: "৯২°–৯৫° ফারেনহাইট (৩৩°–৩৫° সেলসিয়াস)",
    temperatureEn: "92°–95°F (33°–35°C)",
    lightHoursBn: "২৪ ঘণ্টা আলো",
    lightHoursEn: "24 Hours continuous illumination",
    feedTypeBn: "ব্রয়লার স্টার্টার ফিড (ভালো করে গুঁড়া করা)",
    feedTypeEn: "Finely ground Broiler Starter feed",
    feedManagementBn:
      "ব্রয়লার স্টার্টার ফিড নিয়মিত গুঁড়া করে দিনে ৩-৪ বার অল্প অল্প করে কাগজের ওপর দিন যাতে খাবার নষ্ট বা বাসি না হয়। ৪র্থ দিনে ব্রুডারের ভেতর ছোট প্লাস্টিকের ফিডার পরিচিত করান।",
    feedManagementEn:
      "Feed crushed broiler starter 3-4 times daily in modest portions on paper. Introduce shallow plastic feeder trays on Day 4.",
    waterManagementBn:
      "দিনে অন্তত ২-৩ বার পানি পরিবর্তন করুন। পানির পাত্র ও মার্বেল সবসময় পরিষ্কার রাখুন।",
    waterManagementEn:
      "Change water 2-3 times daily and keep drinker basins clean.",
    temperatureEnvironmentBn:
      "তাপমাত্রা ৯২° থেকে ৯৫° ফারেনহাইটে স্থির রাখুন। মেঝে সবসময় শুকনো রাখুন।",
    temperatureEnvironmentEn:
      "Maintain 92°–95°F. Keep bedding dry and free from droppings accumulation.",
    medicines: [
      {
        nameBn: "ডক্সি এ ভেট (Doxy-A Vet) বা সেফা-১ ভেট (Cefa-1 Vet)",
        nameEn: "Doxy-A Vet or Cefa-1 Vet",
        brandOrTypeBn: "ঠান্ডা ও ব্যাকটেরিয়াল প্রতিরোধ ডোজ (প্রয়োজনে)",
        brandOrTypeEn: "Cold/Bacterial Preventive Dose (If indicated)",
        doseBn: "১ গ্রাম প্রতি ২ লিটার পানিতে",
        doseEn: "1 g per 2 liters of water",
        timingBn: "সকালে ও বিকালে ২-৪ দিন বয়সে",
        timingEn: "Morning & afternoon during Days 2–4",
        purposeBn: "বাচ্চার ঠান্ডা লাগা, নাক দিয়ে পানি পড়া ও প্রারম্ভিক ব্যাকটেরিয়াল ইনফেকশন প্রতিরোধ",
        purposeEn: "Guards against early respiratory distress and bacterial infections",
      },
    ],
    farmerTipsBn:
      "শীতকালে বা আবহাওয়ার পরিবর্তনে কোয়েল বাচ্চার ঠান্ডা লেগে দ্রুত নিউমোনিয়া হতে পারে। তাই ২–৪ দিনের মাথায় Doxy-A Vet বা সেফা-১ ভেট ১ গ্রাম ২ লিটার পানিতে দিলে ঠান্ডা ও ব্যাকটেরিয়াল সংক্রমণ থেকে বাচ্চা রক্ষা পায়।",
    farmerTipsEn:
      "During seasonal shifts, quail chicks are susceptible to chills. Farmers use Doxy-A Vet or Cefa-1 Vet (1g per 2L water) during Days 2–4 if chicks display respiratory sneezing.",
    checklistBn: [
      "সকাল ও বিকালে ব্রুডারের তাপমাত্রা থার্মোমিটারে মেপে নিন।",
      "কাগজের ওপর তাজা গুঁড়ো স্টার্টার ফিড ৩-৪ বার দিন।",
      "বাচ্চাদের হাঁচি বা নাক ভেজার কোনো লক্ষণ আছে কি না পর্যবেক্ষণ করুন।",
      "ড্রিংকার ধুয়ে পরিষ্কার পানি ও নির্ধারিত ওষুধ সরবরাহ করুন।",
    ],
    checklistEn: [
      "Check thermometer twice daily.",
      "Replenish fresh crushed starter 3-4 times on paper.",
      "Inspect chicks for sneezing or wet nostrils.",
      "Wash waterers and refill with designated supportive solution.",
    ],
    specialInstructionsBn:
      "অ্যান্টিবায়োটিক সুস্থ পাখিতে অপ্রয়োজনে একটানা চালাবেন না। লক্ষণ না থাকলে শুধু ভিটামিন ও ইলেক্ট্রোলাইট যথেষ্ট।",
    specialInstructionsEn:
      "Do not prolong antibiotics in completely healthy flocks without veterinary oversight.",
    vaccineNotesBn:
      "জৈব নিরাপত্তা বজায় রাখুন, বাইরের জুতো নিয়ে শেডে প্রবেশ করবেন না।",
    vaccineNotesEn:
      "Strict biosecurity and footbath disinfection at the door.",
    reviewStatusBn: "ফিল্ড প্র্যাকটিস ও বিশেষজ্ঞ পর্যালোচনাধীন",
    reviewStatusEn: "Field Practice & Under Review",
    sourceBn: " ও স্থানীয় পোল্ট্রি প্র্যাকটিস",
    sourceEn: " & Bangladesh Poultry Veterinary Practice",
  },
  {
    slug: "day-4-6",
    stageNumber: 3,
    titleBn: "৪–৬ দিন :  গুঁড়ো স্টার্টার ফিড ও জিংক বি (স্কয়ার) সাপ্লিমেন্ট",
    titleEn: "Days 4–6 :  Crushed Starter & Zinc B (Square) Supplement",
    ageRangeBn: "৪–৬ দিন",
    ageRangeEn: "Days 4–6",
    temperatureBn: "৯২° ফারেনহাইট (৩৩° সেলসিয়াস)",
    temperatureEn: "92°F (33°C)",
    lightHoursBn: "২৪ ঘণ্টা আলো",
    lightHoursEn: "24 Hours light",
    feedTypeBn: "ব্রয়লার স্টার্টার ফিড (গুঁড়া করা)",
    feedTypeEn: "Crushed Broiler Starter Feed",
    feedManagementBn:
      "ব্রয়লার স্টার্টার ফিড নিয়মিত গুঁড়া করে দিন। ফিডারের সাথে সাথে কাগজের ওপরেও কিছু খাবার রাখুন। বাচ্চারা এখন চটপটে ও সক্রিয়ভাবে খাবে।",
    feedManagementEn:
      "Feed crushed broiler starter. Use both shallow feeders and paper sheets as chicks become more active.",
    waterManagementBn:
      "জিংক বি মিশ্রিত পানি সঠিক মাপে তৈরি করুন। অতিরিক্ত মাত্রায় দিলে পানি তিতা হয়ে যেতে পারে, তাই অনুমোদিত পরিমাপ কঠোরভাবে মেনে চলুন।",
    waterManagementEn:
      "Mix Zinc B precisely according to dosage. Avoid overdosing to prevent water bitterness.",
    temperatureEnvironmentBn:
      "তাপমাত্রা ৯২° ফারেনহাইটে স্থির রাখুন। ব্রুডার গার্ডের পরিধি সামান্য বাড়িয়ে দিন যাতে বাচ্চারা বেশি জায়গা পায়।",
    temperatureEnvironmentEn:
      "Keep temperature at 92°F. Gently widen the brooder ring diameter.",
    medicines: [
      {
        nameBn: "জিংক বি (স্কয়ার)  / Zinc B (Square)",
        nameEn: "Zinc B Liquid (Square Pharmaceuticals Ltd.)",
        brandOrTypeBn: "উচ্চমানের জিংক ও ভিটামিন বি-কমপ্লেক্স সিরাপ",
        brandOrTypeEn: "Liquid Zinc & Vitamin B-Complex",
        doseBn: "২.৫ থেকে ৩ মিলি প্রতি ১ লিটার পানিতে",
        doseEn: "2.5 to 3 ml per 1 liter of water",
        timingBn: "দিনে ১ বার পরিষ্কার পানিতে ৪–৬ দিন বয়সে",
        timingEn: "Once daily in fresh drinking water",
        purposeBn: "পালকের দ্রুত বৃদ্ধি, রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি, ক্ষুধাবর্ধক ও পা শক্ত করা",
        purposeEn: "Stimulates appetite, boosts immunity, enhances feathering and leg strength",
      },
      {
        nameBn: "হিউম্যান বি-৫০ (B-50) বা বি-কমপ্লেক্স সিরাপ (বিকল্প)",
        nameEn: "B-50 / Human Vitamin B-Complex Syrup (Alternative)",
        brandOrTypeBn: "জরুরি ঘরোয়া বিকল্প",
        brandOrTypeEn: "Home Alternative",
        doseBn: "২ মিলি প্রতি ১ লিটার পানিতে",
        doseEn: "2 ml per 1 liter of water",
        timingBn: "জিংক বি স্কয়ার না পাওয়া গেলে",
        timingEn: "If veterinary Zinc B is unavailable",
        purposeBn: "ভিটামিন বি এর ঘাটতি ও প্যারালাইসিস রোধ",
        purposeEn: "Prevents Vitamin B deficiency and curly-toe paralysis",
        isAlternative: true,
      },
    ],
    farmerTipsBn:
      "৪–৬ দিন বয়সে স্কয়ারের জিংক বি (Zink B Square) ১ লিটার পানিতে ২.৫–৩ মিলি দিলে বাচ্চার পালক খুব দ্রুত গজায়, ক্ষুধা বাড়ে এবং পা সোজা ও শক্ত থাকে। জিংক বি না পেলে মানুষের বি-৫০ সিরাপও ব্যবহার করা যায়।",
    farmerTipsEn:
      "Zinc B Square (2.5–3 ml/L) during Days 4–6 stimulates rapid feathering, sharpens appetite, and prevents leg weakness. Human B-complex acts as a substitute.",
    checklistBn: [
      "জিংক বি পরিমাপ করে (২.৫–৩ মিলি/লিটার) পানিতে মিশিয়ে দিন।",
      "বাচ্চাদের দৌড়াদৌড়ি ও সক্রিয়তা লক্ষ্য করুন।",
      "কাগজ নোংরা হলে ওপরের স্তরের কাগজ সরিয়ে নতুন পরিষ্কার কাগজ দিন।",
      "থার্মোমিটারে ৯২° ফারেনহাইট বজায় আছে কি না দেখুন।",
    ],
    checklistEn: [
      "Measure Zinc B (2.5–3 ml per liter) into drinking water.",
      "Observe chick alertness and motility.",
      "Peel off soiled top paper layer to reveal clean bedding.",
      "Verify temperature is steady at 92°F.",
    ],
    specialInstructionsBn:
      "বাচ্চাদের পায়ের তালু বা নখে লিটারের আঠালো বিষ্ঠা যেন জমাট না বাঁধে, মেঝের কাগজ নিয়মিত পরিষ্কার রাখুন।",
    specialInstructionsEn:
      "Ensure manure balls do not cake on chick toes by changing paper.",
    vaccineNotesBn:
      "কোনো রুটিন ভ্যাকসিনের প্রয়োজন নেই।",
    vaccineNotesEn:
      "No routine vaccine needed.",
    reviewStatusBn: "ফিল্ড প্র্যাকটিস ও বিশেষজ্ঞ পর্যালোচনাধীন",
    reviewStatusEn: "Field Practice & Under Review",
    sourceBn: " ও স্কয়ার ফার্মাসিউটিক্যালস নির্দেশিকা",
    sourceEn: " & Square Pharmaceuticals Veterinary Guide",
  },
  {
    slug: "day-6-9",
    stageNumber: 4,
    titleBn: "৬–৯ দিন :  ক্যালপ্লেক্স (স্কয়ার) ও হাড় মজবুতকরণ",
    titleEn: "Days 6–9 :  Crushed Starter & Calplex (Square) for Bone Density",
    ageRangeBn: "৬–৯ দিন",
    ageRangeEn: "Days 6–9",
    temperatureBn: "৯০° ফারেনহাইট (৩২° সেলসিয়াস)",
    temperatureEn: "90°F (32°C)",
    lightHoursBn: "২৩–২৪ ঘণ্টা আলো",
    lightHoursEn: "23–24 Hours light",
    feedTypeBn: "ব্রয়লার স্টার্টার ফিড (গুঁড়া করা)",
    feedTypeEn: "Finely Crushed Broiler Starter",
    feedManagementBn:
      "৬ থেকে ৯ দিন বয়সেও ব্রয়লার স্টার্টার গুঁড়া করে দিতে হবে। খাবার দিনে ৩ বার তাজা দিন। খাবারের পাত্রের কিনারা বাচ্চার বুকের উচ্চতায় রাখুন।",
    feedManagementEn:
      "Continue crushed broiler starter. Offer 3 times daily and set feeder troughs at chick chest height.",
    waterManagementBn:
      "ক্যালপ্লেক্স মিশ্রিত পানি প্রস্তুত করুন। পাত্রের তলায় কোনো তলানি জমলে ড্রিংকার ধুয়ে আবার তাজা পানি দিন।",
    waterManagementEn:
      "Administer Calplex solution. Wash sediment from drinkers daily.",
    temperatureEnvironmentBn:
      "তাপমাত্রা ৯০° ফারেনহাইটে নামিয়ে আনুন। ব্রুডারের খবরের কাগজ সরিয়ে তুষের শুকনো ফ্লোর উন্মুক্ত করার উপযুক্ত সময়।",
    temperatureEnvironmentEn:
      "Lower heat to 90°F (32°C). Transition from paper to dry wood shaving litter.",
    medicines: [
      {
        nameBn: "ক্যালপ্লেক্স (স্কয়ার)  / Calplex (Square)",
        nameEn: "Calplex Liquid (Square Pharmaceuticals Ltd.)",
        brandOrTypeBn: "তরল ক্যালসিয়াম, ফসফরাস ও ভিটামিন ডি৩",
        brandOrTypeEn: "Liquid Calcium, Phosphorus & Vitamin D3",
        doseBn: "২.৫ থেকে ৩ মিলি প্রতি ১ লিটার পানিতে",
        doseEn: "2.5 to 3 ml per 1 liter of water",
        timingBn: "দিনে ১ বার ৬–৯ দিন বয়সে",
        timingEn: "Once daily during Days 6–9",
        purposeBn: "বাচ্চার হাড় ও কাঠামো মজবুত করা, রিকেটস ও পঙ্গুত্ব রোধ এবং দ্রুত দৈহিক বৃদ্ধি",
        purposeEn: "Strengthens skeletal frame, prevents rickets/crooked keels and supports growth",
      },
    ],
    farmerTipsBn:
      "৬–৯ দিন বয়সে স্কয়ার কোম্পানির ক্যালপ্লেক্স (Calplex Square) ১ লিটার পানিতে ২.৫–৩ মিলি খাওয়ালে বাচ্চার হাড় খুব শক্ত হয় এবং ভবিষ্যতে ডিমের খোসা মজবুত হওয়ার ভিত্তি তৈরি হয়।",
    farmerTipsEn:
      "Calplex Square (2.5–3 ml/L) during Days 6–9 lays the foundation for strong bones and prevents future calcium depletion during egg laying.",
    checklistBn: [
      "ক্যালপ্লেক্স মাপে ২.৫–৩ মিলি/লিটার পানিতে মিশিয়ে দিন।",
      "কাগজ সম্পূর্ণ সরিয়ে শুকনো তুষ বা কাঠের গুঁড়ো উন্মুক্ত করুন।",
      "১ম সপ্তাহের শেষ দিনে গড় ওজন মেপে দেখুন (টার্গেট: ২৫–৩০ গ্রাম)।",
      "তাপমাত্রা ৯০° ফারেনহাইটে বজায় রাখুন।",
    ],
    checklistEn: [
      "Mix Calplex (2.5–3 ml/L) in drinkers.",
      "Remove paper to expose dry pine shavings.",
      "Weigh flock sample at end of week 1 (target: 25–30g).",
      "Maintain 90°F temperature.",
    ],
    specialInstructionsBn:
      "লিটার যেন একদম শুকনো থাকে। স্যাঁতসেঁতে লিটার থাকলে তা দ্রুত সরিয়ে নতুন শুকনো তুষ দিন।",
    specialInstructionsEn:
      "Litter must remain bone-dry to deter coccidial oocysts.",
    vaccineNotesBn:
      "৭ম দিনে কিছু খামারি রানীক্ষেত (ND LaSota/Clone 30) চোখের ড্রপ দেন। স্থানীয় প্রাণিসম্পদ কর্মকর্তার সাথে আলোচনা করে সিদ্ধান্ত নিন।",
    vaccineNotesEn:
      "Newcastle (ND LaSota) eye drops may be given at Day 7 if local risk exists under vet advice.",
    reviewStatusBn: "ফিল্ড প্র্যাকটিস ও বিশেষজ্ঞ পর্যালোচনাধীন",
    reviewStatusEn: "Field Practice & Under Review",
    sourceBn: " ও স্কয়ার ভেটেরিনারি হ্যান্ডবুক",
    sourceEn: " & Square Veterinary Product Manual",
  },
  {
    slug: "day-9-13",
    stageNumber: 5,
    titleBn: "৯–১৩ দিন :  গোটা স্টার্টার ফিড ট্রানজিশন ও মাল্টিভিটামিন",
    titleEn: "Days 9–13 :  Whole Starter Feed Transition & Multivitamins",
    ageRangeBn: "৯–১৩ দিন",
    ageRangeEn: "Days 9–13",
    temperatureBn: "৮৫°–৮৮° ফারেনহাইট (২৯°–৩১° সেলসিয়াস)",
    temperatureEn: "85°–88°F (29°–31°C)",
    lightHoursBn: "২২–২৩ ঘণ্টা আলো",
    lightHoursEn: "22–23 Hours light",
    feedTypeBn: "ব্রয়লার স্টার্টার ফিড (এখন আর গুঁড়া করা লাগবে না :  সরাসরি গোটা ফিড)",
    feedTypeEn: "Commercial Broiler Starter (Whole crumbles, no grinding required)",
    feedManagementBn:
      "খুব গুরুত্বপূর্ণ পরিবর্তন: ৯ দিন বয়সের পর থেকে খাবার আর গুঁড়া করার কোনো প্রয়োজন নেই! কোয়েল পাখি এখন স্বাভাবিকভাবেই গোটা ব্রয়লার স্টার্টার ফিড খুঁটে খেতে সক্ষম। ফিডারে খাবার দিন, তবে অপচয় রোধে ফিডারের অর্ধেক পূর্ণ করুন।",
    feedManagementEn:
      "Key milestone: Grinding feed is no longer required after Day 9! Quails ingest whole commercial starter crumbles effortlessly. Fill feeders half-full to curb wastage.",
    waterManagementBn:
      "মাল্টিভিটামিন দ্রবণ নিয়মিত প্রস্তুত করুন। পাত্র পরিষ্কার রাখুন।",
    waterManagementEn:
      "Provide clean multivitamin water and rinse drinkers daily.",
    temperatureEnvironmentBn:
      "তাপমাত্রা ৮৫°–৮৮° ফারেনহাইটে নামিয়ে আনুন। ব্রুডার গার্ড সরিয়ে ঘরের বড় অংশে বাচ্চার বিচরণের সুযোগ দিন।",
    temperatureEnvironmentEn:
      "Lower temperature to 85°–88°F. Remove brooding guards for larger floor access.",
    medicines: [
      {
        nameBn: "ভাইটাল অ্যামাইনো ফোর্ট (Vital Amino Forte) বা অ্যামাইনোভেট (Aminovet)",
        nameEn: "Vital Amino Forte or Aminovet",
        brandOrTypeBn: "প্রিমিয়াম মাল্টিভিটামিন ও অ্যামাইনো এসিড সাপ্লিমেন্ট",
        brandOrTypeEn: "Multi-Vitamin & Essential Amino Acids Complex",
        doseBn: "১ মিলি প্রতি ২ থেকে ৩ লিটার পানিতে (বা প্যাকেটের নির্দেশনামতো)",
        doseEn: "1 ml per 2 to 3 liters of water",
        timingBn: "সকালে ৯–১৩ দিন বয়সে",
        timingEn: "Morning drinking water during Days 9–13",
        purposeBn: "দ্রুত পেশি গঠন, ওজন বৃদ্ধি, পালক পূর্ণাঙ্গকরণ ও স্ট্রেস প্রতিরোধ",
        purposeEn: "Accelerates muscle growth, weight gain, sleek feathering, and stress resilience",
      },
    ],
    farmerTipsBn:
      "৯–১৩ দিনে আর খাবার গুঁড়া করার ঝামেলা নেই। পাখি গোটা স্টার্টার ফিড এমনিতেই খেতে পারবে ইনশাআল্লাহ। এ সময় ভাইটাল অ্যামাইনো ফোর্ট বা অ্যামাইনোভেটের মতো ভালো মাল্টিভিটামিন দিলে বাচ্চার শারীরিক গঠন দ্রুত বাড়ে।",
    farmerTipsEn:
      "From Day 9 onward, chicks consume unground starter crumbles directly. High-grade multivitamins like Vital Amino Forte or Aminovet ensure rapid muscle building.",
    checklistBn: [
      "গোটা স্টার্টার ফিড ফিডারে দিন, গুঁড়া করা বন্ধ করুন।",
      "ভাইটাল অ্যামাইনো ফোর্ট বা ভালো মাল্টিভিটামিন পানিতে মিশিয়ে দিন।",
      "ব্রুডারের ওপরে জাল দিয়ে ঢেকে রাখুন যেন উড়ে না যায়।",
      "২য় সপ্তাহের ওজন মেপে দেখুন (টার্গেট: ৫০–৬০ গ্রাম)।",
    ],
    checklistEn: [
      "Supply whole starter feed directly in troughs; discontinue grinding.",
      "Add Vital Amino Forte or equivalent amino acid multivitamin.",
      "Cover brooding area with netting as chicks begin short flights.",
      "Record week 2 weights (target: 50–60g).",
    ],
    specialInstructionsBn:
      "কোয়েল এ বয়সে অল্প অল্প উড়তে শুরু করে। খাঁচা বা ব্রুডার থেকে যেন লাফিয়ে বাইরে না পড়ে সেদিকে খেয়াল রাখুন।",
    specialInstructionsEn:
      "Chicks flutter actively. Ensure enclosures are escape-proof.",
    vaccineNotesBn:
      "বায়োসিকিউরিটি অব্যাহত রাখুন।",
    vaccineNotesEn:
      "Continue biosecurity protocols.",
    reviewStatusBn: "ফিল্ড প্র্যাকটিস ও বিশেষজ্ঞ পর্যালোচনাধীন",
    reviewStatusEn: "Field Practice & Under Review",
    sourceBn: " ও পোল্ট্রি পুষ্টি নির্দেশিকা",
    sourceEn: " & Commercial Poultry Nutrition Guidelines",
  },
  {
    slug: "day-13-40",
    stageNumber: 6,
    titleBn: "১৩–৪০ দিন :  গোটা স্টার্টার ফিড ও রোটেশনাল সাপ্লিমেন্ট",
    titleEn: "Days 13–40 :  Starter Feed & Rotational Nutrient Cycling",
    ageRangeBn: "১৩–৪০ দিন",
    ageRangeEn: "Days 13–40",
    temperatureBn: "৭৫°–৮০° ফারেনহাইট বা ঘরের স্বাভাবিক তাপমাত্রা (২৪°–২৭° সেলসিয়াস)",
    temperatureEn: "75°–80°F / Ambient Room Temp (24°–27°C)",
    lightHoursBn: "১২–১৪ ঘণ্টা স্বাভাবিক দিনের আলো (কৃত্রিম হিটিং বাল্ব বন্ধ)",
    lightHoursEn: "12–14 Hours natural day length (Heating lamps off)",
    feedTypeBn: "ব্রয়লার স্টার্টার ফিড (গোটা ক্রাম্বস)",
    feedTypeEn: "Broiler Starter Feed (Whole Crumbles)",
    feedManagementBn:
      "১৩ থেকে ৪০ দিন বয়স পর্যন্ত ব্রয়লার স্টার্টার ফিড চালিয়ে যান। দৈনিক খাবার গ্রহণ গড়ে ১০–১৬ গ্রাম প্রতি পাখি। ফিডার নিয়মিত ঝেড়ে পরিষ্কার খাবার দিন।",
    feedManagementEn:
      "Continue broiler starter until Day 40. Daily feed intake averages 10–16 grams per bird. Keep feeders clean and well-distributed.",
    waterManagementBn:
      "সার্বক্ষণিক পরিষ্কার তাজা টিউবওয়েল পানি। পানি কখনো যেন গরম না হয়।",
    waterManagementEn:
      "Continuous fresh, cool groundwater.",
    temperatureEnvironmentBn:
      "কৃত্রিম হিটিং বাল্ব সম্পূর্ণ বন্ধ। ঘরের স্বাভাবিক তাপমাত্রায় কোয়েল চমৎকারভাবে বেড়ে ওঠে। পর্যাপ্ত বায়ু চলাচল নিশ্চিত করুন।",
    temperatureEnvironmentEn:
      "Supplementary brooding heat is off. Ensure abundant fresh air cross-ventilation.",
    medicines: [
      {
        nameBn: "জিংক বি / ক্যালপ্লেক্স / মাল্টিভিটামিন রোটেশন",
        nameEn: "Zinc B / Calplex / Multivitamin Rotation",
        brandOrTypeBn: "রোটেশনাল সাপ্লিমেন্ট সাইকেল",
        brandOrTypeEn: "Rotational Nutrient Regimen",
        doseBn: "যেদিন যেটা দেবেন: জিংক বি (২.৫ মিলি/লি), ক্যালপ্লেক্স (২.৫ মিলি/লি), মাল্টিভিটামিন (১ মিলি/২ লি)",
        doseEn: "Rotate: Zinc B (2.5 ml/L), Calplex (2.5 ml/L), Multivitamin (1 ml/2L)",
        timingBn: "একদিন পর পর ইচ্ছা অনুযায়ী ঘুরিয়ে ঘুরিয়ে",
        timingEn: "Alternating days as convenient",
        purposeBn: "সার্বিক শারীরিক সক্ষমতা, পা শক্ত রাখা, উজ্জ্বল পালক ও রোগ প্রতিরোধ ক্ষমতা অটুট রাখা",
        purposeEn: "Maintains optimal vigor, skeletal strength, glossy plumage and immunity",
      },
      {
        nameBn: "ঠান্ডার সতর্কতামূলক যত্ন (প্রয়োজনে)",
        nameEn: "Cold Care Protocol (If Needed)",
        brandOrTypeBn: "আবহাওয়া পরিবর্তনের সময়",
        brandOrTypeEn: "Weather Change Precaution",
        doseBn: "নাপা সিরাপ (১ মিলি/লিটার) কিংবা Doxy-A Vet (১ গ্রাম/২ লিটার)",
        doseEn: "Napa syrup (1 ml/L) or Doxy-A Vet (1 g/2L)",
        timingBn: "সপ্তাহে ১ দিন যদি ঠান্ডার লক্ষণ দেখা যায়",
        timingEn: "Once a week only if respiratory signs appear",
        purposeBn: "হালকা ঠান্ডা ও হাঁচি নিয়ন্ত্রণ",
        purposeEn: "Relieves seasonal sneezing or mild chills",
        isAlternative: true,
      },
    ],
    farmerTipsBn:
      "১৩–৪০ দিন বয়সে আপনার ইচ্ছা মতো একদিন একদিন করে জিংক, ক্যালসিয়াম ও মাল্টিভিটামিন ঘুরিয়ে ফিরিয়ে দিতে পারেন। পারলে সপ্তাহে ১ দিন ঠান্ডার যত্ন করাবেন (নাপা সিরাপ লিটারে ১ মিলি কিংবা Doxy-A Vet ২ লিটারে ১ গ্রাম দিয়ে)। মনে রাখবেন সুস্থ পাখিতে অপ্রয়োজনীয় অ্যান্টিবায়োটিক দেওয়া উচিত নয়।",
    farmerTipsEn:
      "During Days 13–40, cycle Zinc, Calcium, and Multivitamins on alternating days. In shifting weather, farmers offer Napa syrup (1 ml/L) or Doxy-A Vet for mild colds, but avoid routine antibiotics in healthy flocks.",
    checklistBn: [
      "সাপ্লিমেন্ট রোটেশন তালিকা অনুযায়ী দিনে একবার পানিতে যোগ করুন।",
      "পুরুষ-স্ত্রী কোয়েলের শারীরিক বৈশিষ্ট্য লক্ষ্য করতে শুরু করুন।",
      "৪র্থ সপ্তাহের শেষে বাচ্চার ওজন মেপে দেখুন (টার্গেট: ১২০–১৪০ গ্রাম)।",
      "লিটার উল্টেপাল্টে শুকনো ও গন্ধমুক্ত রাখুন।",
    ],
    checklistEn: [
      "Alternate supplements according to weekly routine.",
      "Observe emergent male/female plumage differences.",
      "Weigh flock at Day 30 (target: 120–140g).",
      "Keep litter aerated and odor-free.",
    ],
    specialInstructionsBn:
      "আলো অতিরিক্ত তীব্র হলে কোয়েল একে অপরকে ঠোকরাতে পারে (ক্যানিবালিজম)। ঘরের আলো সবসময় মৃদু ও চোখ-সহনীয় রাখুন।",
    specialInstructionsEn:
      "Dim excessive room lighting to deter aggressive pecking behavior.",
    vaccineNotesBn:
      "নিয়মমতো স্থানীয় চিকিৎসকের শিডিউল অনুযায়ী কৃমিনাশক ও বায়োসিকিউরিটি নিশ্চিত করুন।",
    vaccineNotesEn:
      "Administer deworming under veterinary recommendation.",
    reviewStatusBn: "ফিল্ড প্র্যাকটিস ও বিশেষজ্ঞ পর্যালোচনাধীন",
    reviewStatusEn: "Field Practice & Under Review",
    sourceBn: " ও পোল্ট্রি রোগ নিয়ন্ত্রণ নির্দেশিকা",
    sourceEn: " & Poultry Disease Management Practice",
  },
  {
    slug: "day-40-55",
    stageNumber: 7,
    titleBn: "৪০ দিন থেকে ৫০% ডিম আসা পর্যন্ত :  ৫০% স্টার্টার + ৫০% লেয়ার-১ ফিড ও ই-সেল",
    titleEn: "Day 40 to 50% Lay :  50% Starter + 50% Layer-1 Mash & E-Sel",
    ageRangeBn: "৪০ দিন থেকে ৫০% ডিম পর্যন্ত",
    ageRangeEn: "Day 40 to 50% Laying",
    temperatureBn: "স্বাভাবিক তাপমাত্রা (২০°–২৫° সেলসিয়াস)",
    temperatureEn: "Ambient Temperature (20°–25°C)",
    lightHoursBn: "১৫–১৬ ঘণ্টা (সকাল ও সন্ধ্যায় কৃত্রিম আলো দিয়ে আলো বাড়ানো)",
    lightHoursEn: "15–16 Hours (Supplemental morning/evening light)",
    feedTypeBn: "নারিশ / কাজী / আমান / সিপি / প্রভিটা ব্রয়লার স্টার্টার ৫০% + লেয়ার-১ ফিড ৫০% ব্লেন্ড",
    feedTypeEn: "50% Quality Broiler Starter + 50% Commercial Layer-1 Mash blend",
    feedManagementBn:
      "খুবই গুরুত্বপূর্ণ খামারি কৌশল: ৪০ দিন থেকে শুরু করে ৫০% ডিম আসা পর্যন্ত নারিশ / কাজী / আমান / সিপি / প্রভিটা ব্রয়লার স্টার্টার ফিডের সাথে ৫০% লেয়ার-১ ফিড ভালোভাবে মিশিয়ে খাওয়াবেন। এরপর আস্তে আস্তে লেয়ার-১ এর অনুপাত বাড়াবেন, তবে মনে রাখবেন ভালো ফলাফলের জন্য ব্রয়লার স্টার্টার ফিড অন্তত ২০% বজায় রাখবেন, তার বেশি কমাবেন না।",
    feedManagementEn:
      "Crucial field strategy: From Day 40 until 50% egg production, feed a 50:50 blend of trusted Broiler Starter (Nourish/Kazi/Aman/CP/Provita) and Layer-1 mash. Gradually raise Layer-1 while maintaining at least 20% Broiler Starter in the ration for optimal performance.",
    waterManagementBn:
      "সকালে ও রাতে আলাদা পানির শিডিউল কঠোরভাবে অনুসরণ করুন। ডিম গঠনের জন্য পানির প্রয়োজন অপরিসীম।",
    waterManagementEn:
      "Strictly enforce morning and night water regimens. Water is vital for albumen formation.",
    temperatureEnvironmentBn:
      "১৬ ঘণ্টার আলোর সময়সূচি কঠোরভাবে বজায় রাখুন। প্রাকৃতিক দিনের আলোর সাথে সকাল ও সন্ধ্যায় অতিরিক্ত কৃত্রিম আলো দিন।",
    temperatureEnvironmentEn:
      "Provide 16 hours of daily lighting without interruption to stimulate the reproductive tract.",
    medicines: [
      {
        nameBn: "ই-সেল (স্কয়ার)  / E-Sel (Square)",
        nameEn: "E-Sel Liquid (Vitamin E + Selenium by Square)",
        brandOrTypeBn: "সকালের নিয়মিত অপরিহার্য সাপ্লিমেন্ট",
        brandOrTypeEn: "Essential Morning Reproductive Supplement",
        doseBn: "১ মিলি প্রতি ২ থেকে ৩ লিটার পানিতে",
        doseEn: "1 ml per 2 to 3 liters of water",
        timingBn: "প্রতিদিন সকালে দিতেই হবে",
        timingEn: "Every morning without fail",
        purposeBn: "ডিম্বাশয়ের পূর্ণ বিকাশ, প্রজনন ক্ষমতা বৃদ্ধি ও দ্রুত প্রথম ডিম আনা",
        purposeEn: "Stimulates ovary development, fertility and triggers early egg onset",
      },
      {
        nameBn: "ক্যালপ্লেক্স (স্কয়ার)  / Calplex (Square)",
        nameEn: "Calplex Liquid (Square Pharmaceuticals Ltd.)",
        brandOrTypeBn: "রাতের নিয়মিত অপরিহার্য ক্যালসিয়াম",
        brandOrTypeEn: "Essential Evening Calcium Supplement",
        doseBn: "২.৫ থেকে ৩ মিলি প্রতি ১ লিটার পানিতে",
        doseEn: "2.5 to 3 ml per 1 liter of water",
        timingBn: "প্রতিদিন রাতে দিতেই হবে",
        timingEn: "Every evening without fail",
        purposeBn: "রাতে ডিমের খোলস গঠন, ক্যালসিয়ামের ঘাটতি ও ডিম আটকা পড়া রোধ",
        purposeEn: "Crucial for nighttime shell calcification and preventing egg binding",
      },
      {
        nameBn: "জিংক বি (স্কয়ার)  / Zinc B (Square)",
        nameEn: "Zinc B Liquid (Square)",
        brandOrTypeBn: "সাপ্তাহিক রুটিন সাপ্লিমেন্ট",
        brandOrTypeEn: "Weekly Routine Support",
        doseBn: "২.৫ থেকে ৩ মিলি প্রতি ১ লিটার পানিতে",
        doseEn: "2.5 to 3 ml per 1 liter of water",
        timingBn: "সপ্তাহে ২–৩ দিন",
        timingEn: "2 to 3 days per week",
        purposeBn: "রোগ প্রতিরোধ ক্ষমতা ও পালকের উজ্জ্বলতা বজায় রাখা",
        purposeEn: "Maintains flock immunity and feather condition",
      },
      {
        nameBn: "এগ ফর্মুলা (একমি)  / Egg Formula (ACME)",
        nameEn: "Egg Formula (The ACME Laboratories Ltd.)",
        brandOrTypeBn: "বাণিজ্যিক ডিম বৃদ্ধিকারক ফর্মুলা (ঐচ্ছিক)",
        brandOrTypeEn: "Commercial Egg Booster (Optional)",
        doseBn: "প্যাকেটের নির্দেশনামতো পানিতে (১০০ গ্রামের দাম প্রায় ১০০ টাকা)",
        doseEn: "As per pack instruction (approx. 100 Tk for 100g pack)",
        timingBn: "বাণিজ্যিক খামারে ডিমের হার বাড়াতে",
        timingEn: "Optional for commercial flocks targeting high lay rate",
        purposeBn: "ডিম উৎপাদন শতকরা হার দ্রুত বাড়ানো ও দীর্ঘস্থায়ী রাখা",
        purposeEn: "Boosts lay percentage and extends peak production curve",
        isAlternative: true,
      },
    ],
    farmerTipsBn:
      "প্রতিদিন দিতেই হবে: সকালে ই-সেল (২-৩ লিটারে ১ মিলি) এবং রাতে ক্যালপ্লেক্স (১ লিটারে ২.৫-৩ মিলি)। জিংক বি সপ্তাহে ২-৩ দিন। মনে রাখবেন বাণিজ্যিকভাবে হোক বা পারিবারিক: ক্যালসিয়াম ও ই-সেল না দিলে আশানুরূপ ডিম পাবেন না। ভালো ডিম পেতে চাইলে একমি কোম্পানির এগ ফর্মুলা খাওয়াতে পারেন (১০০ গ্রাম ১০০ টাকা)।",
    farmerTipsEn:
      "Non-negotiable daily routine: E-Sel in the morning (1ml/2-3L) and Calplex in the evening (2.5-3ml/L). Zinc B 2-3 days weekly. Without calcium and E-Sel, eggs will not develop properly. Optional ACME Egg Formula significantly ramps up production.",
    checklistBn: [
      "৫০% ব্রয়লার স্টার্টার ও ৫০% লেয়ার-১ ফিড মিশিয়ে ফিডারে দিন।",
      "সকালে ই-সেল এবং রাতে ক্যালপ্লেক্স পানি সরবরাহ নিশ্চিত করুন।",
      "১৬ ঘণ্টার আলোর সময়সূচি ঠিক আছে কি না নিশ্চিত করুন।",
      "বিকাল ৩টা থেকে সন্ধ্যার মধ্যে প্রথম ডিম সংগ্রহ করুন ও রেকর্ড রাখুন।",
    ],
    checklistEn: [
      "Feed 50:50 blend of Broiler Starter and Layer-1 mash.",
      "Administer E-Sel in the morning and Calplex in the evening.",
      "Verify 16-hour lighting timer is functional.",
      "Collect first eggs between 3 PM and dusk; log daily count.",
    ],
    specialInstructionsBn:
      "কোয়েল সাধারণত বিকাল ৩টা থেকে সন্ধ্যার মধ্যে ডিম দেয়। এ সময়ে খাঁচায় বা শেডে কোলাহল করা যাবে না, অন্যথায় ডিম ভেঙে যাওয়া বা ভয় পেয়ে ডিম আটকে যাওয়ার ঝুঁকি থাকে।",
    specialInstructionsEn:
      "Quails lay predominantly from 3 PM to dusk. Keep the shed quiet to avoid broken eggs or egg binding.",
    vaccineNotesBn:
      "ডিম শুরু হওয়ার পর চিকিৎসকের লিখিত পরামর্শ ছাড়া কোনো ওষুধ ব্যবহার করবেন না।",
    vaccineNotesEn:
      "Avoid unprescribed drugs once laying commences to prevent production drops.",
    reviewStatusBn: "ফিল্ড প্র্যাকটিস ও বিশেষজ্ঞ পর্যালোচনাধীন",
    reviewStatusEn: "Field Practice & Under Review",
    sourceBn: ", একমি ল্যাবরেটরিজ ও স্কয়ার ফার্মাসিউটিক্যালস",
    sourceEn: ", ACME Laboratories & Square Pharmaceuticals",
  },
  {
    slug: "egg-production",
    stageNumber: 8,
    titleBn: "পূর্ণ ডিম উৎপাদন পর্যায় :  ২০% স্টার্টার ব্যালান্স, ই-সেল, ক্যালপ্লেক্স ও এগ ফর্মুলা",
    titleEn: "Peak Laying Stage :  20% Starter Ratio, E-Sel, Calplex & Egg Formula",
    ageRangeBn: "৫৫+ দিন থেকে উৎপাদন সমাপ্তি",
    ageRangeEn: "Day 55+ Onward (Peak Production)",
    temperatureBn: "স্বাভাবিক আরামদায়ক তাপমাত্রা (১৮°–২৫° সেলসিয়াস)",
    temperatureEn: "Optimal Temperature (18°–25°C)",
    lightHoursBn: "১৬ ঘণ্টা সার্বক্ষণিক অপরিবর্তনশীল আলো",
    lightHoursEn: "16 Hours constant daily photoperiod",
    feedTypeBn: "৮০% লেয়ার-১ ফিড + ২০% ব্রয়লার স্টার্টার ফিড বিশেষ মিশ্রণ",
    feedTypeEn: "80% Commercial Layer-1 + 20% Broiler Starter custom blend",
    feedManagementBn:
      "পূর্ণ ডিম উৎপাদন বজায় রাখতে ৮০% মানসম্পন্ন লেয়ার-১ ফিডের সাথে ২০% ব্রয়লার স্টার্টার ফিড নিয়মিত মিশিয়ে খাওয়ান। স্টার্টার ফিডের বাড়তি প্রোটিন ও এনার্জি কোয়েলের উচ্চ ডিম উৎপাদন হার (৮০–৮৫%) দীর্ঘ মাস ধরে বজায় রাখতে জাদুকরী ভূমিকা পালন করে। প্রতিটি পাখি দিনে গড়ে ২২–২৫ গ্রাম খাবার গ্রহণ করবে।",
    feedManagementEn:
      "To sustain peak 80-85% lay persistence, feed 80% Layer-1 mash combined with 20% Broiler Starter. The extra protein and metabolizable energy in starter feed keeps layers performing at maximum capacity. Feed 22-25g per bird daily.",
    waterManagementBn:
      "সকালে ই-সেল ও রাতে ক্যালপ্লেক্সের পানি শিডিউল প্রতিদিন চলবে। প্রতি ১০০ কোয়েলের জন্য দিনে ৪–৫ লিটার পানি নিশ্চিত করুন।",
    waterManagementEn:
      "Maintain morning E-Sel and evening Calplex water schedule. Provide 4-5 liters of water per 100 adult birds daily.",
    temperatureEnvironmentBn:
      "১৬ ঘণ্টার আলো এক মিনিটও কমাবেন না। শেডের তাপমাত্রা ৩০° সেলসিয়াসের ওপরে গেলে ফ্যান বা কুয়াশা স্প্রে ব্যবহার করুন।",
    temperatureEnvironmentEn:
      "Never reduce the 16-hour photoperiod. Ventilate or fog when ambient temperatures exceed 30°C.",
    medicines: [
      {
        nameBn: "ই-সেল (সকালে) + ক্যালপ্লেক্স (রাতে)",
        nameEn: "E-Sel (Morning) + Calplex (Night)",
        brandOrTypeBn: "প্রতিদিনের বাধ্যতামূলক জুটি",
        brandOrTypeEn: "Mandatory Daily Pair",
        doseBn: "সকালে ই-সেল (১ মিলি/২-৩ লিটার), রাতে ক্যালপ্লেক্স (২.৫-৩ মিলি/লিটার)",
        doseEn: "Morning: E-Sel (1ml/2-3L), Night: Calplex (2.5-3ml/L)",
        timingBn: "দৈনিক নিয়মিত শিডিউল",
        timingEn: "Continuous daily routine",
        purposeBn: "ডিমের খোলস শক্ত রাখা, একটানা ডিম দেওয়ার ক্ষমতা বজায় রাখা ও প্রজনন স্বাস্থ্য",
        purposeEn: "Prevents soft-shelled eggs, cage layer fatigue, and sustains oviposition",
      },
      {
        nameBn: "জিংক বি (সপ্তাহে ২–৩ দিন)",
        nameEn: "Zinc B (2–3 Days Weekly)",
        brandOrTypeBn: "সাপ্তাহিক সুরক্ষা",
        brandOrTypeEn: "Weekly Support",
        doseBn: "২.৫ থেকে ৩ মিলি প্রতি ১ লিটার পানিতে",
        doseEn: "2.5 to 3 ml per 1 liter water",
        timingBn: "সপ্তাহে ২-৩ দিন দিনে একবার",
        timingEn: "2-3 days per week",
        purposeBn: "পালকের উজ্জ্বলতা ও ফিড কনভার্সন রেশিও (FCR) ভালো রাখা",
        purposeEn: "Improves feed conversion and plumage health",
      },
      {
        nameBn: "একমি এগ ফর্মুলা (Acme Egg Formula)",
        nameEn: "ACME Egg Formula",
        brandOrTypeBn: "বাণিজ্যিক বুস্টার (ঐচ্ছিক)",
        brandOrTypeEn: "Commercial Layer Booster",
        doseBn: "১ গ্রাম প্রতি ১-২ লিটার পানিতে",
        doseEn: "1 g per 1-2 liters of water",
        timingBn: "বাণিজ্যিক খামারে ডিমের পারসেন্টেজ বাড়াতে",
        timingEn: "When targeting 80%+ commercial lay persistence",
        purposeBn: "ডিমের উৎপাদন ক্ষমতা সর্বোচ্চ পর্যায়ে ধরে রাখা",
        purposeEn: "Maximizes egg laying persistency and shell quality",
        isAlternative: true,
      },
    ],
    farmerTipsBn:
      "ভালো ডিম পেতে চাইলে একমি কোম্পানির এগ ফর্মুলা খাওয়াতে পারেন (১০০ গ্রাম ১০০ টাকা)। এগ ফর্মুলা দিলে ডিম বাড়ে। বাণিজ্যিক খামার হলে দিতে পারেন, পারিবারিক হলে না দিলেও চলবে। তবে বাণিজ্যিক হোক বা পারিবারিক: ক্যালসিয়াম ও ই-সেল দিতেই হবে, তা না হলে ডিম পাবেন না। ফিডে ২০% ব্রয়লার স্টার্টার ফিড রাখা ভালো ডিম পাওয়ার গোপন রহস্য।",
    farmerTipsEn:
      "ACME Egg Formula boosts egg production significantly for commercial farms. Whether backyard or commercial, Calcium (Calplex) and E-Sel are strictly mandatory. Keeping 20% broiler starter in the layer ration is the field secret to sustained high lay percentages.",
    checklistBn: [
      "দৈনিক বিকাল বেলা ডিম সংগ্রহ করে পরিষ্কার ঠান্ডা জায়গায় সংরক্ষণ করুন।",
      "সকালে ই-সেল এবং রাতে ক্যালপ্লেক্স পানি সরবরাহ করুন।",
      "ডিম উৎপাদন হার শতকরা হিসেবে হিসাব করুন (টার্গেট: ৭৫%–৮৫%)।",
      "খাবারে ২০% ব্রয়লার স্টার্টার ফিড বজায় আছে কি না নিশ্চিত করুন।",
      "উৎপাদনহীন কোয়েল নিয়মিত শনাক্ত করে ছাঁটাই (Culling) করুন।",
    ],
    checklistEn: [
      "Collect eggs in late afternoon and store in cool room.",
      "Administer E-Sel every morning, Calplex every night.",
      "Calculate daily lay percentage (target: 75%–85%).",
      "Ensure 20% Broiler Starter is retained in ration mix.",
      "Cull unproductive birds to safeguard feeding economics.",
    ],
    specialInstructionsBn:
      "বাণিজ্যিক ডিম উৎপাদনের জন্য পুরুষ কোয়েল রাখার দরকার নেই। কেবল বাচ্চা ফোটানোর ডিম পেতে চাইলে ১টি পুরুষ কোয়েলের বিপরীতে ৩টি স্ত্রী কোয়েল রাখা নিয়ম।",
    specialInstructionsEn:
      "No males needed for table eggs. Maintain 1 male to 3 females only for fertile hatching eggs.",
    vaccineNotesBn:
      "নিয়মমতো ভ্যাকসিন ও কৃমিনাশক দিবেন। অ্যান্টিবায়োটিক কখনোই অপ্রয়োজনে দেবেন না।",
    vaccineNotesEn:
      "Maintain deworming schedule and avoid unwarranted antibiotics.",
    reviewStatusBn: "ফিল্ড প্র্যাকটিস ও বিশেষজ্ঞ পর্যালোচনাধীন",
    reviewStatusEn: "Field Practice & Under Review",
    sourceBn: " খামারি অভিজ্ঞতা ও পোল্ট্রি ফার্মিং নির্দেশিকা",
    sourceEn: " Field Experience & Practical Poultry Guidelines",
  },
];

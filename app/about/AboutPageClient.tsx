"use client";

import Link from "next/link";
import {
  Sprout,
  Smartphone,
  BookOpen,
  Syringe,
  Heart,
  Globe,
  ArrowRight,
  Code2,
  Database,
  Zap,
  Star,
  CheckCircle2,
  Users,
  Map,
} from "lucide-react";
import ScrollReveal from "@/components/about/ScrollReveal";
import AnimatedCounter from "@/components/about/AnimatedCounter";
import BirdIllustration from "@/components/common/BirdIllustration";

/* ─── Data ─────────────────────────────────────────────────── */
const timeline = [
  {
    year: "২০২৪",
    titleBn: "স্বপ্নের শুরু",
    descBn:
      "একটি ছোট্ট নোটবুকে লেখা শুরু — কোয়েল পাখির যত্নের রুটিন কীভাবে সহজে মোবাইলে দেখানো যায়।",
    icon: <Sprout size={18} />,
    color: "bg-emerald-100 text-emerald-800",
  },
  {
    year: "২০২৫",
    titleBn: "প্রথম গাইড",
    descBn:
      "জাপানি কোয়েলের ডে-১ থেকে ডিম পাড়া পর্যন্ত বাংলায় সম্পূর্ণ ধাপভিত্তিক গাইড প্রস্তুত করা হলো।",
    icon: <BookOpen size={18} />,
    color: "bg-blue-100 text-blue-800",
  },
  {
    year: "২০২৬",
    titleBn: "পূর্ণাঙ্গ প্ল্যাটফর্ম",
    descBn:
      "৪টি পাখির গাইড, ব্লগ সিস্টেম, টিকার সময়সূচি এবং প্রশাসক ড্যাশবোর্ড নিয়ে সম্পূর্ণ ওয়েবসাইট চালু।",
    icon: <Globe size={18} />,
    color: "bg-purple-100 text-purple-800",
  },
];

const values = [
  {
    icon: <Smartphone size={22} />,
    titleBn: "মোবাইল-প্রথম",
    descBn: "গ্রামের কৃষক যিনি মাঠে দাঁড়িয়ে ফোনে দেখছেন — তাঁর জন্য প্রতিটি পৃষ্ঠা সাজানো।",
    bg: "from-blue-50 to-blue-100/50",
    iconBg: "bg-blue-100 text-blue-700",
  },
  {
    icon: <BookOpen size={22} />,
    titleBn: "নির্ভরযোগ্য তথ্য",
    descBn: "অভিজ্ঞ খামারি ও পশুচিকিৎসকদের পরামর্শ ছাড়া কোনো তথ্য প্রকাশ করা হয় না।",
    bg: "from-amber-50 to-amber-100/50",
    iconBg: "bg-amber-100 text-amber-700",
  },
  {
    icon: <Heart size={22} />,
    titleBn: "খামারির পাশে",
    descBn: "মুনাফার চেয়ে মানুষের কল্যাণ বড়। বিজ্ঞাপনমুক্ত, সরল এবং আন্তরিক।",
    bg: "from-rose-50 to-rose-100/50",
    iconBg: "bg-rose-100 text-rose-700",
  },
  {
    icon: <Syringe size={22} />,
    titleBn: "বিজ্ঞানভিত্তিক",
    descBn: "প্রতিটি টিকার সময়সূচি ও ওষুধের তথ্য সরকারি নির্দেশিকা ও গবেষণার আলোকে তৈরি।",
    bg: "from-teal-50 to-teal-100/50",
    iconBg: "bg-teal-100 text-teal-700",
  },
];

const stats = [
  { valueEnd: 4,    suffix: "টি",    label: "পাখির গাইড" },
  { valueEnd: 37,   suffix: "+",     label: "বিস্তারিত ধাপ" },
  { valueEnd: 7,    suffix: "টি",    label: "ব্লগ আর্টিকেল" },
  { valueEnd: 100,  suffix: "%",     label: "বিনামূল্যে" },
];

const techStack = [
  { name: "Next.js 16",   desc: "App Router + Turbopack",    icon: <Zap size={15} /> },
  { name: "Supabase",     desc: "PostgreSQL + Auth + RLS",   icon: <Database size={15} /> },
  { name: "TypeScript",   desc: "Type-safe codebase",        icon: <Code2 size={15} /> },
  { name: "Tailwind 4",   desc: "Modern CSS engine",         icon: <Star size={15} /> },
];

/* ─── Component ─────────────────────────────────────────────── */
export default function AboutPageClient() {
  return (
    <div className="overflow-hidden">

      {/* ══════════════════════════════════════════
          HERO — Full-bleed dark gradient
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0D2B1D] via-[#1A4331] to-[#143526] text-white">
        {/* Decorative rings */}
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full border border-white/[0.05] pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-[380px] h-[380px] rounded-full border border-white/[0.07] pointer-events-none" />
        <div className="absolute top-10 -right-8  w-[260px] h-[260px] rounded-full border border-white/[0.05] pointer-events-none animate-spin-slow" />

        {/* Glowing blobs */}
        <div className="absolute top-20 right-32 w-56 h-56 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none animate-float" />
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="animate-fade-in inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs text-[#A8D5BB] font-medium backdrop-blur-sm mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              সহজ খামার · আমাদের গল্প
            </div>

            <h1 className="animate-fade-up text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              বাংলার খামারিদের{" "}
              <span className="shimmer-text">ডিজিটাল সঙ্গী</span>
            </h1>

            <p className="animate-fade-up delay-200 mt-6 text-lg sm:text-xl text-[#C2DED0] leading-relaxed max-w-2xl">
              একটি ছোট নোটবুকের স্বপ্ন থেকে শুরু। আজ সহজ খামার বাংলাদেশের হাজারো ক্ষুদ্র
              খামারির হাতের কাছে নিয়ে এসেছে বিজ্ঞানসম্মত, সহজবোধ্য পাখি-পালনের গাইড।
            </p>

            <div className="animate-fade-up delay-400 mt-8 flex flex-wrap gap-3">
              <Link
                href="/birds/quail/japanese"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#1A4331] font-bold text-sm hover:bg-emerald-50 transition-all shadow-md"
              >
                গাইড দেখুন <ArrowRight size={16} />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/15 transition-all"
              >
                ব্লগ পড়ুন
              </Link>
            </div>
          </div>

          {/* Floating illustration */}
          <div className="absolute right-6 bottom-0 opacity-20 hidden lg:block pointer-events-none">
            <div className="animate-float">
              <BirdIllustration variant="active" width={280} height={240} />
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 56L1440 56L1440 28C1200 56 960 0 720 0C480 0 240 56 0 28L0 56Z" fill="#FAF8F3" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS — Animated counters
      ══════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, i) => (
            <ScrollReveal key={i} className="reveal" delay={i * 110}>
              <div className="bg-white rounded-2xl border border-[#E1EAE0] p-5 sm:p-7 text-center shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl sm:text-4xl font-black text-[#1A4331]">
                  <AnimatedCounter end={s.valueEnd} suffix={s.suffix} />
                </div>
                <div className="mt-1.5 text-xs sm:text-sm text-[#5E7869] font-medium">{s.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STORY — Staggered split layout
      ══════════════════════════════════════════ */}
      <section className="py-10 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Visual card */}
          <ScrollReveal className="reveal-left">
            <div className="relative">
              {/* Main card */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1A4331] to-[#0D2B1D] p-8 sm:p-10 text-white shadow-xl">
                <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-400/10 rounded-full blur-2xl" />
                <div className="relative">
                  <span className="text-6xl mb-4 block">🌱</span>
                  <blockquote className="text-xl sm:text-2xl font-bold leading-snug mb-4">
                    &ldquo;একজন ক্লান্ত খামারি রাত ১১টায় ফোনে সার্চ দিলে — সঠিক উত্তরটা যেন তাঁর ভাষায় পান।&rdquo;
                  </blockquote>
                  <p className="text-[#A8D5BB] text-sm font-medium">— সহজ খামারের প্রতিষ্ঠাকালীন ভাবনা</p>
                </div>
              </div>

              {/* Floating accent badge */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl border border-[#E1EAE0] shadow-lg p-4 flex items-center gap-3">
                <span className="text-2xl">🐦</span>
                <div>
                  <p className="text-xs font-bold text-[#1A4331]">বাংলায় প্রথম</p>
                  <p className="text-[11px] text-[#5E7869]">ধাপভিত্তিক পাখির গাইড</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Story text */}
          <ScrollReveal className="reveal-right">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF2E8] text-[#1A4331] text-xs font-bold uppercase tracking-wider">
                <Sprout size={12} /> আমাদের গল্প
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A4331] leading-tight tracking-tight">
                একটা সমস্যা, একটা সমাধান
              </h2>
              <div className="space-y-4 text-[#405448] leading-relaxed text-base">
                <p>
                  বাংলাদেশের লক্ষাধিক ক্ষুদ্র খামারি প্রতিদিন একটি সহজ প্রশ্নের মুখোমুখি হন —{" "}
                  <strong className="text-[#1A4331]">আজকে কী করব?</strong> কতটুকু খাবার দেব? তাপমাত্রা কত রাখব? কোন টিকা কখন?
                </p>
                <p>
                  ইন্টারনেটে তথ্য আছে, কিন্তু সেটা ইংরেজিতে, জটিল ভাষায়, আর মোবাইলে ব্যবহারযোগ্য নয়।
                  সহজ খামার তৈরি হয়েছে সেই শূন্যস্থান পূরণ করতে।
                </p>
                <p>
                  আমরা বিশ্বাস করি — <strong className="text-[#1A4331]">প্রযুক্তি যখন মানুষের ভাষায় কথা বলে</strong>, তখনই সে সত্যিকারের সেবা দিতে পারে।
                </p>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                {[
                  "বয়সভিত্তিক দৈনিক পরিচর্যা চেকলিস্ট",
                  "বাংলায় স্পষ্ট টিকার সময়সূচি",
                  "বিশেষজ্ঞ-পরীক্ষিত খাদ্য ও ওষুধের তথ্য",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-[#334D3F]">
                    <CheckCircle2 size={17} className="text-emerald-600 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TIMELINE
      ══════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-white border-y border-[#E8EDE6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal className="reveal text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF2E8] text-[#1A4331] text-xs font-bold uppercase tracking-wider mb-4">
              <Map size={12} /> আমাদের যাত্রা
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A4331] tracking-tight">
              এভাবেই তৈরি হয়েছে সহজ খামার
            </h2>
          </ScrollReveal>

          <div className="relative">
            {/* Center line (desktop only) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#1A4331]/10 via-[#1A4331]/30 to-[#1A4331]/10 -translate-x-px" />

            <div className="space-y-10 md:space-y-0">
              {timeline.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div
                    key={i}
                    className={`relative md:grid md:grid-cols-2 md:gap-10 md:items-center ${
                      i === 1 ? "md:mt-10" : ""
                    }`}
                  >
                    {/* Content card */}
                    <ScrollReveal
                      className={isLeft ? "reveal-left" : "reveal-right md:col-start-2"}
                      delay={100}
                    >
                      <div
                        className={`bg-white rounded-2xl border border-[#E1EAE0] p-6 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${
                          !isLeft ? "md:col-start-2" : ""
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <span className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-bold ${item.color}`}>
                            {item.icon}
                          </span>
                          <div>
                            <span className="text-xs font-black text-[#8AA898] tracking-widest">{item.year}</span>
                            <h3 className="text-lg font-extrabold text-[#1A4331] mt-0.5">{item.titleBn}</h3>
                            <p className="text-sm text-[#4E6A5A] mt-1.5 leading-relaxed">{item.descBn}</p>
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>

                    {/* Center dot (desktop) */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-[#1A4331] border-4 border-[#FAF8F3] shadow-sm z-10" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          VALUES — Bento-style grid
      ══════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal className="reveal text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF2E8] text-[#1A4331] text-xs font-bold uppercase tracking-wider mb-4">
            <Heart size={12} /> আমাদের মূলনীতি
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A4331] tracking-tight">
            যে বিশ্বাসে আমরা কাজ করি
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {values.map((v, i) => (
            <ScrollReveal key={i} className="reveal" delay={i * 100}>
              <div
                className={`group relative bg-gradient-to-br ${v.bg} rounded-3xl p-6 sm:p-7 border border-white/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 overflow-hidden`}
              >
                {/* Decorative circle */}
                <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-white/40 blur-md group-hover:scale-125 transition-transform duration-500" />

                <div className="relative">
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-4 shadow-xs ${v.iconBg}`}>
                    {v.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#1A4331]">{v.titleBn}</h3>
                  <p className="mt-2 text-sm text-[#405448] leading-relaxed">{v.descBn}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TECH STACK — "Built with care"
      ══════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-[#F3F7F2] border-y border-[#DFE7DD]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal className="reveal">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A4331]/10 text-[#1A4331] text-xs font-bold uppercase tracking-wider mb-3">
                  <Code2 size={12} /> যেভাবে তৈরি
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A4331] tracking-tight">
                  সেরা প্রযুক্তি দিয়ে তৈরি
                </h2>
                <p className="text-sm text-[#5E7869] mt-1.5 max-w-md">
                  আধুনিক ওয়েব প্রযুক্তি ব্যবহার করে দ্রুত, নিরাপদ এবং মোবাইল-বান্ধব অভিজ্ঞতা তৈরি করা হয়েছে।
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {techStack.map((tech, i) => (
                <ScrollReveal key={i} className="reveal-scale" delay={i * 80}>
                  <div className="bg-white rounded-2xl p-5 border border-[#E1EAE0] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 group text-center">
                    <div className="w-10 h-10 rounded-xl bg-[#1A4331]/8 text-[#1A4331] flex items-center justify-center mx-auto mb-3 group-hover:bg-[#1A4331] group-hover:text-white transition-colors duration-300">
                      {tech.icon}
                    </div>
                    <p className="font-extrabold text-sm text-[#1A4331]">{tech.name}</p>
                    <p className="text-[11px] text-[#728878] mt-0.5">{tech.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          COMMUNITY — Human touch section
      ══════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal className="reveal">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF2E8] text-[#1A4331] text-xs font-bold uppercase tracking-wider">
                <Users size={12} /> আমাদের পরিবার
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A4331] tracking-tight leading-tight">
                খামারি থেকে খামারি — একটি পরিবার
              </h2>
              <p className="text-[#405448] text-base leading-relaxed">
                সহজ খামার শুধু একটি ওয়েবসাইট নয়। এটি একটি আন্দোলন — যেখানে প্রযুক্তি এবং কৃষির মেলবন্ধনে গড়ে উঠছে
                বাংলাদেশের ক্ষুদ্র খামারিদের একটি শক্তিশালী নেটওয়ার্ক।
              </p>
              <p className="text-[#405448] text-base leading-relaxed">
                রাজশাহীর কোয়েল খামারি ফাহিম ভাইয়ের বাস্তব অভিজ্ঞতা থেকে শুরু করে বিশ্ববিদ্যালয়ের পশু চিকিৎসকদের পরামর্শ —
                সব মিলিয়ে তৈরি হয়েছে এই প্ল্যাটফর্ম।
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 mt-2 px-5 py-3 rounded-xl bg-[#1A4331] text-white font-bold text-sm hover:bg-[#143526] transition-all shadow-sm"
              >
                আমাদের ব্লগ পড়ুন <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>

          {/* Testimonial-style Cards */}
          <div className="space-y-4">
            {[
              {
                quote: "আগে কোথায় খুঁজব বুঝতাম না। এখন ফোনেই সব পাই।",
                name: "রাজশাহীর একজন কোয়েল খামারি",
                emoji: "🧑‍🌾",
                delay: 0,
              },
              {
                quote: "টিকার শিডিউল এত সহজভাবে কেউ বাংলায় লেখেনি।",
                name: "সোনালি মুরগি খামারি, টাঙ্গাইল",
                emoji: "👩‍🌾",
                delay: 150,
              },
              {
                quote: "মোবাইলে পড়তে পারি, গ্রামে নেট দুর্বল থাকলেও ঝামেলা নাই।",
                name: "ব্রয়লার খামারি, গাজীপুর",
                emoji: "🧑‍💼",
                delay: 300,
              },
            ].map((t, i) => (
              <ScrollReveal key={i} className="reveal-right" delay={t.delay}>
                <div className="bg-white rounded-2xl border border-[#E1EAE0] p-5 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex gap-4">
                  <span className="text-3xl shrink-0">{t.emoji}</span>
                  <div>
                    <p className="text-sm text-[#334D3F] leading-relaxed font-medium">&ldquo;{t.quote}&rdquo;</p>
                    <p className="text-[11px] text-[#8AA898] font-semibold mt-2">{t.name}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA — Call to action
      ══════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="reveal-scale">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1A4331] via-[#1E5038] to-[#0D2B1D] p-8 sm:p-14 text-white text-center shadow-xl">
              {/* Decoration */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="absolute -top-20 -right-20 w-56 h-56 bg-emerald-400/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-teal-400/5 rounded-full blur-3xl" />

              <div className="relative">
                <span className="text-4xl mb-4 block">🌿</span>
                <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight">
                  আজই শুরু করুন
                </h2>
                <p className="text-[#C2DED0] text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                  বিনামূল্যে, নিবন্ধন ছাড়া — শুধু আপনার পাখি বেছে নিন এবং প্রথম দিন থেকেই সঠিক যত্ন নিন।
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/birds/quail/japanese"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#1A4331] font-bold text-sm hover:bg-emerald-50 transition-all shadow-md animate-pulse-glow"
                  >
                    কোয়েলের গাইড শুরু করুন <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/vaccination"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/15 transition-all"
                  >
                    টিকা সময়সূচি দেখুন
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X } from "lucide-react";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#FAF8F3] border-b border-[#EBE6DE]/70 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-[#1A4331] flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Stylized organic bird/leaf shape matching logo */}
              <path
                d="M17.5 7.5C17.5 7.5 15.5 5 12 5C8 5 5 8 5 12C5 16 8 19 12 19C16.5 19 19 15.5 19 12C19 9.5 17.5 7.5 17.5 7.5Z"
                fill="#FAF8F3"
              />
              <circle cx="10" cy="11" r="2.2" fill="#1A4331" />
            </svg>
          </div>
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#1A4331]">
            {t("brandName")}
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-[15px] font-medium text-[#2C3E35]">
          <Link
            href="/birds/quail/japanese"
            className="hover:text-[#1A4331] transition-colors py-1"
          >
            {t("navQuail")}
          </Link>
          <Link
            href="#birds-section"
            className="hover:text-[#1A4331] transition-colors py-1"
          >
            {t("navChicken")}
          </Link>
          <Link
            href="/vaccination"
            className="hover:text-[#1A4331] transition-colors py-1"
          >
            {t("navVaccine")}
          </Link>
          <Link
            href="/blog"
            className="hover:text-[#1A4331] transition-colors py-1"
          >
            {t("navBlog")}
          </Link>
          <Link
            href="/about"
            className="hover:text-[#1A4331] transition-colors py-1"
          >
            {t("navAbout")}
          </Link>
        </nav>

        {/* Right Section: Language Toggle & Mobile Menu */}
        <div className="flex items-center gap-3">
          {/* Language Switcher Pill */}
          <div className="flex items-center p-0.5 border border-[#CCD6CD] rounded-lg bg-white/60 text-xs sm:text-sm font-medium">
            <button
              onClick={() => setLanguage("bn")}
              className={`px-3 py-1.5 rounded-md transition-all ${
                language === "bn"
                  ? "bg-[#1A4331] text-white shadow-xs font-semibold"
                  : "text-[#4A5D52] hover:text-[#1A4331]"
              }`}
              aria-label="বাংলা ভাষায় পরিবর্তন করুন"
            >
              বাংলা
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1.5 rounded-md transition-all ${
                language === "en"
                  ? "bg-[#1A4331] text-white shadow-xs font-semibold"
                  : "text-[#4A5D52] hover:text-[#1A4331]"
              }`}
              aria-label="Switch to English language"
            >
              English
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1A4331] rounded-lg hover:bg-[#EBF1EA]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8ECE6] bg-[#FAF8F3] px-5 py-4 flex flex-col gap-3 shadow-md animate-in slide-in-from-top-2">
          <Link
            href="/birds/quail/japanese"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-[#1A4331] py-2 border-b border-[#E8ECE6]/60"
          >
            {t("navQuail")}
          </Link>
          <Link
            href="#birds-section"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-[#1A4331] py-2 border-b border-[#E8ECE6]/60"
          >
            {t("navChicken")}
          </Link>
          <Link
            href="/vaccination"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-[#1A4331] py-2 border-b border-[#E8ECE6]/60"
          >
            {t("navVaccine")}
          </Link>
          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-[#1A4331] py-2 border-b border-[#E8ECE6]/60"
          >
            {t("navBlog")}
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-[#1A4331] py-2"
          >
            {t("navAbout")}
          </Link>
        </div>
      )}
    </header>
  );
}

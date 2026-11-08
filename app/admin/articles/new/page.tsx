"use client";

import React from "react";
import ArticleForm from "@/components/admin/ArticleForm";

export default function NewArticlePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-[#1A4331] tracking-tight">
          নতুন ব্লগ আর্টিকেল তৈরি
        </h1>
        <p className="text-xs sm:text-sm text-[#546E5F] mt-1">
          সহজ খামার ব্লগে নতুন তথ্যবহুল পোস্ট লিখুন ও প্রকাশ করুন
        </p>
      </div>

      <ArticleForm isEdit={false} />
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import {
  ArrowLeft,
  Save,
  CheckCircle,
  AlertCircle,
  FileText,
  Upload,
} from "lucide-react";

interface ArticleFormProps {
  initialData?: any;
  isEdit?: boolean;
}

export default function ArticleForm({
  initialData,
  isEdit = false,
}: ArticleFormProps) {
  const router = useRouter();

  const [titleBn, setTitleBn] = useState(initialData?.title_bn || "");
  const [titleEn, setTitleEn] = useState(initialData?.title_en || "");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [categorySlug, setCategorySlug] = useState(
    initialData?.category_slug || "quail"
  );
  const [excerptBn, setExcerptBn] = useState(initialData?.excerpt_bn || "");
  const [excerptEn, setExcerptEn] = useState(initialData?.excerpt_en || "");
  const [contentBn, setContentBn] = useState(
    Array.isArray(initialData?.content_bn)
      ? initialData.content_bn.join("\n\n")
      : initialData?.content_bn || ""
  );
  const [contentEn, setContentEn] = useState(
    Array.isArray(initialData?.content_en)
      ? initialData.content_en.join("\n\n")
      : initialData?.content_en || ""
  );
  const [tags, setTags] = useState(
    Array.isArray(initialData?.tags)
      ? initialData.tags.join(", ")
      : initialData?.tags || ""
  );
  const [featuredImageUrl, setFeaturedImageUrl] = useState(
    initialData?.featured_image_url || ""
  );
  const [isPublished, setIsPublished] = useState(
    initialData?.is_published !== undefined ? initialData.is_published : true
  );
  const [seoTitleBn, setSeoTitleBn] = useState(initialData?.seo_title_bn || "");
  const [metaDescBn, setMetaDescBn] = useState(initialData?.meta_desc_bn || "");

  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const categories = [
    { slug: "quail", nameBn: "কোয়েল পালন" },
    { slug: "chicken", nameBn: "মুরগি পালন" },
    { slug: "feed", nameBn: "খাবার ও পুষ্টি" },
    { slug: "health", nameBn: "রোগ ও চিকিৎসা" },
    { slug: "economics", nameBn: "লাভ-ক্ষতির হিসাব" },
  ];

  // Auto-generate slug from English title if empty
  const handleTitleEnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setTitleEn(val);
    if (!isEdit && !slug) {
      setSlug(
        val
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "")
      );
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    setErrorMsg("");

    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `articles/${fileName}`;

      const { data, error } = await supabase.storage
        .from("blog-images")
        .upload(filePath, file);

      if (error) throw error;

      const { data: publicUrlData } = supabase.storage
        .from("blog-images")
        .getPublicUrl(filePath);

      setFeaturedImageUrl(publicUrlData.publicUrl);
      setSuccessMsg("ছবি সফলভাবে আপলোড হয়েছে!");
    } catch (err: any) {
      setErrorMsg(err.message || "ছবি আপলোড করতে সমস্যা হয়েছে।");
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setErrorMsg("");
    setSuccessMsg("");

    const categoryObj = categories.find((c) => c.slug === categorySlug);
    const categoryNameBn = categoryObj ? categoryObj.nameBn : "কোয়েল পালন";

    const contentBnArray = contentBn
      .split("\n\n")
      .map((p: string) => p.trim())
      .filter(Boolean);
    const contentEnArray = contentEn
      .split("\n\n")
      .map((p: string) => p.trim())
      .filter(Boolean);
    const tagsArray = tags
      .split(",")
      .map((t: string) => t.trim())
      .filter(Boolean);

    const categoryNameEn = ({ quail: "Quail Farming", chicken: "Chicken Farming", feed: "Feed & Nutrition", health: "Health & Disease", economics: "Cost & Profit" } as Record<string, string>)[categorySlug] || "Quail Farming";
    const payload = {
      slug: slug.trim().toLowerCase(),
      title_bn: titleBn.trim(),
      title_en: titleEn.trim(),
      seo_title_bn: seoTitleBn.trim() || titleBn.trim(),
      seo_title_en: titleEn.trim(),
      meta_desc_bn: metaDescBn.trim() || excerptBn.trim(),
      meta_desc_en: excerptEn.trim(),
      excerpt_bn: excerptBn.trim(),
      excerpt_en: excerptEn.trim(),
      category_slug: categorySlug,
      category_name_bn: categoryNameBn,
      category_name_en: categoryNameEn,
      tags: tagsArray,
      featured_image_url: featuredImageUrl.trim() || null,
      content_bn: contentBnArray,
      content_en: contentEnArray,
      is_published: isPublished,
      updated_at: new Date().toISOString(),
    };

    try {
      if (isEdit) {
        const { error } = await supabase
          .from("blog_articles")
          .update(payload)
          .eq("id", initialData.id);

        if (error) throw error;
        setSuccessMsg("আর্টিকেল সফলভাবে আপডেট হয়েছে!");
      } else {
        const { error } = await supabase
          .from("blog_articles")
          .insert([{ ...payload, published_date: new Date().toISOString().split("T")[0] }]);

        if (error) throw error;
        setSuccessMsg("নতুন আর্টিকেল সফলভাবে তৈরি হয়েছে!");
      }

      setTimeout(() => {
        router.push("/admin/articles");
      }, 1000);
    } catch (err: any) {
      setErrorMsg(err.message || "সংরক্ষণ করতে সমস্যা হয়েছে। স্লাগ বা ফিল্ডগুলো চেক করুন।");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl">
      {/* Top Action Bar */}
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/admin/articles"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#546E5F] hover:text-[#1A4331] transition-colors"
        >
          <ArrowLeft size={14} />
          <span>আর্টিকেল তালিকায় ফিরুন</span>
        </Link>

        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-[#1A4331]">
            <input
              type="checkbox"
              checked={isPublished}
              onChange={(e) => setIsPublished(e.target.checked)}
              className="w-4 h-4 rounded text-[#1A4331] focus:ring-0"
            />
            <span>{isPublished ? "সরাসরি প্রকাশ করুন" : "খসড়া হিসেবে রাখুন"}</span>
          </label>

          <button
            type="submit"
            disabled={saving}
            className="px-5 py-2.5 rounded-xl bg-[#1A4331] text-white hover:bg-[#143628] text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs disabled:opacity-50"
          >
            <Save size={15} />
            <span>{saving ? "সংরক্ষণ হচ্ছে..." : isEdit ? "আপডেট করুন" : "সংরক্ষণ করুন"}</span>
          </button>
        </div>
      </div>

      {errorMsg && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
          <AlertCircle size={16} />
          <span>{errorMsg}</span>
        </div>
      )}

      {successMsg && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
          <CheckCircle size={16} />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Main Info Card */}
      <div className="bg-white rounded-3xl border border-[#DFE7DE] p-6 sm:p-8 shadow-xs space-y-5">
        <h2 className="text-base font-bold text-[#1A4331] pb-3 border-b border-[#EDF2EB]">
          প্রাথমিক তথ্য ও শিরোনাম
        </h2>

        <div>
          <label className="block text-xs font-bold text-[#1A4331] mb-1.5">
            বাংলা শিরোনাম <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={titleBn}
            onChange={(e) => setTitleBn(e.target.value)}
            placeholder="যেমন: কোয়েল পাখি কত দিনে ডিম দেয়?"
            className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#FAF8F3] border border-[#CCD8CC] focus:outline-hidden focus:border-[#1A4331] text-[#1A4331]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#1A4331] mb-1.5">
              ইংরেজি শিরোনাম (English Title)
            </label>
            <input
              type="text"
              value={titleEn}
              onChange={handleTitleEnChange}
              placeholder="e.g. When Do Quails Start Laying Eggs?"
              className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#FAF8F3] border border-[#CCD8CC] focus:outline-hidden focus:border-[#1A4331] text-[#1A4331]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#1A4331] mb-1.5">
              ইউআরএল স্লাগ (Slug) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="quail-egg-timeline"
              className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#FAF8F3] border border-[#CCD8CC] focus:outline-hidden focus:border-[#1A4331] text-[#1A4331]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#1A4331] mb-1.5">
              ক্যাটাগরি
            </label>
            <select
              value={categorySlug}
              onChange={(e) => setCategorySlug(e.target.value)}
              className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#FAF8F3] border border-[#CCD8CC] focus:outline-hidden focus:border-[#1A4331] text-[#1A4331]"
            >
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.nameBn}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#1A4331] mb-1.5">
              ট্যাগসমূহ (কমা দিয়ে লিখুন)
            </label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="কোয়েল, ডিম, পুষ্টি"
              className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#FAF8F3] border border-[#CCD8CC] focus:outline-hidden focus:border-[#1A4331] text-[#1A4331]"
            />
          </div>
        </div>
      </div>

      {/* Excerpt & Content Card */}
      <div className="bg-white rounded-3xl border border-[#DFE7DE] p-6 sm:p-8 shadow-xs space-y-5">
        <h2 className="text-base font-bold text-[#1A4331] pb-3 border-b border-[#EDF2EB]">
          সংক্ষিপ্ত বিবরণ ও মূল কনটেন্ট
        </h2>

        <div>
          <label className="block text-xs font-bold text-[#1A4331] mb-1.5">
            সংক্ষিপ্ত বিবরণ (Excerpt / বাংলা)
          </label>
          <textarea
            rows={2}
            value={excerptBn}
            onChange={(e) => setExcerptBn(e.target.value)}
            placeholder="আর্টিকেলের মূল বক্তব্য ১-২ লাইনে..."
            className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#FAF8F3] border border-[#CCD8CC] focus:outline-hidden focus:border-[#1A4331] text-[#1A4331]"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#1A4331] mb-1.5">
            মূল আর্টিকেল কনটেন্ট (বাংলা)
          </label>
          <p className="text-[11px] text-[#637D6E] mb-2">
            প্যারাগ্রাফ আলাদা করতে ডাবল এন্টার চাপুন। সাবহেডিংয়ের জন্য শুরুতে `## ` এবং তালিকার জন্য `- ` ব্যবহার করতে পারেন।
          </p>
          <textarea
            rows={10}
            required
            value={contentBn}
            onChange={(e) => setContentBn(e.target.value)}
            placeholder="এখানে পূর্ণাঙ্গ আর্টিকেল লিখুন..."
            className="w-full px-4 py-3 text-sm rounded-xl bg-[#FAF8F3] border border-[#CCD8CC] focus:outline-hidden focus:border-[#1A4331] text-[#1A4331] font-mono leading-relaxed"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#1A4331] mb-1.5">
            ইংরেজি কনটেন্ট (English Content - ঐচ্ছিক)
          </label>
          <textarea
            rows={5}
            value={contentEn}
            onChange={(e) => setContentEn(e.target.value)}
            placeholder="Optional English translation..."
            className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#FAF8F3] border border-[#CCD8CC] focus:outline-hidden focus:border-[#1A4331] text-[#1A4331]"
          />
        </div>
      </div>

      {/* Featured Image & SEO */}
      <div className="bg-white rounded-3xl border border-[#DFE7DE] p-6 sm:p-8 shadow-xs space-y-5">
        <h2 className="text-base font-bold text-[#1A4331] pb-3 border-b border-[#EDF2EB]">
          ফিচার্ড ছবি ও এসইও (SEO)
        </h2>

        <div>
          <label className="block text-xs font-bold text-[#1A4331] mb-1.5">
            ফিচার্ড ছবি আপলোড (Supabase Storage)
          </label>
          <div className="flex items-center gap-3">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="text-xs text-[#5D7365] file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-[#1A4331] file:text-white hover:file:bg-[#143628] file:cursor-pointer"
            />
            {uploadingImage && <span className="text-xs text-[#1A4331]">আপলোড হচ্ছে...</span>}
          </div>

          <label className="mt-4 block text-xs font-bold text-[#1A4331]">
            মিডিয়া লাইব্রেরি থেকে ছবির URL
            <input
              type="url"
              value={featuredImageUrl}
              onChange={(event) => setFeaturedImageUrl(event.target.value)}
              placeholder="ছবি ও মিডিয়া পেজ থেকে URL কপি করে এখানে পেস্ট করুন"
              className="mt-1.5 w-full rounded-xl border border-[#CCD8CC] bg-[#FAF8F3] px-4 py-2.5 text-sm font-normal text-[#1A4331]"
            />
          </label>

          {featuredImageUrl && (
            <div className="mt-3 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <img src={featuredImageUrl} alt="Featured image preview" className="h-24 w-40 rounded-lg object-cover" />
              <span className="text-xs text-[#526B5D] truncate max-w-sm">
                URL: {featuredImageUrl}
              </span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div>
            <label className="block text-xs font-bold text-[#1A4331] mb-1.5">
              এসইও টাইটেল (SEO Title)
            </label>
            <input
              type="text"
              value={seoTitleBn}
              onChange={(e) => setSeoTitleBn(e.target.value)}
              placeholder="সার্চ ইঞ্জিনের জন্য টাইটেল"
              className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#FAF8F3] border border-[#CCD8CC] focus:outline-hidden focus:border-[#1A4331] text-[#1A4331]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#1A4331] mb-1.5">
              মেটা বিবরণ (Meta Description)
            </label>
            <input
              type="text"
              value={metaDescBn}
              onChange={(e) => setMetaDescBn(e.target.value)}
              placeholder="সার্চ রেজাল্টে প্রদর্শিত বিবরণ (১৬০ অক্ষর)"
              className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#FAF8F3] border border-[#CCD8CC] focus:outline-hidden focus:border-[#1A4331] text-[#1A4331]"
            />
          </div>
        </div>
      </div>
    </form>
  );
}

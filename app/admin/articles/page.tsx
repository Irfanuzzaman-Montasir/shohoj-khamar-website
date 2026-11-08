"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import {
  Plus,
  Search,
  Filter,
  Edit3,
  Trash2,
  Eye,
  CheckCircle,
  Clock,
  ArrowLeft,
} from "lucide-react";

export default function AdminArticlesListPage() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "published" | "draft">("all");
  const [errorMessage, setErrorMessage] = useState("");

  const loadArticles = async () => {
    setLoading(true);
    setErrorMessage("");
    const { data, error } = await supabase
      .from("blog_articles")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setErrorMessage(`আর্টিকেল লোড করা যায়নি: ${error.message}`);
    } else if (data) {
      setArticles(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadArticles();
  }, []);

  const togglePublish = async (id: string, current: boolean) => {
    const { error } = await supabase
      .from("blog_articles")
      .update({ is_published: !current })
      .eq("id", id);
    if (error) setErrorMessage(`প্রকাশের অবস্থা বদলানো যায়নি: ${error.message}`);
    else loadArticles();
  };

  const deleteArticle = async (id: string, title: string) => {
    if (confirm(`আপনি কি নিশ্চিতভাবে "${title}" আর্টিকেলটি মুছে ফেলতে চান?`)) {
      const { error } = await supabase.from("blog_articles").delete().eq("id", id);
      if (error) setErrorMessage(`আর্টিকেল মুছতে সমস্যা হয়েছে: ${error.message}`);
      else loadArticles();
    }
  };

  const filtered = articles.filter((a) => {
    const matchSearch =
      !search ||
      a.title_bn.toLowerCase().includes(search.toLowerCase()) ||
      a.title_en?.toLowerCase().includes(search.toLowerCase());
    const matchStatus =
      statusFilter === "all" ||
      (statusFilter === "published" && a.is_published) ||
      (statusFilter === "draft" && !a.is_published);
    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="rounded-3xl bg-white border border-[#DFE7DE] p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-[#1A4331] tracking-tight">
            ব্লগ আর্টিকেল ব্যবস্থাপনা
          </h1>
          <p className="text-xs sm:text-sm text-[#546E5F] mt-1">
            মোট {articles.length} টি আর্টিকেল সংরক্ষিত আছে
          </p>
        </div>

        <Link
          href="/admin/articles/new"
          className="px-4 py-2.5 rounded-xl bg-[#1A4331] text-white hover:bg-[#143628] text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs w-fit"
        >
          <Plus size={16} />
          <span>নতুন আর্টিকেল লিখুন</span>
        </Link>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white rounded-2xl border border-[#DFE7DE] p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xs">
        {/* Status Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#FAF8F3] border border-[#CCD8CC] text-xs font-semibold w-full md:w-auto">
          <button
            onClick={() => setStatusFilter("all")}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              statusFilter === "all"
                ? "bg-[#1A4331] text-white"
                : "text-[#4A6253] hover:text-[#1A4331]"
            }`}
          >
            সকল ({articles.length})
          </button>
          <button
            onClick={() => setStatusFilter("published")}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              statusFilter === "published"
                ? "bg-[#1A4331] text-white"
                : "text-[#4A6253] hover:text-[#1A4331]"
            }`}
          >
            প্রকাশিত ({articles.filter((a) => a.is_published).length})
          </button>
          <button
            onClick={() => setStatusFilter("draft")}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              statusFilter === "draft"
                ? "bg-[#1A4331] text-white"
                : "text-[#4A6253] hover:text-[#1A4331]"
            }`}
          >
            খসড়া ({articles.filter((a) => !a.is_published).length})
          </button>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="আর্টিকেল খুঁজুন..."
            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-[#FAF8F3] border border-[#CCD8CC] focus:outline-hidden focus:border-[#1A4331] text-[#1A4331]"
          />
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7B9283]" />
        </div>
      </div>

      {/* Articles Table */}
      <div className="rounded-3xl bg-white border border-[#DFE7DE] p-6 shadow-xs">
        {errorMessage && <p role="alert" className="mb-4 rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-800">{errorMessage}</p>}
        {loading ? (
          <div className="py-16 text-center text-xs text-[#5D7365]">
            আর্টিকেল তালিকা লোড হচ্ছে...
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-sm font-bold text-[#1A4331]">কোনো আর্টিকেল পাওয়া যায়নি</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#EDF2EB] text-[#617B6D]">
                  <th className="pb-3 font-bold">শিরোনাম</th>
                  <th className="pb-3 font-bold">ক্যাটাগরি</th>
                  <th className="pb-3 font-bold">তারিখ</th>
                  <th className="pb-3 font-bold">স্ট্যাটাস</th>
                  <th className="pb-3 font-bold text-right">অ্যাকশন</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0F4EF]">
                {filtered.map((art) => (
                  <tr key={art.id} className="hover:bg-[#FAF8F3]/60 transition-colors">
                    <td className="py-4 pr-4">
                      <div className="font-bold text-[#1A4331] text-sm">
                        {art.title_bn}
                      </div>
                      <div className="text-[11px] text-[#698273] font-medium mt-0.5 line-clamp-1">
                        {art.title_en}
                      </div>
                    </td>
                    <td className="py-4 pr-4 text-[#4C6456] whitespace-nowrap">
                      <span className="px-2.5 py-1 rounded-md bg-[#FAF8F3] border border-[#CCD8CC] font-medium">
                        {art.category_name_bn}
                      </span>
                    </td>
                    <td className="py-4 pr-4 text-[#637D6E] whitespace-nowrap">
                      {art.published_date}
                    </td>
                    <td className="py-4 pr-4 whitespace-nowrap">
                      <button
                        onClick={() => togglePublish(art.id, art.is_published)}
                        className={`px-3 py-1 rounded-full text-[11px] font-bold cursor-pointer transition-colors ${
                          art.is_published
                            ? "bg-[#DFEDE1] text-[#1A4331] hover:bg-[#CCE2CF]"
                            : "bg-[#FEF3C7] text-[#92400E] hover:bg-[#FDE68A]"
                        }`}
                      >
                        {art.is_published ? "প্রকাশিত" : "খসড়া"}
                      </button>
                    </td>
                    <td className="py-4 text-right whitespace-nowrap">
                      <div className="inline-flex items-center gap-1.5">
                        <Link
                          href={`/blog/${art.slug}`}
                          target="_blank"
                          className="p-1.5 rounded-lg hover:bg-[#FAF8F3] text-[#556F60]"
                          title="ভিউ"
                        >
                          <Eye size={16} />
                        </Link>
                        <Link
                          href={`/admin/articles/edit/${art.id}`}
                          className="p-1.5 rounded-lg hover:bg-[#FAF8F3] text-[#1A4331]"
                          title="সম্পাদনা"
                        >
                          <Edit3 size={16} />
                        </Link>
                        <button
                          onClick={() => deleteArticle(art.id, art.title_bn)}
                          className="p-1.5 rounded-lg hover:bg-red-50 text-red-600"
                          title="মুছে ফেলুন"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

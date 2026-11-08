"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { syncDatabaseWithInitialContent } from "@/lib/dbSync";
import {
  FileText,
  Calendar,
  Layers,
  Plus,
  RefreshCw,
  CheckCircle2,
  Clock,
  Edit3,
  Trash2,
  Eye,
  ArrowRight,
} from "lucide-react";

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    totalArticles: 0,
    publishedArticles: 0,
    draftArticles: 0,
    totalStages: 0,
    totalBirds: 0,
  });
  const [recentArticles, setRecentArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [syncStatus, setSyncStatus] = useState<{ message: string; success: boolean } | null>(null);
  const [dashboardError, setDashboardError] = useState("");
  const [databaseConnected, setDatabaseConnected] = useState(false);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      // 1. Fetch articles
      const { data: articles, error: articlesError } = await supabase
        .from("blog_articles")
        .select("*")
        .order("created_at", { ascending: false });

      // 2. Fetch stages
      const { data: stages, error: stagesError } = await supabase
        .from("guide_stages")
        .select("id");

      // 3. Fetch birds
      const { data: birds, error: birdsError } = await supabase
        .from("bird_varieties")
        .select("id");

      const failedQuery = articlesError || stagesError || birdsError;
      if (failedQuery) throw new Error("ড্যাশবোর্ডের কিছু তথ্য Supabase থেকে লোড করা যায়নি। টেবিল, RLS নীতি ও সংযোগ যাচাই করুন।");
      setDatabaseConnected(true);
      setDashboardError("");

      const articleList = articles || [];
      const published = articleList.filter((a) => a.is_published).length;
      const drafts = articleList.filter((a) => !a.is_published).length;

      setStats({
        totalArticles: articleList.length,
        publishedArticles: published,
        draftArticles: drafts,
        totalStages: stages?.length || 0,
        totalBirds: birds?.length || 0,
      });

      setRecentArticles(articleList.slice(0, 5));
    } catch (err) {
      setDatabaseConnected(false);
      setDashboardError(err instanceof Error ? err.message : "ড্যাশবোর্ডের তথ্য লোড করা যায়নি।");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const handleSyncDatabase = async () => {
    setSyncing(true);
    setSyncStatus(null);
    try {
      const result = await syncDatabaseWithInitialContent();
      setSyncStatus({ message: result.message, success: result.success });
      await fetchDashboardData();
    } catch (err) {
      setSyncStatus({ message: err instanceof Error ? err.message : "ডাটাবেস সিঙ্ক ব্যর্থ হয়েছে।", success: false });
    } finally {
      setSyncing(false);
    }
  };

  const togglePublishStatus = async (id: string, currentStatus: boolean) => {
    const { error } = await supabase
      .from("blog_articles")
      .update({ is_published: !currentStatus })
      .eq("id", id);
    if (error) setDashboardError(`প্রকাশের অবস্থা বদলানো যায়নি: ${error.message}`);
    else await fetchDashboardData();
  };

  const handleDeleteArticle = async (id: string, title: string) => {
    if (confirm(`আপনি কি নিশ্চিতভাবে "${title}" আর্টিকেলটি মুছে ফেলতে চান?`)) {
      const { error } = await supabase.from("blog_articles").delete().eq("id", id);
      if (error) setDashboardError(`আর্টিকেল মুছতে সমস্যা হয়েছে: ${error.message}`);
      else await fetchDashboardData();
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="rounded-3xl bg-white border border-[#DFE7DE] p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1A4331] tracking-tight">
            ড্যাশবোর্ড ওভারভিউ
          </h1>
          <p className="text-xs sm:text-sm text-[#526B5D] mt-1">
            সহজ খামার কনটেন্ট, ব্লগ এবং খামার গাইড ব্যবস্থাপনা প্যানেল
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={handleSyncDatabase}
            disabled={syncing}
            className="px-4 py-2.5 rounded-xl bg-[#FAF8F3] border border-[#CCD8CC] text-[#1A4331] hover:bg-[#EBF1EA] text-xs font-bold transition-all flex items-center gap-1.5 disabled:opacity-50"
          >
            <RefreshCw size={14} className={syncing ? "animate-spin" : ""} />
            <span>{syncing ? "সিঙ্ক হচ্ছে..." : "ডাটাবেস সিঙ্ক ও ইনিশিয়ালাইজ"}</span>
          </button>

          <Link
            href="/admin/articles/new"
            className="px-4 py-2.5 rounded-xl bg-[#1A4331] text-white hover:bg-[#143628] text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs"
          >
            <Plus size={16} />
            <span>নতুন আর্টিকেল লিখুন</span>
          </Link>
        </div>
      </div>

      {syncStatus && (
        <div className={`p-4 rounded-2xl border flex items-center gap-2.5 text-xs font-semibold ${syncStatus.success ? "bg-[#DFEDE1] border-[#C6DCB8] text-[#1A4331]" : "bg-red-50 border-red-200 text-red-800"}`}>
          {syncStatus.success && <CheckCircle2 size={16} className="text-[#1A4331] shrink-0" />}
          <span>{syncStatus.message}</span>
        </div>
      )}
      {dashboardError && <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-xs font-semibold text-red-800">{dashboardError}</div>}

      {/* KPI Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Articles */}
        <div className="p-5 rounded-2xl bg-white border border-[#DFE7DE] shadow-2xs">
          <div className="flex items-center justify-between text-[#5D7365] mb-2">
            <span className="text-xs font-bold">মোট আর্টিকেল</span>
            <FileText size={18} className="text-[#1A4331]" />
          </div>
          <span className="text-2xl sm:text-3xl font-extrabold text-[#1A4331]">
            {stats.totalArticles}
          </span>
          <div className="flex items-center gap-2 text-[11px] text-[#698273] mt-2">
            <span className="text-[#1A4331] font-bold">{stats.publishedArticles} প্রকাশিত</span>
            <span>·</span>
            <span className="text-[#B45309] font-bold">{stats.draftArticles} খসড়া</span>
          </div>
        </div>

        {/* Guide Stages */}
        <div className="p-5 rounded-2xl bg-white border border-[#DFE7DE] shadow-2xs">
          <div className="flex items-center justify-between text-[#5D7365] mb-2">
            <span className="text-xs font-bold">গাইড পর্যায়</span>
            <Calendar size={18} className="text-[#1A4331]" />
          </div>
          <span className="text-2xl sm:text-3xl font-extrabold text-[#1A4331]">
            {stats.totalStages} টি
          </span>
          <p className="text-[11px] text-[#698273] mt-2">কোয়েল ১ দিন থেকে উৎপাদন</p>
        </div>

        {/* Birds Varieties */}
        <div className="p-5 rounded-2xl bg-white border border-[#DFE7DE] shadow-2xs">
          <div className="flex items-center justify-between text-[#5D7365] mb-2">
            <span className="text-xs font-bold">পাখির জাত</span>
            <Layers size={18} className="text-[#1A4331]" />
          </div>
          <span className="text-2xl sm:text-3xl font-extrabold text-[#1A4331]">
            {stats.totalBirds > 0 ? stats.totalBirds : "১টি সক্রিয়"}
          </span>
          <p className="text-[11px] text-[#698273] mt-2">জাপানি কোয়েল (Coturnix)</p>
        </div>

        {/* Status Mode */}
        <div className="p-5 rounded-2xl bg-white border border-[#DFE7DE] shadow-2xs">
          <div className="flex items-center justify-between text-[#5D7365] mb-2">
            <span className="text-xs font-bold">ডাটাবেস স্ট্যাটাস</span>
            <div className={`w-2.5 h-2.5 rounded-full ${databaseConnected ? "bg-emerald-500 animate-pulse" : "bg-red-500"}`} />
          </div>
          <span className={`text-sm font-bold ${databaseConnected ? "text-emerald-800" : "text-red-700"}`}>{databaseConnected ? "Supabase Connected" : "Supabase যাচাই হয়নি"}</span>
          <p className="text-[11px] text-[#698273] mt-2">{databaseConnected ? "ডাটাবেস প্রশ্ন সফল হয়েছে" : "ডাটাবেসের অবস্থা নিশ্চিত করতে পুনরায় লোড করুন"}</p>
        </div>
      </div>

      {/* Recent Articles Table */}
      <div className="rounded-3xl bg-white border border-[#DFE7DE] p-6 shadow-xs">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-bold text-[#1A4331]">সাম্প্রতিক ব্লগ আর্টিকেলসমূহ</h2>
          <Link
            href="/admin/articles"
            className="text-xs font-bold text-[#1A4331] hover:underline flex items-center gap-1"
          >
            <span>সকল আর্টিকেল দেখুন</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        {loading ? (
          <div className="py-12 text-center text-xs text-[#5D7365]">
            লোড হচ্ছে...
          </div>
        ) : recentArticles.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-sm font-bold text-[#1A4331]">এখনো কোনো আর্টিকেল ডাটাবেসে নেই</p>
            <p className="text-xs text-[#6A8274] mt-1">
              ওপরের <strong>"ডাটাবেস সিঙ্ক ও ইনিশিয়ালাইজ"</strong> বাটনে ক্লিক করে প্রাথমিক কনটেন্ট যোগ করুন।
            </p>
            <button
              onClick={handleSyncDatabase}
              className="mt-4 px-4 py-2 rounded-xl bg-[#1A4331] text-white text-xs font-semibold hover:bg-[#143628]"
            >
              এখনই সিঙ্ক করুন
            </button>
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
                {recentArticles.map((art) => (
                  <tr key={art.id} className="hover:bg-[#FAF8F3]/60 transition-colors">
                    <td className="py-3.5 pr-4 font-bold text-[#1A4331] max-w-xs truncate">
                      {art.title_bn}
                    </td>
                    <td className="py-3.5 pr-4 text-[#4C6456]">
                      <span className="px-2 py-0.5 rounded bg-[#FAF8F3] border border-[#CCD8CC]">
                        {art.category_name_bn}
                      </span>
                    </td>
                    <td className="py-3.5 pr-4 text-[#637D6E] whitespace-nowrap">
                      {art.published_date}
                    </td>
                    <td className="py-3.5 pr-4">
                      <button
                        onClick={() => togglePublishStatus(art.id, art.is_published)}
                        className={`px-2.5 py-1 rounded-full text-[11px] font-bold cursor-pointer transition-colors ${
                          art.is_published
                            ? "bg-[#DFEDE1] text-[#1A4331] hover:bg-[#CCE2CF]"
                            : "bg-[#FEF3C7] text-[#92400E] hover:bg-[#FDE68A]"
                        }`}
                      >
                        {art.is_published ? "প্রকাশিত" : "খসড়া"}
                      </button>
                    </td>
                    <td className="py-3.5 text-right whitespace-nowrap">
                      <div className="inline-flex items-center gap-1.5">
                        <Link
                          href={`/blog/${art.slug}`}
                          target="_blank"
                          className="p-1.5 rounded-lg hover:bg-[#FAF8F3] text-[#556F60]"
                          title="ভিউ"
                        >
                          <Eye size={15} />
                        </Link>
                        <Link
                          href={`/admin/articles/edit/${art.id}`}
                          className="p-1.5 rounded-lg hover:bg-[#FAF8F3] text-[#1A4331]"
                          title="সম্পাদনা"
                        >
                          <Edit3 size={15} />
                        </Link>
                        <button
                          onClick={() => handleDeleteArticle(art.id, art.title_bn)}
                          className="p-1.5 rounded-lg hover:bg-red-50 text-red-600"
                          title="মুছে ফেলুন"
                        >
                          <Trash2 size={15} />
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

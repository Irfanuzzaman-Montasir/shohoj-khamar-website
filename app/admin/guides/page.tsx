"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { Calendar, Edit3, Eye, ShieldCheck, Thermometer, Utensils } from "lucide-react";

export default function AdminGuidesPage() {
  const [stages, setStages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  const fetchStages = async () => {
    setLoading(true);
    setLoadError("");
    const { data, error } = await supabase
      .from("guide_stages")
      .select("*")
      .order("species", { ascending: true })
      .order("variety_slug", { ascending: true })
      .order("stage_number", { ascending: true });

    if (error) {
      setLoadError(`Guide list could not load: ${error.message}`);
    } else if (data) {
      setStages(data);
    } else {
      setLoadError("গাইড লোড করা যায়নি। Supabase সংযোগ ও অনুমতি যাচাই করুন।");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchStages();
  }, []);

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="rounded-3xl bg-white border border-[#DFE7DE] p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-[#1A4331] tracking-tight">
            সব পাখির গাইড পর্যায়সমূহ
          </h1>
          <p className="text-xs sm:text-sm text-[#546E5F] mt-1">
            প্রজাতি ও জাত অনুযায়ী বয়সভিত্তিক পরিচর্যার ধাপ সম্পাদনা করুন
          </p>
        </div>
      </div>

      {/* Stages Grid/Table */}
      <div className="rounded-3xl bg-white border border-[#DFE7DE] p-6 shadow-xs">
        {loadError && <p role="alert" className="mb-4 rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-800">{loadError}</p>}
        {loading ? (
          <div className="py-16 text-center text-xs text-[#5D7365]">
            গাইড তালিকা লোড হচ্ছে...
          </div>
        ) : stages.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-sm font-bold text-[#1A4331]">এখনো কোনো গাইড পর্যায় ডাটাবেসে নেই</p>
            <p className="text-xs text-[#6A8274] mt-1">
              ড্যাশবোর্ডের ওভারভিউ পেজ থেকে "ডাটাবেস সিঙ্ক ও ইনিশিয়ালাইজ" বাটনে ক্লিক করুন।
            </p>
            <Link
              href="/admin"
              className="inline-block mt-4 px-4 py-2 rounded-xl bg-[#1A4331] text-white text-xs font-semibold hover:bg-[#143628]"
            >
              ড্যাশবোর্ডে যান
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {stages.map((stage) => (
              <div
                key={stage.id}
                className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F3] border border-[#DFE7DE] hover:border-[#1A4331] transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-start sm:items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#1A4331] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    {stage.stage_number}
                  </span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded bg-[#F0F3EF] text-[#51695A] text-[10px] font-semibold">{stage.species} / {stage.variety_slug}</span>
                      <span className="px-2 py-0.5 rounded bg-[#DFEDE1] text-[#1A4331] text-xs font-bold">
                        {stage.age_range_bn}
                      </span>
                      <span className="text-[11px] text-[#6E8879] font-medium">
                        {stage.review_status_bn}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[#1A4331]">
                      {stage.title_bn}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-[#577263] mt-1">
                      <span>তাপমাত্রা: {stage.temperature_bn}</span>
                      <span>·</span>
                      <span className="line-clamp-1">খাবার: {stage.feed_type_bn}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                  <Link
                    href={`/birds/${stage.species}/${stage.variety_slug}/${stage.stage_slug}`}
                    target="_blank"
                    className="p-2 rounded-xl bg-white border border-[#D5E1D5] hover:bg-[#EBF1EA] text-[#556F60] text-xs font-semibold flex items-center gap-1"
                    title="লাইভ গাইড দেখুন"
                  >
                    <Eye size={14} />
                    <span>ভিউ</span>
                  </Link>
                  <Link
                    href={`/admin/guides/edit/${stage.id}`}
                    className="p-2 rounded-xl bg-[#1A4331] text-white hover:bg-[#143628] text-xs font-semibold flex items-center gap-1 shadow-2xs"
                    title="সম্পাদনা করুন"
                  >
                    <Edit3 size={14} />
                    <span>সম্পাদনা</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

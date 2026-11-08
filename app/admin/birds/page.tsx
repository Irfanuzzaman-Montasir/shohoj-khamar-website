"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { Layers, Eye, CheckCircle2 } from "lucide-react";

export default function AdminBirdsPage() {
  const [birds, setBirds] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    const fetchBirds = async () => {
      setLoading(true);
      const { data, error } = await supabase.from("bird_varieties").select("*");
      setLoadError(error ? `Bird list could not load: ${error.message}` : "");
      if (data) {
        setBirds(data);
      }
      setLoading(false);
    };

    fetchBirds();
  }, []);

  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-white border border-[#DFE7DE] p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-[#1A4331] tracking-tight">
            পাখির জাত ও প্রজাতিসমূহ
          </h1>
          <p className="text-xs sm:text-sm text-[#546E5F] mt-1">
            সহজ খামারের আওতাভুক্ত বাণিজ্যিক ও দেশি জাতের তালিকা
          </p>
        </div>
      </div>

      <div className="rounded-3xl bg-white border border-[#DFE7DE] p-6 shadow-xs">
        {loadError && <p role="alert" className="mb-4 rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-800">{loadError}</p>}
        {loading ? (
          <div className="py-16 text-center text-xs text-[#5D7365]">লোড হচ্ছে...</div>
        ) : birds.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-sm font-bold text-[#1A4331]">এখনো কোনো জাত ডাটাবেসে নেই</p>
            <p className="text-xs text-[#6A8274] mt-1">
              ড্যাশবোর্ডের ওভারভিউ থেকে "ডাটাবেস সিঙ্ক ও ইনিশিয়ালাইজ" বাটনে ক্লিক করুন।
            </p>
            <Link
              href="/admin"
              className="inline-block mt-4 px-4 py-2 rounded-xl bg-[#1A4331] text-white text-xs font-semibold"
            >
              ড্যাশবোর্ডে যান
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {birds.map((bird) => (
              <div
                key={bird.id}
                className="p-5 rounded-2xl bg-[#FAF8F3] border border-[#DFE7DE] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#DFEDE1] text-[#1A4331] text-xs font-bold">
                      {bird.species}
                    </span>
                    <span className="text-xs text-[#637D6E] italic">
                      {bird.scientific_name}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A4331]">{bird.name_bn}</h3>
                  <p className="text-xs text-[#4C6456] mt-1 line-clamp-2 max-w-2xl">
                    {bird.description_bn}
                  </p>
                </div>

                <div className="shrink-0">
                  <Link
                    href={`/birds/${bird.species}/${bird.variety_slug}`}
                    target="_blank"
                    className="p-2.5 rounded-xl bg-white border border-[#CCD8CC] text-[#1A4331] hover:bg-[#EBF1EA] text-xs font-semibold flex items-center gap-1.5 shadow-2xs"
                  >
                    <Eye size={14} />
                    <span>লাইভ পেজ দেখুন</span>
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

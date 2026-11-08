"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { ArrowLeft, Save, CheckCircle, AlertCircle } from "lucide-react";

const extendedFields = [
  ["temperature_en", "Temperature (English)", "text"],
  ["light_hours_en", "Light schedule (English)", "text"],
  ["feed_type_en", "Feed type (English)", "text"],
  ["feed_management_en", "Feed management (English)", "text"],
  ["water_management_en", "Water management (English)", "text"],
  ["temperature_env_bn", "পরিবেশ ও তাপমাত্রা ব্যবস্থাপনা", "text"],
  ["temperature_env_en", "Environment and temperature (English)", "text"],
  ["farmer_tips_en", "Farmer tips (English)", "text"],
  ["special_instructions_bn", "বিশেষ নির্দেশনা", "text"],
  ["special_instructions_en", "Special instructions (English)", "text"],
  ["vaccine_notes_en", "Vaccination and health notes (English)", "text"],
  ["review_status_en", "Review status (English)", "text"],
  ["source_bn", "তথ্যসূত্র", "text"],
  ["source_en", "Source (English)", "text"],
  ["medicines", "ওষুধের তথ্য (JSON)", "json"],
  ["checklist_bn", "বাংলা চেকলিস্ট (প্রতি লাইনে একটি) ", "lines"],
  ["checklist_en", "English checklist (one item per line)", "lines"],
] as const;

type GuideRow = {
  id: string;
  stage_number: number;
  title_bn: string;
  title_en: string;
  age_range_bn: string;
  temperature_bn: string;
  light_hours_bn: string;
  feed_type_bn: string;
  feed_management_bn: string;
  water_management_bn: string;
  temperature_env_bn: string;
  farmer_tips_bn: string;
  special_instructions_bn: string;
  vaccine_notes_bn: string;
  review_status_bn: string;
  [key: string]: unknown;
};

export default function EditGuideStagePage() {
  const params = useParams();
  const id = params?.id as string;
  const router = useRouter();

  const [stage, setStage] = useState<GuideRow | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [titleBn, setTitleBn] = useState("");
  const [titleEn, setTitleEn] = useState("");
  const [ageRangeBn, setAgeRangeBn] = useState("");
  const [temperatureBn, setTemperatureBn] = useState("");
  const [lightHoursBn, setLightHoursBn] = useState("");
  const [feedTypeBn, setFeedTypeBn] = useState("");
  const [feedManagementBn, setFeedManagementBn] = useState("");
  const [waterManagementBn, setWaterManagementBn] = useState("");
  const [temperatureEnvBn, setTemperatureEnvBn] = useState("");
  const [farmerTipsBn, setFarmerTipsBn] = useState("");
  const [specialInstructionsBn, setSpecialInstructionsBn] = useState("");
  const [vaccineNotesBn, setVaccineNotesBn] = useState("");
  const [reviewStatusBn, setReviewStatusBn] = useState("");
  const [extendedValues, setExtendedValues] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!id) return;
    const loadStage = async () => {
      const { data } = await supabase
        .from("guide_stages")
        .select("*")
        .eq("id", id)
        .single();

      if (data) {
        setStage(data);
        setTitleBn(data.title_bn || "");
        setTitleEn(data.title_en || "");
        setAgeRangeBn(data.age_range_bn || "");
        setTemperatureBn(data.temperature_bn || "");
        setLightHoursBn(data.light_hours_bn || "");
        setFeedTypeBn(data.feed_type_bn || "");
        setFeedManagementBn(data.feed_management_bn || "");
        setWaterManagementBn(data.water_management_bn || "");
        setTemperatureEnvBn(data.temperature_env_bn || "");
        setFarmerTipsBn(data.farmer_tips_bn || "");
        setSpecialInstructionsBn(data.special_instructions_bn || "");
        setVaccineNotesBn(data.vaccine_notes_bn || "");
        setReviewStatusBn(data.review_status_bn || "");
        setExtendedValues(
          Object.fromEntries(
            extendedFields.map(([key, , format]) => [
              key,
              format === "json"
                ? JSON.stringify(data[key] ?? [], null, 2)
                : format === "lines"
                  ? (data[key] ?? []).join("\n")
                  : data[key] || "",
            ])
          )
        );
      }
      setLoading(false);
    };

    loadStage();
  }, [id]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const extendedPayload = Object.fromEntries(
        extendedFields.map(([key, , format]) => [
          key,
          format === "json"
            ? JSON.parse(extendedValues[key] || "[]")
            : format === "lines"
              ? (extendedValues[key] || "").split("\n").map((item) => item.trim()).filter(Boolean)
              : extendedValues[key]?.trim() || "",
        ])
      );
      const { error } = await supabase
        .from("guide_stages")
        .update({
          title_bn: titleBn.trim(),
          title_en: titleEn.trim(),
          age_range_bn: ageRangeBn.trim(),
          temperature_bn: temperatureBn.trim(),
          light_hours_bn: lightHoursBn.trim(),
          feed_type_bn: feedTypeBn.trim(),
          feed_management_bn: feedManagementBn.trim(),
          water_management_bn: waterManagementBn.trim(),
          temperature_env_bn: temperatureEnvBn.trim(),
          farmer_tips_bn: farmerTipsBn.trim(),
          special_instructions_bn: specialInstructionsBn.trim(),
          vaccine_notes_bn: vaccineNotesBn.trim(),
          review_status_bn: reviewStatusBn.trim(),
          ...extendedPayload,
          updated_at: new Date().toISOString(),
        })
        .eq("id", id);

      if (error) throw error;
      setSuccessMsg("গাইড পর্যায় সফলভাবে আপডেট করা হয়েছে!");

      setTimeout(() => {
        router.push("/admin/guides");
      }, 1000);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Failed to save the guide stage.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="py-20 text-center text-xs text-[#5D7365]">লোড হচ্ছে...</div>;
  }

  if (!stage) {
    return <div className="py-20 text-center text-sm font-bold text-red-600">গাইড পাওয়া যায়নি।</div>;
  }

  return (
    <form onSubmit={handleSave} className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/admin/guides"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#546E5F] hover:text-[#1A4331] transition-colors"
        >
          <ArrowLeft size={14} />
          <span>গাইড তালিকায় ফিরুন</span>
        </Link>

        <button
          type="submit"
          disabled={saving}
          className="px-5 py-2.5 rounded-xl bg-[#1A4331] text-white hover:bg-[#143628] text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs disabled:opacity-50"
        >
          <Save size={15} />
          <span>{saving ? "সংরক্ষণ হচ্ছে..." : "আপডেট সংরক্ষণ করুন"}</span>
        </button>
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

      {/* Main Info */}
      <div className="bg-white rounded-3xl border border-[#DFE7DE] p-6 sm:p-8 shadow-xs space-y-4">
        <h2 className="text-base font-bold text-[#1A4331] pb-3 border-b border-[#EDF2EB]">
          ধাপ {stage.stage_number} — প্রাথমিক শিরোনাম ও বয়স
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#1A4331] mb-1.5">
              বাংলা শিরোনাম
            </label>
            <input
              type="text"
              required
              value={titleBn}
              onChange={(e) => setTitleBn(e.target.value)}
              className="w-full px-4 py-2 text-sm rounded-xl bg-[#FAF8F3] border border-[#CCD8CC] text-[#1A4331]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#1A4331] mb-1.5">
              বয়স সীমা (যেমন: ১ম দিন / ২–৪ দিন)
            </label>
            <input
              type="text"
              required
              value={ageRangeBn}
              onChange={(e) => setAgeRangeBn(e.target.value)}
              className="w-full px-4 py-2 text-sm rounded-xl bg-[#FAF8F3] border border-[#CCD8CC] text-[#1A4331]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div>
            <label className="block text-xs font-bold text-[#1A4331] mb-1.5">
              প্রয়োজনীয় তাপমাত্রা
            </label>
            <input
              type="text"
              value={temperatureBn}
              onChange={(e) => setTemperatureBn(e.target.value)}
              className="w-full px-4 py-2 text-sm rounded-xl bg-[#FAF8F3] border border-[#CCD8CC] text-[#1A4331]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#1A4331] mb-1.5">
              আলোর সময়সূচি
            </label>
            <input
              type="text"
              value={lightHoursBn}
              onChange={(e) => setLightHoursBn(e.target.value)}
              className="w-full px-4 py-2 text-sm rounded-xl bg-[#FAF8F3] border border-[#CCD8CC] text-[#1A4331]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#1A4331] mb-1.5">
              খাদ্যের ধরন
            </label>
            <input
              type="text"
              value={feedTypeBn}
              onChange={(e) => setFeedTypeBn(e.target.value)}
              className="w-full px-4 py-2 text-sm rounded-xl bg-[#FAF8F3] border border-[#CCD8CC] text-[#1A4331]"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-[#DFE7DE] p-6 sm:p-8 shadow-xs space-y-4">
        <h2 className="text-base font-bold text-[#1A4331] pb-3 border-b border-[#EDF2EB]">
          অতিরিক্ত তথ্য, ইংরেজি কনটেন্ট ও রিভিউ
        </h2>
        {extendedFields.map(([key, label, format]) => (
          <div key={key}>
            <label className="block text-xs font-bold text-[#1A4331] mb-1.5">{label}</label>
            <textarea
              rows={format === "json" ? 8 : format === "lines" ? 4 : 2}
              value={extendedValues[key] ?? ""}
              onChange={(event) =>
                setExtendedValues((current) => ({ ...current, [key]: event.target.value }))
              }
              spellCheck={format !== "json"}
              className="w-full px-4 py-2 text-sm rounded-xl bg-[#FAF8F3] border border-[#CCD8CC] text-[#1A4331]"
            />
          </div>
        ))}
      </div>

      {/* Detailed Management Descriptions */}
      <div className="bg-white rounded-3xl border border-[#DFE7DE] p-6 sm:p-8 shadow-xs space-y-4">
        <h2 className="text-base font-bold text-[#1A4331] pb-3 border-b border-[#EDF2EB]">
          ব্যবস্থাপনা বিবরণ ও খামারি টিপস
        </h2>

        <div>
          <label className="block text-xs font-bold text-[#1A4331] mb-1.5">
            খাবার ব্যবস্থাপনা বিবরণ
          </label>
          <textarea
            rows={3}
            value={feedManagementBn}
            onChange={(e) => setFeedManagementBn(e.target.value)}
            className="w-full px-4 py-2 text-sm rounded-xl bg-[#FAF8F3] border border-[#CCD8CC] text-[#1A4331]"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#1A4331] mb-1.5">
            পানি ব্যবস্থাপনা বিবরণ
          </label>
          <textarea
            rows={3}
            value={waterManagementBn}
            onChange={(e) => setWaterManagementBn(e.target.value)}
            className="w-full px-4 py-2 text-sm rounded-xl bg-[#FAF8F3] border border-[#CCD8CC] text-[#1A4331]"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#1A4331] mb-1.5">
            খামারি অভিজ্ঞতা ও ফিল্ড টিপস (ফাহিম, রাজশাহী বিনোদপুর ইত্যাদি)
          </label>
          <textarea
            rows={3}
            value={farmerTipsBn}
            onChange={(e) => setFarmerTipsBn(e.target.value)}
            className="w-full px-4 py-2 text-sm rounded-xl bg-[#FAF8F3] border border-[#CCD8CC] text-[#1A4331]"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#1A4331] mb-1.5">
            টিকা ও স্বাস্থ্য পরামর্শ নোট
          </label>
          <textarea
            rows={2}
            value={vaccineNotesBn}
            onChange={(e) => setVaccineNotesBn(e.target.value)}
            className="w-full px-4 py-2 text-sm rounded-xl bg-[#FAF8F3] border border-[#CCD8CC] text-[#1A4331]"
          />
        </div>
      </div>
    </form>
  );
}



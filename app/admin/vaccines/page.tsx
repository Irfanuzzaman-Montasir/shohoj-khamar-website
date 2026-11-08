"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { Syringe, Plus, Trash2, ShieldCheck, CheckCircle } from "lucide-react";

export default function AdminVaccinesPage() {
  const [vaccines, setVaccines] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // New vaccine form state
  const [showAddForm, setShowAddForm] = useState(false);
  const [birdSpecies, setBirdSpecies] = useState("কোয়েল");
  const [targetDiseaseBn, setTargetDiseaseBn] = useState("");
  const [targetDiseaseEn, setTargetDiseaseEn] = useState("");
  const [vaccineNameBn, setVaccineNameBn] = useState("");
  const [vaccineNameEn, setVaccineNameEn] = useState("");
  const [ageRecommendedBn, setAgeRecommendedBn] = useState("");
  const [ageRecommendedEn, setAgeRecommendedEn] = useState("");
  const [methodBn, setMethodBn] = useState("চোখে ড্রপ / খাবার পানিতে");
  const [methodEn, setMethodEn] = useState("");
  const [instructionsBn, setInstructionsBn] = useState("");
  const [instructionsEn, setInstructionsEn] = useState("");
  const [sourceBn, setSourceBn] = useState("");
  const [sourceEn, setSourceEn] = useState("");
  const [verified, setVerified] = useState(false);

  const loadVaccines = async () => {
    setLoading(true);
    setErrorMessage("");
    const { data, error } = await supabase
      .from("vaccination_schedules")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setErrorMessage(`টিকার তালিকা লোড করা যায়নি: ${error.message}`);
    } else if (data) {
      setVaccines(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadVaccines();
  }, []);

  const handleAddVaccine = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setErrorMessage("");
    setSuccessMessage("");
    const { error } = await supabase.from("vaccination_schedules").insert([
      {
        bird_species: birdSpecies,
        target_disease_bn: targetDiseaseBn,
        target_disease_en: targetDiseaseEn,
        vaccine_name_bn: vaccineNameBn,
        vaccine_name_en: vaccineNameEn,
        age_recommended_bn: ageRecommendedBn,
        age_recommended_en: ageRecommendedEn,
        administration_method_bn: methodBn,
        administration_method_en: methodEn,
        instructions_bn: instructionsBn,
        instructions_en: instructionsEn,
        review_status_bn: verified ? "পোল্ট্রি বিশেষজ্ঞ দ্বারা যাচাইকৃত" : "পোল্ট্রি বিশেষজ্ঞ পর্যালোচনাধীন",
        review_status_en: verified ? "Verified by a poultry veterinarian" : "Under Veterinary Review",
        source_bn: sourceBn.trim() || null,
        source_en: sourceEn.trim() || null,
        is_published: true,
      },
    ]);

    if (error) {
      setErrorMessage(`টিকার তথ্য সংরক্ষণ হয়নি: ${error.message}`);
      setSaving(false);
      return;
    }

    setShowAddForm(false);
    setTargetDiseaseBn("");
    setTargetDiseaseEn("");
    setVaccineNameBn("");
    setVaccineNameEn("");
    setAgeRecommendedBn("");
    setAgeRecommendedEn("");
    setMethodEn("");
    setMethodBn("চোখে ড্রপ / খাবার পানিতে");
    setInstructionsBn("");
    setInstructionsEn("");
    setSourceBn("");
    setSourceEn("");
    setVerified(false);
    setSuccessMessage("টিকার তথ্য সংরক্ষণ হয়েছে।");
    setSaving(false);
    await loadVaccines();
  };

  const handleDeleteVaccine = async (id: string) => {
    if (confirm("আপনি কি এই টিকার তথ্য মুছে ফেলতে চান?")) {
      const { error } = await supabase.from("vaccination_schedules").delete().eq("id", id);
      if (error) setErrorMessage(`টিকার তথ্য মুছতে সমস্যা হয়েছে: ${error.message}`);
      else await loadVaccines();
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-white border border-[#DFE7DE] p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-[#1A4331] tracking-tight">
            টিকা সময়সূচি ব্যবস্থাপনা
          </h1>
          <p className="text-xs sm:text-sm text-[#546E5F] mt-1">
            যাচাইকৃত টিকা তালিকা ও প্রয়োগ নির্দেশিকা পরিচালনা করুন
          </p>
        </div>

        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="px-4 py-2.5 rounded-xl bg-[#1A4331] text-white hover:bg-[#143628] text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs w-fit"
        >
          <Plus size={16} />
          <span>{showAddForm ? "ফর্ম বন্ধ করুন" : "নতুন টিকা যুক্ত করুন"}</span>
        </button>
      </div>

      {errorMessage && <p role="alert" className="rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-800">{errorMessage}</p>}
      {successMessage && <p role="status" className="rounded-xl border border-[#C6DCB8] bg-[#DFEDE1] p-3 text-xs text-[#1A4331]">{successMessage}</p>}

      {/* Add Form Drawer/Modal */}
      {showAddForm && (
        <form onSubmit={handleAddVaccine} className="bg-white rounded-3xl border border-[#CCD8CC] p-6 shadow-xs space-y-4">
          <h3 className="text-base font-bold text-[#1A4331]">নতুন টিকার তথ্য যুক্ত করুন</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#1A4331] mb-1">পাখির প্রজাতি</label>
              <select
                value={birdSpecies}
                onChange={(e) => setBirdSpecies(e.target.value)}
                className="w-full px-4 py-2 text-xs rounded-xl bg-[#FAF8F3] border border-[#CCD8CC] text-[#1A4331]"
              >
                <option value="কোয়েল">কোয়েল পাখি</option>
                <option value="সোনালী মুরগি">সোনালী মুরগি</option>
                <option value="ব্রয়লার">ব্রয়লার</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1A4331] mb-1">টিকার নাম</label>
              <input
                type="text"
                required
                value={vaccineNameBn}
                onChange={(e) => setVaccineNameBn(e.target.value)}
                placeholder="যেমন: রানীক্ষেত (ND Clone 30 / LaSota)"
                className="w-full px-4 py-2 text-xs rounded-xl bg-[#FAF8F3] border border-[#CCD8CC] text-[#1A4331]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1A4331] mb-1">টার্গেট রোগ</label>
              <input
                type="text"
                required
                value={targetDiseaseBn}
                onChange={(e) => setTargetDiseaseBn(e.target.value)}
                placeholder="যেমন: রানীক্ষেত রোগ (Newcastle Disease)"
                className="w-full px-4 py-2 text-xs rounded-xl bg-[#FAF8F3] border border-[#CCD8CC] text-[#1A4331]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1A4331] mb-1">প্রয়োগের বয়স</label>
              <input
                type="text"
                required
                value={ageRecommendedBn}
                onChange={(e) => setAgeRecommendedBn(e.target.value)}
                placeholder="যেমন: ৩–৫ দিন বয়সে"
                className="w-full px-4 py-2 text-xs rounded-xl bg-[#FAF8F3] border border-[#CCD8CC] text-[#1A4331]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1A4331] mb-1">প্রয়োগ পদ্ধতি</label>
              <input
                type="text"
                required
                value={methodBn}
                onChange={(e) => setMethodBn(e.target.value)}
                className="w-full px-4 py-2 text-xs rounded-xl bg-[#FAF8F3] border border-[#CCD8CC] text-[#1A4331]"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-[#DFE7DE] bg-[#FAF8F3] p-4 space-y-4">
            <h4 className="text-sm font-bold text-[#1A4331]">English translation</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input required value={vaccineNameEn} onChange={(e) => setVaccineNameEn(e.target.value)} aria-label="Vaccine name in English" placeholder="Vaccine name" className="w-full px-4 py-2 text-xs rounded-xl bg-white border border-[#CCD8CC] text-[#1A4331]" />
              <input required value={targetDiseaseEn} onChange={(e) => setTargetDiseaseEn(e.target.value)} aria-label="Target disease in English" placeholder="Target disease" className="w-full px-4 py-2 text-xs rounded-xl bg-white border border-[#CCD8CC] text-[#1A4331]" />
              <input required value={ageRecommendedEn} onChange={(e) => setAgeRecommendedEn(e.target.value)} aria-label="Recommended age in English" placeholder="Recommended age" className="w-full px-4 py-2 text-xs rounded-xl bg-white border border-[#CCD8CC] text-[#1A4331]" />
              <input required value={methodEn} onChange={(e) => setMethodEn(e.target.value)} aria-label="Administration method in English" placeholder="Administration method" className="w-full px-4 py-2 text-xs rounded-xl bg-white border border-[#CCD8CC] text-[#1A4331]" />
            </div>
            <textarea rows={2} value={instructionsEn} onChange={(e) => setInstructionsEn(e.target.value)} aria-label="Instructions in English" placeholder="Instructions in English (optional)" className="w-full px-4 py-2 text-xs rounded-xl bg-white border border-[#CCD8CC] text-[#1A4331]" />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#1A4331] mb-1">প্রয়োগ পদ্ধতি ও নির্দেশনা</label>
            <textarea
              rows={2}
              value={instructionsBn}
              onChange={(e) => setInstructionsBn(e.target.value)}
              placeholder="চোখে ১ ফোঁটা ড্রপ দিতে হবে..."
              className="w-full px-4 py-2 text-xs rounded-xl bg-[#FAF8F3] border border-[#CCD8CC] text-[#1A4331]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#1A4331] mb-1">তথ্যসূত্র (বাংলা)</label>
              <input required value={sourceBn} onChange={(e) => setSourceBn(e.target.value)} placeholder="নির্দেশিকা/প্রকাশনা ও তারিখ উল্লেখ করুন" className="w-full px-4 py-2 text-xs rounded-xl bg-[#FAF8F3] border border-[#CCD8CC] text-[#1A4331]" />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#1A4331] mb-1">Source (English)</label>
              <input value={sourceEn} onChange={(e) => setSourceEn(e.target.value)} placeholder="Source document and date" className="w-full px-4 py-2 text-xs rounded-xl bg-[#FAF8F3] border border-[#CCD8CC] text-[#1A4331]" />
            </div>
          </div>

          <label className="flex items-start gap-2 text-xs leading-5 text-[#526B5D]">
            <input type="checkbox" checked={verified} onChange={(e) => setVerified(e.target.checked)} className="mt-0.5 accent-[#1A4331]" />
            <span>বিশেষজ্ঞের যাচাই সম্পন্ন হয়েছে। যাচাই না হলে এই ঘরটি ফাঁকা রাখুন; রেকর্ডটি “পর্যালোচনাধীন” হিসেবে দেখাবে।</span>
          </label>

          <button
            type="submit"
            disabled={saving}
            className="px-5 py-2.5 rounded-xl bg-[#1A4331] text-white text-xs font-bold hover:bg-[#143628]"
          >
            সংরক্ষণ করুন
          </button>
        </form>
      )}

      {/* Vaccines Table */}
      <div className="rounded-3xl bg-white border border-[#DFE7DE] p-6 shadow-xs">
        {loading ? (
          <div className="py-16 text-center text-xs text-[#5D7365]">লোড হচ্ছে...</div>
        ) : vaccines.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-sm font-bold text-[#1A4331]">এখনো কোনো টিকা রেকর্ড নেই</p>
            <p className="text-xs text-[#6A8274] mt-1">
              "নতুন টিকা যুক্ত করুন" বাটনে ক্লিক করে তথ্য যোগ করুন।
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#EDF2EB] text-[#617B6D]">
                  <th className="pb-3 font-bold">পাখি</th>
                  <th className="pb-3 font-bold">টিকার নাম</th>
                  <th className="pb-3 font-bold">টার্গেট রোগ</th>
                  <th className="pb-3 font-bold">বয়স</th>
                  <th className="pb-3 font-bold">পদ্ধতি</th>
                  <th className="pb-3 font-bold text-right">অ্যাকশন</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0F4EF]">
                {vaccines.map((vac) => (
                  <tr key={vac.id} className="hover:bg-[#FAF8F3]/60 transition-colors">
                    <td className="py-3.5 pr-3 font-bold text-[#1A4331]">
                      {vac.bird_species}
                    </td>
                    <td className="py-3.5 pr-3 font-semibold text-[#1A4331]">
                      {vac.vaccine_name_bn}
                    </td>
                    <td className="py-3.5 pr-3 text-[#4C6456]">
                      {vac.target_disease_bn}
                    </td>
                    <td className="py-3.5 pr-3 text-[#637D6E] whitespace-nowrap">
                      {vac.age_recommended_bn}
                    </td>
                    <td className="py-3.5 pr-3 text-[#4A6253]">
                      {vac.administration_method_bn}
                    </td>
                    <td className="py-3.5 text-right whitespace-nowrap">
                      <button
                        onClick={() => handleDeleteVaccine(vac.id)}
                        className="p-1.5 rounded-lg hover:bg-red-50 text-red-600"
                        title="মুছে ফেলুন"
                      >
                        <Trash2 size={15} />
                      </button>
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

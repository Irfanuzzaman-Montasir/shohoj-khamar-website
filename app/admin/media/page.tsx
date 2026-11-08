"use client";

import { useCallback, useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import Image from "next/image";
import { Copy, ImagePlus, RefreshCw, Save, Upload } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

const MEDIA_BUCKET = "blog-images";
const IMAGE_PLACEMENTS = [
  { key: "homepage_hero", label: "হোমপেজের প্রধান ছবি" },
  { key: "bird_quail_japanese", label: "হোমপেজ কার্ড: জাপানি কোয়েল" },
  { key: "bird_chicken_sonali", label: "হোমপেজ কার্ড: সোনালি মুরগি" },
  { key: "bird_chicken_broiler", label: "হোমপেজ কার্ড: ব্রয়লার" },
  { key: "bird_chicken_fayoumi", label: "হোমপেজ কার্ড: ফাওমি" },
  { key: "bird_chicken_tiger", label: "হোমপেজ কার্ড: টাইগার মুরগি" },
  { key: "bird_chicken_color", label: "হোমপেজ কার্ড: কালার বার্ড" },
] as const;

type MediaItem = { path: string; name: string; url: string; updatedAt: string | null };

export default function AdminMediaPage() {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const fetchMedia = useCallback(async () => {
    const [{ data: files, error: storageError }, { data: settingRow, error: settingsError }] = await Promise.all([
      supabase.storage.from(MEDIA_BUCKET).list("site-media", { limit: 100, sortBy: { column: "created_at", order: "desc" } }),
      supabase.from("site_settings").select("setting_value").eq("setting_key", "site_images").maybeSingle(),
    ]);

    const messages: string[] = [];
    if (storageError) messages.push(`ছবির তালিকা লোড হয়নি: ${storageError.message}`);
    if (settingsError) messages.push(`ছবির সেটিংস লোড হয়নি। আপডেট করা supabase_schema.sql প্রয়োগ হয়েছে কি না দেখুন: ${settingsError.message}`);
    const listedFiles = (files ?? []).filter((file) => file.name && !file.name.startsWith("."));
    const nextMedia = listedFiles.map((file) => {
      const path = `site-media/${file.name}`;
      const { data } = supabase.storage.from(MEDIA_BUCKET).getPublicUrl(path);
      return { path, name: file.name, url: data.publicUrl, updatedAt: file.updated_at ?? null };
    });
    let nextSettings: Record<string, string> = {};
    if (settingRow?.setting_value && typeof settingRow.setting_value === "object" && !Array.isArray(settingRow.setting_value)) {
      nextSettings = Object.fromEntries(Object.entries(settingRow.setting_value).filter((entry): entry is [string, string] => typeof entry[1] === "string"));
    }
    return { errorMessage: messages.join(" "), media: nextMedia, settings: nextSettings };
  }, []);

  const applyMediaResult = useCallback((result: Awaited<ReturnType<typeof fetchMedia>>) => {
    setErrorMessage(result.errorMessage);
    setMedia(result.media);
    setSettings(result.settings);
    setLoading(false);
  }, []);

  const loadMedia = useCallback(async () => {
    setLoading(true);
    setErrorMessage("");
    applyMediaResult(await fetchMedia());
  }, [applyMediaResult, fetchMedia]);

  useEffect(() => {
    let active = true;
    void fetchMedia().then((result) => {
      if (active) applyMediaResult(result);
    });
    return () => {
      active = false;
    };
  }, [applyMediaResult, fetchMedia]);

  const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setErrorMessage("শুধু ছবি আপলোড করুন।");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setErrorMessage("ছবির আকার ১০ MB-এর কম হতে হবে।");
      return;
    }

    setUploading(true);
    setErrorMessage("");
    setSuccessMessage("");
    const safeName = file.name.normalize("NFKD").replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/^-+|-+$/g, "");
    const path = `site-media/${Date.now()}-${crypto.randomUUID()}-${safeName || "image"}`;
    const { error } = await supabase.storage.from(MEDIA_BUCKET).upload(path, file, { contentType: file.type, cacheControl: "3600", upsert: false });
    if (error) {
      setErrorMessage(`ছবি আপলোড হয়নি: ${error.message}`);
    } else {
      setSuccessMessage("ছবি আপলোড হয়েছে। এখন হোমপেজের কোনো জায়গায় সেট করুন অথবা URL কপি করে আর্টিকেলে ব্যবহার করুন।");
      await loadMedia();
    }
    setUploading(false);
  };

  const saveSettings = async () => {
    setSaving(true);
    setErrorMessage("");
    setSuccessMessage("");

    const { data: authData, error: authError } = await supabase.auth.refreshSession();
    if (authError || authData.session?.user.app_metadata?.role !== "admin") {
      setErrorMessage("অ্যাডমিন অনুমতি পাওয়া যায়নি। Supabase Auth-এর app_metadata-তে role=admin আছে কি না যাচাই করে লগআউট করে আবার লগইন করুন।");
      setSaving(false);
      return;
    }

    const { data: databaseAdmin, error: adminCheckError } = await supabase.rpc("is_admin");
    if (adminCheckError) {
      setErrorMessage(`Database admin check failed: ${adminCheckError.message}. Run the is_admin function and site_settings policies from supabase_schema.sql.`);
      setSaving(false);
      return;
    }
    if (databaseAdmin !== true) {
      setErrorMessage("এই সেশনের JWT-তে app_metadata.role = admin নেই। Supabase Auth-এ app_metadata ঠিক করে সম্পূর্ণ লগআউট করে আবার লগইন করুন।");
      setSaving(false);
      return;
    }

    const { error } = await supabase.from("site_settings").upsert({
      setting_key: "site_images",
      setting_value: settings,
      updated_at: new Date().toISOString(),
    }, { onConflict: "setting_key" });
    if (error) setErrorMessage(`ছবির সেটিংস সংরক্ষণ হয়নি: ${error.message}. Database admin check passed, so the site_settings write policy is missing or incorrect. Run the site_settings policies from supabase_schema.sql.`);
    else setSuccessMessage("হোমপেজের ছবিগুলো সংরক্ষণ হয়েছে। সাইটে পরিবর্তন দেখাতে কয়েক সেকেন্ড লাগতে পারে।");
    setSaving(false);
  };

  const copyUrl = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setSuccessMessage("ছবির URL কপি হয়েছে। আর্টিকেলের ফিচার্ড ছবি ঘরে পেস্ট করতে পারবেন।");
    } catch {
      setErrorMessage("URL কপি করা যায়নি। ছবির লিংকে ক্লিক করে ঠিকানা কপি করুন।");
    }
  };

  const refreshMedia = () => {
    setLoading(true);
    setErrorMessage("");
    void loadMedia();
  };

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 rounded-3xl border border-[#DFE7DE] bg-white p-6 shadow-xs sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-[#1A4331]">ছবি ও মিডিয়া লাইব্রেরি</h1>
          <p className="mt-1 text-sm text-[#546E5F]">এক জায়গায় ছবি আপলোড করুন, হোমপেজে বসান, বা আর্টিকেলে পুনরায় ব্যবহার করুন।</p>
        </div>
        <label className="inline-flex w-fit cursor-pointer items-center gap-2 rounded-xl bg-[#1A4331] px-4 py-2.5 text-xs font-bold text-white hover:bg-[#143628]">
          <Upload size={15} />
          <span>{uploading ? "আপলোড হচ্ছে..." : "ছবি আপলোড"}</span>
          <input type="file" accept="image/*" onChange={uploadImage} disabled={uploading} className="sr-only" />
        </label>
      </header>

      {errorMessage && <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">{errorMessage}</div>}
      {successMessage && <div role="status" className="rounded-xl border border-[#C6DCB8] bg-[#DFEDE1] p-4 text-sm text-[#1A4331]">{successMessage}</div>}

      <section className="space-y-5 rounded-3xl border border-[#DFE7DE] bg-white p-6 shadow-xs sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-lg font-bold text-[#1A4331]">হোমপেজে ছবি নির্ধারণ</h2>
            <p className="mt-1 text-xs text-[#637D6E]">কোনো ঘর খালি রাখলে আগের ইলাস্ট্রেশন দেখা যাবে।</p>
          </div>
          <button type="button" onClick={saveSettings} disabled={saving} className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#1A4331] px-4 py-2.5 text-xs font-bold text-white disabled:opacity-50">
            <Save size={15} />{saving ? "সংরক্ষণ হচ্ছে..." : "হোমপেজের ছবি সংরক্ষণ"}
          </button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {IMAGE_PLACEMENTS.map((placement) => (
            <label key={placement.key} className="block text-xs font-bold text-[#365542]">
              {placement.label}
              <select value={settings[placement.key] ?? ""} onChange={(event) => setSettings((current) => ({ ...current, [placement.key]: event.target.value }))} className="mt-2 w-full rounded-xl border border-[#CCD8CC] bg-[#FAF8F3] px-3 py-2.5 font-medium text-[#1A4331]">
                <option value="">ডিফল্ট ইলাস্ট্রেশন ব্যবহার করুন</option>
                {media.map((item) => <option key={item.path} value={item.url}>{item.name}</option>)}
              </select>
              {settings[placement.key] && <div className="relative mt-2 h-24 w-full overflow-hidden rounded-lg"><Image src={settings[placement.key]} alt="" fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" /></div>}
            </label>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-[#DFE7DE] bg-white p-6 shadow-xs sm:p-8">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-[#1A4331]">আপলোড করা ছবি</h2>
            <p className="mt-1 text-xs text-[#637D6E]">ছবির URL কপি করে আর্টিকেলের ফিচার্ড ছবি বা অন্য কনটেন্টে পেস্ট করুন।</p>
          </div>
          <button type="button" onClick={refreshMedia} disabled={loading} aria-label="Refresh media list" className="rounded-lg border border-[#CCD8CC] p-2 text-[#1A4331] disabled:opacity-50">
            <RefreshCw size={15} className={loading ? "animate-spin" : ""} />
          </button>
        </div>
        {loading ? <p className="py-12 text-center text-sm text-[#637D6E]">ছবির তালিকা লোড হচ্ছে...</p> : media.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[#CCD8CC] bg-[#FAF8F3] py-12 text-center">
            <ImagePlus className="mx-auto text-[#668070]" size={28} />
            <p className="mt-3 text-sm font-bold text-[#1A4331]">এখনো কোনো ছবি আপলোড হয়নি</p>
            <p className="mt-1 text-xs text-[#637D6E]">উপরে “ছবি আপলোড” বাটন থেকে প্রথম ছবি যোগ করুন।</p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {media.map((item) => (
              <article key={item.path} className="overflow-hidden rounded-2xl border border-[#DFE7DE] bg-[#FAF8F3]">
                <div className="relative h-44 w-full"><Image src={item.url} alt={item.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" /></div>
                <div className="p-3">
                  <p className="truncate text-xs font-bold text-[#1A4331]" title={item.name}>{item.name}</p>
                  <button type="button" onClick={() => void copyUrl(item.url)} className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-[#CCD8CC] bg-white px-3 py-2 text-xs font-semibold text-[#1A4331] hover:bg-[#EBF1EA]">
                    <Copy size={13} /> URL কপি করুন
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

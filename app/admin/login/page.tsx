"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { Lock, Mail, ArrowRight, ShieldCheck, AlertCircle, ArrowLeft } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password,
      });

      if (error) {
        throw error;
      }

      if (data.user) {
        router.push("/admin");
      }
    } catch (err: any) {
      setErrorMsg(err.message || "লগইন করতে ব্যর্থ হয়েছে। ইমেইল ও পাসওয়ার্ড চেক করুন।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#FAF8F3] px-4 py-12">
      {/* Return Home Link */}
      <div className="w-full max-w-md mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#577263] hover:text-[#1A4331] transition-colors"
        >
          <ArrowLeft size={14} />
          <span>মূল ওয়েবসাইটে ফিরে যান</span>
        </Link>
      </div>

      <div className="w-full max-w-md bg-white rounded-3xl border border-[#DFE7DE] p-8 sm:p-10 shadow-xs">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-[#1A4331] text-white flex items-center justify-center mx-auto mb-3 shadow-xs">
            <Lock size={22} />
          </div>
          <h1 className="text-2xl font-extrabold text-[#1A4331] tracking-tight">
            সহজ খামার অ্যাডমিন
          </h1>
          <p className="text-xs text-[#5E7667] mt-1">
            কনটেন্ট ও খামার গাইড ম্যানেজমেন্ট ড্যাশবোর্ড
          </p>
        </div>

        {/* Error Alert */}
        {errorMsg && (
          <div className="mb-5 p-3.5 rounded-xl bg-[#FEF2F2] border border-[#FCA5A5] flex items-start gap-2.5 text-xs text-[#991B1B]">
            <AlertCircle size={16} className="shrink-0 mt-0.5" />
            <p className="leading-relaxed">{errorMsg}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#1A4331] mb-1.5">
              অ্যাডমিন ইমেইল
            </label>
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@shohojkhamar.com"
                className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl bg-[#FAF8F3] border border-[#CCD8CC] focus:outline-hidden focus:border-[#1A4331] text-[#1A4331]"
              />
              <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#799282]" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#1A4331] mb-1.5">
              পাসওয়ার্ড
            </label>
            <div className="relative">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl bg-[#FAF8F3] border border-[#CCD8CC] focus:outline-hidden focus:border-[#1A4331] text-[#1A4331]"
              />
              <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#799282]" />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 py-3 rounded-xl bg-[#1A4331] text-white font-bold text-sm hover:bg-[#143628] active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-xs disabled:opacity-50"
          >
            <span>{loading ? "লগইন হচ্ছে..." : "ড্যাশবোর্ডে প্রবেশ করুন"}</span>
            <ArrowRight size={16} />
          </button>
        </form>

        {/* Notice */}
        <div className="mt-6 pt-5 border-t border-[#EDF2EB] flex items-center gap-2 text-[11px] text-[#698273]">
          <ShieldCheck size={14} className="text-[#1A4331] shrink-0" />
          <span>সুরক্ষিত অ্যাডমিনিস্ট্রেটর পোর্টাল। কোনো সাধারণ ফার্মার অ্যাকাউন্ট নেই।</span>
        </div>
      </div>
    </div>
  );
}

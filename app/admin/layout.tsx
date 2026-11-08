"use client";

import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import type { Session } from "@supabase/supabase-js";
import {
  LayoutDashboard,
  FileText,
  Calendar,
  Layers,
  Syringe,
  LogOut,
  ExternalLink,
  Shield,
  Menu,
  X,
  Image,
} from "lucide-react";

function AdminLayoutInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [accessDenied, setAccessDenied] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    if (isLoginPage) {
      return;
    }

    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        router.push("/admin/login");
      } else if (data.session.user.app_metadata?.role !== "admin") {
        setAccessDenied(true);
        await supabase.auth.signOut();
      } else {
        setSession(data.session);
      }
      setLoading(false);
    };

    checkAuth();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, currentSession) => {
        if (!currentSession && !isLoginPage) {
          router.push("/admin/login");
        } else if (currentSession?.user.app_metadata?.role !== "admin") {
          setAccessDenied(true);
          setSession(null);
        } else {
          setAccessDenied(false);
          setSession(currentSession);
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [isLoginPage, router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  if (isLoginPage) {
    return <>{children}</>;
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF8F3]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-3 border-[#1A4331] border-t-transparent rounded-full animate-spin" />
          <span className="text-xs font-semibold text-[#1A4331]">
            অ্যাডমিন সেশন যাচাই করা হচ্ছে...
          </span>
        </div>
      </div>
    );
  }

  if (accessDenied) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF8F3] px-4">
        <div className="max-w-md rounded-2xl border border-[#DFE7DE] bg-white p-8 text-center shadow-xs">
          <h1 className="text-xl font-bold text-[#1A4331]">অ্যাডমিন অনুমতি নেই</h1>
          <p className="mt-2 text-sm text-[#526B5D]">
            এই অ্যাকাউন্টটি অ্যাডমিন হিসেবে অনুমোদিত নয়। Supabase Auth-এর app_metadata-তে role=admin সেট করা অ্যাকাউন্ট ব্যবহার করুন।
          </p>
          <button
            onClick={() => router.replace("/admin/login")}
            className="mt-5 rounded-xl bg-[#1A4331] px-4 py-2 text-sm font-semibold text-white"
          >
            লগইন পেজে যান
          </button>
        </div>
      </div>
    );
  }

  const navLinks = [
    {
      href: "/admin",
      labelBn: "ওভারভিউ",
      icon: LayoutDashboard,
      active: pathname === "/admin",
    },
    {
      href: "/admin/articles",
      labelBn: "ব্লগ আর্টিকেল",
      icon: FileText,
      active: pathname.startsWith("/admin/articles"),
    },
    {
      href: "/admin/guides",
      labelBn: "গাইড পর্যায়সমূহ",
      icon: Calendar,
      active: pathname.startsWith("/admin/guides"),
    },
    {
      href: "/admin/birds",
      labelBn: "পাখির জাত",
      icon: Layers,
      active: pathname.startsWith("/admin/birds"),
    },
    {
      href: "/admin/vaccines",
      labelBn: "টিকা গাইড",
      icon: Syringe,
      active: pathname.startsWith("/admin/vaccines"),
    },
    {
      href: "/admin/media",
      labelBn: "ছবি ও মিডিয়া",
      icon: Image,
      active: pathname.startsWith("/admin/media"),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F3ED]">
      {/* Top Navbar */}
      <header className="w-full bg-[#1A4331] text-white h-16 sticky top-0 z-40 px-4 sm:px-6 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="md:hidden p-1.5 rounded-lg hover:bg-white/10 text-white"
          >
            {mobileNavOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <Link href="/admin" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center text-white font-bold">
              <Shield size={18} />
            </div>
            <span className="text-base sm:text-lg font-bold tracking-tight">
              সহজ খামার অ্যাডমিন
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-3 sm:gap-5 text-xs">
          <Link
            href="/"
            target="_blank"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#D2E4D8] font-medium transition-colors"
          >
            <span>লাইভ সাইট দেখুন</span>
            <ExternalLink size={13} />
          </Link>

          <div className="hidden md:flex flex-col text-right">
            <span className="font-semibold text-white truncate max-w-[180px]">
              {session?.user?.email || "Admin User"}
            </span>
            <span className="text-[10px] text-[#A3C2B0]">সুপার অ্যাডমিনিস্ট্রেটর</span>
          </div>

          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600/80 hover:bg-red-600 text-white font-semibold transition-colors"
          >
            <LogOut size={13} />
            <span>লগআউট</span>
          </button>
        </div>
      </header>

      {/* Main Container with Sidebar */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 gap-6">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-64 shrink-0">
          <div className="bg-white rounded-2xl border border-[#DFE7DE] p-4 shadow-2xs sticky top-22">
            <div className="px-3 py-2 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#71897B]">
                কনটেন্ট ব্যবস্থাপনা
              </span>
            </div>

            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                      link.active
                        ? "bg-[#1A4331] text-white shadow-xs"
                        : "text-[#3D5446] hover:bg-[#FAF8F3] hover:text-[#1A4331]"
                    }`}
                  >
                    <Icon size={18} />
                    <span>{link.labelBn}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Mobile Navigation Drawer */}
        {mobileNavOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-black/40 flex">
            <div className="w-64 bg-white h-full p-5 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E8ECE6] mb-4">
                  <span className="font-bold text-[#1A4331]">অ্যাডমিন মেনু</span>
                  <button onClick={() => setMobileNavOpen(false)}>
                    <X size={20} className="text-[#1A4331]" />
                  </button>
                </div>
                <nav className="flex flex-col gap-1.5">
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileNavOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold ${
                          link.active
                            ? "bg-[#1A4331] text-white"
                            : "text-[#3D5446] hover:bg-[#FAF8F3]"
                        }`}
                      >
                        <Icon size={18} />
                        <span>{link.labelBn}</span>
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-4 border-t border-[#E8ECE6]">
                <Link
                  href="/"
                  target="_blank"
                  className="flex items-center gap-2 text-xs font-bold text-[#1A4331]"
                >
                  <ExternalLink size={14} />
                  <span>মূল ওয়েবসাইট দেখুন</span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Content View */}
        <main className="flex-1 w-full overflow-hidden">{children}</main>
      </div>
    </div>
  );
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#FAF8F3]">
          <div className="w-8 h-8 border-2 border-[#1A4331] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <AdminLayoutInner>{children}</AdminLayoutInner>
    </Suspense>
  );
}

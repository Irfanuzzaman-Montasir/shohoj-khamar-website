"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import ArticleForm from "@/components/admin/ArticleForm";

export default function EditArticlePage() {
  const params = useParams();
  const id = params?.id as string;

  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetchArticle = async () => {
      const { data, error } = await supabase
        .from("blog_articles")
        .select("*")
        .eq("id", id)
        .single();

      if (data) {
        setArticle(data);
      }
      setLoading(false);
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <div className="py-20 text-center text-xs text-[#526B5D]">
        আর্টিকেল লোড হচ্ছে...
      </div>
    );
  }

  if (!article) {
    return (
      <div className="py-20 text-center text-sm font-bold text-red-600">
        আর্টিকেল পাওয়া যায়নি।
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-[#1A4331] tracking-tight">
          আর্টিকেল সম্পাদনা
        </h1>
        <p className="text-xs sm:text-sm text-[#546E5F] mt-1">
          "{article.title_bn}" পোস্টের তথ্য পরিবর্তন করুন
        </p>
      </div>

      <ArticleForm initialData={article} isEdit={true} />
    </div>
  );
}

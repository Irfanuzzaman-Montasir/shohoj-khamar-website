"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import HeroSection from "@/components/home/HeroSection";
import BirdSelection from "@/components/home/BirdSelection";

export default function HomeImageSections() {
  const [images, setImages] = useState<Record<string, string>>({});

  useEffect(() => {
    let active = true;

    const loadImages = async () => {
      const { data, error } = await supabase
        .from("site_settings")
        .select("setting_value")
        .eq("setting_key", "site_images")
        .maybeSingle();

      if (!active || error || !data?.setting_value || typeof data.setting_value !== "object" || Array.isArray(data.setting_value)) return;

      const publicImages = Object.fromEntries(
        Object.entries(data.setting_value as Record<string, unknown>).filter(
          (entry): entry is [string, string] => typeof entry[1] === "string" && entry[1].trim().length > 0
        )
      );
      setImages(publicImages);
    };

    void loadImages();
    return () => {
      active = false;
    };
  }, []);

  return (
    <>
      <HeroSection imageUrl={images.homepage_hero || ""} />
      <BirdSelection images={images} />
    </>
  );
}

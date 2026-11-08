import React from "react";

interface AdPlaceholderProps {
  slotName?: string;
  format?: "horizontal" | "rectangle" | "vertical";
  className?: string;
}

export default function AdPlaceholder({
  slotName = "Ad Placement",
  format = "horizontal",
  className = "",
}: AdPlaceholderProps) {
  const heightClass =
    format === "horizontal"
      ? "h-24 sm:h-28"
      : format === "rectangle"
      ? "h-64"
      : "h-96";

  return (
    <div
      className={`w-full ${heightClass} my-6 rounded-xl border border-dashed border-[#D2DDD2] bg-[#FAF8F3]/60 flex flex-col items-center justify-center p-4 text-center ${className}`}
      aria-label="Advertisement Space"
    >
      <span className="text-[11px] uppercase tracking-wider text-[#799081] font-semibold">
        বিজ্ঞাপন / {slotName}
      </span>
      <span className="text-xs text-[#9BB1A3] mt-0.5">
        গুগল অ্যাডসেন্স বা বিজ্ঞাপন স্থান
      </span>
    </div>
  );
}

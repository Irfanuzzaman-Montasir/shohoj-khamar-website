import React from "react";

interface BirdIllustrationProps {
  variant?: "active" | "muted";
  className?: string;
  width?: number;
  height?: number;
}

export default function BirdIllustration({
  variant = "active",
  className = "",
  width = 96,
  height = 80,
}: BirdIllustrationProps) {
  const bodyColor = variant === "active" ? "#1A4331" : "#8EA896";
  const eyeColor = variant === "active" ? "#0E2419" : "#57715F";

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Orange Beak */}
      <path
        d="M71 30L87 36L71 42Z"
        fill="#E88C30"
      />
      
      {/* Bird Silhouette (Single continuous organic shape) */}
      <path
        d="M66 18C58 18 52 23 49 29.5C41 30.5 32 34 23 41C16 46.5 14 51.5 16 54C17.5 55.8 21.5 55 27 53C24 57 26.5 62 33 64C41 66.5 52 66 62 58.5C71 51.5 73.5 40 73.5 30C73.5 23 70 18 66 18Z"
        fill={bodyColor}
      />
      
      {/* Eye */}
      <circle cx="65" cy="27" r="3.2" fill={eyeColor} />
      <circle cx="66" cy="26" r="1.1" fill="#FFFFFF" opacity="0.9" />
    </svg>
  );
}

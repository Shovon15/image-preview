"use client";

import Image, { ImageProps, StaticImageData } from "next/image";
import { cn } from "@/utils/cn";
import { useMemo, useState } from "react";

type Props = Omit<ImageProps, "src" | "alt"> & {
  src?: string | StaticImageData;
  alt?: string;
  fallbackSrc?: string | StaticImageData;
  fallbackText?: string;
  className?: string;
};

const DEFAULT_IMAGE: StaticImageData | string = "/images/default-fallback.png";

export default function ImageComponent({
  src,
  alt = "img",
  fallbackSrc,
  fallbackText,
  className = "",
  ...props
}: Props) {
  // 0 = primary, 1 = fallbackSrc, 2 = default, 3 = show text
  const [attempt, setAttempt] = useState(0);

  // Build the list of candidates (stable per render)
  const candidates = useMemo<(string | StaticImageData)[]>(() => {
    const list: (string | StaticImageData)[] = [];
    if (src) list.push(src);
    if (fallbackSrc) list.push(fallbackSrc);
    list.push(DEFAULT_IMAGE);
    return list;
  }, [src, fallbackSrc]);

  const currentSrc = candidates[Math.min(attempt, candidates.length - 1)];

  const handleError = () => {
    // move to next candidate; if none left and fallbackText exists, show text
    setAttempt((a) => {
      const next = a + 1;
      if (next >= candidates.length) return candidates.length; // triggers text below if provided
      return next;
    });
  };

  // If we exhausted all candidates and fallbackText exists
  if (attempt >= candidates.length && fallbackText) {
    return (
      <div className="flex items-center justify-center w-full h-full text-gray-500 text-sm">
        {fallbackText}
      </div>
    );
  }

  return (
    <Image
      {...props}
      src={currentSrc}
      alt={alt}
      onError={handleError}
      width={props.width ?? 500}
      height={props.height ?? 500}
      className={cn("w-full object-cover", className)}
    />
  );
}

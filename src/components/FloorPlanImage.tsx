"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

type FloorPlanImageProps = {
  src: string;
  alt: string;
  label: string;
};

export default function FloorPlanImage({ src, alt, label }: FloorPlanImageProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", onEscape);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onEscape);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  return (
    <>
      <div className="flex flex-col">
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="relative aspect-[3/4] min-h-[280px] bg-[var(--color-gray-bg)] overflow-hidden flex items-center justify-center cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-dark)] focus-visible:ring-offset-2"
          aria-label={`View ${label} larger`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-contain p-4 opacity-90 mix-blend-multiply"
          />
        </button>
        <p className="mt-3 text-[11px] uppercase tracking-[0.15em] text-[var(--color-dark)]">
          {label}
        </p>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Floor plan lightbox"
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 z-[102] flex h-10 w-10 items-center justify-center rounded-sm bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" strokeWidth={2} />
          </button>
          <div
            className="relative w-[90vw] max-w-6xl h-[85vh] max-h-[900px]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </>
  );
}

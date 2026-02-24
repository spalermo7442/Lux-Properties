"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type ImageGallerySliderProps = {
  images: { src: string; alt: string }[];
  className?: string;
  aspectRatio?: "4/3" | "16/9" | "3/2";
};

export default function ImageGallerySlider({
  images,
  className = "",
  aspectRatio = "4/3",
}: ImageGallerySliderProps) {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => {
        const next = i + delta;
        if (next < 0) return images.length - 1;
        if (next >= images.length) return 0;
        return next;
      });
    },
    [images.length]
  );

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

  if (!images.length) return null;

  const current = images[index];

  return (
    <>
      <div
        className={`relative overflow-hidden bg-[var(--color-gray-bg)] ${className}`}
      >
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="relative w-full block bg-[var(--color-gray-bg)] cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-dark)] focus-visible:ring-offset-2"
          style={{ aspectRatio: aspectRatio.replace("/", " / ") }}
          aria-label="View image larger"
        >
          <Image
            src={current.src}
            alt={current.alt}
            fill
            className="object-cover object-center transition-opacity duration-300 hover:opacity-95"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index === 0}
          />
        </button>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 flex items-center justify-center rounded-sm border border-white/80 bg-black/20 text-white backdrop-blur-sm hover:bg-black/35 hover:border-white transition-all duration-200"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 flex items-center justify-center rounded-sm border border-white/80 bg-black/20 text-white backdrop-blur-sm hover:bg-black/35 hover:border-white transition-all duration-200"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2} />
            </button>

            <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIndex(i);
                  }}
                  className={`h-0.5 transition-all duration-200 ${
                    i === index
                      ? "w-6 bg-white"
                      : "w-2 bg-white/50 hover:bg-white/70 hover:w-3"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 z-[102] flex h-10 w-10 items-center justify-center rounded-sm bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" strokeWidth={2} />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  go(-1);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-[102] h-12 w-12 flex items-center justify-center rounded-sm bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" strokeWidth={2} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  go(1);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-[102] h-12 w-12 flex items-center justify-center rounded-sm bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" strokeWidth={2} />
              </button>
            </>
          )}

          <div
            className="relative w-[90vw] max-w-6xl h-[85vh] max-h-[900px]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index].src}
              alt={images[index].alt}
              fill
              className="object-contain"
              sizes="90vw"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {images.length > 1 && (
            <div className="absolute bottom-4 left-0 right-0 z-[102] flex justify-center gap-2">
              <span className="text-white/80 text-sm">
                {index + 1} / {images.length}
              </span>
            </div>
          )}
        </div>
      )}
    </>
  );
}

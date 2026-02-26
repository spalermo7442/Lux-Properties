import {
  Square,
  BedDouble,
  Bath,
  Car,
  Flame,
  DoorOpen,
  TreePine,
  UtensilsCrossed,
  LayoutGrid,
  Shirt,
  Package,
  Armchair,
} from "lucide-react";
import ImageGallerySlider from "@/components/ImageGallerySlider";

export type NorthLondonPropertyData = {
  address: string;
  status: string;
  description: string;
  sqft: number;
  beds: number;
  baths: number;
  garage: string;
  features: string[];
  gallery: { src: string; alt: string }[];
  floorPlans: { src: string; alt: string; label: string }[];
};

type NorthLondonPropertyProps = {
  property: NorthLondonPropertyData;
  variant?: "white" | "grey";
};

const KEY_POINT_ICONS = [
  Flame,
  DoorOpen,
  TreePine,
  UtensilsCrossed,
  LayoutGrid,
  Bath,
  Shirt,
  Package,
  Armchair,
];

export default function NorthLondonProperty({ property, variant = "white" }: NorthLondonPropertyProps) {
  const bg = variant === "grey" ? "bg-[var(--color-gray-bg)]" : "bg-white";
  return (
    <article className={`border-t border-[var(--color-light)] first:border-t-0 ${bg}`}>
      <div className="container-main py-12 md:py-16">
        {/* Address + status — single clear header row */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-8">
          <h2 className="text-xl md:text-2xl font-light text-[var(--color-dark)] tracking-[0.04em]">
            {property.address}
          </h2>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gray)]">
            {property.status}
          </span>
        </div>

        {/* Top row: GALLERY (left) and DETAILS (right) headings aligned */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gray)]">
            Gallery
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gray)] md:text-left">
            Details
          </p>
        </div>

        {/* Middle: image (left) | details + features (right) */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="image-shadow overflow-hidden">
            <ImageGallerySlider
              images={property.gallery}
              aspectRatio="4/3"
            />
          </div>
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <span className="flex items-center gap-3 text-[var(--color-dark)] text-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-[var(--color-gray-bg)] text-[var(--color-gray)]">
                  <Square className="h-4 w-4" strokeWidth={1.5} />
                </span>
                {property.sqft} sq ft
              </span>
              <span className="flex items-center gap-3 text-[var(--color-dark)] text-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-[var(--color-gray-bg)] text-[var(--color-gray)]">
                  <BedDouble className="h-4 w-4" strokeWidth={1.5} />
                </span>
                {property.beds} bedroom{property.beds !== 1 ? "s" : ""}
              </span>
              <span className="flex items-center gap-3 text-[var(--color-dark)] text-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-[var(--color-gray-bg)] text-[var(--color-gray)]">
                  <Bath className="h-4 w-4" strokeWidth={1.5} />
                </span>
                {property.baths} bath{property.baths !== 1 ? "s" : ""}
              </span>
              <span className="flex items-center gap-3 text-[var(--color-dark)] text-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-[var(--color-gray-bg)] text-[var(--color-gray)]">
                  <Car className="h-4 w-4" strokeWidth={1.5} />
                </span>
                {property.garage}
              </span>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gray)] mb-4">
                Features
              </p>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2 body-text text-[var(--color-dark)] text-sm list-disc list-outside pl-5">
                {property.features.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Key points with icons — above description */}
        <div className="mt-6 pt-6 border-t border-[var(--color-light)]">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-8 sm:gap-x-10">
            {property.features.map((label, i) => {
              const Icon = KEY_POINT_ICONS[i % KEY_POINT_ICONS.length];
              return (
                <div
                  key={i}
                  className="flex flex-col items-center text-center min-w-[100px]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-[var(--color-gray-bg)] text-[var(--color-gray)] mb-2">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.12em] text-[var(--color-dark)] leading-tight">
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Full-width description */}
        <div className="mt-8 pt-6 border-t border-[var(--color-light)]">
          <p className="body-text text-[var(--color-dark)] leading-relaxed text-[15px] md:text-base">
            {property.description}
          </p>
        </div>

        {/* Floor plans — full-width section, larger display */}
        {property.floorPlans.length > 0 && (
          <div className="mt-6 pt-6 border-t border-[var(--color-light)]">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gray)] mb-6">
              Floor plans
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {property.floorPlans.map((plan) => (
                <div key={plan.label} className="flex flex-col">
                  <div className="relative aspect-[3/4] min-h-[280px] bg-[var(--color-gray-bg)] overflow-hidden flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={plan.src}
                      alt={plan.alt}
                      className="w-full h-full object-contain p-4 opacity-90 mix-blend-multiply"
                    />
                  </div>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.15em] text-[var(--color-dark)]">
                    {plan.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

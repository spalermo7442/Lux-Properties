import Link from "next/link";
import { Square, BedDouble, Bath, Car } from "lucide-react";
import ImageGallerySlider from "@/components/ImageGallerySlider";

const LUX_HOMES_URL = "https://luxhomesdesignbuild.ca/";
const LUX_LOGO_SRC = "/images/lux-logo.jpg";

export type RentalUnitData = {
  unitNumber: number;
  description: string;
  /** Optional line shown on its own, bolder, linked to Lux Homes (e.g. "This modern, spacious unit built by Lux homes.") */
  luxLine?: string;
  sqft: number;
  beds: number;
  baths: number;
  garage: string;
  extras: string[];
  features: string[];
  gallery: { src: string; alt: string }[];
};

type RentalUnitProps = {
  unit: RentalUnitData;
  variant?: "default" | "alt";
  /** Card layout: no section wrapper, single column; for use in a grid (e.g. two per row). */
  layout?: "full" | "card";
};

const cardContent = (
  unit: RentalUnitData,
  isCard: boolean
) => (
  <>
    <div className={isCard ? "order-1" : "md:min-w-0 md:flex-[1.1]"}>
      <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gray)] mb-2 block">
        Gallery
      </span>
      <div className="image-shadow">
        <ImageGallerySlider images={unit.gallery} aspectRatio="4/3" />
      </div>
    </div>

    <div className={`flex flex-col ${isCard ? "order-2" : "md:flex-1 md:min-w-0"}`}>
      <div className="mb-4 pb-4 border-b border-[var(--color-light)]">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-gray)] block mb-1">
          Unit
        </span>
        <p
          id={`unit-${unit.unitNumber}-title`}
          className={`font-light text-[var(--color-dark)] tracking-[0.02em] ${isCard ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl"}`}
        >
          {unit.unitNumber}
        </p>
      </div>

      <div className={`body-text text-[var(--color-dark)] leading-relaxed text-[15px] md:text-base ${isCard ? "mb-5" : "mb-8"}`}>
        <p>{unit.description}</p>
      </div>

      <div className={`grid grid-cols-2 gap-x-4 gap-y-3 ${isCard ? "mb-5" : "mb-8"}`}>
        <span className="flex items-center gap-2.5 text-[var(--color-dark)] text-sm">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-[var(--color-gray-bg)] text-[var(--color-gray)]">
            <Square className="h-3.5 w-3.5" strokeWidth={1.5} />
          </span>
          {unit.sqft} sq ft
        </span>
        <span className="flex items-center gap-2.5 text-[var(--color-dark)] text-sm">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-[var(--color-gray-bg)] text-[var(--color-gray)]">
            <BedDouble className="h-3.5 w-3.5" strokeWidth={1.5} />
          </span>
          {unit.beds} bedroom{unit.beds !== 1 ? "s" : ""}
        </span>
        <span className="flex items-center gap-2.5 text-[var(--color-dark)] text-sm">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-[var(--color-gray-bg)] text-[var(--color-gray)]">
            <Bath className="h-3.5 w-3.5" strokeWidth={1.5} />
          </span>
          {unit.baths} bath{unit.baths !== 1 ? "s" : ""}
        </span>
        <span className="flex items-center gap-2.5 text-[var(--color-dark)] text-sm">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-[var(--color-gray-bg)] text-[var(--color-gray)]">
            <Car className="h-3.5 w-3.5" strokeWidth={1.5} />
          </span>
          {unit.garage}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        {unit.extras.length > 0 && (
          <div className="flex-1 min-w-0">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gray)] mb-2">
              Extras
            </h3>
            <ul className="body-text text-[var(--color-dark)] space-y-1 text-sm">
              {unit.extras.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        {unit.features.length > 0 && (
          <div className="flex-1 min-w-0">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gray)] mb-2">
              Features
            </h3>
            <ul className="body-text text-[var(--color-dark)] space-y-1 text-sm">
              {unit.features.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {unit.luxLine && (
        <div className="mt-6 pt-5 border-t border-[var(--color-light)] flex items-center justify-between gap-4">
          <Link
            href={LUX_HOMES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-dark)] text-[15px] md:text-base font-normal hover:underline underline-offset-2"
          >
            {unit.luxLine}
          </Link>
          <Link
            href={LUX_HOMES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-block bg-white rounded-sm p-1"
            aria-label="Lux Homes Design Build"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={LUX_LOGO_SRC}
              alt="Lux Homes Design Build"
              className="h-8 w-auto object-contain block bg-white"
              style={{ backgroundColor: "white" }}
            />
          </Link>
        </div>
      )}
    </div>
  </>
);

export default function RentalUnit({ unit, variant = "default", layout = "full" }: RentalUnitProps) {
  const isAlt = variant === "alt";
  const isCard = layout === "card";

  const articleClass = `
    overflow-hidden h-full flex flex-col
    ${isCard
      ? "bg-white border border-[var(--color-light)] shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
      : isAlt
        ? "bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
        : "border border-[var(--color-light)]"}
  `;

  const innerClass = isCard
    ? "p-5 md:p-6 flex flex-col gap-6"
    : "p-6 md:p-8 lg:p-10";

  const gridClass = isCard
    ? "flex flex-col gap-6"
    : "flex flex-col md:flex-row md:items-start gap-8 lg:gap-14";

  if (isCard) {
    return (
      <article
        className={articleClass}
        aria-labelledby={`unit-${unit.unitNumber}-title`}
      >
        <div className={innerClass}>
          <div className={gridClass}>
            {cardContent(unit, true)}
          </div>
        </div>
      </article>
    );
  }

  return (
    <section
      className={`py-14 md:py-20 ${isAlt ? "bg-[var(--color-gray-bg)]" : "bg-white"}`}
      aria-labelledby={`unit-${unit.unitNumber}-title`}
    >
      <div className="container-main">
        <article className={articleClass}>
          <div className={innerClass}>
            <div className={gridClass}>
              {cardContent(unit, false)}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

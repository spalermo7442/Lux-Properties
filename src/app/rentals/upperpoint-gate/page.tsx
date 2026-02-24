import Link from "next/link";
import Image from "next/image";
import RentalUnit, { type RentalUnitData } from "@/components/RentalUnit";

const MAIN_FLOOR_IMAGE = "/images/upperpoint/42-1965-Upperpoint---Main-Floor.png";

const UPPERPOINT_IMAGES = Array.from({ length: 26 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return `/images/upperpoint/${n}.png`;
});

const DEFAULT_DESCRIPTION = "Freehold unit in Riverbend area close to West 5.";
const DEFAULT_LUX_LINE = "This modern, spacious unit is built by Lux Homes.";

const DEFAULT_SPECS = {
  sqft: 1700,
  beds: 3,
  baths: 2.5,
  garage: "Single car garage",
  extras: [
    "Roller shades on all windows included",
    "Stainless steel appliances included",
  ],
  features: ["Rear deck and backyard fully fenced in for privacy"],
};

/** Build gallery entries for a unit. Main floor image first, then rest. */
function buildGallery(images: string[], label: string): { src: string; alt: string }[] {
  const mainFirst = [
    { src: MAIN_FLOOR_IMAGE, alt: `${label} — main floor` },
    ...images.map((src, i) => ({
      src,
      alt: `${label} — interior ${i + 1}`,
    })),
  ];
  return mainFirst;
}

const UPPERPOINT_UNITS: RentalUnitData[] = [
  {
    unitNumber: 97,
    description: DEFAULT_DESCRIPTION,
    luxLine: DEFAULT_LUX_LINE,
    ...DEFAULT_SPECS,
    gallery: buildGallery(UPPERPOINT_IMAGES, "Unit 97"),
  },
  {
    unitNumber: 95,
    description: DEFAULT_DESCRIPTION,
    luxLine: DEFAULT_LUX_LINE,
    ...DEFAULT_SPECS,
    gallery: buildGallery(UPPERPOINT_IMAGES, "Unit 95"),
  },
  {
    unitNumber: 93,
    description: DEFAULT_DESCRIPTION,
    luxLine: DEFAULT_LUX_LINE,
    ...DEFAULT_SPECS,
    gallery: buildGallery(UPPERPOINT_IMAGES, "Unit 93"),
  },
  {
    unitNumber: 89,
    description: DEFAULT_DESCRIPTION,
    luxLine: DEFAULT_LUX_LINE,
    ...DEFAULT_SPECS,
    gallery: buildGallery(UPPERPOINT_IMAGES, "Unit 89"),
  },
  {
    unitNumber: 85,
    description: DEFAULT_DESCRIPTION,
    luxLine: DEFAULT_LUX_LINE,
    ...DEFAULT_SPECS,
    gallery: buildGallery(UPPERPOINT_IMAGES, "Unit 85"),
  },
  {
    unitNumber: 83,
    description: DEFAULT_DESCRIPTION,
    luxLine: DEFAULT_LUX_LINE,
    ...DEFAULT_SPECS,
    gallery: buildGallery(UPPERPOINT_IMAGES, "Unit 83"),
  },
];

export default function UpperpointGatePage() {
  return (
    <main id="main-content" className="min-h-screen bg-white pt-16">
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full aspect-[2/1] md:aspect-[5/2]">
          <Image
            src="/images/hero-header.png"
            alt="1965 Upperpoint Gate"
            fill
            className="object-cover object-top w-full"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"
            aria-hidden
          />
        </div>
        <Link
          href="/"
          className="absolute bottom-5 left-5 md:bottom-8 md:left-8 z-10 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-white hover:text-white/90 transition-colors"
        >
          <span className="w-8 h-px bg-white/80" />
          Back to Home
        </Link>
      </section>

      <section className="py-8 md:py-12 bg-white border-b border-[var(--color-light)]">
        <div className="container-main">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-center gap-y-2 sm:gap-x-5 text-center sm:text-left">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-gray)]">
              Rentals · Riverbend
            </span>
            <span className="text-[var(--color-dark)] text-xl md:text-2xl font-light tracking-[0.06em]">
              1965 Upperpoint Gate · London, Ontario
            </span>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[var(--color-gray-bg)]">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {UPPERPOINT_UNITS.map((unit) => (
              <RentalUnit
                key={unit.unitNumber}
                unit={unit}
                layout="card"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--color-dark)]">
        <div className="container-main text-center max-w-2xl mx-auto">
          <h2 className="text-white text-xl md:text-2xl font-light uppercase tracking-[0.12em] mb-4">
            Interested in renting?
          </h2>
          <p className="text-white/75 body-text mb-10 text-[15px] leading-relaxed">
            Get in touch for availability and viewing details.
          </p>
          <Link
            href="/contact"
            className="btn-primary bg-white text-[var(--color-dark)] border-white hover:bg-white/90 hover:border-white/90"
          >
            Contact us
          </Link>
        </div>
      </section>
    </main>
  );
}

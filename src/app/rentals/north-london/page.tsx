import Link from "next/link";
import Image from "next/image";
import NorthLondonProperty, {
  type NorthLondonPropertyData,
} from "@/components/NorthLondonProperty";

const BUROAK_DESCRIPTION = `This 2 Storey Modern Farm House boasts style and comfort the moment you step into the large foyer that leads into the open concept floor plan. A large living room featuring a electrical fireplace with mantel, dinette with glass sliding doors to the outside deck AND a gourmet kitchen. The large island, Kitchen Aid appliances (Fridge, Stove & Dishwasher) and large pantry will make you the host with the most. No detail is missed from the custom cabinetry, quartz countertops, upgraded hardwood floors and fixtures. The mudroom off of the garage entrance has plenty of storage capacity in the closet as well as a bench and hooks to hang your family's coats and backpacks. Upstairs you will find 2 large bedrooms that share a Jack & Jill 4 piece bath, a 3rd bedroom with its own 3 piece ensuite and walk-in closet! The primary room is something to behold!! Not only is it spacious it has a 5 piece ensuite – soaker tub, glass shower, double sink and a massive walk-in closet. A convenient 2nd floor laundry room – washer & dryer with cabinetry.`;

const BUROAK_FEATURES = [
  "Electrical fireplace with mantel",
  "Dinette with glass sliding doors",
  "Deck included",
  "Island, appliances, pantry",
  "Hardwood floors",
  "2 ensuite bathrooms",
  "2 Walk-in closets",
  "Washer & dryer & cabinetry",
  "Mudroom with bench",
];

const GALLERY_2603 = [
  { src: "/images/north-london/2603-exterior.png", alt: "2603 Buroak Drive — exterior" },
  ...Array.from({ length: 37 }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return {
      src: `/images/north-london/2603-gallery-${n}.png`,
      alt: `2603 Buroak Drive — ${i + 1}`,
    };
  }),
];

const FLOOR_PLANS_2603 = [
  { src: "/images/north-london/2603-floor-main.png", alt: "Main floor plan", label: "Main floor" },
  { src: "/images/north-london/2603-floor-upper.png", alt: "Upper level floor plan", label: "Upper level" },
  { src: "/images/north-london/2603-floor-basement.png", alt: "Basement floor plan", label: "Basement" },
];

const PROPERTIES: NorthLondonPropertyData[] = [
  {
    address: "2603 Buroak Drive",
    status: "NOT AVAILABLE",
    description: BUROAK_DESCRIPTION,
    sqft: 2630,
    beds: 4,
    baths: 3.5,
    garage: "Two car garage",
    features: BUROAK_FEATURES,
    gallery: GALLERY_2603,
    floorPlans: FLOOR_PLANS_2603,
  },
];

export default function NorthLondonPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white pt-16">
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full aspect-[2/1] md:aspect-[5/2]">
          <Image
            src="/images/hero-header.jpg"
            alt="North London Rentals"
            fill
            className="object-cover object-top w-full"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"
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
              Rentals
            </span>
            <span className="text-[var(--color-dark)] text-xl md:text-2xl font-light tracking-[0.06em]">
              North London · London, Ontario
            </span>
          </div>
        </div>
      </section>

      <section>
        {PROPERTIES.map((property, i) => (
          <NorthLondonProperty
            key={property.address}
            property={property}
            variant={i % 2 === 0 ? "white" : "grey"}
          />
        ))}
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

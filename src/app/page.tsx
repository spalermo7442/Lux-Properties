import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main id="main-content">
      {/* Hero — new header image with logo as the focal point */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-header.jpg"
            alt=""
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20 w-full max-w-4xl mx-auto">
          <Image
            src="/images/logo.png"
            alt="Lux Properties"
            width={280}
            height={84}
            className="w-[200px] sm:w-[240px] md:w-[280px] h-auto drop-shadow-[0_0_60px_rgba(0,0,0,0.9)]"
            priority
          />
          <p className="mt-10 text-white text-lg md:text-xl font-light tracking-[0.35em] uppercase animate-fade-in drop-shadow-[0_0_24px_rgba(0,0,0,0.9)]">
            Lux Living Within Reach
          </p>
          <p className="mt-4 text-white/90 text-sm md:text-base tracking-[0.2em] max-w-md animate-fade-in delay-100 drop-shadow-[0_0_20px_rgba(0,0,0,0.9)]">
            Thoughtfully designed homes for modern living · London, Ontario
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60 hero-scroll-bounce">
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="flex flex-col items-center gap-1 mt-2">
            <span className="w-px h-2 bg-white/40" />
            <span className="w-px h-3 bg-white/50" />
          </div>
        </div>
      </section>

      {/* About — editorial split: one strong image, one block of copy */}
      <section className="grid md:grid-cols-2 min-h-[60vh]">
        <div className="relative min-h-[50vh] md:min-h-0 order-2 md:order-1">
          <Image
            src="/images/decor-2.png"
            alt="Thoughtfully designed interior"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-16 md:py-24 md:pl-12 lg:pl-20 order-1 md:order-2 bg-white">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-gray)] mb-4">Who we are</span>
          <p className="body-text text-[var(--color-dark)] leading-relaxed max-w-lg">
            Lux Properties is a professionally managed rental company based in London, Ontario, offering thoughtfully designed homes for modern living. As the rental division of Lux Homes Design & Build, every residence in our portfolio is built with the same craftsmanship, attention to detail, and long-term quality that defines our custom homes and communities.
          </p>
        </div>
      </section>

      {/* Portfolio — full-bleed image with overlay copy */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/decor-4.png"
            alt="Our portfolio: stacked townhomes and residences"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 w-full px-6 py-12 md:py-16">
          <div className="container-main max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.25em] text-white/70">Our portfolio</span>
            <p className="mt-4 text-white text-lg md:text-xl font-light leading-relaxed">
              Purpose-built stacked townhomes — including our Stratus community — executive townhomes, and select single-family residences. Each home is designed for comfort, functionality, and elevated everyday living.
            </p>
          </div>
        </div>
      </section>

      {/* Interiors — paired images with overlay text */}
      <section className="relative py-16 md:py-20 overflow-x-clip bg-[var(--color-gray-bg)]">
        <div className="container-main">
          <div className="relative grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/decor-1.png"
                alt="Living space"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/decor-3.png"
                alt="Designed for everyday living"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
        {/* Overlay: full-width of section, grey bar extends way past content width */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-center pointer-events-none">
          <div className="w-[140vw] max-w-none relative left-1/2 -translate-x-1/2 bg-[var(--color-gray-bg)] px-8 py-3 md:px-12 md:py-4">
            <p className="text-center text-[var(--color-dark)] text-[18px] md:text-[26px] lg:text-[35px] font-light italic tracking-[0.1em] uppercase whitespace-nowrap">
              Comfort, functionality, elevated everyday living.
            </p>
          </div>
        </div>
      </section>

      {/* Long-term owners — text-first with one anchoring image */}
      <section className="grid md:grid-cols-5 gap-0 bg-white">
        <div className="md:col-span-3 flex flex-col justify-center items-end px-6 py-16 md:py-24 md:pr-12 lg:pr-24 order-2 md:order-1 text-right">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-gray)] mb-4">Our approach</span>
          <p className="body-text text-[var(--color-dark)] leading-relaxed max-w-lg">
            We are long-term owners, not short-term investors. That means we care deeply about the homes we manage and the residents who live in them. Our approach is hands-on, responsive, and focused on maintaining a consistently high standard across every property.
          </p>
        </div>
        <div className="md:col-span-2 relative min-h-[40vh] md:min-h-[70vh] order-1 md:order-2">
          <Image
            src="/images/decor-5.png"
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
      </section>

      {/* Tagline + Contact — dark band, logo and form */}
      <section className="py-20 md:py-28 bg-[var(--color-dark)]">
        <div className="container-main max-w-2xl text-center">
          <Image
            src="/images/logo.png"
            alt=""
            width={140}
            height={42}
            className="mx-auto h-8 w-auto opacity-90"
          />
          <p className="text-white/90 text-lg md:text-xl font-light tracking-wide mt-8 mb-2">
            Rental living that is intentional, refined, and professionally managed.
          </p>
          <p className="text-white/80 text-base font-medium tracking-wide mb-14">
            Lux Living Within Reach
          </p>
          <h2 id="contact-heading" className="text-white text-sm font-light uppercase tracking-[0.2em] mb-1">
            Get in touch
          </h2>
          <p className="text-white/60 text-sm mb-8">
            Send us a message and we&apos;ll respond as soon as we can.
          </p>
          <noscript>
            <p className="text-white/50 text-sm mb-4">
              Please enable JavaScript in your browser to complete this form.
            </p>
          </noscript>
          <div className="bg-white p-8 md:p-10 text-left shadow-xl max-w-lg mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

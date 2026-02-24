import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background - gradient (video optional; can use static image instead) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #1a1a1a 0%, #333 50%, #1a1a1a 100%)",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />

        {/* Centered content */}
        <div className="relative z-10 text-center px-4 flex flex-col items-center justify-center py-24">
          <div className="hero-logo-in mb-8">
            <Image
              src="/images/logo-white.png"
              alt="Lux Properties Inc"
              width={320}
              height={120}
              priority
              className="mx-auto w-[200px] md:w-[280px] lg:w-[320px] h-auto"
            />
          </div>
          <h1 className="heading-xl uppercase text-white tracking-[0.2em] mb-4 delay-100 opacity-0 animate-fade-in">
            Offering Long Term Rentals
          </h1>
          <p className="text-white/90 font-light text-lg md:text-xl tracking-wide mb-6 delay-200 opacity-0 animate-fade-in max-w-xl">
            Lux Properties a division of Lux Homes Design & Build
          </p>
          <p className="text-white/80 font-light text-sm uppercase tracking-[0.15em] delay-300 opacity-0 animate-fade-in">
            More information coming soon.
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 hero-scroll-bounce">
          <span className="text-[10px] tracking-[0.3em] uppercase mb-3">
            scroll down
          </span>
          <div className="flex flex-col items-center gap-1.5">
            <span className="w-px h-2 bg-gray-500" />
            <span className="w-px h-2 bg-gray-500" />
            <span className="w-px h-2 bg-gray-400" />
            <span className="w-px h-3 bg-gray-400" />
          </div>
        </div>
      </section>
    </main>
  );
}

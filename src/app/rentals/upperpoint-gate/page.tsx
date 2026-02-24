import Link from "next/link";

export default function UpperpointGatePage() {
  return (
    <main className="min-h-screen bg-white pt-16">
      <div className="container-main py-12 md:py-16 lg:py-20">
        <Link
          href="/"
          className="inline-block text-xs uppercase tracking-[0.2em] text-gray-500 hover:text-black transition-colors mb-8 md:mb-10"
        >
          ← Back to Home
        </Link>
        <h1 className="heading-xl uppercase text-[var(--color-dark)] tracking-[0.15em] mb-6">
          Upperpoint Gate
        </h1>
        <p className="body-text text-gray-600 max-w-xl">
          More information coming soon.
        </p>
      </div>
    </main>
  );
}

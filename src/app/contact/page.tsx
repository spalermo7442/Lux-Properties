import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-16">
      {/* Hero / Banner */}
      <section className="relative h-[280px] md:h-[340px] w-full bg-[var(--color-dark)] flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-black/35 flex flex-col items-center justify-center">
          <h1 className="heading-xl uppercase text-white tracking-[0.2em]">
            Contact
          </h1>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-16 md:py-20 lg:py-24 bg-[var(--color-gray-bg)]">
        <div className="container-main max-w-2xl">
          <h2 className="heading-lg uppercase text-center mb-2">
            Get in Touch
          </h2>
          <p className="body-text text-gray-600 text-center mb-8">
            Send us a message and we&apos;ll respond as soon as we can.
          </p>
          <div className="bg-white border border-gray-200 rounded-sm p-8 md:p-10 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

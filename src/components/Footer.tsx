import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-dark)] text-white py-8 md:py-10">
      <div className="container-main flex flex-col items-center">
        <Link href="/" className="mb-4">
          <Image
            src="/images/logo.png"
            alt="Lux Properties"
            width={120}
            height={40}
            className="mx-auto h-8 w-auto"
          />
        </Link>
        <p className="text-white/60 text-xs font-light text-center tracking-wide mb-2">
          A division of Lux Homes Design & Build · London, Ontario
        </p>
        <div className="w-full border-t border-white/10 pt-4">
          <p className="text-white/50 text-xs font-light text-center tracking-wide">
            © {currentYear} Lux Properties. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

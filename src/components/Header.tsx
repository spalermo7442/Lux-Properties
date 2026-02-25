"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const rentalsLinks = [
  { href: "/rentals/upperpoint-gate", label: "Upperpoint Gate" },
  { href: "/rentals/north-london", label: "North London" },
  { href: "https://stratustowns.ca/", label: "Stratus", external: true },
];

export default function Header() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRentalsDropdownOpen, setIsRentalsDropdownOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const mobileMenuContent = isMobileMenuOpen && (
    <div
      className="fixed inset-0 z-[9999] bg-[#0a0a0a] md:hidden"
      aria-modal="true"
      role="dialog"
      aria-label="Menu"
    >
      <div className="flex justify-end pt-6 pr-6">
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="p-2 -m-2 text-white/80 hover:text-white"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>
      <nav className="flex flex-col items-center justify-center -mt-16 h-full gap-8">
        <Link
          href="/"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-sm uppercase tracking-[0.2em] font-medium text-white/90 hover:text-white"
        >
          Home
        </Link>
        <div className="flex flex-col items-center gap-4">
          <span className="text-sm uppercase tracking-[0.2em] font-medium text-white/50">
            Rentals
          </span>
          {rentalsLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.2em] font-medium text-white/90 hover:text-white"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.2em] font-medium text-white/90 hover:text-white"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
        <Link
          href="/contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-sm uppercase tracking-[0.2em] font-medium text-white/90 hover:text-white"
        >
          Contact
        </Link>
      </nav>
    </div>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] border-b border-white/10">
      <div className="container-main flex items-center justify-between h-16">
        <Link href="/" className="relative z-10 flex items-center">
          <Image
            src="/images/logo.png"
            alt="Lux Properties"
            width={200}
            height={60}
            className="h-10 md:h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          <Link
            href="/"
            className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/80 hover:text-white transition-colors"
          >
            Home
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setIsRentalsDropdownOpen(true)}
            onMouseLeave={() => setIsRentalsDropdownOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.2em] font-medium text-white/80 hover:text-white transition-colors"
              aria-expanded={isRentalsDropdownOpen}
              aria-haspopup="true"
            >
              Rentals
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {isRentalsDropdownOpen && (
              <div className="absolute top-full left-0 pt-1">
                <div className="bg-[#0a0a0a] border border-white/10 py-1 min-w-[200px]">
                  {rentalsLinks.map((link) =>
                    link.external ? (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2.5 text-[11px] uppercase tracking-[0.15em] font-medium text-white/90 hover:bg-white/5 hover:text-white"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2.5 text-[11px] uppercase tracking-[0.15em] font-medium text-white/90 hover:bg-white/5 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
          <Link
            href="/contact"
            className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/80 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </nav>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative z-10 p-1 text-white/90 hover:text-white"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {isMounted && createPortal(mobileMenuContent, document.body)}
      </div>
    </header>
  );
}

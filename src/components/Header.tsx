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
];

export default function Header() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRentalsDropdownOpen, setIsRentalsDropdownOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isSolidHeader =
    isScrolled ||
    pathname === "/contact" ||
    pathname?.startsWith("/rentals");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      className="fixed inset-0 z-[9999] bg-white md:hidden"
      style={{ backgroundColor: "#ffffff" }}
      aria-modal="true"
      role="dialog"
      aria-label="Menu"
    >
      <div className="flex justify-end pt-6 pr-6">
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="p-2 -m-2 text-gray-700 hover:text-black"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>
      <nav className="flex flex-col items-center justify-center -mt-16 h-full gap-8">
        <Link
          href="/"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-lg uppercase tracking-[0.2em] font-light text-gray-700 hover:text-black"
        >
          Home
        </Link>
        <div className="flex flex-col items-center gap-4">
          <span className="text-lg uppercase tracking-[0.2em] font-light text-gray-400">
            Rentals
          </span>
          {rentalsLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg uppercase tracking-[0.2em] font-light text-gray-700 hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href="/contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-lg uppercase tracking-[0.2em] font-light text-gray-700 hover:text-black"
        >
          Contact
        </Link>
      </nav>
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolidHeader
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-main flex items-center justify-between">
        <Link
          href="/"
          className={`relative z-10 transition-opacity duration-300 ${isSolidHeader ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <Image
            src="/images/logo-black.png"
            alt="Lux Properties Inc"
            width={140}
            height={45}
            className="h-8 md:h-9 w-auto"
            priority
          />
        </Link>

        {/* Transparent-state logo (visible when not solid) */}
        <Link
          href="/"
          className={`absolute left-0 right-0 flex justify-center transition-opacity duration-300 ${isSolidHeader ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          aria-hidden={isSolidHeader}
        >
          <Image
            src="/images/logo-white.png"
            alt="Lux Properties"
            width={140}
            height={45}
            className="h-8 md:h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          <Link
            href="/"
            className={`text-xs uppercase tracking-[0.15em] font-medium transition-colors ${
              isSolidHeader
                ? "text-black hover:text-gray-600"
                : "text-white hover:text-gray-200"
            }`}
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
              className={`inline-flex items-center gap-1 text-xs uppercase tracking-[0.15em] font-medium transition-colors ${
                isSolidHeader
                  ? "text-black hover:text-gray-600"
                  : "text-white hover:text-gray-200"
              }`}
              aria-expanded={isRentalsDropdownOpen}
              aria-haspopup="true"
            >
              Rentals
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {isRentalsDropdownOpen && (
              <div className="absolute top-full left-0 pt-1">
                <div className="bg-white rounded shadow-lg border border-gray-200 py-1 min-w-[180px]">
                  {rentalsLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-xs uppercase tracking-[0.15em] font-medium text-gray-800 hover:bg-gray-100"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link
            href="/contact"
            className={`text-xs uppercase tracking-[0.15em] font-medium transition-colors ${
              isSolidHeader
                ? "text-black hover:text-gray-600"
                : "text-white hover:text-gray-200"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden relative z-10 p-1 ${isSolidHeader ? "text-black" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {isMounted && createPortal(mobileMenuContent, document.body)}
      </div>
    </header>
  );
}

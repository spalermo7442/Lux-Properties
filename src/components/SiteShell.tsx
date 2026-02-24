"use client";

import Header from "./Header";
import Footer from "./Footer";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:outline focus:outline-2 focus:outline-offset-2"
      >
        Skip to content
      </a>
      <Header />
      {children}
      <Footer />
    </>
  );
}

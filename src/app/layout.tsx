import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import SiteShell from "@/components/SiteShell";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lux Properties | Lux Living Within Reach",
  description:
    "Professionally managed rentals in London, Ontario. Thoughtfully designed homes for modern living — a division of Lux Homes Design & Build.",
  keywords: ["rentals", "London Ontario", "Lux Properties", "townhomes", "Stratus", "Lux Homes"],
  openGraph: {
    title: "Lux Properties | Lux Living Within Reach",
    description: "Thoughtfully designed homes for modern living. London, Ontario.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}

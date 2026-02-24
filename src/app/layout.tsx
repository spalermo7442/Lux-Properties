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
  title: "Lux Properties Inc | Long Term Rentals",
  description:
    "Lux Properties Inc — offering long term rentals. A division of Lux Homes Design & Build.",
  keywords: ["rentals", "long term rentals", "Lux Properties", "London Ontario"],
  openGraph: {
    title: "Lux Properties Inc",
    description: "Offering long term rentals. A division of Lux Homes Design & Build.",
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

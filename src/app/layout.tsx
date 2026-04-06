import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "PortaFindNE — Porta Potty Rentals in CT, RI & MA",
  description: "Find and compare porta potty rental vendors in Connecticut, Rhode Island, and Massachusetts. Filter by price, ratings, and city.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-gray-900 font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

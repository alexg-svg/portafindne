import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PortaFind NE – Porta Potty Marketplace for New England",
  description:
    "Find and compare portable restroom rental vendors in Connecticut, Rhode Island, and Massachusetts. Browse reviews, pricing, and services.",
  keywords:
    "porta potty rental, portable restroom, New England, Connecticut, Rhode Island, Massachusetts, CT, RI, MA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tight hover:text-blue-200 transition-colors"
          >
            PortaFind NE
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              href="/vendors?state=CT"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors"
            >
              Browse CT
            </Link>
            <Link
              href="/vendors?state=RI"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors"
            >
              Browse RI
            </Link>
            <Link
              href="/vendors?state=MA"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors"
            >
              Browse MA
            </Link>
            <Link
              href="/vendors"
              className="ml-2 px-4 py-2 bg-white text-blue-700 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors"
            >
              Browse All
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-blue-600 transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-0.5 bg-white mb-1"></span>
            <span className="block w-5 h-0.5 bg-white mb-1"></span>
            <span className="block w-5 h-0.5 bg-white"></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-800 px-4 pb-4 flex flex-col gap-1">
          <Link
            href="/vendors?state=CT"
            className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Browse CT
          </Link>
          <Link
            href="/vendors?state=RI"
            className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Browse RI
          </Link>
          <Link
            href="/vendors?state=MA"
            className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Browse MA
          </Link>
          <Link
            href="/vendors"
            className="block px-3 py-2 bg-white text-blue-700 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors text-center"
            onClick={() => setMenuOpen(false)}
          >
            Browse All
          </Link>
        </div>
      )}
    </nav>
  );
}

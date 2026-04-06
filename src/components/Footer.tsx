import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🚽</span>
              <div>
                <span className="font-black text-white text-xl">PortaFind</span>
                <span className="font-black text-green-400 text-xl"> NE</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              The #1 marketplace for portable restroom rentals across Connecticut, Rhode Island, and
              Massachusetts. Find the right vendor for any event or project.
            </p>
          </div>

          {/* Browse by State */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">
              Browse by State
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/vendors?state=CT" className="hover:text-white transition-colors">
                  Connecticut Vendors
                </Link>
              </li>
              <li>
                <Link href="/vendors?state=RI" className="hover:text-white transition-colors">
                  Rhode Island Vendors
                </Link>
              </li>
              <li>
                <Link href="/vendors?state=MA" className="hover:text-white transition-colors">
                  Massachusetts Vendors
                </Link>
              </li>
            </ul>
          </div>

          {/* Browse by Service */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">
              Browse by Service
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/vendors?service=Standard"
                  className="hover:text-white transition-colors"
                >
                  Standard Units
                </Link>
              </li>
              <li>
                <Link href="/vendors?service=Luxury" className="hover:text-white transition-colors">
                  Luxury Trailers
                </Link>
              </li>
              <li>
                <Link
                  href="/vendors?service=ADA+Accessible"
                  className="hover:text-white transition-colors"
                >
                  ADA Accessible
                </Link>
              </li>
              <li>
                <Link
                  href="/vendors?service=Construction+%26+Long-term"
                  className="hover:text-white transition-colors"
                >
                  Construction & Long-term
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© {new Date().getFullYear()} PortaFind NE. All rights reserved.</p>
          <p>Serving Connecticut · Rhode Island · Massachusetts</p>
        </div>
      </div>
    </footer>
  );
}

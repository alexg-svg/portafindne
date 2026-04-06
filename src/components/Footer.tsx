import Link from "next/link";

const serviceTypes = [
  "Standard",
  "Deluxe",
  "ADA Accessible",
  "Luxury",
  "Construction & Long-term",
] as const;

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div>
            <h2 className="text-white text-xl font-extrabold mb-3">
              PortaFind NE
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              The marketplace for portable restroom rentals in New England.
              Compare vendors, read real reviews, and find the best porta potty
              service in CT, RI, and MA.
            </p>
          </div>

          {/* Browse by state */}
          <div>
            <h3 className="text-white font-semibold mb-3">Browse by State</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/vendors?state=CT"
                  className="hover:text-white transition-colors"
                >
                  Connecticut Vendors
                </Link>
              </li>
              <li>
                <Link
                  href="/vendors?state=RI"
                  className="hover:text-white transition-colors"
                >
                  Rhode Island Vendors
                </Link>
              </li>
              <li>
                <Link
                  href="/vendors?state=MA"
                  className="hover:text-white transition-colors"
                >
                  Massachusetts Vendors
                </Link>
              </li>
              <li>
                <Link
                  href="/vendors"
                  className="hover:text-white transition-colors"
                >
                  All Vendors
                </Link>
              </li>
            </ul>
          </div>

          {/* Browse by service */}
          <div>
            <h3 className="text-white font-semibold mb-3">Browse by Service</h3>
            <ul className="space-y-2 text-sm">
              {serviceTypes.map((service) => (
                <li key={service}>
                  <Link
                    href={`/vendors?service=${encodeURIComponent(service)}`}
                    className="hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} PortaFind NE. All rights reserved.
          &nbsp;&mdash;&nbsp; Serving Connecticut, Rhode Island &amp;
          Massachusetts.
        </div>
      </div>
    </footer>
  );
}

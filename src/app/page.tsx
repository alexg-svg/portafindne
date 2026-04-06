import Link from "next/link";
import { getFeaturedVendors, vendors } from "@/lib/data";
import VendorCard from "@/components/VendorCard";

export default function HomePage() {
  const featuredVendors = getFeaturedVendors();
  const totalVendors = vendors.length;
  const ctCount = vendors.filter((v) => v.state === "CT").length;
  const riCount = vendors.filter((v) => v.state === "RI").length;
  const maCount = vendors.filter((v) => v.state === "MA").length;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">🚽</div>
          <div className="absolute bottom-10 right-16 text-8xl">🚽</div>
          <div className="absolute top-1/2 left-1/3 text-7xl -translate-y-1/2">🚽</div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <span className="text-green-300">●</span>
              Serving CT, RI &amp; MA
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 leading-tight">
              Find Porta Potties{" "}
              <span className="text-green-300">in New England</span>
            </h1>
            <p className="text-blue-100 text-lg sm:text-xl mb-8 max-w-xl leading-relaxed">
              Browse and compare portable restroom rental vendors across Connecticut, Rhode Island,
              and Massachusetts. Get quotes, read reviews, and book with confidence.
            </p>

            {/* Search Bar */}
            <form
              action="/vendors"
              method="GET"
              className="flex flex-col sm:flex-row gap-3 max-w-xl"
            >
              <input
                type="text"
                name="search"
                placeholder="Search by city, state, or company name..."
                className="flex-1 px-5 py-3.5 rounded-xl text-gray-900 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-green-400 shadow-lg"
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-bold px-7 py-3.5 rounded-xl transition-colors shadow-lg text-base whitespace-nowrap"
              >
                Search Vendors
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-center">
            <div>
              <span className="text-blue-800 font-black text-2xl">{totalVendors}+</span>
              <p className="text-gray-500 text-xs mt-0.5 font-medium uppercase tracking-wide">Verified Vendors</p>
            </div>
            <div className="w-px bg-gray-200 hidden sm:block" />
            <div>
              <span className="text-blue-800 font-black text-2xl">3</span>
              <p className="text-gray-500 text-xs mt-0.5 font-medium uppercase tracking-wide">States Covered</p>
            </div>
            <div className="w-px bg-gray-200 hidden sm:block" />
            <div>
              <span className="text-blue-800 font-black text-2xl">5</span>
              <p className="text-gray-500 text-xs mt-0.5 font-medium uppercase tracking-wide">Service Types</p>
            </div>
            <div className="w-px bg-gray-200 hidden sm:block" />
            <div>
              <span className="text-blue-800 font-black text-2xl">1,000+</span>
              <p className="text-gray-500 text-xs mt-0.5 font-medium uppercase tracking-wide">Customer Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* State Filter Buttons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Browse by State</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/vendors?state=CT"
            className="group bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-400 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <span className="text-4xl mb-3">🏛️</span>
            <span className="font-bold text-gray-900 text-lg group-hover:text-blue-800">Connecticut</span>
            <span className="text-blue-600 font-semibold text-sm mt-1">{ctCount} vendors</span>
            <span className="text-gray-400 text-xs mt-1">Hartford · New Haven · Stamford</span>
          </Link>
          <Link
            href="/vendors?state=RI"
            className="group bg-white hover:bg-green-50 border border-gray-200 hover:border-green-400 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <span className="text-4xl mb-3">⚓</span>
            <span className="font-bold text-gray-900 text-lg group-hover:text-green-800">Rhode Island</span>
            <span className="text-green-600 font-semibold text-sm mt-1">{riCount} vendors</span>
            <span className="text-gray-400 text-xs mt-1">Providence · Newport · Warwick</span>
          </Link>
          <Link
            href="/vendors?state=MA"
            className="group bg-white hover:bg-red-50 border border-gray-200 hover:border-red-300 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <span className="text-4xl mb-3">🦞</span>
            <span className="font-bold text-gray-900 text-lg group-hover:text-red-800">Massachusetts</span>
            <span className="text-red-600 font-semibold text-sm mt-1">{maCount} vendors</span>
            <span className="text-gray-400 text-xs mt-1">Boston · Worcester · Springfield</span>
          </Link>
        </div>
      </section>

      {/* Featured Vendors */}
      <section className="bg-white border-t border-b border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Featured Vendors</h2>
              <p className="text-gray-500 mt-1 text-sm">Top-rated portable restroom providers across New England</p>
            </div>
            <Link
              href="/vendors"
              className="text-blue-700 hover:text-blue-900 font-semibold text-sm hidden sm:flex items-center gap-1"
            >
              View all vendors <span className="text-lg">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredVendors.map((vendor) => (
              <VendorCard key={vendor.id} vendor={vendor} featured />
            ))}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <Link
              href="/vendors"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              View All Vendors
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">How PortaFind NE Works</h2>
        <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
          Finding a reliable porta potty vendor in New England has never been easier.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              step: "1",
              icon: "🔍",
              title: "Search & Filter",
              desc: "Browse vendors by state, price range, or service type. Use our search to find vendors in your city.",
            },
            {
              step: "2",
              icon: "⭐",
              title: "Read Reviews",
              desc: "Compare ratings and read real customer reviews to find the best vendor for your needs.",
            },
            {
              step: "3",
              icon: "📞",
              title: "Get a Quote",
              desc: "Contact your chosen vendor directly to get a custom quote and schedule your delivery.",
            },
          ].map(({ step, icon, title, desc }) => (
            <div key={step} className="bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4">
                {icon}
              </div>
              <div className="inline-block bg-blue-700 text-white text-xs font-bold px-2.5 py-0.5 rounded-full mb-3">
                Step {step}
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service Types */}
      <section className="bg-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-2 text-center">All Service Types</h2>
          <p className="text-blue-200 text-center mb-8 text-sm">Whatever your needs, we have vendors who specialize in it.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Standard Units", href: "/vendors?service=Standard" },
              { label: "Deluxe Units", href: "/vendors?service=Deluxe" },
              { label: "ADA Accessible", href: "/vendors?service=ADA+Accessible" },
              { label: "Luxury Trailers", href: "/vendors?service=Luxury" },
              { label: "Construction & Long-term", href: "/vendors?service=Construction+%26+Long-term" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium px-5 py-2.5 rounded-full transition-colors text-sm"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

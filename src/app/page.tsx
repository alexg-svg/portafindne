import Link from "next/link";
import { getFeaturedVendors, getAllVendors } from "@/lib/data";
import VendorCard from "@/components/VendorCard";

const stateInfo = [
  {
    state: "CT",
    name: "Connecticut",
    emoji: "🏛️",
    bg: "bg-blue-50 border-blue-200",
    text: "text-blue-800",
  },
  {
    state: "RI",
    name: "Rhode Island",
    emoji: "⚓",
    bg: "bg-teal-50 border-teal-200",
    text: "text-teal-800",
  },
  {
    state: "MA",
    name: "Massachusetts",
    emoji: "🦞",
    bg: "bg-red-50 border-red-200",
    text: "text-red-800",
  },
];

const serviceTypes = [
  { name: "Standard", icon: "🚽" },
  { name: "Deluxe", icon: "✨" },
  { name: "ADA Accessible", icon: "♿" },
  { name: "Luxury", icon: "👑" },
  { name: "Construction & Long-term", icon: "🏗️" },
];

const steps = [
  {
    number: "1",
    title: "Search",
    description: "Enter your location or browse by state to find vendors near you.",
  },
  {
    number: "2",
    title: "Compare",
    description: "Read reviews, compare pricing, and evaluate service offerings side by side.",
  },
  {
    number: "3",
    title: "Book",
    description: "Contact your chosen vendor directly to get a quote and schedule delivery.",
  },
];

export default function HomePage() {
  const featuredVendors = getFeaturedVendors();
  const allVendors = getAllVendors();
  const ctCount = allVendors.filter((v) => v.state === "CT").length;
  const riCount = allVendors.filter((v) => v.state === "RI").length;
  const maCount = allVendors.filter((v) => v.state === "MA").length;

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            Find Porta Potties in New England
          </h1>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Compare vendors, read reviews, and get the best price in CT, RI &amp; MA.
          </p>

          {/* Search bar */}
          <form
            action="/vendors"
            method="get"
            className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-6"
          >
            <input
              name="search"
              type="text"
              placeholder="Search by city or vendor name..."
              className="flex-1 px-4 py-3 rounded-xl text-slate-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="submit"
              className="bg-amber-400 hover:bg-amber-500 text-blue-900 font-bold px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
            >
              Search
            </button>
          </form>

          <Link
            href="/vendors"
            className="inline-block bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
          >
            Browse All Vendors
          </Link>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-blue-700 text-white py-4">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: "20+", label: "Vendors" },
            { value: "3", label: "States" },
            { value: "5", label: "Service Types" },
            { value: "CT, RI & MA", label: "Serving" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-extrabold">{stat.value}</div>
              <div className="text-blue-200 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* State cards */}
        <section className="py-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Browse by State
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stateInfo.map((info) => {
              const count =
                info.state === "CT"
                  ? ctCount
                  : info.state === "RI"
                  ? riCount
                  : maCount;
              return (
                <Link
                  key={info.state}
                  href={`/vendors?state=${info.state}`}
                  className={`block rounded-xl border-2 ${info.bg} p-6 text-center hover:shadow-md transition-shadow`}
                >
                  <div className="text-4xl mb-2">{info.emoji}</div>
                  <div className={`text-xl font-bold ${info.text}`}>
                    {info.name}
                  </div>
                  <div className="text-slate-600 text-sm mt-1">
                    {count} vendors available
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Featured vendors */}
        <section className="py-12 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Featured Vendors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredVendors.map((vendor) => (
              <VendorCard key={vendor.id} vendor={vendor} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/vendors"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              View All Vendors
            </Link>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-12 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Service types */}
        <section className="py-12 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Browse by Service Type
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceTypes.map((svc) => (
              <Link
                key={svc.name}
                href={`/vendors?service=${encodeURIComponent(svc.name)}`}
                className="flex items-center gap-2 bg-white border border-slate-200 hover:border-blue-400 hover:bg-blue-50 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:text-blue-700 transition-colors shadow-sm"
              >
                <span>{svc.icon}</span>
                <span>{svc.name}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

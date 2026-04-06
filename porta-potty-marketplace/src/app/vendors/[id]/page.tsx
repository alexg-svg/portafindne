import { notFound } from "next/navigation";
import Link from "next/link";
import { getVendorById, vendors } from "@/lib/data";
import StarRating from "@/components/StarRating";
import PriceRange from "@/components/PriceRange";
import type { Metadata } from "next";

interface VendorDetailPageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return vendors.map((vendor) => ({
    id: vendor.id,
  }));
}

export async function generateMetadata({ params }: VendorDetailPageProps): Promise<Metadata> {
  const vendor = getVendorById(params.id);
  if (!vendor) return { title: "Vendor Not Found" };
  return {
    title: `${vendor.name} – ${vendor.city}, ${vendor.state} | PortaFind NE`,
    description: vendor.description.slice(0, 155),
  };
}

const stateFullNames: Record<string, string> = {
  CT: "Connecticut",
  RI: "Rhode Island",
  MA: "Massachusetts",
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function VendorDetailPage({ params }: VendorDetailPageProps) {
  const vendor = getVendorById(params.id);

  if (!vendor) {
    notFound();
  }

  const averageRating =
    vendor.reviews.reduce((sum, r) => sum + r.rating, 0) / vendor.reviews.length || vendor.rating;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <Link
        href="/vendors"
        className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium mb-6 group"
      >
        <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
        Back to all vendors
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Vendor Header Card */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center text-3xl shrink-0">
                {vendor.logo}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start gap-2 mb-1">
                  <h1 className="text-2xl font-black text-gray-900">{vendor.name}</h1>
                  {vendor.featured && (
                    <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-1 rounded-full border border-blue-200 shrink-0">
                      ⭐ Featured
                    </span>
                  )}
                </div>
                <p className="text-gray-500 font-medium">
                  {vendor.city}, {stateFullNames[vendor.state]}
                </p>
              </div>
            </div>

            {/* Rating & Price Row */}
            <div className="flex flex-wrap items-center gap-4 pb-5 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <StarRating rating={vendor.rating} size="lg" />
                <span className="font-bold text-gray-900 text-lg">{vendor.rating.toFixed(1)}</span>
                <span className="text-gray-400 text-sm">({vendor.reviewCount} reviews)</span>
              </div>
              <PriceRange priceRange={vendor.priceRange} size="md" />
              <span className="text-gray-400 text-sm">·</span>
              <span className="text-gray-600 text-sm">
                <span className="font-semibold">{vendor.yearsInBusiness}</span> years in business
              </span>
            </div>

            {/* About */}
            <div className="pt-5">
              <h2 className="font-bold text-gray-900 mb-2 text-lg">About</h2>
              <p className="text-gray-600 leading-relaxed">{vendor.description}</p>
            </div>
          </div>

          {/* Services Card */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <h2 className="font-bold text-gray-900 mb-4 text-lg">Services Offered</h2>
            <div className="flex flex-wrap gap-2">
              {vendor.services.map((service) => (
                <span
                  key={service}
                  className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-800 border border-blue-200 px-4 py-2 rounded-xl font-medium text-sm"
                >
                  <span className="text-blue-500">✓</span>
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Reviews Section */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-bold text-gray-900 text-lg">Customer Reviews</h2>
              <div className="flex items-center gap-2">
                <StarRating rating={averageRating} size="sm" />
                <span className="text-sm text-gray-500">{vendor.reviewCount} total</span>
              </div>
            </div>

            {vendor.reviews.length > 0 ? (
              <div className="space-y-4">
                {vendor.reviews.map((review, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 rounded-xl border border-gray-100 p-4"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm shrink-0">
                          {review.author.charAt(0)}
                        </div>
                        <span className="font-semibold text-gray-900 text-sm">{review.author}</span>
                      </div>
                      <span className="text-gray-400 text-xs shrink-0">{formatDate(review.date)}</span>
                    </div>
                    <StarRating rating={review.rating} size="sm" />
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed">{review.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-sm">No reviews yet.</p>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Contact Card */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sticky top-24">
            <h2 className="font-bold text-gray-900 mb-4 text-lg">Contact</h2>

            <div className="space-y-3 mb-6">
              {/* Phone */}
              <a
                href={`tel:${vendor.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-3 text-gray-700 hover:text-blue-700 group"
              >
                <span className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-100 transition-colors">
                  📞
                </span>
                <span className="font-medium text-sm">{vendor.phone}</span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${vendor.email}`}
                className="flex items-center gap-3 text-gray-700 hover:text-blue-700 group"
              >
                <span className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-100 transition-colors">
                  ✉️
                </span>
                <span className="font-medium text-sm truncate">{vendor.email}</span>
              </a>

              {/* Website */}
              <a
                href={vendor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-blue-700 group"
              >
                <span className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-100 transition-colors">
                  🌐
                </span>
                <span className="font-medium text-sm truncate">Visit Website</span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 text-gray-700">
                <span className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500">
                  📍
                </span>
                <span className="font-medium text-sm">
                  {vendor.city}, {stateFullNames[vendor.state]}
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-2.5">
              <a
                href={`tel:${vendor.phone.replace(/\D/g, "")}`}
                className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition-colors text-sm shadow-sm"
              >
                📞 Call for a Quote
              </a>
              <a
                href={`mailto:${vendor.email}?subject=Quote Request – PortaFind NE&body=Hi, I found your listing on PortaFind NE and would like to request a quote.`}
                className="block w-full text-center bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-xl transition-colors text-sm shadow-sm"
              >
                ✉️ Email for a Quote
              </a>
              <a
                href={vendor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 rounded-xl border border-gray-200 transition-colors text-sm"
              >
                Visit Website →
              </a>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <h2 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Quick Facts</h2>
            <dl className="space-y-3">
              <div className="flex justify-between text-sm">
                <dt className="text-gray-500">State</dt>
                <dd className="font-semibold text-gray-900">{stateFullNames[vendor.state]}</dd>
              </div>
              <div className="flex justify-between text-sm">
                <dt className="text-gray-500">City</dt>
                <dd className="font-semibold text-gray-900">{vendor.city}</dd>
              </div>
              <div className="flex justify-between text-sm">
                <dt className="text-gray-500">Price Range</dt>
                <dd className="font-semibold text-gray-900">{vendor.priceRange}</dd>
              </div>
              <div className="flex justify-between text-sm">
                <dt className="text-gray-500">Rating</dt>
                <dd className="font-semibold text-gray-900">{vendor.rating.toFixed(1)} / 5.0</dd>
              </div>
              <div className="flex justify-between text-sm">
                <dt className="text-gray-500">Reviews</dt>
                <dd className="font-semibold text-gray-900">{vendor.reviewCount}</dd>
              </div>
              <div className="flex justify-between text-sm">
                <dt className="text-gray-500">In Business</dt>
                <dd className="font-semibold text-gray-900">{vendor.yearsInBusiness} years</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

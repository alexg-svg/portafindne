import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllVendors, getVendorById } from "@/lib/data";
import StarRating from "@/components/StarRating";
import PriceRange from "@/components/PriceRange";

interface VendorDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const vendors = getAllVendors();
  return vendors.map((v) => ({ id: v.id }));
}

export default async function VendorDetailPage({ params }: VendorDetailPageProps) {
  const { id } = await params;
  const vendor = getVendorById(id);

  if (!vendor) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Back button */}
      <Link
        href="/vendors"
        className="inline-flex items-center gap-1.5 text-blue-700 hover:underline text-sm font-medium mb-6"
      >
        &larr; Back to Vendors
      </Link>

      {/* Header */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 mb-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 leading-tight">
              {vendor.name}
            </h1>
            <p className="text-slate-500 mt-1 text-lg">
              {vendor.city}, {vendor.state}
            </p>
          </div>
          {vendor.featured && (
            <span className="shrink-0 bg-amber-100 text-amber-800 text-sm font-semibold px-3 py-1.5 rounded-full border border-amber-200">
              Featured
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-4 mb-5">
          <StarRating rating={vendor.rating} size="lg" />
          <span className="text-slate-500 text-sm">
            ({vendor.reviewCount} reviews)
          </span>
          <PriceRange price={vendor.priceRange} />
        </div>

        {/* Contact info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mb-5">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">📞</span>
            <a
              href={`tel:${vendor.phone.replace(/\D/g, "")}`}
              className="text-blue-700 hover:underline font-medium"
            >
              {vendor.phone}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-400">✉️</span>
            <a
              href={`mailto:${vendor.email}`}
              className="text-blue-700 hover:underline"
            >
              {vendor.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-400">🌐</span>
            <a
              href={vendor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline truncate"
            >
              {vendor.website.replace("https://", "")}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-400">📍</span>
            <span className="text-slate-700">
              {vendor.city},{" "}
              {vendor.state === "CT"
                ? "Connecticut"
                : vendor.state === "RI"
                ? "Rhode Island"
                : "Massachusetts"}
            </span>
          </div>
        </div>

        {/* Services */}
        <div className="mb-5">
          <h2 className="text-sm font-semibold text-slate-700 mb-2">
            Services Offered
          </h2>
          <div className="flex flex-wrap gap-2">
            {vendor.services.map((service) => (
              <span
                key={service}
                className="bg-slate-100 text-slate-700 border border-slate-200 text-sm px-3 py-1 rounded-full"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <a
          href={`tel:${vendor.phone.replace(/\D/g, "")}`}
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl transition-colors"
        >
          📞 Request a Quote
        </a>
      </div>

      {/* About */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 mb-6">
        <h2 className="text-xl font-bold text-slate-900 mb-3">About</h2>
        <p className="text-slate-600 leading-relaxed">{vendor.description}</p>
      </div>

      {/* Quick facts */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 mb-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Quick Facts</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="text-center bg-slate-50 rounded-lg p-4">
            <div className="text-2xl font-extrabold text-blue-700">
              {vendor.yearsInBusiness}
            </div>
            <div className="text-xs text-slate-500 mt-1">Years in Business</div>
          </div>
          <div className="text-center bg-slate-50 rounded-lg p-4">
            <div className="text-2xl font-extrabold text-blue-700">
              {vendor.reviewCount}
            </div>
            <div className="text-xs text-slate-500 mt-1">Reviews</div>
          </div>
          <div className="text-center bg-slate-50 rounded-lg p-4">
            <div className="text-2xl font-extrabold text-blue-700">
              {vendor.services.length}
            </div>
            <div className="text-xs text-slate-500 mt-1">Service Types</div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-5">
          Customer Reviews
        </h2>
        <div className="space-y-4">
          {vendor.reviews.map((review, idx) => (
            <div
              key={idx}
              className="border-b border-slate-100 last:border-b-0 pb-4 last:pb-0"
            >
              <div className="flex items-start justify-between gap-2 mb-1">
                <div>
                  <span className="font-semibold text-slate-900 text-sm">
                    {review.author}
                  </span>
                  <span className="text-slate-400 text-xs ml-2">{review.date}</span>
                </div>
                <StarRating rating={review.rating} size="sm" />
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import type { Vendor } from "@/lib/data";
import StarRating from "./StarRating";
import PriceRange from "./PriceRange";

interface VendorCardProps {
  vendor: Vendor;
  featured?: boolean;
}

const stateColors: Record<string, string> = {
  CT: "bg-blue-100 text-blue-800",
  RI: "bg-green-100 text-green-800",
  MA: "bg-red-100 text-red-800",
};

export default function VendorCard({ vendor, featured = false }: VendorCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm border transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 flex flex-col ${
        featured ? "border-blue-200 ring-1 ring-blue-100" : "border-gray-200"
      }`}
    >
      {featured && (
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white text-xs font-semibold px-4 py-1.5 rounded-t-2xl tracking-wide uppercase">
          ⭐ Featured Vendor
        </div>
      )}

      <div className="p-5 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-2xl shrink-0">
            {vendor.logo}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-gray-900 text-lg leading-tight truncate">{vendor.name}</h3>
            <div className="flex items-center gap-2 mt-0.5">
              <span
                className={`text-xs font-semibold px-2 py-0.5 rounded-full ${stateColors[vendor.state]}`}
              >
                {vendor.state}
              </span>
              <span className="text-gray-500 text-sm">{vendor.city}</span>
            </div>
          </div>
        </div>

        {/* Rating & Price */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <StarRating rating={vendor.rating} size="sm" />
            <span className="text-sm text-gray-600">
              <span className="font-semibold text-gray-800">{vendor.rating.toFixed(1)}</span>
              <span className="ml-1">({vendor.reviewCount})</span>
            </span>
          </div>
          <PriceRange priceRange={vendor.priceRange} size="sm" />
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
          {vendor.description}
        </p>

        {/* Services */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {vendor.services.slice(0, 3).map((service) => (
            <span
              key={service}
              className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full border border-gray-200"
            >
              {service}
            </span>
          ))}
          {vendor.services.length > 3 && (
            <span className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full border border-gray-200">
              +{vendor.services.length - 3} more
            </span>
          )}
        </div>

        {/* CTA */}
        <Link
          href={`/vendors/${vendor.id}`}
          className="block w-full text-center bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2.5 rounded-xl transition-colors duration-150 text-sm"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

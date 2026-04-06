import Link from "next/link";
import type { Vendor } from "@/lib/data";
import StarRating from "./StarRating";
import PriceRange from "./PriceRange";

interface VendorCardProps {
  vendor: Vendor;
}

export default function VendorCard({ vendor }: VendorCardProps) {
  const visibleServices = vendor.services.slice(0, 3);
  const extraCount = vendor.services.length - 3;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-slate-900 leading-tight">
            {vendor.name}
          </h3>
          <p className="text-sm text-slate-500 mt-0.5">
            {vendor.city}, {vendor.state}
          </p>
        </div>
        {vendor.featured && (
          <span className="shrink-0 bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-1 rounded-full border border-amber-200">
            Featured
          </span>
        )}
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <StarRating rating={vendor.rating} size="sm" />
        <span className="text-xs text-slate-500">
          ({vendor.reviewCount} reviews)
        </span>
        <PriceRange price={vendor.priceRange} />
      </div>

      <div className="flex flex-wrap gap-1.5">
        {visibleServices.map((service) => (
          <span
            key={service}
            className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full border border-slate-200"
          >
            {service}
          </span>
        ))}
        {extraCount > 0 && (
          <span className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full border border-slate-200">
            +{extraCount} more
          </span>
        )}
      </div>

      <Link
        href={`/vendors/${vendor.id}`}
        className="mt-auto inline-block text-center bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
      >
        View Details
      </Link>
    </div>
  );
}

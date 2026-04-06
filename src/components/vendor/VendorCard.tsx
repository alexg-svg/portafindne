import Link from 'next/link';
import { Vendor } from '@/types';
import Badge from '@/components/ui/Badge';
import StarRating from '@/components/ui/StarRating';
import { formatPriceTier } from '@/lib/utils';

interface VendorCardProps {
  vendor: Vendor;
}

export default function VendorCard({ vendor }: VendorCardProps) {
  return (
    <article className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col">
      <div className="p-5 flex-1">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex flex-wrap gap-1.5">
            <Badge variant="state" stateCode={vendor.state}>{vendor.state}</Badge>
            <Badge variant="price" priceTier={vendor.priceTier}>
              {vendor.priceTier} · {formatPriceTier(vendor.priceTier)}
            </Badge>
            {vendor.featured && <Badge variant="featured">Featured</Badge>}
          </div>
        </div>

        <h2 className="text-lg font-bold text-gray-900 mb-1 leading-snug">{vendor.name}</h2>
        <p className="text-sm text-gray-500 mb-2">
          <svg className="inline w-3.5 h-3.5 mr-1 -mt-0.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {vendor.city}, {vendor.state}
        </p>

        <p className="text-sm text-gray-600 leading-relaxed mb-4">{vendor.description}</p>

        <div className="flex items-center justify-between text-sm">
          <StarRating rating={vendor.rating} showNumber reviewCount={vendor.reviewCount} />
          <span className="font-semibold text-gray-700">{vendor.priceRangeLabel}</span>
        </div>
      </div>

      <div className="px-5 pb-5">
        <Link
          href={`/vendors/${vendor.slug}`}
          className="block w-full text-center bg-blue-600 text-white font-medium py-2.5 rounded-xl hover:bg-blue-700 transition-colors text-sm"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}

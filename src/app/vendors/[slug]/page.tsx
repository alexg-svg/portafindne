import { notFound } from 'next/navigation';
import Link from 'next/link';
import { vendors, getVendorBySlug } from '@/data/vendors';
import Badge from '@/components/ui/Badge';
import StarRating from '@/components/ui/StarRating';
import { formatPriceTier } from '@/lib/utils';
import { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return vendors.map(v => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const vendor = getVendorBySlug(params.slug);
  if (!vendor) return {};
  return {
    title: `${vendor.name} — PortaFindNE`,
    description: vendor.description,
  };
}

export default function VendorDetailPage({ params }: Props) {
  const vendor = getVendorBySlug(params.slug);
  if (!vendor) notFound();

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Link href="/" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 mb-6">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to all vendors
      </Link>

      {/* Header */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-6">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="state" stateCode={vendor.state}>{vendor.state} · {vendor.city}</Badge>
          <Badge variant="price" priceTier={vendor.priceTier}>
            {vendor.priceTier} · {formatPriceTier(vendor.priceTier)}
          </Badge>
          {vendor.featured && <Badge variant="featured">Featured</Badge>}
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">{vendor.name}</h1>

        <div className="flex flex-wrap items-center gap-4 mb-4">
          <StarRating rating={vendor.rating} size="lg" showNumber reviewCount={vendor.reviewCount} />
          <span className="text-xl font-bold text-gray-700">{vendor.priceRangeLabel}</span>
        </div>

        <p className="text-gray-600 leading-relaxed mb-6">{vendor.longDescription}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Phone</p>
            <a href={`tel:${vendor.phone}`} className="text-blue-600 hover:underline font-medium">{vendor.phone}</a>
          </div>
          {vendor.email && (
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Email</p>
              <a href={`mailto:${vendor.email}`} className="text-blue-600 hover:underline font-medium">{vendor.email}</a>
            </div>
          )}
          {vendor.website && (
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Website</p>
              <span className="text-gray-700 font-medium">{vendor.website}</span>
            </div>
          )}
          {vendor.unitCount && (
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Fleet Size</p>
              <p className="text-gray-700 font-medium">{vendor.unitCount}+ units</p>
            </div>
          )}
        </div>
      </div>

      {/* Service area */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-3">Service Area</h2>
        <div className="flex flex-wrap gap-2">
          {vendor.serviceArea.map(area => (
            <span key={area} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{area}</span>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-5">
          Customer Reviews
          <span className="ml-2 text-gray-400 font-normal text-base">({vendor.reviewCount} total)</span>
        </h2>
        <div className="space-y-5">
          {vendor.reviews.map(review => (
            <div key={review.id} className="border-b border-gray-100 last:border-0 pb-5 last:pb-0">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-semibold text-gray-900">{review.author}</span>
                <span className="text-xs text-gray-400">{new Date(review.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <StarRating rating={review.rating} size="sm" />
              <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">{review.body}</p>
            </div>
          ))}
        </div>
        {vendor.reviewCount > vendor.reviews.length && (
          <p className="text-sm text-gray-400 mt-5 text-center">
            + {vendor.reviewCount - vendor.reviews.length} more reviews
          </p>
        )}
      </div>
    </main>
  );
}

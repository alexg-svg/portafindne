import { Suspense } from "react";
import { filterVendors } from "@/lib/data";
import VendorCard from "@/components/VendorCard";
import FilterSidebar from "@/components/FilterSidebar";

interface VendorsPageProps {
  searchParams: {
    state?: string | string[];
    price?: string | string[];
    service?: string | string[];
    search?: string;
  };
}

function toArray(value: string | string[] | undefined): string[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

export default function VendorsPage({ searchParams }: VendorsPageProps) {
  const states = toArray(searchParams.state);
  const prices = toArray(searchParams.price);
  const services = toArray(searchParams.service);
  const search = searchParams.search || "";

  const results = filterVendors({
    states,
    priceRanges: prices,
    services,
    search,
  });

  const hasFilters = states.length > 0 || prices.length > 0 || services.length > 0 || search !== "";

  // Build filter summary labels
  const activeFilters: string[] = [
    ...states,
    ...prices.map((p) => ({ $: "Budget ($)", $$: "Mid-Range ($$)", $$$: "Premium ($$$)" }[p] || p)),
    ...services,
    ...(search ? [`"${search}"`] : []),
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-black text-gray-900">Find Porta Potty Vendors</h1>
        <p className="text-gray-500 mt-1">
          Portable restroom rental companies across Connecticut, Rhode Island, and Massachusetts
        </p>
      </div>

      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2 items-center">
          <span className="text-sm text-gray-500 font-medium">Active filters:</span>
          {activeFilters.map((filter) => (
            <span
              key={filter}
              className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full border border-blue-200"
            >
              {filter}
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="lg:w-64 shrink-0">
          <Suspense fallback={<div className="h-64 bg-white rounded-2xl border border-gray-200 animate-pulse" />}>
            <FilterSidebar />
          </Suspense>
        </div>

        {/* Results */}
        <div className="flex-1 min-w-0">
          {/* Results count */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-gray-700 font-medium">
              <span className="font-bold text-gray-900">{results.length}</span>{" "}
              {results.length === 1 ? "vendor" : "vendors"} found
              {hasFilters && " matching your filters"}
            </p>
            {results.length > 0 && (
              <p className="text-gray-400 text-sm hidden sm:block">Sorted by rating</p>
            )}
          </div>

          {/* Vendor Grid */}
          {results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {results
                .sort((a, b) => b.rating - a.rating)
                .map((vendor) => (
                  <VendorCard key={vendor.id} vendor={vendor} featured={vendor.featured} />
                ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-200">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No vendors found</h3>
              <p className="text-gray-500 mb-6 max-w-sm mx-auto">
                No vendors match your current filters. Try adjusting or clearing your filters to
                see more results.
              </p>
              <a
                href="/vendors"
                className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors"
              >
                Clear All Filters
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

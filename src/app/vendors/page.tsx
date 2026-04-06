import { Suspense } from "react";
import { filterVendors } from "@/lib/data";
import type { State, PriceRange, ServiceType } from "@/lib/data";
import VendorCard from "@/components/VendorCard";
import FilterSidebar from "@/components/FilterSidebar";

interface VendorsPageProps {
  searchParams: Promise<{
    state?: string;
    priceRange?: string;
    service?: string;
    search?: string;
  }>;
}

export default async function VendorsPage({ searchParams }: VendorsPageProps) {
  const params = await searchParams;

  const validStates: State[] = ["CT", "RI", "MA"];
  const validPrices: PriceRange[] = ["$", "$$", "$$$"];
  const validServices: ServiceType[] = [
    "Standard",
    "Deluxe",
    "ADA Accessible",
    "Luxury",
    "Construction & Long-term",
  ];

  const state = validStates.includes(params.state as State)
    ? (params.state as State)
    : undefined;
  const priceRange = validPrices.includes(params.priceRange as PriceRange)
    ? (params.priceRange as PriceRange)
    : undefined;
  const service = validServices.includes(params.service as ServiceType)
    ? (params.service as ServiceType)
    : undefined;
  const search = params.search || undefined;

  const vendors = filterVendors({ state, priceRange, service, search });

  const title = state
    ? `${state === "CT" ? "Connecticut" : state === "RI" ? "Rhode Island" : "Massachusetts"} Vendors`
    : "Browse Vendors";

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-2">{title}</h1>
      <p className="text-slate-500 mb-8">
        Showing {vendors.length} vendor{vendors.length !== 1 ? "s" : ""}
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 shrink-0">
          <Suspense fallback={<div className="bg-white border border-slate-200 rounded-xl p-5 h-64 animate-pulse" />}>
            <FilterSidebar />
          </Suspense>
        </div>

        {/* Results */}
        <div className="flex-1">
          {vendors.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-xl border border-slate-200">
              <div className="text-5xl mb-4">🚽</div>
              <h2 className="text-xl font-bold text-slate-700 mb-2">
                No vendors found
              </h2>
              <p className="text-slate-500 text-sm">
                Try adjusting your filters or clearing them to see all vendors.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {vendors.map((vendor) => (
                <VendorCard key={vendor.id} vendor={vendor} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

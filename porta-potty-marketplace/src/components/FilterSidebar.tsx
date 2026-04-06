"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const SERVICE_OPTIONS = [
  "Standard",
  "Deluxe",
  "ADA Accessible",
  "Luxury",
  "Construction & Long-term",
];

const PRICE_OPTIONS = [
  { value: "$", label: "$ · Budget" },
  { value: "$$", label: "$$ · Mid-Range" },
  { value: "$$$", label: "$$$ · Premium" },
];

const STATE_OPTIONS = [
  { value: "CT", label: "Connecticut" },
  { value: "RI", label: "Rhode Island" },
  { value: "MA", label: "Massachusetts" },
];

export default function FilterSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedStates = searchParams.getAll("state");
  const selectedPrices = searchParams.getAll("price");
  const selectedServices = searchParams.getAll("service");

  const updateParams = useCallback(
    (key: string, value: string, checked: boolean) => {
      const params = new URLSearchParams(searchParams.toString());
      const existing = params.getAll(key);

      // Remove all entries for this key
      params.delete(key);

      let updated: string[];
      if (checked) {
        updated = [...existing, value];
      } else {
        updated = existing.filter((v) => v !== value);
      }

      updated.forEach((v) => params.append(key, v));
      router.push(`/vendors?${params.toString()}`);
    },
    [router, searchParams]
  );

  const clearAll = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("state");
    params.delete("price");
    params.delete("service");
    router.push(`/vendors?${params.toString()}`);
  };

  const hasFilters =
    selectedStates.length > 0 || selectedPrices.length > 0 || selectedServices.length > 0;

  return (
    <aside className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-gray-900 text-lg">Filters</h2>
        {hasFilters && (
          <button
            onClick={clearAll}
            className="text-sm text-blue-700 hover:text-blue-900 font-medium"
          >
            Clear all
          </button>
        )}
      </div>

      {/* State Filter */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">State</h3>
        <div className="space-y-2">
          {STATE_OPTIONS.map(({ value, label }) => (
            <label key={value} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedStates.includes(value)}
                onChange={(e) => updateParams("state", value, e.target.checked)}
                className="w-4 h-4 rounded text-blue-700 border-gray-300 focus:ring-blue-500 cursor-pointer"
              />
              <span className="text-gray-700 text-sm group-hover:text-gray-900">{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">
          Price Range
        </h3>
        <div className="space-y-2">
          {PRICE_OPTIONS.map(({ value, label }) => (
            <label key={value} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedPrices.includes(value)}
                onChange={(e) => updateParams("price", value, e.target.checked)}
                className="w-4 h-4 rounded text-blue-700 border-gray-300 focus:ring-blue-500 cursor-pointer"
              />
              <span className="text-gray-700 text-sm group-hover:text-gray-900">{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Service Type Filter */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">
          Service Type
        </h3>
        <div className="space-y-2">
          {SERVICE_OPTIONS.map((service) => (
            <label key={service} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedServices.includes(service)}
                onChange={(e) => updateParams("service", service, e.target.checked)}
                className="w-4 h-4 rounded text-blue-700 border-gray-300 focus:ring-blue-500 cursor-pointer"
              />
              <span className="text-gray-700 text-sm group-hover:text-gray-900">{service}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}

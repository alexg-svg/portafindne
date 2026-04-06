"use client";

import { useRouter, useSearchParams } from "next/navigation";
import type { State, PriceRange, ServiceType } from "@/lib/data";

const states: State[] = ["CT", "RI", "MA"];
const priceRanges: PriceRange[] = ["$", "$$", "$$$"];
const serviceTypes: ServiceType[] = [
  "Standard",
  "Deluxe",
  "ADA Accessible",
  "Luxury",
  "Construction & Long-term",
];

export default function FilterSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentState = searchParams.get("state") || "";
  const currentPrice = searchParams.get("priceRange") || "";
  const currentService = searchParams.get("service") || "";
  const currentSearch = searchParams.get("search") || "";

  function updateParams(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/vendors?${params.toString()}`);
  }

  function handleCheckbox(
    key: string,
    value: string,
    currentValue: string
  ) {
    updateParams(key, currentValue === value ? "" : value);
  }

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem("search") as HTMLInputElement;
    updateParams("search", input.value.trim());
  }

  function clearFilters() {
    router.push("/vendors");
  }

  return (
    <aside className="bg-white border border-slate-200 rounded-xl p-5 space-y-6 h-fit sticky top-4">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-slate-900 text-lg">Filters</h2>
        <button
          onClick={clearFilters}
          className="text-xs text-blue-700 hover:underline font-medium"
        >
          Clear All
        </button>
      </div>

      {/* Search */}
      <div>
        <h3 className="text-sm font-semibold text-slate-700 mb-2">Search</h3>
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            name="search"
            type="text"
            defaultValue={currentSearch}
            placeholder="City, name..."
            className="flex-1 border border-slate-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-700 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-blue-800 transition-colors"
          >
            Go
          </button>
        </form>
      </div>

      {/* State */}
      <div>
        <h3 className="text-sm font-semibold text-slate-700 mb-2">State</h3>
        <div className="space-y-1.5">
          {states.map((state) => (
            <label
              key={state}
              className="flex items-center gap-2 cursor-pointer text-sm text-slate-700 hover:text-slate-900"
            >
              <input
                type="checkbox"
                checked={currentState === state}
                onChange={() => handleCheckbox("state", state, currentState)}
                className="rounded border-slate-300 text-blue-700 focus:ring-blue-500"
              />
              {state === "CT"
                ? "Connecticut"
                : state === "RI"
                ? "Rhode Island"
                : "Massachusetts"}
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-sm font-semibold text-slate-700 mb-2">
          Price Range
        </h3>
        <div className="space-y-1.5">
          {priceRanges.map((price) => (
            <label
              key={price}
              className="flex items-center gap-2 cursor-pointer text-sm text-slate-700 hover:text-slate-900"
            >
              <input
                type="checkbox"
                checked={currentPrice === price}
                onChange={() => handleCheckbox("priceRange", price, currentPrice)}
                className="rounded border-slate-300 text-blue-700 focus:ring-blue-500"
              />
              <span>
                {price}{" "}
                <span className="text-slate-500">
                  {price === "$"
                    ? "– Budget"
                    : price === "$$"
                    ? "– Mid-Range"
                    : "– Premium"}
                </span>
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Service Type */}
      <div>
        <h3 className="text-sm font-semibold text-slate-700 mb-2">
          Service Type
        </h3>
        <div className="space-y-1.5">
          {serviceTypes.map((service) => (
            <label
              key={service}
              className="flex items-center gap-2 cursor-pointer text-sm text-slate-700 hover:text-slate-900"
            >
              <input
                type="checkbox"
                checked={currentService === service}
                onChange={() =>
                  handleCheckbox("service", service, currentService)
                }
                className="rounded border-slate-300 text-blue-700 focus:ring-blue-500"
              />
              {service}
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}

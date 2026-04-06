'use client';

import { FilterState, PriceTier, StateCode } from '@/types';
import { STATE_LABELS, getCitiesForState } from '@/data/locations';
import { DEFAULT_FILTERS } from '@/lib/filters';
import { formatPriceTier } from '@/lib/utils';

const PRICE_TIERS: PriceTier[] = ['$', '$$', '$$$', '$$$$'];
const STATES: StateCode[] = ['CT', 'RI', 'MA'];
const MIN_RATINGS = [4.5, 4.0, 3.5];

interface FilterBarProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
}

export default function FilterBar({ filters, onChange }: FilterBarProps) {
  function toggleState(state: StateCode) {
    const next = filters.states.includes(state)
      ? filters.states.filter(s => s !== state)
      : [...filters.states, state];
    onChange({ ...filters, states: next, city: null });
  }

  function togglePriceTier(tier: PriceTier) {
    const next = filters.priceTiers.includes(tier)
      ? filters.priceTiers.filter(t => t !== tier)
      : [...filters.priceTiers, tier];
    onChange({ ...filters, priceTiers: next });
  }

  const availableCities = filters.states.length === 1
    ? getCitiesForState(filters.states[0])
    : [];

  const hasActiveFilters =
    filters.states.length > 0 ||
    filters.priceTiers.length > 0 ||
    filters.city !== null ||
    filters.minRating !== null;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-semibold text-gray-900">Filter & Sort</h2>
        {hasActiveFilters && (
          <button
            onClick={() => onChange(DEFAULT_FILTERS)}
            className="text-xs text-blue-600 hover:text-blue-800 font-medium"
          >
            Clear all
          </button>
        )}
      </div>

      {/* State filter */}
      <div className="mb-5">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">State</p>
        <div className="flex flex-wrap gap-2">
          {STATES.map(state => (
            <button
              key={state}
              onClick={() => toggleState(state)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                filters.states.includes(state)
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
              }`}
            >
              {state} <span className="hidden sm:inline text-xs opacity-75">· {STATE_LABELS[state]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* City filter - only when single state selected */}
      {availableCities.length > 0 && (
        <div className="mb-5">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">City</p>
          <select
            value={filters.city ?? ''}
            onChange={e => onChange({ ...filters, city: e.target.value || null })}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All cities</option>
            {availableCities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
      )}

      {/* Price tier filter */}
      <div className="mb-5">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Price Range</p>
        <div className="flex flex-wrap gap-2">
          {PRICE_TIERS.map(tier => (
            <button
              key={tier}
              onClick={() => togglePriceTier(tier)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                filters.priceTiers.includes(tier)
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
              }`}
            >
              {tier} <span className="text-xs opacity-75">· {formatPriceTier(tier)}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Min rating filter */}
      <div className="mb-5">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Minimum Rating</p>
        <div className="flex flex-wrap gap-2">
          {MIN_RATINGS.map(r => (
            <button
              key={r}
              onClick={() => onChange({ ...filters, minRating: filters.minRating === r ? null : r })}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                filters.minRating === r
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
              }`}
            >
              ★ {r}+
            </button>
          ))}
        </div>
      </div>

      {/* Sort */}
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Sort By</p>
        <select
          value={filters.sortBy}
          onChange={e => onChange({ ...filters, sortBy: e.target.value as FilterState['sortBy'] })}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="rating">Top Rated</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="name">Name A–Z</option>
        </select>
      </div>
    </div>
  );
}

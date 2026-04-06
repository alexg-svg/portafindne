import { Vendor, FilterState } from '@/types';
import { priceTierToNumber } from './utils';

export function filterVendors(vendors: Vendor[], filters: FilterState): Vendor[] {
  let result = vendors;

  if (filters.states.length > 0) {
    result = result.filter(v => filters.states.includes(v.state));
  }

  if (filters.city) {
    result = result.filter(v => v.city === filters.city);
  }

  if (filters.priceTiers.length > 0) {
    result = result.filter(v => filters.priceTiers.includes(v.priceTier));
  }

  if (filters.minRating !== null) {
    result = result.filter(v => v.rating >= filters.minRating!);
  }

  switch (filters.sortBy) {
    case 'rating':
      result = [...result].sort((a, b) => b.rating - a.rating);
      break;
    case 'price_asc':
      result = [...result].sort((a, b) => priceTierToNumber(a.priceTier) - priceTierToNumber(b.priceTier));
      break;
    case 'price_desc':
      result = [...result].sort((a, b) => priceTierToNumber(b.priceTier) - priceTierToNumber(a.priceTier));
      break;
    case 'name':
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
      break;
  }

  return result;
}

export const DEFAULT_FILTERS: FilterState = {
  states: [],
  city: null,
  priceTiers: [],
  minRating: null,
  sortBy: 'rating',
};

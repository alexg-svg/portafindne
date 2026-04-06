export type PriceTier = '$' | '$$' | '$$$' | '$$$$';
export type StateCode = 'CT' | 'RI' | 'MA';

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  body: string;
}

export interface Vendor {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  state: StateCode;
  city: string;
  serviceArea: string[];
  phone: string;
  website?: string;
  email?: string;
  priceTier: PriceTier;
  priceRangeLabel: string;
  unitCount?: number;
  rating: number;
  reviewCount: number;
  reviews: Review[];
  featured?: boolean;
  logoUrl?: string;
}

export interface FilterState {
  states: StateCode[];
  city: string | null;
  priceTiers: PriceTier[];
  minRating: number | null;
  sortBy: 'rating' | 'price_asc' | 'price_desc' | 'name';
}

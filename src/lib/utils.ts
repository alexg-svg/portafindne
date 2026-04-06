import { PriceTier } from '@/types';

export function formatPriceTier(tier: PriceTier): string {
  const labels: Record<PriceTier, string> = {
    '$': 'Budget',
    '$$': 'Moderate',
    '$$$': 'Premium',
    '$$$$': 'Luxury',
  };
  return labels[tier];
}

export function priceTierToNumber(tier: PriceTier): number {
  return { '$': 1, '$$': 2, '$$$': 3, '$$$$': 4 }[tier];
}

export function renderStars(rating: number): { full: number; half: boolean; empty: number } {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return { full, half, empty };
}

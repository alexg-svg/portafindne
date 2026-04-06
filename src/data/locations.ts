import { StateCode } from '@/types';
import { vendors } from './vendors';

export const STATE_LABELS: Record<StateCode, string> = {
  CT: 'Connecticut',
  RI: 'Rhode Island',
  MA: 'Massachusetts',
};

export function getCitiesForState(state: StateCode): string[] {
  const cities = vendors
    .filter(v => v.state === state)
    .map(v => v.city);
  return Array.from(new Set(cities)).sort();
}

export const ALL_STATES: StateCode[] = ['CT', 'MA', 'RI'];

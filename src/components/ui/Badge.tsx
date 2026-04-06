import { PriceTier, StateCode } from '@/types';

type BadgeVariant = 'price' | 'state' | 'featured' | 'default';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  priceTier?: PriceTier;
  stateCode?: StateCode;
  className?: string;
}

const PRICE_COLORS: Record<PriceTier, string> = {
  '$': 'bg-emerald-100 text-emerald-800',
  '$$': 'bg-blue-100 text-blue-800',
  '$$$': 'bg-purple-100 text-purple-800',
  '$$$$': 'bg-amber-100 text-amber-800',
};

const STATE_COLORS: Record<StateCode, string> = {
  CT: 'bg-sky-100 text-sky-800',
  RI: 'bg-indigo-100 text-indigo-800',
  MA: 'bg-red-100 text-red-800',
};

export default function Badge({ children, variant = 'default', priceTier, stateCode, className = '' }: BadgeProps) {
  let colorClass = 'bg-gray-100 text-gray-700';

  if (variant === 'price' && priceTier) {
    colorClass = PRICE_COLORS[priceTier];
  } else if (variant === 'state' && stateCode) {
    colorClass = STATE_COLORS[stateCode];
  } else if (variant === 'featured') {
    colorClass = 'bg-amber-400 text-amber-900';
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${colorClass} ${className}`}>
      {children}
    </span>
  );
}

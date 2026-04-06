import type { PriceRange as PriceRangeType } from "@/lib/data";

interface PriceRangeProps {
  priceRange: PriceRangeType;
  size?: "sm" | "md" | "lg";
}

const labels: Record<PriceRangeType, string> = {
  $: "Budget",
  $$: "Mid-Range",
  $$$: "Premium",
};

const colorClasses: Record<PriceRangeType, string> = {
  $: "bg-green-100 text-green-800 border-green-200",
  $$: "bg-blue-100 text-blue-800 border-blue-200",
  $$$: "bg-purple-100 text-purple-800 border-purple-200",
};

export default function PriceRange({ priceRange, size = "md" }: PriceRangeProps) {
  const sizeClasses = size === "sm" ? "text-xs px-2 py-0.5" : size === "lg" ? "text-base px-4 py-1.5" : "text-sm px-3 py-1";

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border font-semibold ${sizeClasses} ${colorClasses[priceRange]}`}
    >
      <span>{priceRange}</span>
      <span className="font-normal opacity-75">· {labels[priceRange]}</span>
    </span>
  );
}

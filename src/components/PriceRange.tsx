interface PriceRangeProps {
  price: "$" | "$$" | "$$$";
}

const priceConfig = {
  $: {
    label: "Budget",
    badgeClass: "bg-green-100 text-green-800 border border-green-200",
  },
  $$: {
    label: "Mid-Range",
    badgeClass: "bg-blue-100 text-blue-800 border border-blue-200",
  },
  $$$: {
    label: "Premium",
    badgeClass: "bg-purple-100 text-purple-800 border border-purple-200",
  },
};

export default function PriceRange({ price }: PriceRangeProps) {
  const config = priceConfig[price];
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${config.badgeClass}`}
    >
      <span>{price}</span>
      <span>{config.label}</span>
    </span>
  );
}

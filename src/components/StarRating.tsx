interface StarRatingProps {
  rating: number;
  size?: "sm" | "md" | "lg";
  showNumber?: boolean;
}

export default function StarRating({ rating, size = "md", showNumber = false }: StarRatingProps) {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-xl",
  };

  const stars = Array.from({ length: 5 }, (_, i) => {
    const filled = i + 1 <= Math.floor(rating);
    const partial = !filled && i < rating;
    return { filled, partial };
  });

  return (
    <span className={`inline-flex items-center gap-0.5 ${sizeClasses[size]}`}>
      {stars.map((star, i) => (
        <span
          key={i}
          className={
            star.filled
              ? "text-yellow-400"
              : star.partial
              ? "text-yellow-300"
              : "text-gray-300"
          }
        >
          ★
        </span>
      ))}
      {showNumber && (
        <span className="ml-1 text-gray-600 font-medium">{rating.toFixed(1)}</span>
      )}
    </span>
  );
}

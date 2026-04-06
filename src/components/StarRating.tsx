"use client";

interface StarRatingProps {
  rating: number;
  size?: "sm" | "md" | "lg";
}

export default function StarRating({ rating, size = "md" }: StarRatingProps) {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-xl",
  };

  const textClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const filled = i <= Math.round(rating * 2) / 2;
    stars.push(
      <span
        key={i}
        className={`${filled ? "text-yellow-400" : "text-gray-300"} ${sizeClasses[size]}`}
      >
        {filled ? "★" : "☆"}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1">
      <span className="inline-flex">{stars}</span>
      <span className={`${textClasses[size]} text-slate-600 font-medium ml-1`}>
        {rating.toFixed(1)}
      </span>
    </span>
  );
}

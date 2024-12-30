import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface FillableStarProps {
  totalStars?: number; // Total number of stars, default is 5
  sensitivity?: number; // Step size for rating, default is 0.1
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
}

const FillableStar: React.FC<FillableStarProps> = ({ totalStars = 5, sensitivity = 0.1, rating, setRating }) => {
  const [hover, setHover] = useState<number>(0); // Star being hovered over

  const handleMouseEnter = (index: number, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const hoverValue = index - 1 + (event.clientX - rect.left) / rect.width;
    setHover(Math.round(hoverValue / sensitivity) * sensitivity);
  };

  const handleClick = (index: number, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const clickValue = index - 1 + (event.clientX - rect.left) / rect.width;
    setRating(Math.round(clickValue / sensitivity) * sensitivity);
  };

  const getStarFill = (star: number) => {
    const effectiveRating = hover || rating;
    if (star <= effectiveRating) return '100%'; // Fully filled star
    if (star - 1 < effectiveRating && star > effectiveRating)
      return `${((effectiveRating - (star - 1)) * 100).toFixed(0)}%`; // Partially filled star
    return '0%'; // Empty star
  };

  return (
    <div className="flex items-center space-x-3">
      <div className="flex items-center space-x-2">
        {Array.from({ length: totalStars }, (_, index) => index + 1).map((star) => (
          <div
            key={star}
            className="relative w-8 h-8"
            onClick={(e) => handleClick(star, e)}
            onMouseMove={(e) => handleMouseEnter(star, e)}
            onMouseLeave={() => setHover(0)}>
            <FaStar size={30} className="absolute top-0 left-0 text-gray-400" />
            <FaStar
              size={30}
              className="absolute top-0 left-0 text-yellow-400"
              style={{
                clipPath: `inset(0 ${100 - parseFloat(getStarFill(star))}% 0 0)`,
              }}
            />
          </div>
        ))}
      </div>
      <p className="text-2xl font-bold">{rating.toFixed(1)}</p>
    </div>
  );
};

export default FillableStar;

import React from 'react';
import { FaStar } from 'react-icons/fa';

/**
 * Props for the `StarRating` component.
 */
interface StarRatingProps {
  /**
   * The total number of stars to display.
   * Defaults to 5 if not provided.
   */
  totalStars?: number;

  /**
   * The fixed rating value used to fill the stars.
   * Should be a number between 0 and `totalStars`.
   */
  rating: number;
}

/**
 * A reusable star rating component to display a fixed rating value
 * with partially filled stars based on the rating.
 *
 * @param {StarRatingProps} props - The props for the component.
 * @returns A JSX element rendering the star rating.
 */
const StarRating: React.FC<StarRatingProps> = ({ totalStars = 5, rating }) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '4px',
        position: 'relative',
      }}>
      {[...Array(totalStars)].map((_, index) => {
        // Calculate the fill percentage for each star
        const fillPercentage = Math.min(1, Math.max(0, rating - index)) * 100;

        return (
          <div
            key={index}
            style={{
              position: 'relative',
              width: '24px',
              height: '24px',
            }}>
            {/* Render the background star */}
            <FaStar
              size={24}
              color="white"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
              }}
            />
            {/* Render the foreground (filled) star with a clipped mask */}
            <FaStar
              size={24}
              color="black"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                clipPath: `inset(0 ${100 - fillPercentage}% 0 0)`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;

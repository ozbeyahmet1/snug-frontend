import React from 'react';

import StarRating from './starRating';

// Importing the reusable StarRating component

/**
 * Props for the `ReviewCard` component.
 */
interface ReviewCardProps {
  /**
   * The total number of stars for the rating system.
   */
  totalStars?: number;

  /**
   * The rating value to display.
   */
  rating: number;

  /**
   * The title of the review.
   */
  title: string;

  /**
   * The review text content.
   */
  review: string;

  /**
   * The reviewer's name.
   */
  reviewerName: string;

  /**
   * The relative time since the review was posted (e.g., "1 year ago").
   */
  reviewDate: string;
}

/**
 * A reusable component to display a review card with a star rating, reviewer details, and review content.
 *
 * @param {ReviewCardProps} props - The props for the component.
 * @returns A JSX element rendering a review card.
 */
const ReviewCard: React.FC<ReviewCardProps> = ({ totalStars = 5, rating, title, review, reviewerName, reviewDate }) => {
  return (
    <div className="w-full bg-white h-auto rounded-lg p-8">
      <div className="flex items-start space-x-10">
        {/* Rating and Review Title Section */}
        <div className="flex-1">
          <StarRating totalStars={totalStars} rating={rating} />
          <p className="text-sm font-semibold text-[#a8a8a8]">{title}</p>
        </div>

        {/* Reviewer Details and Review Content Section */}
        <div className="flex-[4]">
          <div className="flex items-center space-x-2 mb-3">
            <h3 className="font-bold">{reviewerName}</h3>
            <p className="text-sm">{reviewDate}</p>
          </div>
          <p>{review}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

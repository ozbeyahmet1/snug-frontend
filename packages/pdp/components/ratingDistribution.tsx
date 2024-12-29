import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import React from 'react';

/**
 * Props for the `RatingDistribution` component.
 */
interface RatingDistributionProps {
  /**
   * The ratings data to display.
   * An array of objects where each object contains:
   * - `rating`: The rating value (e.g., 5, 4, etc.).
   * - `percentage`: The percentage width for the rating bar (e.g., 84 for 84%).
   */
  ratings: { rating: number; percentage: number }[];
}

/**
 * A reusable component to display a distribution of ratings with visual progress bars.
 * @param {RatingDistributionProps} props - The props for the component.
 * @returns A JSX element rendering the rating distribution.
 */
const RatingDistribution: React.FC<RatingDistributionProps> = ({ ratings }) => {
  return (
    <div className="flex flex-col items-start space-y-1">
      {ratings.map(({ rating, percentage }) => (
        <div key={rating} className="flex items-center space-x-2 group">
          <p className="w-2">{rating}</p>
          <div className="relative bg-[#f1e9e5] group-hover:bg-white w-[300px] h-6 duration-300">
            <TooltipProvider>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <div
                    className="relative bg-black group-hover:bg-blue-500 h-6 cursor-pointer"
                    style={{ width: `${percentage}%` }}
                    aria-label={`Rating ${rating} bar`}></div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Show only {rating} star reviews</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RatingDistribution;

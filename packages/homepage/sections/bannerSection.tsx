import { JSX } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

/**
 * Renders a banner section with an image and promotional content.
 *
 * This component consists of two parts:
 * 1. An image section that occupies half the banner.
 * 2. A content section with promotional text and a button.
 *
 * The layout adjusts for different screen sizes, stacking vertically on smaller screens and side-by-side on larger screens.
 */
export default function BannerSection(): JSX.Element {
  return (
    <div className="w-full flex flex-col lg:flex-row mt-20">
      {/* Image Section */}
      <ImageSection />

      {/* Content Section */}
      <ContentSection />
    </div>
  );
}

/**
 * Renders the image section of the banner.
 *
 * This section is styled to maintain an aspect ratio and occupies half of the banner's width on larger screens.
 */
function ImageSection(): JSX.Element {
  return (
    <div className="aspect-square flex-1 h-full">
      <img
        src="https://res.cloudinary.com/dhx4s2n3l/image/upload/v1735254731/8680214199435-10_mb6vzk.webp"
        alt="Promotional"
        className="h-full"
      />
    </div>
  );
}

/**
 * Renders the content section of the banner.
 *
 * This section contains:
 * - A headline
 * - A description
 * - A button with hover animation
 */
function ContentSection(): JSX.Element {
  return (
    <div className="lg:aspect-square flex-1 flex items-start justify-center flex-col bg-[#DEDDD4]">
      <div className="p-10">
        {/* Headline */}
        <h1 className="text-3xl leading-10 lg:text-[50px] lg:leading-[50px] mb-4">
          Up to £100 off any three suitcases
        </h1>

        {/* Description */}
        <p>
          Jet-set in style. Save up to £100 on any combination of suitcases—all styles, all colors, all sizes. Buy two
          and save £50, buy three and save £100.
        </p>

        {/* Button */}
        <AnimatedButton />
      </div>
    </div>
  );
}

/**
 * Renders an animated button with hover effects.
 *
 * The button includes:
 * - A label with uppercase text
 * - An arrow icon that moves to the right on hover
 */
function AnimatedButton(): JSX.Element {
  return (
    <button className="flex items-center space-x-3 mt-4 group">
      <p className="uppercase font-bold">Shop Sets</p>
      <IoIosArrowRoundForward
        size={30}
        className="transform transition-transform duration-300 group-hover:translate-x-2"
      />
    </button>
  );
}

import { Playball } from 'next/font/google';
import { JSX } from 'react';

// Initialize the Playball font with the specified subset and weight
const playball = Playball({
  subsets: ['latin'],
  weight: '400',
});

/**
 * DiscountBanner Component
 *
 * This component renders a discount promotional banner with a call-to-action button.
 *
 * @returns A JSX.Element that displays a banner with a styled message and a button.
 */
export default function DiscountBanner(): JSX.Element {
  return (
    <div className="bg-smoke w-full py-10 flex flex-col items-center">
      {/* Promotional message styled with Playball font */}
      <p className={`mb-5 text-xl lg:text-3xl text-white text-center ${playball.className}`}>
        Save up to 50% off and snag end of season styles
      </p>

      {/* Call-to-action button with hover effects */}
      <button className="uppercase bg-white text-black px-5 py-3 sm:px-7 sm:py-4 font-semibold hover:bg-smoke hover:text-white duration-300 cursor-pointer">
        Shop Now
      </button>
    </div>
  );
}

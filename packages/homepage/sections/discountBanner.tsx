import { Playball } from 'next/font/google';
import Link from 'next/link';
import { JSX } from 'react';

// Initialize the Playball font with the specified subset and weight
const playball = Playball({
  subsets: ['latin'],
  weight: '400',
});

export interface DiscountBannerProps {
  message: string;
  buttonText: string;
  href: string;
}
export default function DiscountBanner({ message, buttonText, href }: DiscountBannerProps): JSX.Element {
  return (
    <div className="bg-smoke w-full py-10 flex flex-col items-center">
      {/* Promotional message styled with Playball font */}
      <p className={`mb-5 text-xl lg:text-3xl text-white text-center ${playball.className}`}>{message}</p>

      {/* Call-to-action button with hover effects */}
      <Link
        href={href}
        className="uppercase bg-white text-black px-5 py-3 sm:px-7 sm:py-4 font-semibold hover:bg-smoke hover:text-white duration-300 cursor-pointer">
        {buttonText}
      </Link>
    </div>
  );
}

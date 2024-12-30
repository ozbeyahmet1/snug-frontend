import Link from 'next/link';
import { JSX } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

/**
 * BannerSection Component
 * A banner section with an image and promotional content.
 *
 * This component adjusts its layout for different screen sizes:
 * - Stacks vertically on smaller screens.
 * - Displays side-by-side on larger screens.
 */

export interface BannerSectionProps {
  image: string;
  header: string;
  subheader: string;
  buttonText: string;
  href: string;
}
export default function BannerSection({ image, header, subheader, buttonText, href }: BannerSectionProps): JSX.Element {
  return (
    <div className="w-full flex flex-col lg:flex-row mt-20">
      {/* Image Section */}
      <div className="aspect-square flex-1 h-full">
        <img src={image} alt="Promotional" className="h-full animate-fadeIn" />
      </div>

      {/* Content Section */}
      <div className="lg:aspect-square flex-1 flex items-start justify-center flex-col bg-beige">
        <div className="p-10">
          <h1 className="text-3xl leading-10 lg:text-[50px] lg:leading-[50px] mb-4">{header}</h1>
          <p>{subheader}</p>
          <Link href={href} className="flex items-center space-x-3 mt-4 group">
            <p className="uppercase font-bold">{buttonText}</p>
            <IoIosArrowRoundForward
              size={30}
              className="transform transition-transform duration-300 group-hover:translate-x-2"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

/**
 * HeroSection Component
 * A single component version of the Hero Section with both left and right sections included.
 *
 * This component is styled with TailwindCSS and utilizes the Playball Google Font.
 */
import { Playball } from 'next/font/google';
import Image from 'next/image';
import { JSX } from 'react';

/**
 * Font configuration for the "Playball" Google Font.
 */
const greatVibes = Playball({
  subsets: ['latin'],
  weight: '400',
});

/**
 * Props for the HeroSection component.
 */

export interface HeroSectionContentProps {
  text: string;
  slogan: string;
  buttonText: string;
  images: string[];
}
interface HeroSectionProps {
  boxColor: string;
  heroSectionContents: HeroSectionContentProps;
}

/**
 * HeroSection Component.
 * Renders the entire hero section as a single component.
 * @param {HeroSectionProps} props - The props for the HeroSection component.
 * @returns {JSX.Element} The rendered hero section.
 */
export default function HeroSection({
  boxColor,
  heroSectionContents: { text, slogan, buttonText, images },
}: HeroSectionProps): JSX.Element {
  return (
    <section className="flex flex-col lg:flex-row h-auto items-stretch mt-3">
      {/* Left Grid Section */}
      <div className="flex-1 bg-beige justify-center h-full">
        <div className="grid grid-cols-3 gap-5 h-full p-5 sm:p-10">
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-full h-full border-solid border-[#111111] border-4 lg:border-8 flex items-center justify-center transition-transform duration-500 ${boxColor}`}>
              <Image width={400} height={400} src={image} alt={`Grid Image ${index + 1}`} className="object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Right Content Section */}
      <div className="bg-smoke flex items-center justify-center flex-1 flex-col text-center p-5 lg:p-10">
        <h1 className={`text-white text-[40px] sm:text-[50px] lg:text-[60px] ${greatVibes.className}`}>{text}</h1>
        <p className="text-white text-[50px] sm:text-[60px] lg:text-[80px] uppercase">{slogan}</p>
        <button className="uppercase bg-white text-black px-5 py-3 sm:px-7 sm:py-4 font-semibold hover:bg-smoke hover:text-white duration-300 cursor-pointer">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

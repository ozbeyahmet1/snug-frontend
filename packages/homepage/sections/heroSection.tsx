/**
 * HeroSection Component
 * A visually appealing Hero Section with two sections:
 * - A left grid layout displaying images with borders.
 * - A right section with a headline, subheading, and a call-to-action button.
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

interface HeroSectionProps {
  boxColor: string;
}
/**
 * HeroSection Component.
 * Renders the main hero section for the page.
 * @returns {JSX.Element} A styled hero section.
 */
export default function HeroSection({ boxColor }: HeroSectionProps): JSX.Element {
  return (
    <section className="flex flex-col lg:flex-row h-auto items-stretch mt-3">
      {/* Left Grid Section */}
      <LeftGrid boxColor={boxColor} />

      {/* Right Content Section */}
      <RightContent />
    </section>
  );
}

/**
 * LeftGrid Component.
 * Displays a grid of images with a bordered layout.
 * @returns {JSX.Element} The grid layout section.
 */
function LeftGrid({ boxColor }: HeroSectionProps): JSX.Element {
  const images = [
    'https://res.cloudinary.com/dhx4s2n3l/image/upload/v1735088126/PE906374_y9thj9-removebg-preview_f2sbzo.png',
    'https://res.cloudinary.com/dhx4s2n3l/image/upload/v1735089614/DALL_E_2024-12-25_04.19.53_-_A_stack_of_four_rectangular_pillows_arranged_neatly_on_top_of_one_another_each_with_a_unique_color_and_texture._The_top_pillow_is_light_brown_follo_thuqu9.webp',
    'https://res.cloudinary.com/dhx4s2n3l/image/upload/v1735089722/DALL_E_2024-12-25_04.21.50_-_A_single_rectangular_pillow_placed_on_a_soft_and_inviting_bed_in_a_cozy_bedroom_setting._The_pillow_is_light_beige_with_a_smooth_fabric_cover_and_subt_crmsm2.webp',
    'https://res.cloudinary.com/dhx4s2n3l/image/upload/v1735089817/DALL_E_2024-12-25_04.23.22_-_A_single_rectangular_pillow_in_a_vibrant_teal_color_placed_on_a_modern_gray_couch_in_a_living_room_setup._The_background_features_a_soft_beige_wall_co_mdt7rv.webp',
    'https://res.cloudinary.com/dhx4s2n3l/image/upload/v1735185514/pill_im6y1q.png',
    'https://res.cloudinary.com/dhx4s2n3l/image/upload/v1735088718/V240034V240090V250070V150766_ee838dc4-f4af-4ada-9c90-f9a2e4ac8bc1_m5bx58.jpg',
  ];

  return (
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
  );
}

/**
 * RightContent Component.
 * Displays a headline, subheading, and a call-to-action button.
 * @returns {JSX.Element} The right content section.
 */
function RightContent(): JSX.Element {
  return (
    <div className="bg-smoke flex items-center justify-center flex-1 flex-col text-center p-5 lg:p-10">
      <h1 className={`text-white text-[40px] sm:text-[50px] lg:text-[60px] ${greatVibes.className}`}>
        Favorite for a reason
      </h1>
      <p className="text-white text-[50px] sm:text-[60px] lg:text-[80px] uppercase">Gift Away</p>
      <button className="uppercase bg-white text-black px-5 py-3 sm:px-7 sm:py-4 font-semibold hover:bg-smoke hover:text-white duration-300 cursor-pointer">
        Shop Now
      </button>
    </div>
  );
}

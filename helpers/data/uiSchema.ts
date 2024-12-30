import { BannerSectionProps } from '@/packages/homepage/sections/bannerSection';
import { DiscountBannerProps } from '@/packages/homepage/sections/discountBanner';
import { FavoritesSectionProps } from '@/packages/homepage/sections/favoritesSection';
import { HeroSectionContentProps } from '@/packages/homepage/sections/heroSection';
import { TestimonalsSectionProps } from '@/packages/homepage/sections/testimonalsSection';
import { MobileMenuLink } from '@/ui/layout/navMenu';
import { Slide } from '@/ui/layout/topBar';

const mobileMenuLinks: Array<MobileMenuLink> = [
  {
    title: 'Luxury Pillows',
    href: '/products/luxury-pillows',
    description: 'Experience unmatched comfort with our premium collection of luxury pillows.',
  },
  {
    title: 'Orthopedic Pillows',
    href: '/products/orthopedic-pillows',
    description: 'Perfect support for your neck and back with our ergonomic orthopedic pillows.',
  },
  {
    title: 'Decorative Pillows',
    href: '/products/decorative-pillows',
    description: 'Add style and personality to your home with our beautiful decorative pillows.',
  },
  {
    title: 'Memory Foam Pillows',
    href: '/products/memory-foam-pillows',
    description: 'Enjoy superior comfort with our adaptive memory foam pillows.',
  },
  {
    title: 'Cooling Pillows',
    href: '/products/cooling-pillows',
    description: 'Stay cool all night with our advanced cooling pillow technology.',
  },
  {
    title: 'Travel Pillows',
    href: '/products/travel-pillows',
    description: 'Compact and convenient pillows for ultimate comfort on the go.',
  },
];

const heroBannerContents = {
  text: 'Cozy for a reason',
  slogan: 'Snug & Share',
  buttonText: 'Discover Now',
  images: [
    'https://res.cloudinary.com/dhx4s2n3l/image/upload/v1735088126/PE906374_y9thj9-removebg-preview_f2sbzo.png',
    'https://res.cloudinary.com/dhx4s2n3l/image/upload/v1735089614/DALL_E_2024-12-25_04.19.53_-_A_stack_of_four_rectangular_pillows_arranged_neatly_on_top_of_one_another_each_with_a_unique_color_and_texture._The_top_pillow_is_light_brown_follo_thuqu9.webp',
    'https://res.cloudinary.com/dhx4s2n3l/image/upload/v1735089722/DALL_E_2024-12-25_04.21.50_-_A_single_rectangular_pillow_placed_on_a_soft_and_inviting_bed_in_a_cozy_bedroom_setting._The_pillow_is_light_beige_with_a_smooth_fabric_cover_and_subt_crmsm2.webp',
    'https://res.cloudinary.com/dhx4s2n3l/image/upload/v1735089817/DALL_E_2024-12-25_04.23.22_-_A_single_rectangular_pillow_in_a_vibrant_teal_color_placed_on_a_modern_gray_couch_in_a_living_room_setup._The_background_features_a_soft_beige_wall_co_mdt7rv.webp',
    'https://res.cloudinary.com/dhx4s2n3l/image/upload/v1735185514/pill_im6y1q.png',
    'https://res.cloudinary.com/dhx4s2n3l/image/upload/v1735088718/V240034V240090V250070V150766_ee838dc4-f4af-4ada-9c90-f9a2e4ac8bc1_m5bx58.jpg',
  ],
};

const testimonials = [
  {
    message:
      '"These pillows have transformed my sleep! The softness and support are unmatched. I wake up feeling refreshed every single day."',
    author: 'Sarah M.',
  },
  {
    message: '"I never knew how much a good pillow could change my life until I tried these. Comfort redefined!"',
    author: 'James L.',
  },
  {
    message: '"Not just a pillow, but an experience! Amazing quality and exceptional customer service."',
    author: 'Emma R.',
  },
];

const slides = [
  {
    content: 'Send the gift that everyone will love',
    bgColor: 'bg-red-700',
  },
  {
    content: 'New styles added: Save up to 50% off on select gifts',
    bgColor: 'bg-blue-700',
  },
  {
    content: 'Shop now. Pay with Stripe',
    bgColor: 'bg-green-900',
  },
];

interface uiSchemaType {
  topBar: Array<Slide>;
  mobileMenuLinks: Array<MobileMenuLink>;
  heroSection: HeroSectionContentProps;
  favoritesSection: FavoritesSectionProps;
  testimonialSection: TestimonalsSectionProps;
  bannerSection: BannerSectionProps;
  discountSection: DiscountBannerProps;
}
export const uiSchema: uiSchemaType = {
  topBar: slides,
  mobileMenuLinks: mobileMenuLinks,
  heroSection: heroBannerContents,
  testimonialSection: {
    header: 'What our cozy customers are saying',
    testimonials,
  },
  favoritesSection: {
    header: 'A few of our',
    subheader: 'Cozy Favorites',
  },
  bannerSection: {
    header: 'Up to 30% off select pillows',
    subheader:
      'Transform your space with the perfect touch of comfort. Save up to 30% on select pillows—various styles, colors, and sizes available. Limited time offer!',
    buttonText: 'Shop Pillows',
    href: '/collections/sale',
    image: 'https://res.cloudinary.com/dhx4s2n3l/image/upload/v1735254731/8680214199435-10_mb6vzk.webp',
  },
  discountSection: {
    message: 'Save up to 40% on your next cozy companion',
    buttonText: 'Shop Now',
    href: '/collections/sale',
  },
};

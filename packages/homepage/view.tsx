'use client';

import { uiSchema } from '@/helpers/data/uiSchema';
import { useProducts } from '@/helpers/hooks/useFetchProducts';
import TopBar from '@/ui/layout/topBar';
import { useState } from 'react';

import BannerSection from './sections/bannerSection';
import DiscountBanner from './sections/discountBanner';
import FavoritesSection from './sections/favoritesSection';
import HeroSection from './sections/heroSection';
import TestimonalsSection from './sections/testimonalsSection';

export default function HomepageView() {
  const { products, isLoading, error, refetch } = useProducts();
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <TopBar slides={uiSchema.topBar} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      <HeroSection boxColor={uiSchema.topBar[currentIndex].bgColor} heroSectionContents={uiSchema.heroSection} />
      <FavoritesSection
        isLoading={isLoading}
        favoriteItems={products?.slice(0, 4) as Array<Product>}
        {...uiSchema.favoritesSection}
      />
      <TestimonalsSection {...uiSchema.testimonialSection} />
      <BannerSection {...uiSchema.bannerSection} />
      <DiscountBanner {...uiSchema.discountSection} />
    </div>
  );
}

'use client';

import { useProducts } from '@/helpers/hooks/useFetchProducts';
import TopBar from '@/ui/layout/topBar';
import { useState } from 'react';

import BannerSection from './sections/bannerSection';
import DiscountBanner from './sections/discountBanner';
import FavoritesSection from './sections/favoritesSection';
import HeroSection from './sections/heroSection';
import TestimonalsSection from './sections/testimonalsSection';

export default function HomepageView() {
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
  const { products, isLoading, error, refetch } = useProducts();
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <TopBar slides={slides} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      <HeroSection boxColor={slides[currentIndex].bgColor} />
      <FavoritesSection favoriteItems={products?.slice(0, 4) as Array<Product>} />
      <TestimonalsSection />
      <BannerSection />
      <DiscountBanner />
    </div>
  );
}

'use client';

import FullWidthSlider from '@/ui/layout/topBar';
import { useState } from 'react';

export default function HomepageView() {
  const slides = [
    {
      content: 'Send the gift that everyone will love',
      bgColor: 'bg-red-700',
    },
    {
      content: 'New styles added: Save up to 50% off on select gifts',
      bgColor: 'bg-blue-500',
    },
    {
      content: 'Shop now. Pay with Stripe',
      bgColor: 'bg-green-900',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div>
      <FullWidthSlider slides={slides} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
    </div>
  );
}

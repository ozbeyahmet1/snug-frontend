'use client';

import pillow from '@/assets/pillow.svg';
import { uiSchema } from '@/helpers/data/uiSchema';
import { useProducts } from '@/helpers/hooks/useFetchProducts';
import TopBar from '@/ui/layout/topBar';
import Image from 'next/image';
import { useState } from 'react';

import { FavoriteCard } from '../homepage/components/favoriteCard';

export default function CollectionPageView() {
  const { products, isLoading } = useProducts();
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="min-h-[500px]">
      <TopBar slides={uiSchema.topBar} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      <div className="container mx-auto py-10 lg:py-20 max-sm:px-5">
        {isLoading ? (
          <div className="text-lg text-gray-500 h-[500px] flex items-center w-full justify-center">
            <Image src={pillow} alt="" width={150} height={150} className="animate-rotate-step" />
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-10">
            {products?.map((product, index) => <FavoriteCard key={index} {...product} bgOpacity="bg-opacity-100" />)}
          </div>
        )}
      </div>
    </div>
  );
}

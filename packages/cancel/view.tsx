'use client';

import TopBar from '@/ui/layout/topBar';
import Link from 'next/link';
import { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

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
export default function CancelPageView() {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div>
      <TopBar slides={slides} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      <div className="container mx-auto py-40 flex items-center justify-center max-sm:px-5">
        <div className="flex items-center flex-col w-full lg:w-[600px]">
          <div className="w-full p-10  border-2 border-smoke border-solid rounded-md mx-auto bg-white flex items-center flex-col">
            <h1>PAYMENT CANCELLED!</h1>
            <IoCloseOutline className="w-60 h-60 text-red-600" />
            <div className="flex items-center lg:space-x-2 mt-4 flex-col lg:flex-row max-sm:space-y-2">
              <Link
                href="/"
                className="text-center max-sm:w-60 lg:px-10 py-1 bg-smoke hover:bg-white text-white hover:text-smoke border-smoke border-solid border-2 rounded-full duration-300">
                Go to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

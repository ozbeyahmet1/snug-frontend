'use client';

import TopBar from '@/ui/layout/topBar';
import { useState } from 'react';
import { TiTick } from 'react-icons/ti';

import RatingDistribution from './components/ratingDistribution';
import ReviewCard from './components/reviewCard';
import StarRating from './components/starRating';
import FieldsSection from './section/fieldsSection';

export default function ProductDetailPage() {
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

  const tabs = [
    {
      label: 'Description',
      key: 'description',
      content: (
        <p>
          Meet our award-winning Classic suitcases—designed by travelers, for travelers. The Carry-On is our smallest
          suitcase, sized to fit in all overhead bins and perfect for any quick trip. It features a lightweight, durable
          hard shell that's been rigorously tested and a signature interior compression system that helps you pack,
          organize and protect more. Details like an easy-grip top handle, additional underside grab handle, and
          smooth-gliding wheels make it easier than ever to maneuver and lift your suitcase. Better travel starts here.
        </p>
      ),
    },
    {
      label: 'Materials',
      key: 'materials',
      content: (
        <p>This suitcase is made with premium polycarbonate, aluminum, and recycled materials for sustainability.</p>
      ),
    },
    {
      label: 'Warranty and Return Policy',
      key: 'warranty',
      content: (
        <p>
          We offer a lifetime warranty on all our suitcases. Returns and exchanges are accepted within 30 days of
          purchase.
        </p>
      ),
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="pt-3">
      <TopBar slides={slides} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      <div className="h-[600px] flex items-center bg-[#DEDDD4]">
        <div className="w-1/2  h-full">
          <img
            src="https://assets.awaytravel.com/spree/products/46196/original/f6c463ce-29d6-446d-8cfd-652b65f97e24.jpg?format=webp&quality=75&width=640"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 h-full py-20 px-10">
          <p>Luggage / Carry-On Luggage</p>
          <div className="flex items-center justify-between py-6 text-3xl">
            <h1 className="font-bold">The Bigger Carry-On</h1>
            <p>$245</p>
          </div>
          <div className="flex items-center space-x-2">
            <StarRating totalStars={5} rating={4.5} />
            <p>(4.5)</p>
            <p>6487 Reviews</p>
          </div>
          <div className="my-3 w-full h-12 bg-[#ddcdb2] flex items-center justify-center">
            Secure your payment with Stripe
          </div>
          <div className="mb-3">
            <p className="inline">Meet our award-winning Classic suitcases—designed by travelers, for travelers.</p>
            <p className="inline ml-2 border-b-2 border-black">Read more</p>
          </div>
          <button className="bg-black w-full text-white h-16 flex items-center justify-center font-bold">
            Add To Cart $245
          </button>
        </div>
      </div>
      <div className="bg-[#DEDDD4] pb-10">
        <div className="container mx-auto">
          <FieldsSection tabs={tabs} />
        </div>
      </div>

      <div className="container mx-auto py-10">
        <h1 className="font-bold text-3xl">Reviews</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-20">
            <div className="flex flex-col items-center">
              <p className="text-2xl mb-2">5.0</p>
              <StarRating totalStars={5} rating={5} />
              <p className="mt-2">6486 Reviews</p>
            </div>
            <RatingDistribution
              ratings={[
                { rating: 5, percentage: 84 },
                { rating: 4, percentage: 14 },
                { rating: 3, percentage: 6 },
                { rating: 2, percentage: 4 },
                { rating: 1, percentage: 4 },
              ]}
            />
          </div>
          <div className="flex flex-col items-center">
            <span className="flex bg-black items-center space-x-2 px-2 py-1 text-sm rounded">
              <TiTick fill="white" className="border-solid border rounded-full" />
              <p className="text-white">94%</p>
            </span>
            <p className="text-sm mb-2 w-48 text-center">of respondents would recommend this to a friend</p>
          </div>
        </div>
      </div>

      <div className="w-full py-10 bg-gray-200">
        <div className="container mx-auto flex flex-col space-y-10">
          <ReviewCard
            totalStars={5}
            rating={4.5}
            title="Even after a year, I love my Carry-On"
            review="The carry-on has been nothing but phenomenal. It is simple, but holds more than enough for me to store clothes for week. Mine is in blue, it doesn't really show many scuffs. However, those that do show can be easily removed, wiping them off with a cloth. With my original carry on, I had a problem with the wheels. Away was kind enough to send me replacement ones. Those, however, never glided quite as well as the originals so after being frustrated for over a year, I contacted away customer service, who set up to send me a new set of wheels. When they realize that the wheels were out of stock, they instead chose to replace the entire suitcase with a brand new one. For that, they made a customer for life as a company that stands by their brand is one that has customers that stand by their brand."
            reviewerName="Robert J."
            reviewDate="1 year ago"
          />
          <ReviewCard
            totalStars={5}
            rating={4.5}
            title="Even after a year, I love my Carry-On"
            review="The carry-on has been nothing but phenomenal. It is simple, but holds more than enough for me to store clothes for week. Mine is in blue, it doesn't really show many scuffs. However, those that do show can be easily removed, wiping them off with a cloth. With my original carry on, I had a problem with the wheels. Away was kind enough to send me replacement ones. Those, however, never glided quite as well as the originals so after being frustrated for over a year, I contacted away customer service, who set up to send me a new set of wheels. When they realize that the wheels were out of stock, they instead chose to replace the entire suitcase with a brand new one. For that, they made a customer for life as a company that stands by their brand is one that has customers that stand by their brand."
            reviewerName="Robert J."
            reviewDate="1 year ago"
          />
          <ReviewCard
            totalStars={5}
            rating={4.5}
            title="Even after a year, I love my Carry-On"
            review="The carry-on has been nothing but phenomenal. It is simple, but holds more than enough for me to store clothes for week. Mine is in blue, it doesn't really show many scuffs. However, those that do show can be easily removed, wiping them off with a cloth. With my original carry on, I had a problem with the wheels. Away was kind enough to send me replacement ones. Those, however, never glided quite as well as the originals so after being frustrated for over a year, I contacted away customer service, who set up to send me a new set of wheels. When they realize that the wheels were out of stock, they instead chose to replace the entire suitcase with a brand new one. For that, they made a customer for life as a company that stands by their brand is one that has customers that stand by their brand."
            reviewerName="Robert J."
            reviewDate="1 year ago"
          />
          <ReviewCard
            totalStars={5}
            rating={4.5}
            title="Even after a year, I love my Carry-On"
            review="The carry-on has been nothing but phenomenal. It is simple, but holds more than enough for me to store clothes for week. Mine is in blue, it doesn't really show many scuffs. However, those that do show can be easily removed, wiping them off with a cloth. With my original carry on, I had a problem with the wheels. Away was kind enough to send me replacement ones. Those, however, never glided quite as well as the originals so after being frustrated for over a year, I contacted away customer service, who set up to send me a new set of wheels. When they realize that the wheels were out of stock, they instead chose to replace the entire suitcase with a brand new one. For that, they made a customer for life as a company that stands by their brand is one that has customers that stand by their brand."
            reviewerName="Robert J."
            reviewDate="1 year ago"
          />
        </div>
      </div>
    </div>
  );
}

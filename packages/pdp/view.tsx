'use client';

import { useFetchSingleProduct } from '@/helpers/hooks/useFetchSingleProduct';
import { useCartStore } from '@/state/cartState';
import TopBar from '@/ui/layout/topBar';
import { useParams } from 'next/navigation';
import { useRef, useState } from 'react';
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const params = useParams();
  const { url } = params;

  const { product, isLoading, error, refetch } = useFetchSingleProduct(url as string);

  const tabs = [
    {
      label: 'Description',
      key: 'description',
      content: <p>{product?.description}</p>,
    },
    {
      label: 'Materials',
      key: 'materials',
      content: <p>{product?.materials}</p>,
    },
    {
      label: 'Warranty and Return Policy',
      key: 'warranty',
      content: <p>{product?.warrantyAndReturnPolicy}</p>,
    },
  ];

  const addToCart = useCartStore((state) => state.addToCart);

  const fieldSectionRef = useRef<HTMLDivElement>(null);

  const handleScrollToFields = () => {
    if (fieldSectionRef.current) {
      const topOffset = fieldSectionRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  const avarageRating = product?.reviews
    ? product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length
    : 0;

  return (
    <div className="pt-3">
      <TopBar slides={slides} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      <div className="h-[600px] flex items-center bg-beige">
        <div className="w-1/2  h-full py-10 px-20">
          <img src={product?.image} alt="" className="w-full h-full aspect-square" />
        </div>
        <div className="w-1/2 h-full py-20 px-10">
          <p>Pillow / Cushions</p>
          <div className="flex items-center justify-between py-6 text-3xl">
            <h1 className="font-bold">{product?.title}</h1>
            <p>${product?.price}</p>
          </div>
          <div className="flex items-center space-x-2">
            <StarRating totalStars={5} rating={4.5} />
            <p>({avarageRating})</p>
            <p>{product?.reviews.length} Reviews</p>
          </div>
          <div className="my-3 w-full h-12 bg-[#ddcdb2] flex items-center justify-center">
            Secure your payment with Stripe
          </div>
          <div className="mb-3">
            <p className="inline">{product?.description}</p>
            <p className="inline ml-2 border-b-2 border-black cursor-pointer" onClick={handleScrollToFields}>
              Read more
            </p>
          </div>
          <button
            onClick={() => addToCart(product as Product)}
            className="bg-smoke hover:bg-transparent hover:text-smoke duration-300 w-full text-white h-16 flex items-center justify-center font-bold">
            Add To Cart $245
          </button>
        </div>
      </div>
      <div className="bg-beige pb-10" ref={fieldSectionRef}>
        <div className="container mx-auto">
          <FieldsSection tabs={tabs} />
        </div>
      </div>

      {/* Reviews Section */}
      <div className="container mx-auto py-10">
        <h1 className="font-bold text-3xl">Reviews</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-20">
            <div className="flex flex-col items-center">
              <p className="text-2xl mb-2">{avarageRating.toFixed(1)}</p>
              <StarRating totalStars={5} rating={5} />
              <p className="mt-2">{product?.reviews.length} Reviews</p>
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
            <span className="flex bg-smoke items-center space-x-2 px-2 py-1 text-sm rounded">
              <TiTick fill="white" className="border-solid border rounded-full" />
              <p className="text-white">{avarageRating * 20}%</p>
            </span>
            <p className="text-sm mb-2 w-48 text-center">of respondents would recommend this to a friend</p>
          </div>
        </div>
      </div>

      <div className="w-full py-10 bg-gray-200">
        <div className="container mx-auto flex flex-col space-y-10">
          {product?.reviews.map((review, i) => {
            return (
              <ReviewCard
                totalStars={review.rating}
                rating={review.rating}
                title={review.summary}
                review={review.review}
                reviewerName={review.reviewer}
                reviewDate={new Date(review.timestamp).toDateString()}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

'use client';

import { useFetchSingleProduct } from '@/helpers/hooks/useFetchSingleProduct';
import { useCartStore } from '@/state/cartState';
import TopBar from '@/ui/layout/topBar';
import { useParams } from 'next/navigation';
import { useRef, useState } from 'react';
import { TiTick } from 'react-icons/ti';

import AddComment from './components/addComment';
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

  const averageRating = product?.reviews
    ? product.reviews.reduce((acc, review) => acc + +review.rating, 0) / product.reviews.length
    : 0;

  return (
    <div className="pt-3">
      <TopBar slides={slides} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />

      {/* Product Section */}
      <div className="flex flex-col lg:flex-row items-center bg-beige">
        <div className="w-full lg:w-1/2 h-full py-10 px-4 lg:px-20">
          <img src={product?.image} alt="Product Image" className="w-full h-auto aspect-square" />
        </div>
        <div className="w-full lg:w-1/2 h-full py-10 px-4 lg:px-10">
          <p className="text-sm">Pillow / Cushions</p>
          <div className="flex items-center justify-between py-6 text-xl lg:text-3xl">
            <h1 className="font-bold">{product?.title}</h1>
            <p>${product?.price}</p>
          </div>
          <div className="flex items-center space-x-2">
            <StarRating totalStars={5} rating={averageRating} />
            <p>({averageRating.toFixed(2)})</p>
            <p>{product?.reviews.length} Reviews</p>
          </div>
          <div className="my-3 w-full h-12 bg-[#ddcdb2] flex items-center justify-center text-center">
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
            className="bg-smoke hover:bg-transparent hover:text-smoke duration-300 w-full text-white h-12 lg:h-16 flex items-center justify-center font-bold">
            Add To Cart
          </button>
        </div>
      </div>

      {/* Fields Section */}
      <div className="bg-beige pb-10" ref={fieldSectionRef}>
        <div className="container mx-auto px-4">
          <FieldsSection tabs={tabs} />
        </div>
      </div>

      {/* Reviews Section */}
      <div className="container mx-auto px-4 py-10">
        <h1 className="font-bold text-xl lg:text-3xl">Reviews</h1>
        <div className="flex flex-col lg:flex-row items-start justify-between space-y-4 lg:space-y-0">
          <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:items-start lg:space-x-20">
            <div className="flex flex-col items-center">
              <p className="text-2xl mb-2">{averageRating.toFixed(2)}</p>
              <StarRating totalStars={5} rating={averageRating} />
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
          <div className="flex flex-col items-center text-center lg:text-left">
            <span className="flex bg-smoke items-center space-x-2 px-2 py-1 text-sm rounded">
              <TiTick fill="white" className="border-solid border rounded-full" />
              <p className="text-white">{(averageRating * 20).toFixed(0)}%</p>
            </span>
            <p className="text-sm mb-2 w-full lg:w-48">of respondents would recommend this to a friend</p>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="w-full py-10 bg-gray-200">
        <div className="container mx-auto px-4 flex flex-col space-y-10">
          <AddComment isAuthenticated={true} product={product as Product} />
          {product?.reviews.map((review, i) => (
            <ReviewCard
              totalStars={5}
              rating={+review.rating}
              title={review.summary}
              review={review.review}
              reviewerName={review.reviewer}
              reviewDate={
                new Date(review.timestamp).toLocaleDateString() + ' ' + new Date(review.timestamp).toLocaleTimeString()
              }
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

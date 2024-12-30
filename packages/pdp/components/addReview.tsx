import { useCreateComment } from '@/helpers/hooks/useCreateComment';
import { useState } from 'react';

import FillableStar from './fillableStar';

export interface AddReviewProps {
  isAuthenticated: boolean;
  product: Product;
}

export default function AddReview({ isAuthenticated, product }: AddReviewProps) {
  const [formState, setFormState] = useState({
    rating: '4.43',
    review: 'Authentic!',
    reviewer: 'Ahmet Oz',
    summary: 'Marvellous',
    product: product,
  });

  const [rating, setRating] = useState<number>(0);
  const { createComment, isLoading, error, success } = useCreateComment();
  return (
    <div className="w-full">
      <h1 className="pb-2 border-smoke w-full border-b-[1px] font-bold text-2xl">Add Comment </h1>
      <div className="py-4">
        <FillableStar totalStars={5} rating={rating} setRating={setRating} />
        <div className="pb-6">
          <h3 className="pb-2">Summary</h3>
          <input
            type="text"
            className="w-full h-10 bg-transparent border-smoke border-solid border-2 focus:outline-none px-2 rounded-md"
          />
        </div>
        <div>
          <h3 className="pb-2">Comment</h3>
          <textarea className="w-full bg-transparent border-smoke border-solid border-2 focus:outline-none  rounded-md h-40 resize-none p-3" />
          <div className="w-full flex items-end justify-end">
            <button
              onClick={() => createComment(formState)}
              className="rounded-md uppercase bg-smoke text-white px-5 py-3 sm:px-7 sm:py-4 font-semibold hover:bg-white hover:text-smoke duration-300 cursor-pointer">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

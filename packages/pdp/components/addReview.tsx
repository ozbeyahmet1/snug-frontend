import { useCreateComment } from '@/helpers/hooks/useCreateComment';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useState } from 'react';

import FillableStar from './fillableStar';

interface FormState {
  rating: string;
  review: string;
  reviewer: string;
  summary: string;
  product: Product;
}
export interface AddReviewProps {
  product: Product;
}

export default function AddReview({ product }: AddReviewProps) {
  const { user } = useUser();

  const [formState, setFormState] = useState({
    rating: '0.00',
    review: '',
    reviewer: user ? (user.nickname as string) : '',
    summary: 'Marvellous',
    product: product,
  });
  console.log('formState', formState);
  const { createComment } = useCreateComment();
  return (
    <div className="w-full">
      <h1 className="pb-2 border-smoke w-full border-b-[1px] font-bold text-2xl">Add Comment </h1>
      <div className="py-4">
        <FillableStar
          totalStars={5}
          rating={+formState.rating}
          setRating={(rating) => setFormState({ ...formState, rating: rating.toString() })}
        />
        <div className="pb-6">
          <h3 className="pb-2">Summary</h3>
          <input
            type="text"
            className="w-full h-10 bg-transparent border-smoke border-solid border-2 focus:outline-none px-2 rounded-md"
            value={formState.summary}
            onChange={(e) => setFormState({ ...formState, summary: e.target.value })}
          />
        </div>
        <div>
          <h3 className="pb-2">Review</h3>
          <textarea
            className="w-full bg-transparent border-smoke border-solid border-2 focus:outline-none  rounded-md h-40 resize-none p-3"
            value={formState.review}
            onChange={(e) => setFormState({ ...formState, review: e.target.value })}
          />
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

import axios from 'axios';
import { useCallback, useState } from 'react';

interface CreateCommentParams {
  rating: string;
  review: string;
  reviewer: string;
  summary: string;
  product: Product;
}

interface UseCreateCommentReturn {
  createComment: (params: CreateCommentParams) => void;
  isLoading: boolean;
  error: string | null;
  success: boolean;
}

export const useCreateComment = (): UseCreateCommentReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const createComment = useCallback(async (params: CreateCommentParams) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post('https://snug-backend.onrender.com/reviews', {
        rating: params.rating,
        review: params.review,
        reviewer: params.reviewer,
        summary: params.summary,
        product: params.product,
      });

      if (response.status !== 201) {
        throw new Error(`Unexpected response status: ${response.status}`);
      }

      setSuccess(true);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || 'An error occurred while creating the comment.');
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    createComment,
    isLoading,
    error,
    success,
  };
};

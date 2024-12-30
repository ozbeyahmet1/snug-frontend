import { useCallback, useEffect, useState } from 'react';

interface UseSingleProductReturn {
  product: Product | null;
  isLoading: boolean;
  error: string | null;
  refetch: (id: string) => void;
}

export const useFetchSingleProduct = (productId: string): UseSingleProductReturn => {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSingleProduct = useCallback(async (id: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://snug-backend.onrender.com/products/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: Product = await response.json();
      setProduct(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (productId) {
      fetchSingleProduct(productId);
    }
  }, [productId, fetchSingleProduct]);

  return {
    product,
    isLoading,
    error,
    refetch: fetchSingleProduct,
  };
};

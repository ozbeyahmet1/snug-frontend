import axios from 'axios';
import { useEffect, useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
  description: string;
  materials: string;
  warrantyAndReturnPolicy: string;
  href: string;
}

interface Order {
  id: number;
  user_id: string;
  total_amount: string;
  created_at: string;
  updated_at: string;
  products: Product[];
}

interface UseFetchOrdersResult {
  orders: Order[];
  loading: boolean;
  error: string | null;
}

/**
 * Custom hook to fetch orders by user ID.
 *
 * @param userId - The ID of the user whose orders will be fetched.
 * @returns An object containing orders, loading, and error state.
 */
export function useFetchOrdersByUserId(userId: string): UseFetchOrdersResult {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) {
      setError('User ID is required');
      setLoading(false);
      return;
    }

    const fetchOrders = async () => {
      try {
        setLoading(true);
        setError(null);

        // Replace with your API endpoint
        const response = await axios.get<Order[]>(`https://snug-backend.onrender.com/orders/${userId}`);

        setOrders(response.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.error || err.message);
        } else {
          setError('Unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userId]);

  return { orders, loading, error };
}

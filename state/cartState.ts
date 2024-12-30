import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * Interface representing a review for a product.
 */
interface Review {
  rating: string;
  review: string;
  reviewer: string;
  summary: string;
  timestamp: string;
}

/**
 * Interface representing a product that can be added to the cart.
 */
interface Product {
  id?: number;
  title: string;
  price: number;
  image: string;
  description: string;
  materials: string;
  warrantyAndReturnPolicy: string;
  href: string;
  reviews: Array<Review>;
}

/**
 * Interface representing an item in the shopping cart.
 */
export interface CartItem {
  product: Product;
  quantity: number;
}

/**
 * Interface representing the cart state and its associated actions.
 */
interface CartState {
  cart: CartItem[];

  /**
   * Adds a product to the cart or increases its quantity if it already exists.
   * @param product - The product to be added to the cart.
   */
  addToCart: (product: Product) => void;

  /**
   * Removes a product from the cart.
   * @param href - The unique identifier (href) of the product to be removed.
   */
  removeFromCart: (href: string) => void;

  /**
   * Increases the quantity of a product in the cart.
   * @param href - The unique identifier (href) of the product to be increased.
   */
  increase: (href: string) => void;

  /**
   * Decreases the quantity of a product in the cart. Removes the product if quantity reaches 0.
   * @param href - The unique identifier (href) of the product to be decreased.
   */
  decrease: (href: string) => void;
}

/**
 * Zustand store for managing the shopping cart state.
 */
export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product: Product) => {
        const existingCartItem = get().cart.find((item) => item.product.href === product.href);

        if (existingCartItem) {
          set({
            cart: get().cart.map((item) =>
              item.product.href === product.href ? { ...item, quantity: item.quantity + 1 } : item,
            ),
          });
        } else {
          set({ cart: [...get().cart, { product, quantity: 1 }] });
        }
      },

      removeFromCart: (href: string) => {
        set({
          cart: get().cart.filter((item) => item.product.href !== href),
        });
      },

      increase: (href: string) => {
        set({
          cart: get().cart.map((item) =>
            item.product.href === href ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        });
      },

      decrease: (href: string) => {
        set({
          cart: get()
            .cart.map((item) => (item.product.href === href ? { ...item, quantity: item.quantity - 1 } : item))
            .filter((item) => item.quantity > 0),
        });
      },
    }),
    {
      name: 'cart-storage', // Key used in localStorage
    },
  ),
);

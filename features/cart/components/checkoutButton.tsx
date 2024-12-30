'use client';

import type { CartItem } from '@/state/cartState';
import React from 'react';

/**
 * Props for the CheckoutButton component.
 *
 * @property {CartItem[]} products - An array of products in the cart.
 */
interface CheckoutButtonProps {
  products: CartItem[];
  background: string;
}

/**
 * CheckoutButton component handles the creation of a checkout session and redirects users to the Stripe Checkout page.
 *
 * @param {CheckoutButtonProps} props - Props containing cart products.
 * @returns {React.FC} - A button component for initiating checkout.
 */
const CheckoutButton: React.FC<CheckoutButtonProps> = ({ products, background }) => {
  /**
   * Initiates the checkout process by creating a checkout session and redirecting to Stripe Checkout.
   *
   * @async
   * @function
   */
  const handleCheckout = async (): Promise<void> => {
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ products }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { url }: { url: string } = (await response.json()) as { url: string };

      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error creating checkout session:', error.message);
      } else {
        console.error('Unknown error occurred during checkout');
      }
    }
  };

  return (
    <button
      className={`p-2 font-bold text-white ${background} rounded-[4px] duration-300`}
      type="button"
      onClick={() => {
        // eslint-disable-next-line no-void
        void (async () => {
          await handleCheckout();
        })();
      }}>
      Checkout
    </button>
  );
};

export default CheckoutButton;

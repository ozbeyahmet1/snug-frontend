import { JSX } from 'react';
import { GoPlus } from 'react-icons/go';
import { HiMinus } from 'react-icons/hi2';

interface CartItemProps {
  /**
   * URL of the product image.
   */
  image: string;

  /**
   * Name of the product.
   */
  name: string;

  /**
   * Price of the product.
   */
  price: number;

  /**
   * Quantity of the product in the cart.
   */
  quantity: number;

  /**
   * Callback to handle quantity increase.
   */
  onIncrease: () => void;

  /**
   * Callback to handle quantity decrease.
   */
  onDecrease: () => void;

  /**
   * Callback to handle removal of the product from the cart.
   */
  onRemove: () => void;
}

/**
 * A reusable component for rendering a product item in the cart.
 *
 * @param {CartItemProps} props - Props containing product details and callbacks.
 * @returns {JSX.Element} A JSX element for the cart item.
 */
export function CartItem({
  image,
  name,
  price,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemProps): JSX.Element {
  return (
    <div className="flex items-start space-x-3">
      {/* Product image */}
      <img src={image} alt={name} className="w-20 h-20 animate-fadeIn" />

      <div className="flex items-start space-x-2">
        {/* Product details */}
        <div className="h-full w-[160px]">
          <p className="font-bold text-sm">{name}</p>
          <p className="text-sm">${price}</p>
        </div>

        {/* Quantity controls and remove button */}
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2 border border-gray-400 p-1 text-xs rounded-[4px] px-2">
            {/* Decrease quantity button */}
            <button onClick={onDecrease} aria-label="Decrease quantity">
              <HiMinus />
            </button>

            {/* Current quantity */}
            <p>{quantity}</p>

            {/* Increase quantity button */}
            <button onClick={onIncrease} aria-label="Increase quantity">
              <GoPlus />
            </button>
          </div>

          {/* Remove button */}
          <button
            className="text-xs text-gray-500 mt-1 hover:border-b duration-300"
            onClick={onRemove}
            aria-label="Remove item from cart">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

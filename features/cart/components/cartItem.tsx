import { GoPlus } from 'react-icons/go';
import { HiMinus } from 'react-icons/hi2';

interface CartItemProps {
  image: string;
  name: string;
  price: number;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

/**
 * Reusable component for rendering a product item in the cart.
 *
 * @param props - Props containing product details and callbacks.
 */
export function CartItem({ image, name, price, quantity, onIncrease, onDecrease, onRemove }: CartItemProps) {
  return (
    <div className="flex items-start space-x-3">
      <img src={image} alt={name} className="w-20 h-20" />
      <div className="flex items-start space-x-2">
        <div className="h-full w-[160px]">
          <p className="font-bold text-sm">{name}</p>
          <p className="text-sm">${price}</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2 border border-[#9a9a9a] p-1 text-xs rounded-[4px] px-2">
            <button onClick={onDecrease} aria-label="Decrease quantity">
              <HiMinus />
            </button>
            <p>{quantity}</p>
            <button onClick={onIncrease} aria-label="Increase quantity">
              <GoPlus />
            </button>
          </div>
          <button className="text-xs text-gray-500 mt-1 hover:border-b duration-300" onClick={onRemove}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

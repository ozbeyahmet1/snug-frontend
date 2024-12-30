'use client';

import CheckoutForm from '@/features/cart/components/checkoutButton';
import { useCartStore } from '@/state/cartState';
import { Progress } from '@/ui/libComponents/progress';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/ui/libComponents/sheet';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PropsWithChildren } from 'react';
import { IoClose, IoGiftOutline } from 'react-icons/io5';
import { LiaShippingFastSolid } from 'react-icons/lia';

import { CartItem } from './components/cartItem';

/**
 * Component for rendering the cart icons in the header.
 */
function CartIcons() {
  return (
    <div className="flex items-center w-full mt-2 px-3">
      <div className="flex-1 flex items-end justify-end text-xs text-center">
        <LiaShippingFastSolid size={20} />
      </div>
      <div className="flex-1 flex items-end justify-end"></div>
      <div className="flex-1 flex items-end justify-end"></div>
      <div className="flex-1 flex items-end justify-end">
        <IoGiftOutline />
      </div>
    </div>
  );
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || '');
export function CartDrawer({ children }: PropsWithChildren) {
  const { cart, increase, decrease, removeFromCart } = useCartStore();
  const cartTotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  return (
    <Sheet modal={true}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="z-[9999] focus:outline-none p-0 max-sm:w-[90%]">
        <SheetHeader>
          <SheetTitle className="hidden"></SheetTitle>
        </SheetHeader>

        <div className="flex flex-col items-center justify-center">
          <span className="flex items-center space-x-1 text-sm pt-3">
            <p>MY CART</p>
            <p className="text-gray-500">(6)</p>
          </span>
          <div className="px-3 w-full">
            <Progress value={40} className="h-3 mt-3 " />
          </div>
          <CartIcons />
        </div>

        <div className="flex flex-col py-5 px-3">
          {cart.map((item, i) => (
            <CartItem
              key={i}
              image={item.product.image}
              name={item.product.title}
              price={item.product.price}
              quantity={item.quantity}
              onIncrease={() => increase(item.product.href)}
              onDecrease={() => decrease(item.product.href)}
              onRemove={() => removeFromCart(item.product.href)}
            />
          ))}
        </div>
        <div className="flex justify-end flex-col text-sm">
          <div className=" border-y-[1px] p-3 flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <p>Subtotal:</p>
              <p className="font-bold">${cartTotal}</p>
            </div>
            <Elements stripe={stripePromise}>
              <CheckoutForm products={cart} />
            </Elements>
          </div>
        </div>
        <SheetClose className="absolute left-5 top-3">
          <IoClose />
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}

'use client';

import { Progress } from '@/components/ui/progress';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useCartStore } from '@/state/cartState';
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
      <div className="flex-1 flex items-end justify-end">
        <IoGiftOutline />
      </div>
      <div className="flex-1 flex items-end justify-end">
        <IoGiftOutline />
      </div>
      <div className="flex-1 flex items-end justify-end">
        <IoGiftOutline />
      </div>
    </div>
  );
}

export function CartDrawer({ children }: PropsWithChildren) {
  const { cart, increase, decrease, removeFromCart } = useCartStore();
  const cartTotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  return (
    <Sheet modal={true}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="z-[9999] focus:outline-none p-0">
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
            <button className="bg-red-500 p-2 rounded-[4px] text-white font-bold">Checkout</button>
          </div>
        </div>
        <SheetClose className="absolute left-5 top-3">
          <IoClose />
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}

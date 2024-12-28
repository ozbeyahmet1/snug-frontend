'use client';

import { Progress } from '@/components/ui/progress';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { PropsWithChildren, useState } from 'react';
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
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image:
        'https://uk.bimago.media/media/catalog/image/view/product/60821/role/image/size/1500x2240/type/ft-osmr-wiz2/e31e50018a2a25bf14ba5f3f0692d804.webp',
      name: '100% Grass-fed Beef Bone Broth',
      price: 46.94,
      quantity: 1,
    },
  ]);

  const handleIncrease = (id: number) => {
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)));
  };

  const handleDecrease = (id: number) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)),
    );
  };

  const handleRemove = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };
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
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              onIncrease={() => handleIncrease(item.id)}
              onDecrease={() => handleDecrease(item.id)}
              onRemove={() => handleRemove(item.id)}
            />
          ))}
        </div>
        <div className="flex justify-end flex-col text-sm">
          <div className="border-2 border-t p-3 flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <p>Subtotal:</p>
              <p className="font-bold">$47.94</p>
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

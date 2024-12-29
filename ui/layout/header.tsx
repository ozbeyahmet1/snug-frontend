import pillow from '@/assets/pillow.svg';
import { CartDrawer } from '@/features/cart/view';
import Image from 'next/image';
import { JSX, PropsWithChildren } from 'react';
import { IoMenuOutline, IoSearchOutline } from 'react-icons/io5';

import { HamburgerMenu } from './hamburgerMenu';
import Logo from './logo';
import { NavMenu } from './navMenu';

/**
 * Header component - Displays the top navigation bar for the website.
 *
 * @param {PropsWithChildren} props - Props passed to the Header component.
 * @returns {JSX.Element} The rendered Header component.
 */
export default function Header({}: PropsWithChildren): JSX.Element {
  return (
    <header className="w-full py-3 mt-8 fixed top-0 bg-white z-[999] shadow-md">
      <div className="max-sm:px-5 container mx-auto flex items-center justify-between">
        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden">
          <HamburgerMenu>
            <IoMenuOutline size={30} />
          </HamburgerMenu>
        </div>

        {/* Website Logo */}
        <Logo />

        {/* Desktop Navigation Menu */}
        <NavMenu className="hidden lg:flex z-[99999] relative" />

        {/* Right-side Actions */}
        <div className="flex items-center space-x-2">
          {/* Log In Button (visible on large screens) */}
          <p className="uppercase hidden lg:flex">Log In</p>

          {/* Search Icon */}
          <IoSearchOutline className="cursor-pointer" />

          {/* Pillow Icon with Cart Count */}
          <CartDrawer
            children={
              <div className="flex items-center relative cursor-pointer">
                <Image src={pillow} alt="Pillow" width={28} height={28} />
                {/* Cart Count Indicator */}
                <p className="-ml-[23px] -mt-1 text-[10px] size-5 rounded-full text-center p-1 font-bold">11</p>
              </div>
            }
          />
        </div>
      </div>
    </header>
  );
}

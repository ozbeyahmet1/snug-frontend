import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { PropsWithChildren } from 'react';

export function HamburgerMenu({ children }: PropsWithChildren) {
  const COMPONENT_LINKS = [
    {
      title: 'Luxury Pillows',
      href: '/products/luxury-pillows',
      description: 'Experience unmatched comfort with our premium collection of luxury pillows.',
    },
    {
      title: 'Orthopedic Pillows',
      href: '/products/orthopedic-pillows',
      description: 'Perfect support for your neck and back with our ergonomic orthopedic pillows.',
    },
    {
      title: 'Decorative Pillows',
      href: '/products/decorative-pillows',
      description: 'Add style and personality to your home with our beautiful decorative pillows.',
    },
    {
      title: 'Memory Foam Pillows',
      href: '/products/memory-foam-pillows',
      description: 'Enjoy superior comfort with our adaptive memory foam pillows.',
    },
    {
      title: 'Cooling Pillows',
      href: '/products/cooling-pillows',
      description: 'Stay cool all night with our advanced cooling pillow technology.',
    },
    {
      title: 'Travel Pillows',
      href: '/products/travel-pillows',
      description: 'Compact and convenient pillows for ultimate comfort on the go.',
    },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side="left" className="z-[99999]">
        <SheetHeader>
          <SheetTitle>Our Pillow Collection</SheetTitle>
          <SheetDescription>
            Browse through our exclusive pillow categories to find the perfect match for your comfort and style.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col items-start space-y-4  mt-4">
          {COMPONENT_LINKS.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="block w-full p-4 rounded-md border border-gray-200 hover:bg-gray-100 transition">
              <h3 className="text-lg font-semibold">{link.title}</h3>
            </a>
          ))}
        </div>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

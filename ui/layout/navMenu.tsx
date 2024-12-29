'use client';

import { PropsWithClassName } from '@/helpers/types';
import { cn } from '@/helpers/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/ui/libComponents/navigation-menu';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

export interface MobileMenuLink {
  title: string;
  href: string;
  description: string;
}

export function NavMenu({
  className,
  mobileMenuLinks,
}: PropsWithClassName<{ mobileMenuLinks: Array<MobileMenuLink> }>): React.JSX.Element {
  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
        {/* "Best Sellers" Section */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-semibold">BEST SELLERS</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted no-underline outline-none focus:shadow-md"
                    href="/">
                    <div className="h-full w-full bg-red-600"></div>
                    <Image
                      src="https://res.cloudinary.com/dhx4s2n3l/image/upload/v1735182113/strata-mood-1_j6cxus.jpg"
                      width={400}
                      height={400}
                      alt=""
                    />
                    <div className="mb-2 mt-4 text-lg font-medium">Top Picks</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Explore our most popular pillows loved by thousands of customers.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/products/luxury-pillows" title="Luxury Pillows">
                Premium quality pillows for ultimate relaxation and elegance.
              </ListItem>
              <ListItem href="/products/orthopedic-pillows" title="Orthopedic Pillows">
                Supportive and comfortable for a healthier sleep.
              </ListItem>
              <ListItem href="/products/decorative-pillows" title="Decorative Pillows">
                Stylish designs to enhance your living space.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* "Pillows" Section */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm font-semibold">PILLOWS</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {mobileMenuLinks.map((mobileMenuLink) => (
                <ListItem key={mobileMenuLink.title} title={mobileMenuLink.title} href={mobileMenuLink.href}>
                  {mobileMenuLink.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* "Sale" Section */}
        <NavigationMenuItem>
          <Link href="/sale" legacyBehavior passHref>
            <NavigationMenuLink className="text-sm font-semibold text-red-500">SALE</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className,
            )}
            {...props}>
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = 'ListItem';

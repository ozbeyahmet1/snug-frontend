import { FavoriteCard } from '@/packages/homepage/components/favoriteCard';
import { Playball } from 'next/font/google';

// Initialize the Playball font with specific configurations
const greatVibes = Playball({
  subsets: ['latin'],
  weight: '400',
});

/**
 * FavoritesSection component displays a section containing a list of favorite items.
 *
 * @returns A JSX element for the Favorites section.
 */
export default function FavoritesSection() {
  // Data for the favorite items
  const favoriteItems = [
    {
      title: 'The Bigger Carry-on',
      price: '$295',
      imageSrc: 'https://res.cloudinary.com/dhx4s2n3l/image/upload/v1735183620/PE932867-removebg-preview_d8meop.png',
      bgOpacity: 25,
      href: 'the-bigger-carry-on',
    },
    {
      title: 'The Bigger Carry-on',
      price: '$295',
      imageSrc: 'https://res.cloudinary.com/dhx4s2n3l/image/upload/v1735183620/PE932867-removebg-preview_d8meop.png',
      bgOpacity: 50,
      href: 'the-bigger-carry-on',
    },
    {
      title: 'The Bigger Carry-on',
      price: '$295',
      imageSrc: 'https://res.cloudinary.com/dhx4s2n3l/image/upload/v1735183620/PE932867-removebg-preview_d8meop.png',
      bgOpacity: 75,
      href: 'the-bigger-carry-on',
    },
    {
      title: 'The Bigger Carry-on',
      price: '$295',
      imageSrc: 'https://res.cloudinary.com/dhx4s2n3l/image/upload/v1735183620/PE932867-removebg-preview_d8meop.png',
      bgOpacity: 100,
      href: 'the-bigger-carry-on',
    },
  ];

  return (
    <section className="container flex items-center flex-col mx-auto py-20">
      <p className={`text-2xl ${greatVibes.className}`}>A few our</p>
      <h3 className="uppercase text-[60px]">Favorites</h3>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-[2px] justify-center w-full">
        {favoriteItems.map((item, index) => (
          <FavoriteCard
            key={index}
            title={item.title}
            price={item.price}
            imageSrc={item.imageSrc}
            bgOpacity={item.bgOpacity}
            href={item.href}
          />
        ))}
      </div>
    </section>
  );
}

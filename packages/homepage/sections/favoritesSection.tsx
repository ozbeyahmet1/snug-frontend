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
const bgOpacityClass = ['bg-opacity-25', 'bg-opacity-50', 'bg-opacity-75', 'bg-opacity-100'];
export default function FavoritesSection({ favoriteItems }: { favoriteItems: Array<Product> }) {
  return (
    <section className="container flex items-center flex-col mx-auto py-20">
      <p className={`text-2xl ${greatVibes.className}`}>A few our</p>
      <h3 className="uppercase text-[60px]">Favorites</h3>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-[2px] justify-center w-full">
        {favoriteItems?.map((item, index) => <FavoriteCard key={index} bgOpacity={bgOpacityClass[index]} {...item} />)}
      </div>
    </section>
  );
}

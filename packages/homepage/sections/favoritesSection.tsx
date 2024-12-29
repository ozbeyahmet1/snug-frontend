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

export interface FavoritesSectionProps {
  header: string;
  subheader: string;
}
const bgOpacityClass = ['bg-opacity-25', 'bg-opacity-50', 'bg-opacity-75', 'bg-opacity-100'];
export default function FavoritesSection({
  favoriteItems,
  header,
  subheader,
}: { favoriteItems: Array<Product> } & FavoritesSectionProps) {
  return (
    <section className="container flex items-center flex-col mx-auto py-20">
      <p className={`text-2xl ${greatVibes.className}`}>{header}</p>
      <h3 className="uppercase text-[60px]">{subheader}</h3>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-[2px] justify-center w-full">
        {favoriteItems?.map((item, index) => <FavoriteCard key={index} bgOpacity={bgOpacityClass[index]} {...item} />)}
      </div>
    </section>
  );
}

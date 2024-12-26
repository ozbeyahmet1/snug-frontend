import Image from 'next/image';

/**
 * Represents a single favorite item card.
 *
 * @param props - The props for the FavoriteCard component.
 * @param props.title - The title of the favorite item.
 * @param props.price - The price of the favorite item.
 * @param props.imageSrc - The URL of the image source.
 * @param props.bgOpacity - The background opacity for the card.
 */
export function FavoriteCard({
  title,
  price,
  imageSrc,
  bgOpacity,
}: {
  title: string;
  price: string;
  imageSrc: string;
  bgOpacity: number;
}) {
  return (
    <div className="flex-1 flex flex-col group cursor-pointer">
      <div className={`bg-[#DEDDD4] h-80 lg:h-96 flex items-center justify-center bg-opacity-${bgOpacity}`}>
        <Image
          height={250}
          width={250}
          alt={title}
          src={imageSrc}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h3 className="mt-3 text-lg">{title}</h3>
      <p className="font-bold">{price}</p>
    </div>
  );
}

import { Space_Grotesk } from 'next/font/google';
import Link from 'next/link';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Logo() {
  return (
    <Link
      href="/"
      className={`${spaceGrotesk.className} bg-smoke text-white font-bold w-fit text-xl px-4 py-1 cursor-pointer`}>
      SNUG
    </Link>
  );
}

import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Logo() {
  return <div className={`${spaceGrotesk.className} bg-black text-white font-bold w-fit text-xl px-4 py-1`}>SNUG</div>;
}

import Footer from '@/ui/layout/footer';
import Header from '@/ui/layout/header';
import { Toaster } from '@/ui/libComponents/sonner';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';

import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Snug - Premium Pillows for Comfortable Sleep',
  description:
    'Discover the ultimate sleep experience with Snug. Premium quality pillows, stylish designs, and ergonomic solutions for a better night’s sleep.',
  keywords: [
    'pillows',
    'premium pillows',
    'sleep comfort',
    'ergonomic pillows',
    'stylish pillow designs',
    'comfortable sleep',
    'cozy pillows',
  ],
  openGraph: {
    title: 'Snug - Premium Pillows for Comfortable Sleep',
    description:
      'Discover the ultimate sleep experience with Snug. Premium quality pillows, stylish designs, and ergonomic solutions for a better night’s sleep.',
    url: 'https://www.snug.com',
    type: 'website',
    images: [
      {
        url: 'https://www.snug.com/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Snug Pillows - Premium Sleep Experience',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Snug - Premium Pillows for Comfortable Sleep',
    description: 'Experience better sleep with premium and ergonomic pillows from Snug.',
    images: ['https://www.snug.com/assets/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} antialiased pt-20`}>
        <UserProvider>
          <Header />
          {children}
          <Toaster />
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}

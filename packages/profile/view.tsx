'use client';

import pillow from '@/assets/pillow.svg';
import { useFetchOrdersByUserId } from '@/helpers/hooks/useFetchOrdersByUser';
import TopBar from '@/ui/layout/topBar';
import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IoIosLogOut } from 'react-icons/io';

import OrderCard from './components/orderCard';

export interface IAppProps {}

export default function ProfilePageView(props: IAppProps) {
  const { user, isLoading } = useUser();
  const userId = (user?.sub as string)?.replace('auth0|', '');
  const slides = [
    {
      content: 'Send the gift that everyone will love',
      bgColor: 'bg-red-700',
    },
    {
      content: 'New styles added: Save up to 50% off on select gifts',
      bgColor: 'bg-blue-700',
    },
    {
      content: 'Shop now. Pay with Stripe',
      bgColor: 'bg-green-900',
    },
  ];
  const { orders, loading, error } = useFetchOrdersByUserId(userId);
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div>
      <TopBar slides={slides} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      <div className="container mx-auto py-12 max-sm:px-6">
        <div className="w-full flex justify-between items-center max-sm:space-y-2">
          <div className="flex items-center justify-start space-x-4">
            <img src={user?.picture as string} alt="" className="w-12 h-12 lg:w-20 lg:h-20 rounded-full" />
            <div>
              <h1 className="lg:text-2xl font-bold">{user?.name}</h1>
              <p className="text-gray-600">{user?.nickname}</p>
            </div>
          </div>
          <Link href="/api/auth/logout">
            <div className="flex items-center justify-end space-x-2">
              <IoIosLogOut size={32} />
              <p className="lg:text-xl max-sm:hidden">Logout</p>
            </div>
          </Link>
        </div>
        {loading ? (
          <div className="text-lg text-gray-500 h-60 flex items-center w-full justify-center">
            <Image src={pillow} alt="" width={100} height={100} className="animate-rotate-step" />
          </div>
        ) : (
          <div className="">
            <h1 className="text-3xl pt-8 pb-4">My Orders</h1>
            <div className="flex flex-col space-y-4">
              {orders.map((test, i) => {
                return (
                  <OrderCard
                    key={i}
                    totalAmount={parseInt(test.total_amount)}
                    date={new Date(test.created_at).toLocaleDateString()}
                    products={test.products}
                    orderId={(i + 1).toString()}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

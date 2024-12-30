'use client';

import { useFetchOrdersByUserId } from '@/helpers/hooks/useFetchOrdersByUser';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import { IoIosLogOut } from 'react-icons/io';

import OrderCard from './components/orderCard';

export interface IAppProps {}

export default function ProfilePageView(props: IAppProps) {
  const { user, isLoading } = useUser();
  const { orders, loading, error } = useFetchOrdersByUserId('6771f0e0af57e31773bf212d');
  return (
    <div className="container mx-auto pt-12">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center justify-start space-x-4">
          <img src={user?.picture as string} alt="" className="w-20 h-20 rounded-full" />
          <div>
            <h1 className="text-2xl font-bold">{user?.name}</h1>
            <p className="text-gray-600">This is the profile page.</p>
          </div>
        </div>
        <Link href="/api/auth/logout">
          <div className="flex items-center justify-end space-x-2">
            <IoIosLogOut size={32} />
            <p className="text-xl">Logout</p>
          </div>
        </Link>
      </div>
      <div className="">
        <h1 className="text-3xl pt-8 pb-4">My Orders</h1>
        <div className="flex flex-col space-y-4">
          {orders.map((test, i) => {
            return (
              <OrderCard
                key={i}
                totalAmount={parseInt(test.total_amount)}
                date={test.created_at}
                products={test.products}
                orderId={(i + 1).toString()}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

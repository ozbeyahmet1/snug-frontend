'use client';

import Link from 'next/link';
import { useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
  description: string;
  materials: string;
  warrantyAndReturnPolicy: string;
  href: string;
}

export interface IAppProps {
  orderId: string;
  totalAmount: number;
  date: string;
  products: Array<Product>;
}

export default function OrderCard({ orderId, totalAmount, date, products }: IAppProps) {
  const [showProducts, setShowProducts] = useState(false);
  return (
    <div className="p-2 lg:p-5 shadow-2xl w-full  bg-beige bg-opacity-70 border-smoke border-solid border-2 rounded-md">
      <div className="flex items-start justify-between">
        <h1 className="text-xl lg:text-3xl font-bold">Order #{orderId}</h1>
        <div>
          <h2 className="lg:text-2xl">${totalAmount}</h2>
          <h3 className="text-xs">{date}</h3>
          {!showProducts ? (
            <button
              onClick={() => setShowProducts(true)}
              className="text-xs font-bold text-blue-600 cursor-pointer border-b pb-[1px] border-smoke border-solid w-fit">
              Show products
            </button>
          ) : (
            <button
              onClick={() => setShowProducts(false)}
              className="text-xs font-bold text-blue-600 cursor-pointer border-b pb-[1px] border-smoke border-solid w-fit">
              Hide Products
            </button>
          )}
        </div>
      </div>
      {showProducts && (
        <div className="flex flex-col space-y-4 pt-6">
          {products.map((product, i) => {
            return (
              <div
                key={i}
                className="flex items-start justify-between border-2 bg-beige rounded-lg p-5 border-smoke border-solid">
                <img src={product.image} className="w-16 h-16 lg:w-28 lg:h-28" alt="" />
                <div className="text-xl flex flex-col items-end">
                  <h2 className="text-lg lg:text-3xl">{product.title}</h2>
                  <h3 className="text-base lg:text-xl">${product.price}</h3>

                  <Link
                    href={'product/' + product.href}
                    className="px-5 py-2 bg-black text-white rounded-md text-sm lg:text-base hover:bg-white hover:text-smoke duration-300">
                    See product
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

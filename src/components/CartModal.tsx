'use client';

import Image from 'next/image';

export default function CartModal() {
 const cartItems = true;

 return (
  <div className='w-max absolute p-4 rounded-md shadow-md bg-white top-12 right-0 flex flex-col gap-6 z-20'>
   {!cartItems ? (
    <div className=''>Cart is empty</div>
   ) : (
    <>
     <h2 className='text-xl'>Shopping Cart</h2>
     <div className='flex flex-col gap-8'>
      {/* Cart Item */}
      <div className='flex gap-4'>
       <Image
        src='/slider/02.jpeg'
        alt=''
        width={72}
        height={96}
        className='object-cover rounded-md'
       />

       <div className='flex flex-col justify-between w-full'>
        {/* Top item */}

        {/* Item title */}
        <div className='flex items-center justify-between gap-8'>
         <h3 className='font-semibold'>Product Name</h3>
         <div className='p-1 bg-gray-50 rounded-sm'>$49</div>
        </div>

        {/* Item desc */}
        <div className='text-sm text-gray-500'>available</div>

        {/* Item cart */}
        <div className='flex justify-between text-sm'>
         <span className='text-gray-500'>Qty. 2</span>
         <span className='text-blue-500'>Remove</span>
        </div>
       </div>
      </div>
     </div>

     {/* Cart Bottom */}
     <div className=''>
      <div className='flex items-center justify-between font-semibold'>
       <span className=''>Subtotal</span>
       <span className=''>$49</span>
      </div>
      <p className='text-gray-500 text-sm mt-2 mb-4'>
       Shipping and taxes calculated at chechout.
      </p>
      <div className='flex justify-between text-sm'>
       <button className='rounded-md py-3 px-4 ring-1 ring-gray-300'>
        View Cart
       </button>
       <button className='rounded-md py-3 px-4 bg-black text-white'>
        Checkout
       </button>
      </div>
     </div>
    </>
   )}
  </div>
 );
}

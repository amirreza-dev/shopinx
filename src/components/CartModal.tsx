'use client';

import Image from 'next/image';

export default function CartModal() {
 const cartItems = false;
 return (
  <div className='absolute p-4 rounded-md shadow-md bg-white top-12 right-0 flex flex-col gap-6 z-20'>
   {!cartItems ? (
    <div className=''>Cart is empty</div>
   ) : (
    <div className=''>
     <Image
      src='/woman.png'
      alt=''
      width={72}
      height={96}
      className='object-cover rounded-md'
     />
    </div>
   )}
  </div>
 );
}

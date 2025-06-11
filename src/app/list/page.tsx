import Image from 'next/image';

import Filter from '@/components/Filter';
import ProductList from '@/components/ProductList';

export default function ListPage() {
 return (
  <section className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
   {/* Camping */}
   <div className='hidden bg-pink-50 sm:flex justify-between px-4 h-64'>
    <div className='w-2/3 flex flex-col items-center justify-center gap-8'>
     <h3 className='text-4xl font-semibold leading-[48px] text-gray-700'>
      Grap up to 50% off on <br /> Selected Products
     </h3>
     <button className='rounded-3xl bg-rose-500 text-white w-max px-5 py-3 text-sm'>
      Buy Now
     </button>
    </div>
    <div className='w-1/3 relative'>
     <Image src='/woman.png' alt='' fill className='object-contain' />
    </div>
   </div>

   {/* Filter */}
   <Filter />

   {/* Products */}
   <h1 className='mt-12 text-xl font-semibold'>Shoes For You!</h1>
   <ProductList />
  </section>
 );
}

import Image from 'next/image';
import Link from 'next/link';

export default function ProductList() {
 return (
  <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
   <Link
    href='/test'
    className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'
   >
    <div className='relative w-full h-80'>
     <Image
      src='/slider/01.jpeg'
      alt=''
      fill
      sizes='25vw'
      className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-out duration-500'
     />

     <Image
      src='/slider/02.jpeg'
      alt=''
      fill
      sizes='25vw'
      className='absolute object-cover rounded-md'
     />
    </div>
    <div className='flex justify-between'>
     <span className='font-medium'>Product Name</span>
     <span className='font-semibold'>$49</span>
    </div>

    <div className='text-sm text-gray-500'>My decsription</div>
    <button className='w-max rounded-2xl ring-1 ring-rose-500 text-rose-500 py-2 px-4 text-xs hover:bg-rose-500 hover:text-white'>
     Add to cart
    </button>
   </Link>

   <Link
    href='/test'
    className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'
   >
    <div className='relative w-full h-80'>
     <Image
      src='/slider/01.jpeg'
      alt=''
      fill
      sizes='25vw'
      className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-out duration-500'
     />

     <Image
      src='/slider/02.jpeg'
      alt=''
      fill
      sizes='25vw'
      className='absolute object-cover rounded-md'
     />
    </div>
    <div className='flex justify-between'>
     <span className='font-medium'>Product Name</span>
     <span className='font-semibold'>$49</span>
    </div>

    <div className='text-sm text-gray-500'>My decsription</div>
    <button className='w-max rounded-2xl ring-1 ring-rose-500 text-rose-500 py-2 px-4 text-xs hover:bg-rose-500 hover:text-white'>
     Add to cart
    </button>
   </Link>

   <Link
    href='/test'
    className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'
   >
    <div className='relative w-full h-80'>
     <Image
      src='/slider/01.jpeg'
      alt=''
      fill
      sizes='25vw'
      className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-out duration-500'
     />

     <Image
      src='/slider/02.jpeg'
      alt=''
      fill
      sizes='25vw'
      className='absolute object-cover rounded-md'
     />
    </div>
    <div className='flex justify-between'>
     <span className='font-medium'>Product Name</span>
     <span className='font-semibold'>$49</span>
    </div>

    <div className='text-sm text-gray-500'>My decsription</div>
    <button className='w-max rounded-2xl ring-1 ring-rose-500 text-rose-500 py-2 px-4 text-xs hover:bg-rose-500 hover:text-white'>
     Add to cart
    </button>
   </Link>

   <Link
    href='/test'
    className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'
   >
    <div className='relative w-full h-80'>
     <Image
      src='/slider/01.jpeg'
      alt=''
      fill
      sizes='25vw'
      className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-out duration-500'
     />

     <Image
      src='/slider/02.jpeg'
      alt=''
      fill
      sizes='25vw'
      className='absolute object-cover rounded-md'
     />
    </div>
    <div className='flex justify-between'>
     <span className='font-medium'>Product Name</span>
     <span className='font-semibold'>$49</span>
    </div>

    <div className='text-sm text-gray-500'>My decsription</div>
    <button className='w-max rounded-2xl ring-1 ring-rose-500 text-rose-500 py-2 px-4 text-xs hover:bg-rose-500 hover:text-white'>
     Add to cart
    </button>
   </Link>
  </div>
 );
}

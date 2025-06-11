'use client';

import Image from 'next/image';
import { useState } from 'react';

const images = [
 {
  id: 1,
  url: '/01.jpeg',
 },
 {
  id: 2,
  url: '/02.jpeg',
 },
 {
  id: 3,
  url: '/03.jpeg',
 },
 {
  id: 4,
  url: '/04.jpeg',
 },
];

export default function ProductImages() {
 const [index, setIndex] = useState(0);

 return (
  <div className=''>
   <div className='relative h-[500px]'>
    <Image
     src={images[index].url}
     alt=''
     fill
     sizes='50vw'
     className='object-cover rounded-md'
    />
   </div>

   <div className='flex justify-between gap-4 mt-8'>
    {images.map((img, i) => (
     <div
      key={img.id}
      className='w-1/4 h-32 relative gap-4 mt-8 cursor-pointer'
      onClick={() => setIndex(i)}
     >
      <Image
       src={img.url}
       alt=''
       fill
       sizes='30vw'
       className='object-cover rounded-md'
      />
     </div>
    ))}
   </div>
  </div>
 );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

const categorySlider = [
 {
  id: 1,
  href: '/list?cat=test',
  img: '/slider/02.jpeg',
  name: 'Category Name',
 },
 {
  id: 2,
  href: '/list?cat=test',
  img: '/slider/02.jpeg',
  name: 'Category Name',
 },
 {
  id: 3,
  href: '/list?cat=test',
  img: '/slider/02.jpeg',
  name: 'Category Name',
 },
 {
  id: 4,
  href: '/list?cat=test',
  img: '/slider/02.jpeg',
  name: 'Category Name',
 },
 {
  id: 5,
  href: '/list?cat=test',
  img: '/slider/02.jpeg',
  name: 'Category Name',
 },
 {
  id: 6,
  href: '/list?cat=test',
  img: '/slider/02.jpeg',
  name: 'Category Name',
 },
 {
  id: 7,
  href: '/list?cat=test',
  img: '/slider/02.jpeg',
  name: 'Category Name',
 },
 {
  id: 8,
  href: '/list?cat=test',
  img: '/slider/02.jpeg',
  name: 'Category Name',
 },
 {
  id: 9,
  href: '/list?cat=test',
  img: '/slider/02.jpeg',
  name: 'Category Name',
 },
 {
  id: 10,
  href: '/list?cat=test',
  img: '/slider/02.jpeg',
  name: 'Category Name',
 },
];

export default function CategoryList() {
 return (
  <div className='px-4 overflow-x-scroll scrollbar-hide'>
   <div className='flex gap-4 md:gap-8'>
    <Swiper
     slidesPerView={1}
     spaceBetween={30}
     breakpoints={{
      640: {
       slidesPerView: 2,
       spaceBetween: 20,
      },
      768: {
       slidesPerView: 4,
       spaceBetween: 40,
      },
      1024: {
       slidesPerView: 6,
       spaceBetween: 50,
      },
     }}
     modules={[FreeMode]}
     className='mySwiper'
    >
     {categorySlider.map(({ id, href, img, name }) => (
      <SwiperSlide key={id}>
       <Link
        href={href}
        className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'
       >
        <div className='relative bg-slate-100 w-full h-96'>
         <Image src={img} alt='' fill sizes='100%' />
        </div>

        <h2 className='mt-8 tracking-wide font-light'>{name}</h2>
       </Link>
      </SwiperSlide>
     ))}
    </Swiper>
   </div>
  </div>
 );
}

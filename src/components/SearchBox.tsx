'use client';

import { Search } from 'iconoir-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function SearchBox() {
 const router = useRouter();

 const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault;
  const formData = new FormData(e.currentTarget);
  const name = formData.get('name') as string;

  if (name) {
   router.push(`/list?name=${name}`);
  }
 };

 return (
  <form
   className='flex flex-1 items-center justify-between gap-4 p-2 rounded-md bg-gray-100'
   onSubmit={handleSearch}
  >
   <input
    type='text'
    name='name'
    placeholder='Search'
    className='flex-1 bg-transparent outline-none'
   />
   <button className='cursor-pointer'>
    <Search width={18} height={18} />
   </button>
  </form>
 );
}

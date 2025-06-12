'use client';

import { useState } from 'react';

import { Bell, Cart, UserCircle } from 'iconoir-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CartModal from './CartModal';

export default function NavIcons() {
 const [isProfileOpen, setIsProfileOpen] = useState(false);
 const [isCartOpen, setIsCartOpen] = useState(false);

 const router = useRouter();

 const isLoggedIn = false;

 const handleProfile = () => {
  if (!isLoggedIn) {
   router.push('/login');
  }
  setIsProfileOpen((prev) => !prev);
 };

 return (
  <div className='flex justify-between items-center gap-4 xl:gap-6 relative'>
   <UserCircle
    width={22}
    height={22}
    onClick={handleProfile}
    className='cursor-pointer'
   />
   {isProfileOpen && (
    <div className='absolute p-4 rounded-md top-12 left-0 text-sm shadow-md z-20'>
     <Link href='/'>Profile</Link>
     <div className='mt-2 cursor-pointer'>Logout</div>
    </div>
   )}

   <Bell width={22} height={22} className='cursor-pointer' />

   <div
    className='relative cursor-pointer'
    onClick={() => setIsCartOpen((prev) => !prev)}
   >
    <Cart width={22} height={22} />
    <div className='absolute -top-4 -right-4 w-6 h-6 bg-rose-500 text-white rounded-full text-sm flex items-center justify-center'>
     2
    </div>
   </div>
   {isCartOpen && <CartModal />}
  </div>
 );
}

import Link from 'next/link';

import Menu from './Menu';
import Image from 'next/image';
import SearchBox from './SearchBox';
import NavIcons from './NavIcons';

export default function Navbar() {
 return (
  <>
   <div className='h-20 bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
    <div className='h-full flex items-center justify-between md:hidden'>
     {/* Mobile section */}

     <Link href='/'>
      <div className='text-2xl tracking-wide'>Shopinx</div>
     </Link>
     <Menu />
    </div>

    {/* Bigger screens */}
    <div className='hidden md:flex items-center h-full justify-between gap-8'>
     {/* Left */}
     <div className='w-1/3 xl:w-1/2 flex items-center gap-12'>
      <Link href='/' className='flex items-center gap-3'>
       <Image src='/logo.png' alt='Shopinx logo' width={24} height={24} />
       <div className='text-2xl tracking-wide'>Shopinx</div>
      </Link>
      <div className='hidden xl:flex gap-4'>
       <Link href='/'>Home</Link>
       <Link href='/'>Shop</Link>
       <Link href='/'>Deals</Link>
       <Link href='/'>About</Link>
       <Link href='/'>Contact</Link>
      </div>
     </div>

     {/* Right */}
     <div className='w-2/3 xl:w-1/2 flex items-center justify-between gap-8'>
      <SearchBox />
      <NavIcons />
     </div>
    </div>
   </div>
  </>
 );
}

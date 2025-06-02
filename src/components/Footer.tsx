import Link from 'next/link';

import {
 Github,
 GitlabFull,
 Linkedin,
 Telegram,
 Whatsapp,
} from 'iconoir-react';

const navigation = {
 solutions: [
  { name: 'Marketing', href: '#' },
  { name: 'Analytics', href: '#' },
  { name: 'Commerce', href: '#' },
  { name: 'Insights', href: '#' },
 ],
 shop: [
  { name: 'New Arrivals', href: '#' },
  { name: 'Accessories', href: '#' },
  { name: 'Men', href: '#' },
  { name: 'Women', href: '#' },
  { name: 'All Products', href: '#' },
 ],
 company: [
  { name: 'About', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Jobs', href: '#' },
  { name: 'Press', href: '#' },
  { name: 'Partners', href: '#' },
 ],
 legal: [
  { name: 'Claim', href: '#' },
  { name: 'Privacy', href: '#' },
  { name: 'Terms', href: '#' },
 ],
 social: [
  {
   name: 'Telegram',
   href: '#',
   icon: Telegram,
  },
  {
   name: 'LinkedIn',
   href: '#',
   icon: Linkedin,
  },
  {
   name: 'GitLab',
   href: '#',
   icon: GitlabFull,
  },
  {
   name: 'GitHub',
   href: '#',
   icon: Github,
  },
  {
   name: 'WhatsApp',
   href: '#',
   icon: Whatsapp,
  },
 ],
};

export default function Footer() {
 return (
  <footer aria-labelledby='footer-heading' className='bg-gray-100'>
   <h2 id='footer-heading' className='sr-only'>
    Footer
   </h2>
   <div className='py-24 mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
    <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
     <div className='space-y-8'>
      <Link href='/'>
       <div className='text-2xl tracking-wide'>Shopinx</div>
      </Link>
      <div className='flex flex-col gap-4'>
       <p className='text-sm leading-6 text-gray-600'>
        Igreg Alley, Barnamenevis Street, Azadi Squer, Tehran, Iran
       </p>

       <span className='text-sm font-semibold leading-6 text-gray-600'>
        amirreza.dev@protonmail.com
       </span>
       <span className='text-sm font-semibold leading-6 text-gray-600'>
        +98 920 988 9625
       </span>
      </div>

      <div className='flex space-x-6'>
       {navigation.social.map((item) => (
        <a
         key={item.name}
         href={item.href}
         className='text-gray-400 hover:text-gray-500'
        >
         <span className='sr-only'>{item.name}</span>
         <item.icon aria-hidden='true' className='h-6 w-6' />
        </a>
       ))}
      </div>
     </div>
     <div className='mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
      <div className='md:grid md:grid-cols-2 md:gap-8'>
       <div>
        <h3 className='text-sm font-semibold leading-6 text-gray-900'>
         Solutions
        </h3>
        <ul role='list' className='mt-6 space-y-4'>
         {navigation.solutions.map((item) => (
          <li key={item.name}>
           <a
            href={item.href}
            className='text-sm leading-6 text-gray-600 hover:text-gray-900'
           >
            {item.name}
           </a>
          </li>
         ))}
        </ul>
       </div>
       <div className='mt-10 md:mt-0'>
        <h3 className='text-sm font-semibold leading-6 text-gray-900'>Shop</h3>
        <ul role='list' className='mt-6 space-y-4'>
         {navigation.shop.map((item) => (
          <li key={item.name}>
           <a
            href={item.href}
            className='text-sm leading-6 text-gray-600 hover:text-gray-900'
           >
            {item.name}
           </a>
          </li>
         ))}
        </ul>
       </div>
      </div>
      <div className='md:grid md:grid-cols-2 md:gap-8'>
       <div>
        <h3 className='text-sm font-semibold leading-6 text-gray-900'>
         Company
        </h3>
        <ul role='list' className='mt-6 space-y-4'>
         {navigation.company.map((item) => (
          <li key={item.name}>
           <a
            href={item.href}
            className='text-sm leading-6 text-gray-600 hover:text-gray-900'
           >
            {item.name}
           </a>
          </li>
         ))}
        </ul>
       </div>
       <div className='mt-10 md:mt-0'>
        <h3 className='text-sm font-semibold leading-6 text-gray-900'>Legal</h3>
        <ul role='list' className='mt-6 space-y-4'>
         {navigation.legal.map((item) => (
          <li key={item.name}>
           <a
            href={item.href}
            className='text-sm leading-6 text-gray-600 hover:text-gray-900'
           >
            {item.name}
           </a>
          </li>
         ))}
        </ul>
       </div>
      </div>
     </div>
    </div>
    <div className='mt-16 border-t text-center border-gray-900/10 pt-8 sm:mt-20 lg:mt-24'>
     <p className='text-xs leading-5 text-gray-500'>
      &copy; 2025 <Link href='https://amirreza.dev'>Amirreza</Link>, Inc. All
      rights reserved.
     </p>
    </div>
   </div>
  </footer>
 );
}

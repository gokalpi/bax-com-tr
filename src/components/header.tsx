'use client';

import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

const navigation = [
  { name: 'Hakkımızda', href: '/about' },
  { name: 'Projeler', href: '/projects' },
  { name: 'Referanslar', href: '#references' },
  { name: 'İletişim', href: '/#contact-us' },
];

export default function Header() {
  return (
    <Popover as='header' className='z-50 sticky top-0 bg-white'>
      <div className='full-container px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-2 md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <Link href='/'>
              <span className='sr-only'>Bax Mimarlık</span>
              <Image src='/images/logo-light-sm.jpg' alt='Bax Mimarlık logo' width='148' height='60' />
            </Link>
          </div>

          <div className='md:hidden flex items-center'>
            <div className='-mr-2 -my-2'>
              <Popover.Button className='rounded-lg p-2 inline-flex items-center justify-center hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'>
                <span className='sr-only'>Menüyü Aç</span>
                <Bars3Icon className='h-6 w-6' aria-hidden='true' />
              </Popover.Button>
            </div>
          </div>

          <div className='hidden md:flex space-x-10'>
            {navigation.map((item, index) => (
              <Link key={index} href={item.href} className='no-underline'>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter='duration-150 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel focus className='absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden'>
          <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
            <div className='px-5 pt-4 flex items-center justify-between'>
              <div className='relative w-36 h-14'>
                <Image src='/images/logo-light-sm.jpg' alt='Bax Mimarlık logo' width='148' height='60' />
              </div>
              <div className='-mr-2'>
                <Popover.Button className='rounded-lg p-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600'>
                  <span className='sr-only'>Close menu</span>
                  <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
              </div>
            </div>
            <div className='pt-5 pb-6'>
              <div className='px-2 space-y-1'>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className='block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50'
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

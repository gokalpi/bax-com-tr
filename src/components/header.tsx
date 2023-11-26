'use client';

import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { categories } from '@/config/data/categories';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='z-30 sticky top-0 bg-white'>
      <nav className='mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8' aria-label='Global'>
        <div className='flex lg:flex-1'>
          <Link href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Bax Mimarlık</span>
            <Image src='/images/logo-light-sm.jpg' width={148} height={60} alt='Bax Mimarlık' />
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Menüyü Aç</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <Popover.Group className='hidden lg:flex lg:gap-x-12'>
          <Link href='/about' className='text-sm font-semibold leading-6 text-gray-900'>
            HAKKIMIZDA
          </Link>

          <Popover className='relative'>
            <Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900'>
              PROJELER
              <ChevronDownIcon className='h-5 w-5 flex-none text-gray-400' aria-hidden='true' />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 max-w-md overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5'>
                <div className='p-4'>
                  {categories.map((category) => (
                    <div
                      key={category.name}
                      className='group relative flex items-center gap-x-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50'
                    >
                      <div className='flex-auto'>
                        <Link href={category.href} className='block font-semibold whitespace-nowrap uppercase text-gray-900'>
                          {category.name}
                          <span className='absolute inset-0' />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link href='/references' className='text-sm font-semibold leading-6 text-gray-900'>
            REFERANSLAR
          </Link>
          <Link href='/contact' className='text-sm font-semibold leading-6 text-gray-900'>
            İLETİŞİM
          </Link>
        </Popover.Group>
        {/* <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
            Log in <span aria-hidden='true'>&rarr;</span>
          </a>
        </div> */}
      </nav>
      <Dialog as='div' className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <Link href='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Bax Mimarlık</span>
              <Image src='/images/logo-light-sm.jpg' width={148} height={60} alt='Bax Mimarlık' />
            </Link>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Menuyü Kapat</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <Link
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  HAKKIMIZDA
                </Link>
                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                        PROJELER
                        <ChevronDownIcon
                          className={clsx(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2'>
                        {categories.map((category) => (
                          <Disclosure.Button
                            key={category.name}
                            as='a'
                            href={category.href}
                            className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                          >
                            {category.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href='/references'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  REFERANSLAR
                </Link>
                <Link
                  href='/contact'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  İLETİŞİM
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

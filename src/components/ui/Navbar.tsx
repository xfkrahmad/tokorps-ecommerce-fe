'use client';
import { classNames } from '@/libs/helpers/class-names.helper';
import { Transition, Dialog, Tab, Popover } from '@headlessui/react';
import { Fragment, useContext } from 'react';
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import {
  NavbarToggleCtx,
  NavbarToggleCtxType,
} from '@/libs/context/navbar-toggle.context';
import Link from 'next/link';
interface NavbarProps {}
const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt:
            'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt:
            'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Dresses', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Denim', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Significant Other', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt:
            'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
};
const Navbar = () => {
  const { open, setOpen } = useContext(NavbarToggleCtx) as NavbarToggleCtxType;
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='relative z-40 lg:hidden' onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 z-40 flex'>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <Dialog.Panel className='relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl'>
                <div className='flex px-4 pt-5 pb-2'>
                  <button
                    type='button'
                    className='-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400'
                    onClick={() => setOpen(false)}
                  >
                    <span className='sr-only'>Close menu</span>
                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as='div' className='mt-2'>
                  <div className='border-b border-gray-200'>
                    <Tab.List className='-mb-px flex space-x-8 px-4'>
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? 'text-indigo-600 border-indigo-600'
                                : 'text-gray-900 border-transparent',
                              'flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className='space-y-10 px-4 pt-10 pb-8'
                      >
                        <div className='grid grid-cols-2 gap-x-4'>
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className='group relative text-sm'
                            >
                              <div className='aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75'>
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className='object-cover object-center'
                                />
                              </div>
                              <a
                                href={item.href}
                                className='mt-6 block font-medium text-gray-900'
                              >
                                <span
                                  className='absolute inset-0 z-10'
                                  aria-hidden='true'
                                />
                                {item.name}
                              </a>
                              <p aria-hidden='true' className='mt-1'>
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className='font-medium text-gray-900'
                            >
                              {section.name}
                            </p>
                            <ul
                              role='list'
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className='mt-6 flex flex-col space-y-6'
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className='flow-root'>
                                  <a
                                    href={item.href}
                                    className='-m-2 block p-2 text-gray-500'
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className='space-y-6 border-t border-gray-200 py-6 px-4'>
                  {navigation.pages.map((page) => (
                    <div key={page.name} className='flow-root'>
                      <a
                        href={page.href}
                        className='-m-2 block p-2 font-medium text-gray-900'
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className='space-y-6 border-t border-gray-200 py-6 px-4'>
                  <div className='flow-root'>
                    <Link
                      href={'/login'}
                      className='-m-2 block p-2 font-medium text-gray-900'
                    >
                      Sign in
                    </Link>
                  </div>
                  <div className='flow-root'>
                    <a
                      href='#'
                      className='-m-2 block p-2 font-medium text-gray-900'
                    >
                      Create account
                    </a>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className='relative overflow-hidden'>
        {/* Top navigation */}
        <nav
          aria-label='Top'
          className='relative z-20 bg-white bg-opacity-90 backdrop-blur-xl backdrop-filter'
        >
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='flex h-16 items-center'>
              <button
                type='button'
                className='rounded-md bg-white p-2 text-gray-400 lg:hidden'
                onClick={() => setOpen(true)}
              >
                <span className='sr-only'>Open menu</span>
                <Bars3Icon className='h-6 w-6' aria-hidden='true' />
              </button>

              {/* Logo */}
              <div className='ml-4 flex lg:ml-0'>
                <a href='#'>
                  <span className='sr-only'>Your Company</span>
                  <img
                    className='h-8 w-auto'
                    src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                    alt=''
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className='hidden lg:ml-8 lg:block lg:self-stretch'>
                <div className='flex h-full space-x-8'>
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className='flex'>
                      {({ open }) => (
                        <>
                          <div className='relative flex'>
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-indigo-600 text-indigo-600'
                                  : 'border-transparent text-gray-700 hover:text-gray-800',
                                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter='transition ease-out duration-200'
                            enterFrom='opacity-0'
                            enterTo='opacity-100'
                            leave='transition ease-in duration-150'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'
                          >
                            <Popover.Panel className='absolute inset-x-0 top-full bg-white text-sm text-gray-500'>
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className='absolute inset-0 top-1/2 bg-white shadow'
                                aria-hidden='true'
                              />
                              {/* Fake border when menu is open */}
                              <div
                                className='absolute inset-0 top-0 mx-auto h-px max-w-7xl px-8'
                                aria-hidden='true'
                              >
                                <div
                                  className={classNames(
                                    open ? 'bg-gray-200' : 'bg-transparent',
                                    'h-px w-full transition-colors duration-200 ease-out'
                                  )}
                                />
                              </div>

                              <div className='relative'>
                                <div className='mx-auto max-w-7xl px-8'>
                                  <div className='grid grid-cols-2 gap-y-10 gap-x-8 py-16'>
                                    <div className='col-start-2 grid grid-cols-2 gap-x-8'>
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className='group relative text-base sm:text-sm'
                                        >
                                          <div className='aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75'>
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className='object-cover object-center'
                                            />
                                          </div>
                                          <a
                                            href={item.href}
                                            className='mt-6 block font-medium text-gray-900'
                                          >
                                            <span
                                              className='absolute inset-0 z-10'
                                              aria-hidden='true'
                                            />
                                            {item.name}
                                          </a>
                                          <p
                                            aria-hidden='true'
                                            className='mt-1'
                                          >
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className='row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm'>
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className='font-medium text-gray-900'
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            role='list'
                                            aria-labelledby={`${section.name}-heading`}
                                            className='mt-6 space-y-6 sm:mt-4 sm:space-y-4'
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className='flex'
                                              >
                                                <a
                                                  href={item.href}
                                                  className='hover:text-gray-800'
                                                >
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className='flex items-center text-sm font-medium text-gray-700 hover:text-gray-800'
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className='ml-auto flex items-center'>
                <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                  <Link
                    href={'/login'}
                    className='text-sm font-medium text-gray-700 hover:text-gray-800'
                  >
                    Sign in
                  </Link>
                  <span className='h-6 w-px bg-gray-200' aria-hidden='true' />
                  <a
                    href='#'
                    className='text-sm font-medium text-gray-700 hover:text-gray-800'
                  >
                    Create account
                  </a>
                </div>

                {/* Cart */}
                <div className='ml-4 flow-root lg:ml-6'>
                  <a href='#' className='group -m-2 flex items-center p-2'>
                    <ShoppingBagIcon
                      className='h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
                      aria-hidden='true'
                    />
                    <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
                      0
                    </span>
                    <span className='sr-only'>items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero section */}
        <div className='pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48'>
          <div className='relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8'>
            <div className='sm:max-w-lg'>
              <h1 className='font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                Summer styles are finally here
              </h1>
              <p className='mt-4 text-xl text-gray-500'>
                This year, our new summer collection will shelter you from the
                harsh elements of a world that doesnt care if you live or die.
              </p>
            </div>
            <div>
              <div className='mt-10'>
                {/* Decorative image grid */}
                <div
                  aria-hidden='true'
                  className='pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl'
                >
                  <div className='absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8'>
                    <div className='flex items-center space-x-6 lg:space-x-8'>
                      <div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
                        <div className='h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100'>
                          <img
                            src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg'
                            alt=''
                            className='h-full w-full object-cover object-center'
                          />
                        </div>
                        <div className='h-64 w-44 overflow-hidden rounded-lg'>
                          <img
                            src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg'
                            alt=''
                            className='h-full w-full object-cover object-center'
                          />
                        </div>
                      </div>
                      <div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
                        <div className='h-64 w-44 overflow-hidden rounded-lg'>
                          <img
                            src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg'
                            alt=''
                            className='h-full w-full object-cover object-center'
                          />
                        </div>
                        <div className='h-64 w-44 overflow-hidden rounded-lg'>
                          <img
                            src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg'
                            alt=''
                            className='h-full w-full object-cover object-center'
                          />
                        </div>
                        <div className='h-64 w-44 overflow-hidden rounded-lg'>
                          <img
                            src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg'
                            alt=''
                            className='h-full w-full object-cover object-center'
                          />
                        </div>
                      </div>
                      <div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
                        <div className='h-64 w-44 overflow-hidden rounded-lg'>
                          <img
                            src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg'
                            alt=''
                            className='h-full w-full object-cover object-center'
                          />
                        </div>
                        <div className='h-64 w-44 overflow-hidden rounded-lg'>
                          <img
                            src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg'
                            alt=''
                            className='h-full w-full object-cover object-center'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href='#'
                  className='inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700'
                >
                  Shop Collection
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/outline";

import { HomeIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <div className='shadow-md bg-slate-50 dark:bg-gradient-to-r dark:from-cyan-600 dark:to-slate-700 top-0 z-50 dark:shadow-slate-500'>
      <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
        {/* left */}
        <div className='relative hidden lg:inline-grid w-24 cursor-pointer'>
          <Image
            src='https://links.papareact.com/ocw'
            layout='fill'
            objectFit='contain'
            alt='instagram img'
          />
        </div>
        <div className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'>
          <Image
            src='https://links.papareact.com/jjm'
            layout='fill'
            objectFit='contain'
            alt='instagram img'
          />
        </div>
        {/* middle search input field */}
        <div className='max-w-xs'>
          <div className='relative mt-1 p-3 rounded-md dark:bg-transparent'>
            <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
              <SearchIcon className='h-5 w-5 text-gray-400 dark:text-gray-100' />
            </div>
            <input
              className='dark:bg-transparent dark:text-white block w-full pl-10 py-2 hover:border-slate-400 focus:border-slate-400 focus:ring-slate-400 rounded-md sm:text-sm hover:shadow-lg focus:shadow-lg dark:border-slate-100 dark:placeholder-slate-300'
              type='text'
              placeholder='search'
            />
          </div>
        </div>
        {/* right */}
        <div className='flex items-center justify-end space-x-3'>
          <HomeIcon className='navBtn dark:text-slate-200' />
          <div className='relative navBtn '>
            <div className='text-white font-bold absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-400 rounded-full flex items-center justify-center animate-pulse z-10'>
              3
            </div>
            <PaperAirplaneIcon className='navBtn rotate-45 dark:text-slate-200' />
          </div>
          <PlusCircleIcon className='navBtn dark:text-slate-200' />
          <UserGroupIcon className='navBtn dark:text-slate-200' />
          <HeartIcon className='navBtn dark:text-slate-200' />
          <img
            className='h-10 rounded-full cursor-pointer'
            src='https://avatars.githubusercontent.com/u/52583430?v=4'
            alt='avatar'
          />
          <MenuIcon className='h-6 md:hidden cursor-pointer dark:text-slate-200' />
        </div>
      </div>
    </div>
  );
};

export default Header;

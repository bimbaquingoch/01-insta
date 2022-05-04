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
    <div className='shadow-md bg-slate-100/[0.9] top-0 z-50 sticky'>
      <div className='flex justify-around max-w-6xl mx-5 lg:mx-auto'>
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
              <SearchIcon className='h-5 w-5 text-gray-400' />
            </div>
            <input
              className='dark:bg-transparent block w-full pl-10 py-2 hover:border-slate-400 focus:border-slate-400 focus:ring-slate-400 rounded-md sm:text-sm hover:shadow-lg focus:shadow-lg'
              type='text'
              placeholder='search'
            />
          </div>
        </div>
        {/* right */}
        <div className='flex items-center justify-end space-x-5'>
          <HomeIcon className='navBtn' />
          <div className='relative navBtn '>
            <div className='text-white font-bold absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-400 rounded-full flex items-center justify-center animate-pulse z-10'>
              3
            </div>
            <PaperAirplaneIcon className='navBtn rotate-45 ' />
          </div>
          <PlusCircleIcon className='navBtn ' />
          <UserGroupIcon className='navBtn ' />
          <HeartIcon className='navBtn ' />

          <div>
            <Image
              width={35}
              height={35}
              className='rounded-full cursor-pointer'
              src='https://avatars.githubusercontent.com/u/52583430?v=4'
              alt='avatar'
            />
          </div>
          <MenuIcon className='h-6 md:hidden cursor-pointer' />
        </div>
      </div>
    </div>
  );
};

export default Header;

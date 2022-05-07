/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";

import { HomeIcon } from "@heroicons/react/solid";
import { signOut, useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtoms";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();

  return (
    <div className='shadow-md bg-slate-100/[0.9] top-0 z-50 sticky'>
      <div className='flex justify-around max-w-6xl mx-5 lg:mx-auto'>
        {/* left */}
        <div className='relative lg:inline-grid w-24 h-14 cursor-pointer'>
          <Image
            src='https://links.papareact.com/ocw'
            layout='fill'
            objectFit='contain'
            alt='instagram img'
          />
        </div>

        {/* middle search input field */}
        <div className='max-w-xs hidden md:inline-block'>
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
          {/* <MenuIcon className='sm:hidden h-6 cursor-pointer' /> */}
          <HomeIcon className='navBtn ocultar' />
          <PlusCircleIcon onClick={() => setOpen(!open)} className='navBtn ' />
          <div className='relative navBtn'>
            <div className='text-white font-bold absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-400 rounded-full flex items-center justify-center animate-pulse z-10'>
              3
            </div>
            <PaperAirplaneIcon className='navBtn rotate-45 ' />
          </div>
          <UserGroupIcon className='navBtn ocultar' />
          <HeartIcon className='navBtn ' />
          <button
            onClick={() => signOut({ callbackUrl: "/auth/signin" })}
            className='sm:hidden text-blue-500 font-semibold active:border-2 active:bg-slate-50 active:border-blue-300 p-1 rounded-md'>
            Signout
          </button>
          <img
            onClick={() => signOut({ callbackUrl: "/auth/signin" })}
            className='navBtn rounded-full h-10 cursor-pointer ocultar'
            src={session?.user?.image}
            alt={session?.user?.name}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

/* eslint-disable @next/next/no-img-element */

import { signOut, useSession } from "next-auth/react";

const MiniProfile = () => {
  const { data: session } = useSession();
  return (
    <div className='flex justify-between items-center'>
      <img
        className='h-16 rounded-full cursor-pointer'
        src={session?.user?.image}
        alt='avatar'
      />
      <div className='flex-1 mx-4'>
        <h2 className='font-bold'>{session?.user?.username}</h2>
        <h3 className='text-slate-500'>{session?.user?.name}</h3>
      </div>
      <button
        onClick={() => signOut({ callbackUrl: "/auth/signin" })}
        className='text-blue-500 font-semibold'>
        Cerrar sesion
      </button>
    </div>
  );
};

export default MiniProfile;

/* eslint-disable @next/next/no-img-element */

const MiniProfile = () => {
  return (
    <div className='flex justify-between items-center'>
      <img
        className='h-16 rounded-full cursor-pointer'
        src='https://avatars.githubusercontent.com/u/52583430?v=4'
        alt='avatar'
      />
      <div className='flex-1 mx-4'>
        <h2 className='font-bold'>brandresimba</h2>
        <h3 className='text-slate-500'>Bryan Andres Imbaquingo</h3>
      </div>
      <button className='text-blue-500 font-semibold'>Cambiar</button>
    </div>
  );
};

export default MiniProfile;

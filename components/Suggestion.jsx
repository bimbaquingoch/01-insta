/* eslint-disable @next/next/no-img-element */

const Suggestion = ({ personas }) => {
  const { avatar, name, username } = personas;
  return (
    <div className='flex items-center justify-between mt-3'>
      <img
        className='rounded-full h-10 border p-[2px] border-slate-400/[0.6] '
        src={avatar}
        alt={name}
      />
      <div className='flex-1 ml-2'>
        <h2 className='font-semibold text-sm'>{username}</h2>
        <p className='text-slate-500 text-sm'>{name}</p>
      </div>
      <button className='font-bold capitalize text-blue-500 text-sm'>
        follow
      </button>
    </div>
  );
};

export default Suggestion;

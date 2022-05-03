/* eslint-disable @next/next/no-img-element */
const Story = ({ profile }) => {
  const { avatar, username, name } = profile;
  return (
    <div>
      <img
        className='h-14 w-14 rounded-full p-[0.1rem] border-2 border-red-300 object-cover cursor-pointer hover:scale-110 transition transform duration-200 ease-out'
        src={avatar}
        alt={name}
      />
      <p className='text-sm w-14 truncate text-center'>{username}</p>
    </div>
  );
};

export default Story;

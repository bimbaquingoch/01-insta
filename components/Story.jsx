import Image from "next/image";

const Story = ({ avatar, username, name }) => {
  return (
    <div>
      <div className='rounded-full p-[0.1rem] border-2 border-red-300 object-cover cursor-pointer hover:scale-110 transisiones'>
        <Image
          className='rounded-full'
          layout='responsive'
          width={30}
          height={30}
          src={avatar}
          alt={name}
        />
      </div>
      <p className='text-sm w-14 truncate text-center'>{username}</p>
    </div>
  );
};

export default Story;

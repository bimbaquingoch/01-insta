/* eslint-disable @next/next/no-img-element */
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

import {
  HeartIcon as HeartIconFilled,
  BookmarkIcon as BookmarkFilled,
} from "@heroicons/react/solid";
import { useState } from "react";

const Post = ({ post }) => {
  const [corazon, setcorazon] = useState(false);
  const [save, setsave] = useState(false);
  const [contadorLikes, setcontadorLikes] = useState(0);
  const { username, image, profileImg, caption } = post.data();
  return (
    <div className='bg-slate-50 md:my-5 md:rounded-md border md:border-slate-300 border-y-slate-200'>
      <div className='flex items-center p-2 md:p-5 cursor-pointer'>
        <div className='rounded-full h-12 w-12 object-contain border p-1 mr-3'>
          <img className='rounded-full' src={profileImg} alt={caption} />
        </div>

        <p className='flex-1 font-bold cursor-pointer'>{username}</p>
        <DotsHorizontalIcon className='h-5 cursor-pointer' />
      </div>
      <img className='object-cover w-full' src={image} alt='' />
      {/* buttons */}
      <div className='flex justify-between items-center pl-3 py-3'>
        <div className='flex space-x-4'>
          {corazon === false ? (
            <HeartIcon
              onClick={() => {
                setcorazon(!corazon);
                setcontadorLikes(contadorLikes + 1);
              }}
              className='btn'
            />
          ) : (
            <HeartIconFilled
              onClick={() => {
                setcorazon(!corazon);
                setcontadorLikes(contadorLikes - 1);
              }}
              className='btn text-red-500'
            />
          )}
          <ChatIcon className='btn' />
          <PaperAirplaneIcon className='btn rotate-45' />
        </div>
        <div className='pr-4'>
          {save === false ? (
            <BookmarkIcon className='btn' onClick={() => setsave(!save)} />
          ) : (
            <BookmarkFilled
              className='btn text-red-500'
              onClick={() => setsave(!save)}
            />
          )}
        </div>
      </div>

      {contadorLikes !== 0 && (
        <p className='pl-4 mb-2 font-bold'>{contadorLikes} Me gusta</p>
      )}

      {/* caption */}
      <p className='pl-4 truncate'>
        <span className='font-bold mr-1'>{username}</span> {caption}
      </p>
      {/* comments */}
      {/* input box */}
      <form action='' className='flex items-center p-3'>
        <EmojiHappyIcon className='btn' />
        <input
          type='text'
          className='border-none flex-1 focus:ring-0 outline-none mx-2 rounded-sm '
          placeholder='Add a comment ...'
        />
        <button className='font-semibold text-blue-500'>Post</button>
      </form>
    </div>
  );
};

export default Post;

/* eslint-disable @next/next/no-img-element */
import {
  BookmarkIcon,
  ChatIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

import {
  HeartIcon as HeartIconFilled,
  BookmarkIcon as BookmarkFilled,
} from "@heroicons/react/solid";

import Moment from "react-moment";

export const Comments = ({ comentario }) => {
  return (
    <div key={comentario.id} className='flex items-center space-x-2 mb-3 '>
      <img
        className='rounded-full h-7'
        src={comentario.data().userImage}
        alt=''
      />
      <p className='flex text-sm flex-1 gap-2'>
        <span className='font-semibold'>{comentario.data().username}</span>
        {comentario.data().comment}
      </p>
      <Moment interval={600} fromNow className='text-xs text-slate-500 pr-4'>
        {comentario.data().timestamp?.toDate()}
      </Moment>
    </div>
  );
};

export const Buttons = ({ hasliked, likePost, save, setsave }) => {
  return (
    <div className='flex justify-between items-center pl-3 py-3'>
      <div className='flex space-x-4'>
        {hasliked === false ? (
          <HeartIcon onClick={likePost} className='btn' />
        ) : (
          <HeartIconFilled onClick={likePost} className='btn text-red-500' />
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
  );
};

/* eslint-disable @next/next/no-img-element */
import { DotsHorizontalIcon, EmojiHappyIcon } from "@heroicons/react/outline";

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Buttons, Comments } from "./Comments";

import { db } from "../firebase";

const Post = ({ post }) => {
  const { data: session } = useSession();
  const [save, setsave] = useState(false);
  const [likes, setLikes] = useState([]);
  const [hasliked, sethasliked] = useState(false);
  const { username, image, profileImg, caption } = post.data();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", post.id, "comments"),
          // desc (descendiente)
          orderBy("timestamp", "desc")
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [db, post.id]
  );

  useEffect(
    () =>
      onSnapshot(collection(db, "posts", post.id, "likes"), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [db, post.id]
  );

  useEffect(
    () =>
      sethasliked(
        likes.findIndex((like) => like.id === session?.user?.uid) !== -1
      ),
    [likes]
  );

  const likePost = async () => {
    if (hasliked) {
      await deleteDoc(doc(db, "posts", post.id, "likes", session.user.uid));
    } else {
      await setDoc(doc(db, "posts", post.id, "likes", session.user.uid), {
        username: session.user.username,
      });
    }
  };

  const sendComment = async (e) => {
    e.preventDefault();
    const commentToSend = comment;
    setComment("");

    await addDoc(collection(db, "posts", post.id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };
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
      <Buttons
        hasliked={hasliked}
        likePost={likePost}
        save={save}
        setsave={setsave}
      />

      {likes.length > 0 && (
        <p className='pl-4 mb-2 font-bold'>{likes.length} Me gusta</p>
      )}

      {/* caption */}
      <p className='pl-4 pb-4 truncate'>
        <span className='font-bold mr-1'>{username}</span> {caption}
      </p>
      {/* comments */}

      {comments.length > 0 && (
        <div className='bg-slate-100 pl-4 pt-3 mb-2 h-24 overflow-y-scroll shadow-inner'>
          {comments.map((comentario) => (
            <Comments key={comentario.id} comentario={comentario} />
          ))}
        </div>
      )}

      {/* input box */}
      <form
        action=''
        className='flex items-center p-3 focus-within:drop-shadow-md'>
        <EmojiHappyIcon className='btn' />
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          type='text'
          className='border-none flex-1 focus:ring-0 outline-none mx-2 rounded-sm '
          placeholder='Add a comment ...'
        />
        <button
          onClick={sendComment}
          type='submit'
          disabled={!comment.trim()}
          className='font-semibold text-blue-500'>
          Post
        </button>
      </form>
    </div>
  );
};

export default Post;

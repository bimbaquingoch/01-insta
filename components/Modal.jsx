/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtoms";
import { CameraIcon } from "@heroicons/react/outline";
import { db, storage } from "../firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

const Modal = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const captionRef = useRef(null);
  const filePickerRef = useRef(null);

  const uploadPost = async () => {
    if (loading) return;

    setLoading(true);

    const docRef = await addDoc(collection(db, "posts"), {
      username: session.user.username,
      caption: captionRef.current.value,
      profileImg: session.user.image,
      timestamp: serverTimestamp(),
    });
    console.log("new doc added with id:", docRef.id);

    const imageRef = ref(storage, `posts/${docRef.id}/image`);

    await uploadString(imageRef, selectedFile, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), { image: downloadURL });
      }
    );
    setOpen(false);
    setLoading(false);
    setSelectedFile(null);
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='fixed z-10 inset-0 overflow-y-auto'
        onClose={setOpen}>
        <div className='flex items-center justify-center min-h-[800px] sm:min-h-full p-4 pb-20 text-center sm:block sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <Dialog.Overlay className='fixed inset-0 bg-slate-600 bg-opacity-40 transition-opacity' />
          </Transition.Child>
          <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen'
            aria-hidden='true'></span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
            <div className='inline-block align-bottom bg-white rounded-lg p-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full sm:p-6'>
              <div>
                {selectedFile ? (
                  <img
                    alt=''
                    className='w-full object-contain cursor-pointer'
                    onClick={() => setSelectedFile(null)}
                    src={selectedFile}
                  />
                ) : (
                  <div
                    onClick={() => filePickerRef.current.click()}
                    className='mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-red-400 cursor-pointer p-2 border-2 border-red-100'>
                    <CameraIcon className='text-white' aria-hidden='true' />
                  </div>
                )}

                <section>
                  <div className='mt-3 text-center sm:mt-5'>
                    <Dialog.Title
                      as='h3'
                      className={
                        "text-lg leading-6 font-medium text-slate-700"
                      }>
                      Subir Foto
                    </Dialog.Title>
                    <div>
                      <input
                        type='file'
                        hidden
                        ref={filePickerRef}
                        onChange={addImageToPost}
                      />
                    </div>

                    <div className='mt-2'>
                      <input
                        className='border-none focus:right-0 w-full text-center placeholder-slate-400'
                        type='text'
                        name=''
                        id=''
                        ref={captionRef}
                        placeholder='Please enter a caption ...'
                      />
                    </div>
                  </div>
                </section>
                <div className='mt-5 sm:mt-6'>
                  <button
                    disabled={!selectedFile}
                    onClick={uploadPost}
                    type='button'
                    className='upload_photo'>
                    {loading ? "Publicando" : "Nueva publicacion"}
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";

const Phone = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const images = [
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png",
  ];
  const [unI, setunI] = useState(0);
  const [imagen, setimagen] = useState("");

  useEffect(() => {
    if (unI < 4) {
      setTimeout(() => {
        setunI(unI + 1);
      }, 3000);
      setimagen(images[unI]);
    } else {
      setunI(0);
    }
  }, [unI, images]);
  return (
    <div className='hidden md:col-span-1 lg:inline-grid right-0'>
      <div className='mx-auto flex flex-row justify-end'>
        <div className='absolute'>
          <div className='phone'>
            <img className='sombra_phone' src={imagen} alt='insta screenshot' />
          </div>
        </div>

        <div className='mx-auto p-3 px-20'>
          <div className='phone'>
            <img
              className='sombra_phone'
              src={images[2]}
              alt='insta screenshot'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;

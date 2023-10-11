import React, { useState } from 'react';

const Carousel = ({style, imageUrl, data, title}) => {

  const [slideNum, setSlideNum] = useState(0);
  const {width, height} = style;

  const prev = () => {
    setSlideNum((prev) => (prev - 1 + data.length) % data.length);
  }

  const next = () => {
    setSlideNum((prev) => (prev + 1) % data.length);
  }

  return (
    <div>
      <div className='flex justify-between mt-5'>
        {/* <div className='text-xl font-extrabold text-primary font-family1'> */}
        <div className="m-0 antialiased font-family1 font-bold text-2xl leading-28 tracking-tight text-rgba-2-6-12-0-92 overflow-hidden w-full flex flex-col">{title}</div>
        <div className='flex space-x-2'>
          <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer" onClick={prev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              ></path>
            </svg>
          </div>
          <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer" onClick={next}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="overflow-x-scroll no-scrollbar">
      <div className='mt-4 flex space-x-4 relative' style={{ transform: `translateX(-${slideNum}%)` }}>
        {
          data.map((offer) => (
            <img 
              className='cursor-pointer'
              key={offer.id} 
              src={imageUrl + offer.imageId}
              width={width}
              height={height}
            />
          ))
        }
      </div>
      </div>
    </div>
  )
}

export default Carousel;

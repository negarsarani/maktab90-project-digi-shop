import Image from 'next/image';
import React from 'react';
type ButtonOrangeType = {
  name: string;
  src: string;
};
const ButtonOrange = ({ name, src }: ButtonOrangeType) => {
  return (
    <button
      className={
        'bg-orangeAdmin  sm:px-3 sm:py-2 py-2 px-1 text-sm sm:text-md  hover:bg-orange-500 shadow-md text-white flex items-center justify-center rounded-md gap-3'
      }
    >
      <Image src={src} alt={name} width={20} height={20} />
      <span> {name}</span>
    </button>
  );
};

export default ButtonOrange;
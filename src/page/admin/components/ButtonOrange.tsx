import Button from '@/components/Button';
import Image from 'next/image';
import React from 'react';
type ButtonOrangeType = {
  name: string;
  src: string;
};
const ButtonOrange = ({ name, src }: ButtonOrangeType) => {
  return (
    <Button
      className={
        'bg-orangeAdmin  sm:px-3 sm:py-2 py-2 px-1 text-sm sm:text-md  hover:bg-orange-500 shadow-md text-white flex items-center justify-center rounded-md gap-3 '
      }
      type="button"
    >
      <Image src={src} alt={name} width={15} height={15} />
      <span className=''> {name}</span>
    </Button>
  );
};

export default ButtonOrange;

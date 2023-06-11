import Button from '@/components/Button';
import Image from 'next/image';
import React from 'react';
import { Dispatch, SetStateAction } from 'react';
import Modal from './Modal';

type ButtonOrangeType = {
  name: string;
  src: string;
  setOpenModal?: Dispatch<
    SetStateAction<{
      filter: boolean;
      buttonOrange: boolean;
    }>
  >;
  nameModal?: string;
};
const ButtonOrange = ({
  name,
  src,
  setOpenModal,
  nameModal,
}: ButtonOrangeType) => {
  
  return (
    <>
      <Button
        className={
          'bg-orangeAdmin  sm:px-3 sm:py-2 py-2 px-2 text-sm sm:text-md  hover:bg-orange-500 shadow-md text-white flex items-center justify-center rounded-md gap-1 '
        }
        type="button"
        onClick={() =>
          setOpenModal && setOpenModal({
            filter: false,
            buttonOrange: true,
          })
        }
      >
        <Image src={src} alt={name} width={15} height={15} />
        <span className=""> {name}</span>
      </Button>
    </>
  );
};

export default ButtonOrange;

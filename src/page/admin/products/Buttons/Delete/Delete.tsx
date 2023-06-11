import { Button } from '@/components';
import Image from 'next/image';
import React, { Dispatch, SetStateAction, useState } from 'react';
interface props {
  id: string;
  setIsOpen: Dispatch<
    SetStateAction<{
      Edit: boolean;
      Delete: boolean;
    }>
  >;
}
const Delete = ({ id ,setIsOpen }: props) => {
  return (
    <Button className="text-sm text-gray-900 w-full" type="button">
      <Image
        src="/icons/trash.svg"
        id={id}
        alt="حذف"
        width={20}
        height={20}
        onClick={() => {
          return setIsOpen({
            Edit: false,
            Delete: true,
          });
        }}
      />
    </Button>
  );
};

export default Delete;

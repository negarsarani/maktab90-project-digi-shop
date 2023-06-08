import React, { ReactNode, useEffect, useState } from 'react';
import { Dispatch, SetStateAction } from 'react';

import SearchInput from './SearchInput';
import Image from 'next/image';
import ButtonOrange from './ButtonOrange';
import Modal from './Modal';
import { useRouter } from 'next/router';
import useQueries from '@/hooks/useQueries';
import useRedux from '@/hooks/useRedux';
interface props {
  children: React.ReactNode;
  openModal: boolean;

  setOpenModal: Dispatch<
    SetStateAction<{
      filter: boolean;
      buttonOrange: boolean;
    }>
  >;
}
const NavbarTable = ({ children, openModal, setOpenModal }: props) => {
  const router = useRouter();


  return (
    <>
      <div className="flex flex-col sm:flex-row  gap-5  sm:gap-0 items-center sm:justify-between w-full">
        <SearchInput></SearchInput>
        <div className="flex items-center justify-end  gap-4 w-full">
          {children}
          <button
            className="border-gray-400 sm:px-3 sm:py-2 py-2 px-2 text-sm sm:text-md hover:bg-cream bg-white shadow-md flex items-center justify-center rounded-md gap-1"
            onClick={() => {
              setOpenModal({
                filter: true,
                buttonOrange: false,
              })
            //  return router.push('/sort',{
            //     query:{
            //       test:"1"
            //     }
            //   })
            }}
          >
            <Image
              src={'/icons/Filters.svg'}
              alt="فیلتر"
              width={20}
              height={20}
            />
            <span>فیلتر</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default NavbarTable;

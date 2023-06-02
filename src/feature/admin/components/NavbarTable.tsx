import React, { ReactNode } from 'react';
import SearchInput from './SearchInput';
import Image from 'next/image';
import ButtonOrange from './ButtonOrange';

const NavbarTable = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col sm:flex-row  gap-5  sm:gap-0 items-center sm:justify-between w-full">
      <SearchInput></SearchInput>
      <div className="flex items-center justify-end  gap-4 w-full">
        {children}
        <button className="border-gray-400 sm:px-3 sm:py-2 py-2 px-1 text-sm sm:text-md hover:bg-cream bg-white shadow-md flex items-center justify-center rounded-md gap-3">
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
  );
};

export default NavbarTable;

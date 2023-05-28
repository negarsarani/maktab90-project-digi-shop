import Image from 'next/image';
import React from 'react';
import filter from '../../assets/Icons/Filters.svg';
import plus from '../../assets/Icons/plus.svg';
const NavbarTable = () => {
  return (
    <div className='flex items-center justify-between px-3'>
      <input
        type="text"
        className="w-5/12 py-2 h-9 pl-10 pr-4 text-gray-700 bg-white border rounded-lg  border-gray-400 focus:border-none focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-orangeAdmin shadow-md"
        placeholder="Search"
      />
      <div className='flex items-center justify-center gap-4'>
        <button className="bg-orangeAdmin  sm:px-3 sm:py-2 py-2 px-1 text-sm sm:text-md  hover:bg-orangeLighte shadow-md text-white flex items-center justify-center rounded-md">
          <Image src={plus} alt="فیلتر" />
          <span>افزودن کالا</span>
        </button>
        <button className="border-gray-400 sm:px-3 sm:py-2 py-2 px-1 text-sm sm:text-md hover:bg-cream bg-white shadow-md flex items-center justify-center rounded-md">
          <Image src={filter} alt="افزودن کالا" />
          <span>فیلتر</span>
        </button>
      </div>
    </div>
  );
};

export default NavbarTable;

import Image from 'next/image';
import React from 'react';

import MotionSideBar from '@/layout/framer-motion/motionSideBar';
const NavbarTableProduct = () => {
  return (
    <div className="flex flex-col sm:flex-row  gap-5  sm:gap-0 items-center sm:justify-between w-full">
      <input
        type="text"
        className="sm:w-5/12 lg:w-4/12 xl:w-3/12 py-2 h-9 pl-10 pr-4 text-gray-700 w-10/12 bg-white border rounded-lg  border-gray-400 focus:border-none focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-orangeAdmin shadow-md"
        placeholder="جستجو"
      />
      <div className="flex items-center justify-end  gap-4 w-full">
        <MotionSideBar>
          <button className="bg-orangeAdmin  sm:px-3 sm:py-2 py-2 px-1 text-sm sm:text-md  hover:bg-orange-500 shadow-md text-white flex items-center justify-center rounded-md">
            <Image src={'/icons/plus.svg'} alt="فیلتر" width={20} height={20} />
            <span>افزودن کالا</span>
          </button>
        </MotionSideBar>
        <button className="border-gray-400 sm:px-3 sm:py-2 py-2 px-1 text-sm sm:text-md hover:bg-cream bg-white shadow-md flex items-center justify-center rounded-md">
          <Image
            src={'/icons/Filters.svg'}
            alt="افزودن کالا"
            width={20}
            height={20}
          />
          <span>فیلتر</span>
        </button>
      </div>
    </div>
  );
};

export default NavbarTableProduct;

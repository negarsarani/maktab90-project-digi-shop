import React from 'react';
import SearchInput from '../components/SearchInput';
import Image from 'next/image';

const NavbarTableInventory = () => {
  return (
    <div className="flex flex-col sm:flex-row  gap-5  sm:gap-0 items-center sm:justify-between w-full">
      <SearchInput/>
      <div className="flex items-center justify-end w-full ">
        <button className="bg-orangeAdmin  sm:px-3 sm:py-2 py-2 px-1 text-sm sm:text-md  hover:bg-orange-500 shadow-md text-white flex items-center justify-center rounded-md gap-2">
          <Image src={'/icons/save.svg'} alt="ذخیره" width={20} height={20} />
          <span> ذخیره</span>
        </button>
      </div>
    </div>
  );
};

export default NavbarTableInventory;

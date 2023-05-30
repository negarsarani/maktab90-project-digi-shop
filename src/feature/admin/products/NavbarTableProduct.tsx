import Image from 'next/image';
import React from 'react';

import MotionSideBar from '@/layout/framer-motion/motionSideBar';
import SearchInput from '../components/SearchInput';
import NavbarTable from '../components/NavbarTable';
import ButtonOrange from '../components/ButtonOrange';
const NavbarTableProduct = () => {
  return (
    <div className="flex flex-col sm:flex-row  gap-5  sm:gap-0 items-center sm:justify-between w-full">
      <SearchInput />
      <div className="flex items-center justify-end  gap-4 w-full">
        <NavbarTable>
          <ButtonOrange name="افزودن کالا" src="/icons/plus.svg" />
        </NavbarTable>
      </div>
    </div>
  );
};

export default NavbarTableProduct;

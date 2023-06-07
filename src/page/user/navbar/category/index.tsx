import React, { useState, useRef } from 'react';
import PopoverMenu from './PopoverMenu';
interface Props {}
const CategoryNav = (props: Props) => {

  return (
    <div className="lg:flex  hidden px-6 xl:px-8">
      <div className="flex mt-2 border-t  w-full  gap-3">
        <div className=" border-l px-2 border-black py-2">
          <span>صفحه اصلی</span>
        </div>
        <PopoverMenu/>
      </div>
    </div>
  );
};
export default CategoryNav;

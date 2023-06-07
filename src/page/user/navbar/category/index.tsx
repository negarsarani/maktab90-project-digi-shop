import React, { useState, useRef } from 'react';
import PopoverMenu from './PopoverMenu';
import { OrderedCategory } from '@/types/type';
interface Props {
  Data: OrderedCategory[]
}
const CategoryNav = ({ Data }: Props) => {
console.log(Data);

  return (
    <div className="lg:flex  hidden px-6 xl:px-8">
      <div className="flex mt-2 border-t  w-full  gap-9">
        <div className=" flex items-center justify-center  py-2 ">
          <span className='border-l px-2 border-black cursor-pointer'>صفحه اصلی</span>
        </div>
        {Data.map((item , index) => {
          return <PopoverMenu key={index} data={item}/>;
        })}
      </div>
    </div>
  );
};
export default CategoryNav;

import { Button } from '@/components';
import Image from 'next/image';
import React from 'react';
interface props {
    data:{}
}
const Index = ({data}:props) => {
    return (
        <div className="w-full bg-violet-300 lg:col-span-6">
        <h3>
          تبلت سامسونگ مدل Galaxy Tab A7 Lite (2021, 8.7") 4G SM-T225 ظرفیت 32/3
          گیگابایت
        </h3>
        {/* <div className='bg-white rounded-lg shadow-sm'>
          <div>{data.brand}</div>
          <div>
            <span>ضمانت اصل بودن کالا</span>
          </div>
          <div>
            <span>ضمانت اصل بودن کالا</span>
          </div>
          <div>
           <span>{data.quantity}</span> <span>تعداد موجود در انبار</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex ">
              <Button type="button" className="">
                <Image
                  src={'/icons/user/Minus.svg'}
                  alt="minus"
                  fill
                  className="w-full h-full"
                />
              </Button>
              <span></span>
              <Button type="button" className="">
                <Image
                  src={'/icons/user/Plus.svg'}
                  alt="plus"
                  fill
                  className="w-full h-full"
                />
              </Button>
            </div>
  
            <div>
              <span>{data.price}</span>
            </div>
          </div>
        </div> */}
      </div>
    );
};

export default Index;
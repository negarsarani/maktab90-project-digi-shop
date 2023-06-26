import { Button } from '@/components';
import React from 'react';

const index = () => {
  return (
    <div className="bg-white lg:w-4/12 rounded-md p-3 w-full  ">
      <div className="border-btnCard border w-full h-full border-opacity-20 rounded-md flex flex-col gap-2 p-3">
        <p>اطلاعات پرداخت</p>
        <div className="flex items-center justify-between">
          <div>
            <span>مبلغ کالا ها</span>
            <span className="bg-btnCard text-white rounded-lg w-1 h-1"></span>
          </div>
          <div>
            <span>44</span>
            <span>تومان</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-btnCard">تخفیف</span>
          </div>
          <div className="text-btnCard">
            <span>44</span>
            <span>تومان</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="">هزینه ارسال</span>
            <span className="">!</span>
          </div>
          <div className="">
            <span>44</span>
            <span>تومان</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="">مبلغ قابل پرداخت</span>
            <span className="">!</span>
          </div>
          <div className="">
            <span>44</span>
            <span>تومان</span>
          </div>
        </div>
        <div className='flex-1 flex items-center justify-center'>
<Button
          type="button"
          className="bg-btnCard w-full text-white rounded-xl py-2"
          onClick={() => {}}
        >
          ادامه
        </Button>
        </div>
        
      </div>
    </div>
  );
};

export default index;

import { Button } from '@/components';
import Linkrouter from '@/components/Linkrouter';
import useRedux from '@/hooks/useRedux';
import React from 'react';

const Index = () => {
  const [value, dispatch] = useRedux((state) => state.userState);

  return (
    <div className='w-full h-full flex items-center justify-center flex-col gap-3'>
      <div className=''>
        <span>مبغ نهایی :</span>
        <span>{Intl.NumberFormat('fa-IR').format(value.Total)} تومان</span>
      </div>
      <div className='flex items-center justify-center gap-2'>
         <Linkrouter href="/cart/payment/success">
        <Button type="button" className="bg-btnCard p-2 rounded-md text-white">
          پرداخت
        </Button>
      </Linkrouter>

      <Linkrouter href="/cart/payment/fail">
        <Button type="button" className="bg-zinc-300 p-2 rounded-md ">
          انصراف
        </Button>
      </Linkrouter>
      </div>
     
    </div>
  );
};

export default Index;

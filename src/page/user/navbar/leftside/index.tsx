import { Linkouter, Input, Button } from '@/components';
import Image from 'next/image';
import { CookieValueTypes, deleteCookie, getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';
import Linkrouter from '@/components/Linkrouter';

const Index = () => {
  
  const handleExit = () => {
    deleteCookie('refreshtoken');
    deleteCookie('accesstoken');
    deleteCookie('role');
    deleteCookie('id');
  };
  return (
    <div className="w-6/12  flex items-center justify-end gap-5">
      {getCookie('role') === 'USER' ? (
         <Linkrouter href='/' className='flex items-center justify-center gap-2 cursor-pointer hover:bg-zinc-100 rounded-md ' onClick={handleExit}>
          <span className="hidden sm:flex">خروج</span>
          <Image
            src="/icons/user/Logout.svg"
            width={20}
            height={20}
            alt="خروج"
          />
        </Linkrouter>
      ) : (
        <>
          {' '}
          <span className="hidden sm:flex"> ورود / ثبت نام</span>
          <Linkouter
            href={'/login'}
            className={`flex  gap-2 items-center justify-center 
          `}
          >
            <Image
              src="/icons/user/user.svg"
              width={15}
              height={20}
              alt="ورود/ ثبت نام"
            />
          </Linkouter>
        </>
      )}
      {/* <div
        className={`${
          role === 'USER' ? 'hidden' : 'flex gap-2 items-center justify-center'
        }`}
      ></div> */}

      <Linkouter
        href="/cart"
        className="flex gap-2  items-center justify-center"
      >
        <span className="hidden sm:flex">سبد خرید</span>
        <Image
          src="/icons/user/Buy.svg"
          width={20}
          height={20}
          alt="سبد خرید"
        />
      </Linkouter>
    </div>
  );
};

export default Index;

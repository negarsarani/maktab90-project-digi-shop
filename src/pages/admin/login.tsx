import Image from 'next/image';
import React from 'react';
import img from '../../assets/AdminPanel/loginpic.svg'
import LoginAdmin from '@/feature/admin/Login';
const login = () => {
  return (
    <div className="w-full h-full bg-orangeLighter">
      <LoginAdmin/>
      <div className=' hidden lg:flex lg:w-[500px]'>
        <Image alt="" src={img} className='w-full h-full '/>
      </div>
    </div>
  );
};

export default login;
login.getLayout = function PageLayout(page: any) {
  return <> {page}</>;
};

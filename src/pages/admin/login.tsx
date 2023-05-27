import Image from 'next/image';
import React from 'react';
import img from '../../assets/AdminPanel/loginpic.svg';
import LoginAdmin from '@/feature/admin/Login';
import imgLogo from '../../assets/logo ligth.svg';
import arrow from '../../assets/Icons/arrowLogin.svg';
import Input from '@/components/Input';
import { Button } from '@mui/material';
const login = () => {
  return (
    <div className="w-full h-full flex flex-row-reverse bg-orangeLighter">
      <LoginAdmin />
      <div className=" hidden lg:flex lg:w-[500px]">
        <Image alt="" src={img} className="w-full h-full " />
      </div>
    </div>
  );
};

export default login;

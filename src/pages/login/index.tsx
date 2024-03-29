import Image from 'next/image';
import {LoginAdmin} from '@/page/admin';

const login = () => {
  return (
    <div className="w-full h-full flex flex-row-reverse bg-orangeLighter">
      <LoginAdmin />
      <div className=" hidden lg:flex lg:w-[500px]">
        <Image  width={30} height={30} alt="" src={'/AdminPanel/loginpic.svg'} className="w-full h-full " />
      </div>
    </div>
  );
};

export default login;
import { Linkouter, Input, Button } from '@/components';
import Image from 'next/image';

const index = () => {
  return (
    <div className="w-6/12  flex items-center justify-end gap-5">
      <Linkouter
        href="admin/login"
        className="flex gap-2 items-center justify-center"
      >
        <span className="hidden sm:flex"> ورود / ثبت نام</span>
        
        <Image
          src="/icons/user/user.svg"
          width={15}
          height={20}
          alt="ورود/ ثبت نام"
        />
      </Linkouter>
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

export default index;

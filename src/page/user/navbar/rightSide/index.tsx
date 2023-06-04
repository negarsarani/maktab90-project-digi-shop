import { Linkouter, Input, Button } from '@/components';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { Dispatch, SetStateAction } from 'react';
interface props {
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}
import Image from 'next/image';
const index = ({ setMobileMenuOpen }: props) => {
  return (
    <div className="w-6/12  flex items-center justify-start">
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <Linkouter href="/" className="-m-1.5 p-1.5">
        <Image
          className=""
          width={150}
          height={150}
          src="/logo light.svg"
          alt="دیجی شاپ"
        />
      </Linkouter>
    </div>
  );
};

export default index;

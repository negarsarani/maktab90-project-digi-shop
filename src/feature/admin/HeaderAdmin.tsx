import { LayoutChildrenAdminType } from '@/types/type';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import imageLogo from '../../assets/logo ligth.svg';

const HeaderAdmin = ({
  setMobileMenuOpen,
  mobileMenuOpen,
}: LayoutChildrenAdminType) => {
  return (
    <div className="bg-red-300 flex ">
      <nav className="  bg-red-300 flex" aria-label="Global">
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              className={`h-6 w-6 ${mobileMenuOpen ? 'hidden' : 'flex'}`}
              aria-hidden="true"
              onClick={() => setMobileMenuOpen(true)}
            />
          </button>
        </div>
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              className='h-8 w-auto'
              src={imageLogo}
              alt={'دیجی شاپ'}
              width={30}
              height={30}
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default HeaderAdmin;

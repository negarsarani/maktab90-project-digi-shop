import { useState } from 'react';
import { Sidebar } from '@/layout/user';
import { ButtonsNav, Logo_menu } from '@/page/user/navbar';
import { Search } from '@/page/user/shared';
import CategoryNav from '@/page/user/navbar/category';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white w-full">
      <div className='w-full'>
        <div
          className={`shadow pb-4 lg:pb-0  fixed top-0 z-10 bg-white  w-full`}
        >
          <nav className="px-6 pt-3 xl:px-8 flex w-full " aria-label="Global">
            <Logo_menu setMobileMenuOpen={setMobileMenuOpen} />

            <div className="w-5/12 sm:w-5/12 px-6  hidden lg:flex  items-center justify-center pt-2   text-gray-600  ">
              <div className="bg-white flex border-2 px-3 border-gray-300  rounded-lg w-full">
                <Search placeholder="کالاها را به راحتی پیدا کنید ..." />
              </div>
            </div>
            <ButtonsNav />
          </nav>
          <div className=" px-6  lg:hidden pt-2   text-gray-600 w-full flex items-center justify-center ">
            <div className="bg-white flex items-center justify-center sm:w-10/12 w-full border-2 px-3 border-gray-300  rounded-lg ">
              <Search placeholder="به راحتی محصول مورد نظر خود را پیدا کنید..." />
            </div>
          </div>
          <CategoryNav />
        </div>
      </div>
      <Sidebar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
};

export default Header;

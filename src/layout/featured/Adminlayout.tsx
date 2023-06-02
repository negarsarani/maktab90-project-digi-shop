import HeaderAdmin from '@/feature/admin/HeaderAdmin';
import SidebarAdmin from '@/feature/admin/SidebarAdmin';
import React, { ReactNode, useEffect, useState } from 'react';

const Adminlayout = ({ children }: { children: ReactNode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 400) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex flex-row-reverse justify-between h-full w-full">
        <div className={`${mobileMenuOpen ? 'w-8/12 md:w-9/12' : 'w-full'} `}>
          <header className="flex fixed bg-white  w-full flex-col border-b border-grayLight shadow-sm">
            <HeaderAdmin
              setMobileMenuOpen={setMobileMenuOpen}
              mobileMenuOpen={mobileMenuOpen}
            />
          </header>
          <div className="px-10 w-full pt-28  bg-creamLight h-full overflow-hidden overflow-y-auto">
          {children}
          </div>
        </div>
        <div className={`${mobileMenuOpen && 'w-4/12 md:w-3/12'} h-full lg:w-[13rem]`}>
          <SidebarAdmin
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />
        </div>
      </div>
    </>
  );
};

export default Adminlayout;

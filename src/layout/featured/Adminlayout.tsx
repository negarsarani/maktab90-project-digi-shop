import HeaderAdmin from '@/feature/admin/HeaderAdmin';
import SidebarAdmin from '@/feature/admin/SidebarAdmin';
import React from 'react';
import { useState } from 'react';

const Adminlayout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="flex flex-row-reverse justify-between h-full w-full ">
        <div className='flex-1'>
          <header className="bg-green-300 flex flex-col ">
            <HeaderAdmin setMobileMenuOpen={setMobileMenuOpen} mobileMenuOpen={mobileMenuOpen} />
            <div className="bg-blue-400">kewkjc</div>
          </header>
          {children}
        </div>
        <SidebarAdmin
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </div>
    </>
  );
};

export default Adminlayout;

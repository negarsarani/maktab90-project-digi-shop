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
        <div className={`${mobileMenuOpen ? 'w-8/12' : 'w-full'}`}>
          <header className="flex flex-col border-b border-grayLight shadow-sm">
            <HeaderAdmin
              setMobileMenuOpen={setMobileMenuOpen}
              mobileMenuOpen={mobileMenuOpen}
            />
          </header>
          <div className='w-full h-full'>{children}</div>
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

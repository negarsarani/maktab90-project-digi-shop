import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { LayoutChildrenAdminType } from '@/types/type';
import Image from 'next/image';
import SidebarLink from './components/SidebarLink';
import { sideBarData } from './data';
// const a =
const SidebarAdmin = ({
  mobileMenuOpen,
  setMobileMenuOpen,
}: LayoutChildrenAdminType) => {
  const handleMenueOpen = () => {
    return setMobileMenuOpen(false);
  };
  return (
    <div
    className={` ${
      mobileMenuOpen ? 'flex' : 'hidden'
        } lg:flex h-full bg-orangeSidebar`}
        >
      
        <div className=" h-full md:w-[20rem] sm:w-[15rem] w-full sm:static sm:none fixed sm:inset-0 inset-y-0 right-0 z-10  overflow-y-auto px-6 bg-orangeSidebar py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                className={'h-8 w-auto lg:hidden'}
                src={'/logo ligth.svg'}
                alt={''}
                width={30}
                height={30}
              />
            </a>
            <button
              type="button"
              className="-m-2.5 lg:hidden rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className={`h-6 w-6`} aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 ">
              <div className="space-y-2 py-6">
                {sideBarData.map(
                  (item: { name: string; href: string; icon: string }) => (
                    <SidebarLink
                      key={item.href}
                      href={item.href}
                      icon={item.icon}
                      name={item.name}
                      width={20}
                      height={20}
                      onClick={handleMenueOpen}
                    />
                  )
                )}
              </div>
              <div className="py-6  bottom-0 border-none">
                <SidebarLink
                  name="خروج"
                  icon="/icons/logout.svg"
                  href="/test"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>
  
      </div>
  );
};

export default SidebarAdmin;

import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { LayoutChildrenAdminType } from '@/types/type';
import Image from 'next/image';
import imageLogo from '../../assets/logo ligth.svg';
const SidebarAdmin = ({
  mobileMenuOpen,
  setMobileMenuOpen,
}: LayoutChildrenAdminType) => {
  return (
    <div
      className={` ${mobileMenuOpen ? 'flex' : 'hidden'} lg:flex h-full`}
      // open={mobileMenuOpen}
      // onClose={setMobileMenuOpen}
    >
      {/* <div className="fixed inset-0 z-10" /> */}
      <div className=" h-full overflow-y-auto  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              className={'h-8 w-auto lg:hidden'}
              src={imageLogo}
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
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Features
              </a>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Marketplace
              </a>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Company
              </a>
            </div>
            <div className="py-6">
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarAdmin;

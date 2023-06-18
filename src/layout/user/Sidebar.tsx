import { Dispatch, SetStateAction, useState } from 'react';
import { Dialog, Disclosure } from '@headlessui/react';
import { Linkouter } from '@/components';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Linkrouter from '@/components/Linkrouter';
import { OrderedCategory } from '@/types/type';
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
interface props {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
  Data: OrderedCategory[];
}
const Sidebar = ({ mobileMenuOpen, setMobileMenuOpen, Data }: props) => {
  return (
    <Dialog
      as="div"
      className="lg:hidden "
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-10 " />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-8/12 overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 border shadow-md">
        <div className="flex items-center justify-between ">
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <Linkouter href="/" className="-m-1.5 p-1.5">
            <Image
              className="h-8 w-auto"
              width={50}
              height={50}
              src="/logo light.svg"
              alt="دیجی شاپ"
            />
          </Linkouter>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 ">
            <div className="space-y-2 py-6">
              {Data?.map((data: OrderedCategory) => {
                return (
                  <Disclosure as="div" className="-mx-3" key={data.id}>
                    {({ open }) => (
                      <>
                        <div className='flex justify-between w-full items-center '>
                          <div className="flex items-center justify-center gap-3 px-4 ">
                            <Image
                              src={`http://localhost:8000/images/categories/icons/${data.icon}`}
                              alt={data.name}
                              width={25}
                              height={25}
                            />
                            <Linkouter className='hover:text-grayDarkLight hover:font-bold' href={`category/${data.slug}`}>{data.name}</Linkouter>
                            
                          </div>
                          <Disclosure.Button className="flex rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 ">
                            <div className="p-2 hover:bg-gray-50 rounded-full">
                              <ChevronDownIcon
                                className={`  ${classNames(
                                  open ? 'rotate-180' : '',
                                  'h-5 w-5 flex-none'
                                )}`}
                                aria-hidden="true"
                              />
                            </div>
                          </Disclosure.Button>
                        </div>

                        <Disclosure.Panel className="mt-2 space-y-2 pr-4">
                          <div className="mt-2 space-y-2 border-r pr-4">
                            {[...data.subCategories].map((item) => (
                              <Disclosure.Button
                                key={item.name}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                <Linkrouter
                                  href={`category/${data.slug}/${item.slugname}`}
                                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                  {item.name}
                                </Linkrouter>
                              </Disclosure.Button>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                );
              })}
            </div>
            <div className="py-6"></div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default Sidebar;

import { Dispatch, SetStateAction, useState } from 'react';
import { Dialog, Disclosure } from '@headlessui/react';
import { Linkouter } from '@/components';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/20/solid';
import Image from 'next/image';
import { orderedCategory } from '@/data/shared';
import Linkrouter from '@/components/Linkrouter';

let Data: [];
orderedCategory().then((res) => (Data = res));
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
interface props {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}
const Sidebar = ({ mobileMenuOpen, setMobileMenuOpen }: props) => {
  return (
    <Dialog
      as="div"
      className="lg:hidden "
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-10 " />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-8/12 overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 border shadow-md">
        <div className="flex items-center justify-between">
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
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {Data?.map(
                (data: {
                  id: string;
                  name: string;
                  icon: string;
                  subCategories: [];
                }) => {
                  return (
                    <Disclosure as="div" className="-mx-3" key={data.id}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                            {data.name}
                            <ChevronDownIcon
                              className={classNames(
                                open ? 'rotate-180' : '',
                                'h-5 w-5 flex-none'
                              )}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {[...data.subCategories].map(
                              (item: {
                                id: string;
                                name: string;
                                category: string;
                              }) => (
                                <Disclosure.Button
                                  key={item.name}
                                  className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                  <Linkrouter
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                  >
                                    {item.name}
                                  </Linkrouter>
                                </Disclosure.Button>
                              )
                            )}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  );
                }
              )}
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
      </Dialog.Panel>
    </Dialog>
  );
};

export default Sidebar;

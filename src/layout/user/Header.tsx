import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { Linkouter , Input , Button} from '@/components';
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
import { LineStyle } from '@mui/icons-material';
const products = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of your traffic',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: 'Your customers’ data will be safe and secure',
    href: '#',
    icon: FingerPrintIcon,
  },
  {
    name: 'Integrations',
    description: 'Connect with third-party tools',
    href: '#',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will convert',
    href: '#',
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <div>  
         <nav
        className="px-6 pt-3 xl:px-8 flex w-full "
        aria-label="Global"
      >
        <div className="w-6/12  flex items-center justify-start">
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
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

        <div className="w-5/12 sm:w-5/12 px-6  hidden lg:flex  items-center justify-center pt-2   text-gray-600  ">
       <div className='bg-white flex border-2 px-3 border-gray-300  rounded-lg w-full'>
         <Button type="submit" className="">
         <Image src='/icons/user/search.svg' alt='جسجتو' width={20} height={20}/>
        </Button> 
        <Input className=" text-sm py-2 placeholder:py-2 focus:outline-none focus:ring-0 border-none w-full"
          type="text" name="search" placeholder="کالاها را به راحتی پیدا کنید ..." id='search'/>
      </div>
      </div>
        <div className="w-6/12  flex items-center justify-end gap-5">
        
          <Linkouter href="/cart" className="flex gap-2 items-center justify-center">
            
            <span className='hidden sm:flex'> ورود / ثبت نام</span>
            <Image
              src="/icons/user/user.svg"
              width={20}
              height={20}
              alt="ورود/ ثبت نام"
            />
          </Linkouter>
            <Linkouter href="/cart" className="flex gap-2  items-center justify-center">
            
            <span className='hidden sm:flex'>سبد خرید</span>
            <Image
              src="/icons/user/Buy.svg"
              width={25}
              height={20}
              alt="سبد خرید"
            />
          </Linkouter>
        </div>
      </nav>
      <div className=" px-6  lg:hidden pt-2   text-gray-600 w-full flex items-center justify-center ">
       <div className='bg-white flex items-center justify-center sm:w-10/12 w-full border-2 px-3 border-gray-300  rounded-lg '>
         <Button type="submit" className=" border-l pl-2 ">
         <Image src='/icons/user/search.svg' alt='جسجتو' width={20} height={20}/>
        </Button> 
        <Input className=" text-sm  py-2 focus:outline-none focus:ring-0 border-none w-full placeholder:py-3"
          type="text" name="search" placeholder="به راحتی محصول مورد نظر خود را پیدا کنید ..."id='search'/>
      </div>
       </div>
       
      </div>
   

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-8/12 overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
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
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;

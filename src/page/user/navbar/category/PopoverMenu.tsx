import { Fragment, useState, useRef } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
import { OrderedCategory } from '@/types/type';
import Image from 'next/image';
import { Linkouter } from '@/components';
interface props {
  data: OrderedCategory;
}
const PopoverMenu = ({ data }: props) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const buttonRef = useRef(null);

  const handleMouseEnter = () => {
    console.log('a');

    setIsPopoverOpen(true);
  };

  const handleMouseLeave = () => {
    setIsPopoverOpen(false);
  };
  return (
    <div
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleMouseEnter}
      className="py-2  "
    >
      <Popover.Group className="flex">
        <Popover className=" flex relative">
          <Popover.Button className="flex  items-center justify-center  text-sm  font-semibold leading-6 text-gray-900 border-none focus:border-none outline-none">
            <div onMouseEnter={handleMouseEnter}>
              <Linkouter
                className="flex items-center justify-center gap-3"
                href={`/category/${data.slug}`}
              >
                <Image
                  src={`http://localhost:8000/images/categories/icons/${data.icon}`}
                  alt={data.name}
                  width={25}
                  height={25}
                />
                <span className="hover:text-zinc-600 hover:bg-zinc-200 hover:bg-opacity-30  rounded-md">
                  {data.name}
                </span>
              </Linkouter>
            </div>
            <div className='hover:bg-zinc-200 hover:bg-opacity-30 rounded-full p-1'>
              <ChevronDownIcon
                className={`h-5 w-5 flex-none `}
                aria-hidden="true"
              />
            </div>
          </Popover.Button>
          <div className=" bg-inherit pt-4 w-full flex flex-col absolute left-20 top-full">
            <Transition
              as={Fragment}
              show={isPopoverOpen}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                className=" w-[17rem] h-full overflow-hidden rounded-3xl bg-white  shadow-lg ring-1 ring-gray-900/5"
                static
              >
                <div className="p-4">
                  {data?.subCategories?.map((item) => (
                    <Linkouter
                      href={`/category/${data.slug}/${item.slugname}`}
                      onClick={handleMouseLeave}
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 "
                    >
                      <div className="flex-auto cursor-pointer">
                        <p className="mt-1 text-gray-600">{item.name}</p>
                      </div>
                    </Linkouter>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50"></div>
              </Popover.Panel>
            </Transition>
          </div>
        </Popover>
      </Popover.Group>
    </div>
  );
};

export default PopoverMenu;

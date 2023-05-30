import Linkrouter from '@/components/Linkrouter';
import Image from 'next/image';
import React from 'react';
type SidebarLinkType = {
  name: string;
  href: string;
  icon: string;
  width: number;
  height: number;
  onClick?:() => void
};
const SidebarLink = ({ name, href, icon, width, height , onClick }: SidebarLinkType) => {
  return (
    <Linkrouter
      className={
        'flex flex-row-reverse justify-end gap-2 items-center p-2 bg-white rounded-xl sm:px-5 sm:w-full font-semibold w-8/12 sm:text-md text-sm py-3 hover:bg-cream'
      }
      href={href}
      onClick={onClick}
    >
      <span>{name}</span>
      <Image src={icon} width={width} height={height} alt={name} />
    </Linkrouter>
  );
};

export default SidebarLink;

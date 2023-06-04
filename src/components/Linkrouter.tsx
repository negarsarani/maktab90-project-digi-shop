import Link from 'next/link';
import React, { ReactNode } from 'react';
type Linkrouter = {
  children: ReactNode;
  href: string;
  className: string;
  onClick?:  (()=> void) | undefined;
};
const Linkrouter = ({ children, href, className, onClick }: Linkrouter) => {
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
};

export default Linkrouter;

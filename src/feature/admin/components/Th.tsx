import { tableChildType } from '@/types/type';
import React from 'react';

const Th = ({ className, children }: tableChildType) => {
  return <th className={className} >{children}</th>;
};

export default Th;

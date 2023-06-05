import { tableChildType } from '@/types/type';
import React from 'react';

const Th = ({ className, children , id , onClick}: tableChildType) => {
  return <th className={className}  id={id} onClick={onClick}>{children}</th>;
};

export default Th;

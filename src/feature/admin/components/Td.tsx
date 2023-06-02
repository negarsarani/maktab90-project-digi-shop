import { tableChildType } from '@/types/type';
import React from 'react';

const Td = ({ children, className }: tableChildType) => {
  return <td className={className}>{children}</td>;
};

export default Td;

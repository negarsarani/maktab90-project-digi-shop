import { tableChildType } from '@/types/type';
import React from 'react';
type Tbody = {
  childTr: string;
};
const Tbody = ({ children, className }: tableChildType) => {
  return <tbody className={className}>{children}</tbody>;
};

export default Tbody;

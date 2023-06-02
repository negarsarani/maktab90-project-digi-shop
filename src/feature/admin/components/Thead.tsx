import { tableChildType } from '@/types/type';
import React from 'react';
interface TheadType extends tableChildType {
  classnameTr?: string;
}
const Thead = ({ children, className, classnameTr }: TheadType) => {
  return (
    <thead className={className}>
      <tr className={classnameTr}>{children}</tr>
    </thead>
  );
};

export default Thead;

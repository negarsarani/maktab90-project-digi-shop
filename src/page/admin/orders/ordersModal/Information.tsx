import { OrderDataType } from '@/types/type';
import React from 'react';
interface props {
  data: OrderDataType;
}
const Information = ({ data }: props) => {
  return (
    <div>
      <ul className="flex flex-col items-center  justify-center">
        <li className="flex gap-2">
          <span>نام مشتری :</span>
          <span>{`${data.user.firstname} ${data.user.lastname}`}</span>
        </li>
      </ul>
    </div>
  );
};

export default Information;

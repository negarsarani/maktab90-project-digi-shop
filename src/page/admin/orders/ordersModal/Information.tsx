import { OrderDataType } from '@/types/type';
import React from 'react';
import persianDate from '../persianDate';
interface props {
  data: OrderDataType;
}
const Information = ({ data }: props) => {
  return (
    <div>
      <ul className="flex flex-col gap-3 items-center  justify-center">
        <li className="flex gap-2">
          <span>نام مشتری :</span>
          <span>{`${data.user.firstname} ${data.user.lastname}`}</span>
        </li>
        <li className="flex gap-2">
          <span>آدرس :</span>
          <span>{data.user.address}</span>
        </li>
        <li className="flex gap-2">
          <span>تلفن :</span>
          <span>{data.user.phoneNumber}</span>
        </li>
        <li className="flex gap-2">
          <span>زمان تحویل :</span>
          
          <span>{persianDate(data.deliveryDate)}</span>
        </li>
        <li className="flex gap-2">
          <span>زمان سفارش :</span>
          <span>{persianDate(data.createdAt)}</span>
        </li>
      </ul>
    </div>
  );
};

export default Information;

import React from 'react';
import { EachCard } from '@/page/user';
import { dataProduct } from '@/types/type';
import ButtonCart from './ButtonCart';
interface props {
  data: { data: dataProduct; quantity: number }[];
}
const index = ({ data  }: props) => {
  return (
    <div className=" flex-1 flex flex-col gap-3 py-2">
      {data?.map((item) => (
        <EachCard quantity={item.quantity} key={item.data._id} data={item.data} />
      ))}
    </div>
  );
};

export default index;

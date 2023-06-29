import React from 'react';
import { Tbody, Td, Th } from '@/page/admin/shared';
import { OrderDataType } from '@/types/type';
interface props {
  data: OrderDataType
}
const TableModal = ({ data }: props) => {
  const HandleSingleProduct =()=>{

  }
  return (
    <table className="w-full  bg-white ">
      <thead>
        <Th className=" bg-orangeLighter  py-4  text-center text-xs font-medium text-gray ">
          کالا
        </Th>
        <Th className=" bg-orangeLighter  py-4  text-center text-xs font-medium text-gray ">
          قیمت
        </Th>
        <Th className=" bg-orangeLighter  py-4  text-center text-xs font-medium text-gray ">
          تعداد
        </Th>
      </thead>
      <Tbody className="">
        {data.products.map((item) => {
          return (
            <tr key={item.product._id} className="border-b">
              <Td className="py-4 px-6    w-[20rem]">
                <div className="text-sm text-center px-4 h-20  w-[20rem] text-gray-900 flex items-center justify-center ">
                  <span className="  overflow-hidden  w-full cursor-pointer text-ellipsis" onClick={HandleSingleProduct}>
                    {item.product.name}
                  </span>
                </div>
              </Td>
              <Td key={item._id} className="py-4  px-6 ">
                <div className="text-sm text-center flex gap-2   text-gray-900  w-[10rem] ">
                  <span>
                    {Intl.NumberFormat('fa-IR').format(item.product.price)}
                  </span>
                  <span>تومان</span>
                </div>
              </Td>
              <Td key={item._id} className="py-4  px-6 ">
                <div className="text-sm text-center    text-gray-900  w-[5rem] ">
                  {item.product.quantity}
                </div>
              </Td>
            </tr>
          );
        })}
      </Tbody>
    </table>
  );
};

export default TableModal;

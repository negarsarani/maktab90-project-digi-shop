import { headerOrdersTable } from '@/data/admin';
import { TableProps } from '@/types/type';
import { Tbody, Th, Thead, Td } from '@/page/admin';
import { useState } from 'react';
import getData from '@/api/getData';
import Image from 'next/image';

const OrdersTable = ({ isLoading, value, isError }: TableProps) => {
  const HandleUserName = (item: string) => {
    let userName: string;
    getData(`users/${item}`).then(
      (res) =>
        (userName = `${res.data.user.firstname} ${res.data.user.lastname}`)
    );
    const a = setTimeout(() => {
      return userName;
    }, 200);
    return a;
  };

  return (
    <table className={`w-full bg-white ${isError && 'h-60'} `}>
      <Thead className=" ">
        {headerOrdersTable.map(
          (item: { name: string; icon: boolean; id: string }) => (
            <Th
              key={item.id}
              className=" bg-orangeLighter  py-4  text-center text-xs font-medium text-gray "
            >
              {item.name}
            </Th>
          )
        )}
      </Thead>
      <Tbody className=" ">
        {value.orders?.data?.map((item: any) => {
          return (
            <tr key={item._id} className="border-b">
              <Td key={item._id} className="py-4  px-6 ">
                <div className="text-sm text-center    text-gray-900 w-[5rem] ">
                  {/* {HandleUserName(item.user)} */}
                  نگار سرانی
                </div>
              </Td>
              <Td key={item._id} className="py-4  px-6  ">
                <div className="text-sm flex  items-center justify-center text-center  text-gray-900 ">
                  {item.totalPrice} <span>ریال</span>
                </div>
              </Td>
              {item.deliveryStatus ? (
                <Td
                  key={item._id}
                  className="py-4  px-6  flex items-center justify-center "
                >
                  <div className="flex items-center justify-center -[.7rem] w-[10rem] md:text-sm  text-gray-800 ">
                    <div className="text-green-800 bg-green-200 rounded-3xl px-3 flex items-center justify-center text-sm  gap-3 py-2 ">
                      <div className="w-2 h-2  bg-green-600 rounded-full "></div>
                      <div className="px-1">
                        {item.deliveryStatus}تحویل داده شده
                      </div>
                    </div>
                  </div>
                </Td>
              ) : (
                <Td
                  key={item._id}
                  className="py-4   px-6  flex items-center justify-center  "
                >
                  <div className="flex items-center  justify-centertext-[.7rem] w-[10rem]md:text-sm  text-gray-800 ">
                    <div className="text-red-800 bg-red-200 text-sm rounded-3xl px-3 flex items-center justify-center gap-3 py-2 ">
                      <div className="w-2 h-2  bg-red-600 rounded-full "></div>
                      <div className="px-1">
                        {item.deliveryStatus}تحویل داده نشده{' '}
                      </div>
                    </div>
                  </div>
                </Td>
              )}

              <Td key={item._id} className="py-4 px-6">
                <div className="flex items-center justify-center md:w-full text-sm ">
                  1402/3/17
                  {/* {item.deliveryDate} */}
                </div>
              </Td>
              <Td key={item._id} className="py-4  px-6  ">
                <div className="  cursor-pointer  flex items-center justify-center lg:w-full w-[5rem]">
                  <div>

                  <Image src='/icons/circle.svg' alt='جزییات' width={20} height={20} />
                  </div>
                </div>
              </Td>
            </tr>
          );
        })}
      </Tbody>
    </table>
  );
};

export default OrdersTable;

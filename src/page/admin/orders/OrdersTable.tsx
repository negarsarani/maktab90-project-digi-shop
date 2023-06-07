import { headerOrdersTable } from '@/data/admin';
import { TableProps } from '@/types/type';
import { Tbody , Th , Thead , Td} from '@/page/admin';
import { useState } from 'react';

const OrdersTable = ({ isLoading, value, isError }: TableProps) => {
  const [openModal, setOpenModal] = useState({
    filter: false,
    buttonOrange: false,
  });
  return (
    <table className={`w-full bg-white ${isError && 'h-60'} `}>
      <Thead className=" ">
        {headerOrdersTable.map((item:{
    name: string;
    icon: boolean;
    id: string;
}) => (
          <Th
            key={item.id}
            className=" bg-orangeLighter  py-4  text-center text-xs font-medium text-gray "
          >
            {item.name}
          </Th>
        ))}
      </Thead>
      <Tbody className=" ">
        {value.orders?.data?.map((item: any) => {
          return (
            <tr key={item._id} className="border-b">
              <Td key={item._id} className="py-4 px-6 ">
                <div className="text-sm text-center px-4 text-gray-900">
                  {item.user}
                </div>
              </Td>
              <Td key={item._id} className="py-4 px-6 ">
                <div className="text-sm text-center px-10 text-gray-900">
                  {item.totalPrice}
                </div>
              </Td>
              {item.deliveryStatus ? (
                <Td key={item._id} className="py-4  px-6">
                  <div className="flex items-center justify-center w-[10rem]  text-[.7rem] md:text-sm  text-gray-800 ">
                    <div className="text-green-800 bg-green-200 rounded-3xl px-3 flex items-center justify-center gap-3 py-2 ">
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
                  className="py-4  flex items-center justify-center px-6 "
                >
                  <div className="flex items-center justify-center w-[10rem]  text-[.7rem] md:text-sm  text-gray-800 ">
                    <div className="text-red-800 bg-red-200 rounded-3xl px-3 flex items-center justify-center gap-3 py-2 ">
                      <div className="w-2 h-2  bg-red-600 rounded-full "></div>
                      <div className="px-1">
                        {item.deliveryStatus}تحویل داده نشده{' '}
                      </div>
                    </div>
                  </div>
                </Td>
              )}

              <Td key={item._id} className="py-4 px-6 -  ">
                <div className="flex gap-4">{item.deliveryDate}</div>
              </Td>
            </tr>
          );
        })}
      </Tbody>
    </table>
  );
};

export default OrdersTable;

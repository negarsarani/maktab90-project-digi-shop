import Image from 'next/image';
import Td from './components/Td';
import Tbody from './components/Tbody';
import Th from './components/Th';
import Thead from './components/Thead';
import { headerOrdersTable } from './data';
import { TableProps } from '@/types/type';

const OrdersTable = ({ isLoading, value, isError }: TableProps) => {
  return (
    <table className={`w-full bg-white ${isError && 'h-60'} `}>
      <Thead className=" ">
        {headerOrdersTable.map((item) => (
          <Th
            key={item}
            className=" bg-orangeLighter  py-4  text-center text-xs font-medium text-gray "
          >
            {item}
          </Th>
        ))}
      </Thead>
      <Tbody className=" divide-grayMedium">
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

              <Td key={item._id} className="py-4 px-6 border-b  ">
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

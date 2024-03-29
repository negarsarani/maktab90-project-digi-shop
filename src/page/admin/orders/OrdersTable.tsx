import { headerOrdersTable } from '@/data/admin';
import { TableProps } from '@/types/type';
import { Tbody, Th, Thead, Td, OrdersModal } from '@/page/admin';
import Image from 'next/image';
import persianDate from './persianDate';
import { Dispatch, SetStateAction, useState } from 'react';

const OrdersTable = ({ isLoading, value, isError , refetch }: TableProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [activeIdModal, setActiveIdModal] = useState('');
  return (
    <>
      {isOpenModal ? (
        <OrdersModal
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          activeIdModal={activeIdModal}
          refetch={refetch}
        />
      ) : (
        ''
      )}
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
                  <div className="text-sm text-center    text-gray-900 md:w-full w-[5rem] ">
                    {`${item.user.firstname} ${item.user.lastname}`}
                  </div>
                </Td>
                <Td key={item._id} className="py-4  px-6  ">
                  <div className="text-sm flex  items-center justify-center text-center gap-2 text-gray-900 ">
                    {Intl.NumberFormat('fa-IR').format(item.totalPrice)}{' '}
                    <span>تومان</span>
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
                    <div className="flex items-center  justify-centertext-[.7rem] w-[10rem] md:text-sm  text-gray-800 ">
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
                    {persianDate(item.deliveryDate)}
                  </div>
                </Td>
                <Td key={item._id} className="py-4  px-6  ">
                  <div className="  cursor-pointer  flex items-center justify-center lg:w-full w-[5rem]">
                    <div>
                      <Image
                        onClick={() => {
                          setActiveIdModal(item._id);
                          setIsOpenModal(true);
                        }}
                        src="/icons/circle.svg"
                        alt="جزییات"
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                </Td>
              </tr>
            );
          })}
        </Tbody>
      </table>{' '}
    </>
  );
};

export default OrdersTable;

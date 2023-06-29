import React, { Dispatch, SetStateAction, useState } from 'react';
import TableModal from './TableModal';
import ModalOrder from './ModalOrder';
import getData from '@/api/getData';
import { useQuery } from '@tanstack/react-query';
import Information from './Information';
import { Button } from '@/components';
interface props {
  setIsOpenModal: Dispatch<SetStateAction<any>>;
  isOpenModal: boolean;
  activeIdModal: number | string;
}
const Index = ({ setIsOpenModal, isOpenModal, activeIdModal }: props) => {
  const { isLoading, data } = useQuery(
    ['order', activeIdModal],
    () => getData(`/orders/${activeIdModal}`),
    {
      enabled: !!activeIdModal,
    }
  );
  return (
    <div>
      <ModalOrder setIsOpen={setIsOpenModal} openModal={isOpenModal}>
        {isLoading ? (
          <div>loading...</div>
        ) : (
          <div className="py-10 h-[30rem] overflow-hidden overflow-y-auto overflow-x-auto   w-full flex flex-col gap-4 items-center ">
            <h1 className="font-semibold">نمایش سفارش</h1>
            <Information data={data.data.order} />
            <div className=" w-full  pb-10 flex flex-col  items-center justify-center ">
              <div className=" overflow-hidden  bg-white flex flex-col overflow-x-auto w-full rounded-xl border">
                <TableModal data={data.data.order} />
              </div>
            </div>
            {!data.data.order.deliveryStatus ? (
              <Button
                type="button"
                className=" bg-green-400 shadow-md text-white rounded-md px-3 py-2"
              >
                تحویل داده شد
              </Button>
            ) : (
              <div className="flex flex-col gap-3">
                <div className="  rounded-md px-3 py-2 ">
                  تحویل داده شده است
                </div>
                <Button
                  type="button"
                  className="bg-orangeAdmin shadow-md text-white rounded-md px-3 py-2"
                >
                  تغییر وضعیت
                </Button>
              </div>
            )}
          </div>
        )}
      </ModalOrder>
    </div>
  );
};

export default Index;

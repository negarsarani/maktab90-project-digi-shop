import React, { Dispatch, SetStateAction, useState } from 'react';
import TableModal from './TableModal';
import ModalOrder from './ModalOrder';
import getData from '@/api/getData';
import { useMutation, useQuery } from '@tanstack/react-query';
import Information from './Information';
import { Button } from '@/components';
import patchData from '@/api/patchData';
import { toast } from 'react-toastify';
interface props {
  setIsOpenModal: Dispatch<SetStateAction<any>>;
  isOpenModal: boolean;
  activeIdModal: number | string;
  refetch:()=>{}
}
const Index = ({ setIsOpenModal, isOpenModal, activeIdModal , refetch }: props) => {
  const { isLoading, data } = useQuery(
    ['order', activeIdModal],
    () => getData(`/orders/${activeIdModal}`),
    {
      enabled: !!activeIdModal,
      staleTime: 600000,
      cacheTime: 90,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );
  const HandleAddOrder = async (value: boolean) => {
    const obj = {
      deliveryStatus: value,
    };
    return await patchData(`/orders/${data.data.order._id}`, obj);
  };

  const mutation = useMutation({
    mutationFn: (value: boolean) => HandleAddOrder(value),
    onSuccess(data, variables, context) {
      toast.success('تغییر وضعیت تحویل با موفقیت اعمال شد');
      setIsOpenModal(false)
     return refetch()
    },
    onError(error, variables, context) {
      toast.error('تغییر وضعیت تحویل با خطا اعمال شد');
     return refetch()
    },
  });
  const HandleOrder = (value: boolean) => {
    return mutation.mutate(value);
  };
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
                onClick={() => HandleOrder(true)}
                type="button"
                className=" bg-green-400 hover:bg-green-500 shadow-md text-white rounded-md px-3 py-2"
              >
                تحویل داده شد
              </Button>
            ) : (
              <div className="flex flex-col gap-3">
                <div className="  rounded-md px-3 py-2 ">
                  تحویل داده شده است
                </div>
                <Button
                  onClick={() => HandleOrder(false)}
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

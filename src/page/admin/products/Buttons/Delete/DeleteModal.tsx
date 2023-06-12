import deleteData from '@/api/deleteData';
import { Button } from '@/components';
import useQueries from '@/hooks/useQueries';
import useRedux from '@/hooks/useRedux';
import { Modal } from '@/page/admin/shared';
import { DELETEITEM } from '@/redux/slice';
import { useRouter } from 'next/router';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { toast } from 'react-toastify';
interface props {
  isOpen: boolean;
  setIsOpen: Dispatch<
    SetStateAction<{
      Edit: boolean;
      Delete: boolean;
    }>
  >;
  nameProduct: string;
  refetch: () => void;
  id: string;
}
const DeleteModal = ({
  isOpen,
  setIsOpen,
  nameProduct,
  refetch,
  id,
}: props) => {
  const [valueAdmin, dispatch] = useRedux((state) => state.adminState);
  const router = useRouter();
  const HandleDelete = () => {
    deleteData(`/products/${id}`)
      .then(() => {
        return dispatch(DELETEITEM({ name: 'products' }));
      })
      .then(() => refetch());
    // router.push({ pathname:router.pathname , query:{...router.query , page:valueAdmin.products.options.totalPages} })
  };
  return (
    <Modal openModal={isOpen} setOpenModal={setIsOpen} name="Delete">
      <div className="mt-10 flex flex-col items-center justify-center">
        <p>آیا از حذف آیتم {nameProduct} مطمین هستید؟</p>
        <div className=" w-full flex items-center justify-center gap-5 mt-4">
          <Button
            className={`bg-red-700 text-white px-5 py-2 hover:bg-red-600 rounded-md `}
            onClick={() => {
              setIsOpen({
                Edit: false,
                Delete: false,
              });
              HandleDelete();
            }}
            type="button"
          >
            بله
          </Button>
          <Button
            className="bg-gray-400 hover:bg-gray-300 text-black  px-5 py-2 rounded-md"
            onClick={() => {
              setIsOpen({
                Edit: false,
                Delete: false,
              });
            }}
            type="button"
          >
            خیر
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;

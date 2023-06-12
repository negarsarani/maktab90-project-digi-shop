import { Button } from '@/components';
import { Modal } from '@/page/admin/shared';
import React, { Dispatch, SetStateAction } from 'react';
interface props {
  isOpen: boolean;
  setIsOpen: Dispatch<
    SetStateAction<{
      Edit: boolean;
      Delete: boolean;
    }>
  >;
  nameProduct: string;
}
const DeleteModal = ({ isOpen, setIsOpen, nameProduct }: props) => {
  return (
    <Modal openModal={isOpen} setOpenModal={setIsOpen} name="Delete">
      <div className="mt-10 flex flex-col items-center justify-center">
        <p>آیا از حذف آیتم {nameProduct} مطمین هستید؟</p>
        <div className=" w-full flex items-center justify-center gap-5 mt-4">
          <Button
            className="bg-red-700 text-white px-5 py-2 hover:bg-red-600 rounded-md"
            onClick={() => {
              setIsOpen({
                Edit: false,
                Delete: false,
              });
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

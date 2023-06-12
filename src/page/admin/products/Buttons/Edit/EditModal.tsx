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
}
const EditModal = ({ isOpen, setIsOpen }: props) => {
  return (
    <Modal openModal={isOpen} setOpenModal={setIsOpen} name="Edit">
      <div className='mt-10'>sadad</div>
    </Modal>
  );
};

export default EditModal;

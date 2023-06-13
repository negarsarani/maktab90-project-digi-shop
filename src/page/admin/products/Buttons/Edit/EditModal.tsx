import { Modal } from '@/page/admin/shared';
import React, { Dispatch, SetStateAction } from 'react';
import Form from '../../AddProducts/Form';
interface props {
  isOpen: boolean;
  setIsOpen: Dispatch<
    SetStateAction<{
      Edit: boolean;
      Delete: boolean;
    }>
  >;
  refetch: () => void;
}
const EditModal = ({ isOpen, setIsOpen, refetch }: props) => {
  return (
    <Modal openModal={isOpen} setOpenModal={setIsOpen} name="Edit">
      <Form setOpenModal={setIsOpen} refetch={refetch}  editFlag={isOpen}/>
    </Modal>
  );
};

export default EditModal;

import { Dispatch, SetStateAction } from 'react';
import Form from './Form';
import { Modal } from '@/page/admin';
interface ModalProps {
  openModal: boolean;
  setOpenModal: Dispatch<
    SetStateAction<{ filter: boolean; buttonOrange: boolean }>
  >;
  refetch: () => void;
  name: string;
}
const ModalAddProduct = ({ name, openModal, setOpenModal }: ModalProps) => {
  return (
    <Modal name={name} openModal={openModal} setOpenModal={setOpenModal}>
      <Form></Form>
    </Modal>
  );
};

export default ModalAddProduct;

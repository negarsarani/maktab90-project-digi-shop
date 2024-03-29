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
const ModalAddProduct = ({ name, openModal, setOpenModal , refetch }: ModalProps) => {
  return (
    <Modal setOpenModal={setOpenModal} name={name} openModal={openModal} >
      <Form setOpenModal={setOpenModal} refetch={refetch}/>
    </Modal>
  );
};

export default ModalAddProduct;

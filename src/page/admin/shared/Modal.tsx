import { Dispatch, SetStateAction } from 'react';
import { Dialog } from '@headlessui/react';
interface props {
  openModal: boolean;
  setOpenModal: Dispatch<
    SetStateAction<{
      filter: boolean;
      buttonOrange: boolean;
    }>
  >;
  name: string;
}
const Modal = ({ openModal, setOpenModal, name }: props) => {
  const handleClose = () => {
    setOpenModal((prevState) => ({
      ...prevState,
      [name]: false,
    }));
  };
  return (
    <Dialog open={openModal} onClose={() => handleClose()}>
      <Dialog.Panel>
        <Dialog.Title>Deactivate account</Dialog.Title>
        <Dialog.Description>
          This will permanently deactivate your account
        </Dialog.Description>

        <p>
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p>

        <button onClick={() => handleClose()}>Deactivate</button>
        <button onClick={() => handleClose()}>Cancel</button>
      </Dialog.Panel>
    </Dialog>
  );
};

export default Modal;

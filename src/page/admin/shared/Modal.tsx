import { Dispatch, SetStateAction } from 'react';
import { Dialog } from '@headlessui/react';

interface ModalProps {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<{ filter: boolean; buttonOrange: boolean }>>;
  name: string;
}

const Modal = ({ openModal, setOpenModal, name }: ModalProps) => {
  const handleClose = () => {
    setOpenModal((prevState) => ({
      ...prevState,
      [name]: false,
    }));
  };

  return (
    <Dialog open={openModal} onClose={handleClose} className="fixed inset-0 z-50 flex items-center justify-center">
      <Dialog.Panel className="bg-red-300 w-11/12 sm:max-w-sm mx-auto rounded-md shadow-lg">
        <Dialog.Title>Deactivate account</Dialog.Title>
        <Dialog.Description>
          This will permanently deactivate your account
        </Dialog.Description>

        <p>
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p>

        <button onClick={handleClose}>Cancel</button>
      </Dialog.Panel>
    </Dialog>
  );
};

export default Modal;
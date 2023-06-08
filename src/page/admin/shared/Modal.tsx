import { Dispatch, ReactNode, SetStateAction } from 'react';
import { Dialog } from '@headlessui/react';
import { Button } from '@/components';

interface ModalProps {
  openModal: boolean;
  setOpenModal: Dispatch<
    SetStateAction<{ filter: boolean; buttonOrange: boolean }>
  >;
  name: string;
  children: ReactNode;
}

const Modal = ({ openModal, setOpenModal, name, children }: ModalProps) => {
  const handleClose = () => {
    setOpenModal((prevState) => ({
      ...prevState,
      [name]: false,
    }));
  };

  return (
    <Dialog
      open={openModal}
      onClose={handleClose}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <Dialog.Panel className="bg-white px-3 py-3 w-11/12 shadow-gray-300 sm:max-w-xl mx-auto rounded-md shadow-lg">
        <div className=' border-orange-300 border-opacity-60 border rounded-lg py-2 px-3 w-full'>
          {children}
        <div className='w-full flex items-center justify-center gap-5 pb-2'>
           <Button className=' bg-gray-300 px-2 py-1 rounded-md' type='button' onClick={handleClose}>انصراف</Button>
        <Button className='bg-orange-300 px-2 py-1 rounded-md ' type='submit' onClick={handleClose}>اعمال</Button>
        </div>
        </div>
       
        
      </Dialog.Panel>
    </Dialog>
  );
};

export default Modal;

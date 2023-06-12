import { Dispatch, ReactNode, SetStateAction  , Fragment} from 'react';
import { Dialog , Transition } from '@headlessui/react';
import { Button } from '@/components';

interface ModalProps {
  openModal: boolean;
  setOpenModal: Dispatch<
    SetStateAction<any>
  >;
  name: string;
  children: ReactNode;
}

const Modal = ({ openModal, setOpenModal, name, children }: ModalProps) => {
  const handleClose = () => {
    setOpenModal((prevState:any) => ({
      ...prevState,
      [name]: false,
    }));
  };

  return (
    // <Transition appear  show={openModal} as={Fragment}>    

    <Dialog
      open={openModal}
      onClose={handleClose}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <Dialog.Panel className="bg-white px-3 py-3 w-11/12 shadow-gray-300 sm:max-w-xl mx-auto rounded-md shadow-lg ">
        <div className=' border-orange-300 relative border-opacity-60 border rounded-lg py-2 px-3 w-full'>
          {children}
        <div className='w-full flex items-center justify-center gap-5 pb-2'>
        
           <Button className=' absolute top-1 right-1 bg-gray-100 hover:bg-gray-300 px-3 py-1 rounded-md' type='reset' onClick={handleClose}>X</Button>
        </div>
        </div>
       
        
      </Dialog.Panel>
    </Dialog>  
    //  </Transition>
  );
};

export default Modal;

import { Button } from '@/components';
import { Modal } from '@/page/admin/shared';
import React, { Dispatch, SetStateAction } from 'react';
interface props {
    isOpen:boolean;
    setIsOpen:Dispatch<
    SetStateAction<{
      Edit: boolean;
      Delete: boolean;
    }>
  >;
}
const DeleteModal = ({isOpen , setIsOpen}:props) => {
    return (
        <Modal openModal={isOpen} setOpenModal={setIsOpen} name='Delete' >
          <p>آیا از حذف آیتم {""} مطمین هستید؟</p>
           <Button  className='bg-red-700 text-white' onClick={()=>{
            setIsOpen({
              Edit: false,
              Delete: false,
            })
           }} type='button' >بله</Button>
           <Button  className='bg-gray-400 text-black' onClick={()=>{
            setIsOpen({
              Edit: false,
              Delete: false,
            })
           }} type='button' >خیر</Button>
        </Modal>
    );
};

export default DeleteModal;
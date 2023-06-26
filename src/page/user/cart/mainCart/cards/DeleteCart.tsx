import { MainModal } from '@/page/user/shared';
import React, { Dispatch, SetStateAction } from 'react';
import useRedux from '@/hooks/useRedux';
import { CART, DELETEITEM } from '@/redux/slice/user/userSlice';
import { Button } from '@/components';
interface props {
  id: string;
  name: string;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<any>>;
}
const DeleteCart = ({ id, openModal, setOpenModal, name }: props) => {
  const [value, dispatch] = useRedux((state) => state.userState);

  const handleDeleteCart = () => {
    dispatch(DELETEITEM({ id: id }));
    setOpenModal(false);
  };
  return (
    <div>
      <MainModal openModal={openModal} setOpenModal={setOpenModal}>
        <div className='py-10 gap-5 flex items-center justify-center flex-col'>
          <p className='text-center'>{`آیا از حذف ${name} اطمینان دارید؟`}</p>
          <div className='flex gap-4'>
             <Button className="bg-btnCard px-3 hover:bg-red-700 py-2 rounded-md text-white" type="button" onClick={handleDeleteCart}>
            بله
          </Button>
          <Button
            type="button"
            className="hover:bg-zinc-200 bg-zinc-300 px-3 py-2 rounded-md"
            onClick={() => setOpenModal(false)}
          >
            خیر
          </Button>
          </div>
         
        </div>
      </MainModal>
    </div>
  );
};

export default DeleteCart;

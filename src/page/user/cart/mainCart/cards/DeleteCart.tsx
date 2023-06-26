import { MainModal } from '@/page/user/shared';
import React, { Dispatch, SetStateAction } from 'react';
import useRedux from '@/hooks/useRedux';
import { CART, DELETEITEM } from '@/redux/slice/user/userSlice';
import { Button } from '@/components';
interface props {
  id: number;
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
        <div>
          <p>{`آیا از حذف ${name} اطمینان دارید؟`}</p>
          <Button className="" type="button" onClick={handleDeleteCart}>
            بله
          </Button>
          <Button
            type="button"
            className=""
            onClick={() => setOpenModal(false)}
          >
            خیر
          </Button>
        </div>
      </MainModal>
    </div>
  );
};

export default DeleteCart;

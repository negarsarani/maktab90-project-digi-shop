import { Modal } from '@/page/admin/shared';
import React, { Dispatch, SetStateAction } from 'react';
import Form from '../../Add&EditProducts/Form';
import getData from '@/api/getData';
import useRedux from '@/hooks/useRedux';
import { ACTIVE } from '@/redux/slice';
import useQueries from '@/hooks/useQueries';
import { useQuery } from '@tanstack/react-query';

interface props {
  isOpen: boolean;
  setIsOpen: Dispatch<
    SetStateAction<{
      Edit: boolean;
      Delete: boolean;
    }>
  >;
  refetch: () => void;
  id: string;
}
const EditModal = ({ isOpen, setIsOpen, refetch, id }: props) => {
  const { isLoading, error, data } = useQuery(
    ['product'],
    () => getData(`products/${id}`) ,
     {
      cacheTime:100
     }
  );
  const [value, dispatch] = useRedux((state) => state.formProductState);
  if (data) {
    dispatch(ACTIVE(data.data.product));
  }
  return (
    <>
      {' '}
      <Modal openModal={isOpen} setOpenModal={setIsOpen} name="Edit">
        {isLoading ? (
          <div>لطفا صبر کنید ...</div>
        ) : (
          <Form setOpenModal={setIsOpen} refetch={refetch} editFlag={isOpen} />
        )}
      </Modal>
    </>
  );
};

export default EditModal;

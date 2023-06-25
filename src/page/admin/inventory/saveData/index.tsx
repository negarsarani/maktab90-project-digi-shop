import { Button } from '@/components';
import useRedux from '@/hooks/useRedux';
import { Modal } from '@/page/admin/shared';
import { Dispatch, SetStateAction, useState } from 'react';
import useMutationQuery from '@/hooks/mutationQuery';
import { toast } from 'react-toastify';
import patchData from '@/api/patchData';
import { UPDATAINVENTORY } from '@/redux/slice';

interface props {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<any>>;
  name: string;
  refetch: () => void;
}
const SaveData = ({ openModal, setOpenModal, name, refetch }: props) => {
  const { mutate, isLoading, isError, isSuccess, data } = useMutationQuery(
    (data) => patchData(`/products/${data.id}`, data.dataEdit)
  );
  const [valueAdmin, dispatch] = useRedux((state) => state.adminState);
  const HandleEdit = async () => {
    try {
      const responses = await Promise.all(
        valueAdmin.inventory.updateItems.map(
          (item: { id: string; price?: string; quantity?: string }) => {

            const formData = new FormData();
            Object.keys(item).map((key: any) => {
              if (key !== 'id') {
                return formData.append(key, item[key]);
              }
            });
            // setDataID(item.id);
            mutate({ dataEdit: formData, id: item.id });
            // return patchData(`/products/${item.id}`, formData)
            console.log( isLoading, isError, isSuccess);
            return dispatch(UPDATAINVENTORY({item : "" , type:"delete"}))
          }
        )
      );
      if (!isLoading ) {
        toast.success('تغییرات  اعمال شد', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }

      return refetch();
    } catch (error) {
      console.log(error);
      if (isError) {
        toast.error('تغییرات با خطا مواجه شد', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }
    }
  };

  return (
    <Modal name={name} openModal={openModal} setOpenModal={setOpenModal}>
      {valueAdmin.inventory.updateItems.length === 0 ? (
        <div className="mt-5 flex flex-col items-center justify-center">
          <p>تغییراتی وجود ندارد.</p>
        </div>
      ) : (
        <div className="mt-10 flex flex-col items-center justify-center">
          <p>آیا از اعمال تغییرات مطمین هستید؟</p>
          <div className=" w-full flex items-center justify-center gap-5 mt-4">
            <Button
              className={`bg-red-700 text-white px-5 py-2 hover:bg-red-600 rounded-md `}
              onClick={() => {
                setOpenModal({
                  filter: false,
                  buttonOrange: false,
                });
                HandleEdit();
              }}
              type="button"
            >
              بله
            </Button>
            <Button
              className="bg-gray-400 hover:bg-gray-300 text-black  px-5 py-2 rounded-md"
              onClick={() => {
                setOpenModal({
                  filter: false,
                  buttonOrange: false,
                });
              }}
              type="button"
            >
              خیر
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default SaveData;

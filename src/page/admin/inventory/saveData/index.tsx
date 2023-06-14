import { Button } from '@/components';
import useRedux from '@/hooks/useRedux';
import { Modal } from '@/page/admin/shared';
import { Dispatch, SetStateAction, useState } from 'react';
import useMutationQuery from '@/hooks/mutationQuery';
import { toast } from 'react-toastify';
import patchData from '@/api/patchData';

interface props {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<any>>;
  name: string;
  refetch: () => void;
}
const SaveData = ({ openModal, setOpenModal, name, refetch }: props) => {
  const [DataId, setDataID] = useState<string>();
  const { mutate, isLoading, isError, isSuccess, data } = useMutationQuery(
    (dataEdit) => patchData(`/products/${DataId}`, dataEdit)
  );
  const [valueAdmin, dispatch] = useRedux((state) => state.adminState);
  const HandleEdit = () => {
    valueAdmin.inventory.updateItems.map(
      (item: { id: string; price?: string; quantity?: string }) => {
        console.log(item);
    
        const formData = new FormData();
        Object.keys(item).map((key: any) => {
            if (key !== 'id') {
                return formData.append(key, item[key]);
            }
        });
        setDataID(item.id);
        
        return patchData(`/products/${item.id}`, formData)
      }
    );
    
      setTimeout(() => {
       return refetch()
      }, 200);
  };
  isSuccess &&
      toast.success('تغییرات با موفقیت اعمال شد', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    isSuccess &&
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

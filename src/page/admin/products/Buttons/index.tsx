import { useState } from 'react';
import Edit from './Edit/Edit';
import Delete from './Delete/Delete';
import DeleteModal from './Delete/DeleteModal';
import EditModal from './Edit/EditModal';
interface props {
  id: string;
  nameProduct: string;
  refetch: () => void;
}
const ButtonsAction = ({ id, nameProduct, refetch }: props) => {
  let [isOpen, setIsOpen] = useState<{ Edit: boolean; Delete: boolean }>({
    Edit: false,
    Delete: false,
  });

  return (
    <>
      {isOpen.Edit && <EditModal id={id} refetch={refetch} isOpen={isOpen.Edit} setIsOpen={setIsOpen} />}
      {isOpen.Delete && (
        <DeleteModal
        id={id}
          refetch={refetch}
          isOpen={isOpen.Delete}
          setIsOpen={setIsOpen}
          nameProduct={nameProduct}
        />
      )}
      <div className="flex items-center justify-center gap-5">
        <Delete id={id} setIsOpen={setIsOpen} />
        <Edit id={id} setIsOpen={setIsOpen} />
      </div>
    </>
  );
};

export default ButtonsAction;

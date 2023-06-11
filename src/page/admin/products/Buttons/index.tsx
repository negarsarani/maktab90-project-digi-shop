import  { useState } from 'react';
import Edit from './Edit/Edit';
import Delete from './Delete/Delete';
import DeleteModal from './Delete/DeleteModal';
import EditModal from './Edit/EditModal';
interface props {
  id: string;
}
const ButtonsAction = ({ id }: props) => {
  let [isOpen, setIsOpen] = useState<{ Edit: boolean; Delete: boolean }>({
    Edit: false,
    Delete: false,
  });

  return (
    <>
    {isOpen.Edit && < DeleteModal isOpen={isOpen.Edit} setIsOpen={setIsOpen}/>  }
    {isOpen.Delete && < EditModal isOpen={isOpen.Delete} setIsOpen={setIsOpen}/>  }
      <div className='flex items-center justify-center gap-5'>
        <Edit id={id}  setIsOpen={setIsOpen}/>
        <Delete id={id} setIsOpen={setIsOpen}/>
      </div>
    </>
  );
};

export default ButtonsAction;

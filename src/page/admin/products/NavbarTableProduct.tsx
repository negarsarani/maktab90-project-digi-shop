import { NavbarTable, ButtonOrange, ModalAddProduct } from '@/page/admin';

import { useState } from 'react';
import Form from './AddProducts/Form';


const NavbarTableProduct = ({refetch}:{refetch:()=>void}) => {
  const [openModal, setOpenModal] = useState({
    filter: false,
    buttonOrange: false,
  });
  return (
    <>
      {/* {openModal.filter ? <Modal name={'filter'} openModal={openModal.filter} setOpenModal={setOpenModal}/> :""}  */}
        {openModal.buttonOrange ? <ModalAddProduct refetch={refetch} name={'buttonOrange'} openModal={openModal.buttonOrange} setOpenModal={setOpenModal}/> :"" }

    <div className="flex flex-col sm:flex-row   gap-5  sm:gap-0 items-center sm:justify-between  ">
      <div className="flex items-center justify-end  gap-4 w-full">
        <NavbarTable openModal={openModal.filter} setOpenModal={setOpenModal}>
          <ButtonOrange  setOpenModal={setOpenModal} name="افزودن کالا" src="/icons/plus.svg" nameModal ={"buttonOrange"}/>
        </NavbarTable>
      </div>
    </div>
    </>
  );
};

export default NavbarTableProduct;

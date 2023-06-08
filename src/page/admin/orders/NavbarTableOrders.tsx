import {NavbarTable , ButtonOrange} from '@/page/admin';
import { useState } from 'react';
import Modal from '../shared/Modal';
import OrdersFilter from './OrdersFilter';
import { FabPropsVariantOverrides } from '@mui/material';
interface props{
  refetch:()=> void
}
const NavbarTableOrders = ({refetch}:props) => {
  const [openModal, setOpenModal] = useState({
    filter: false,
    buttonOrange: false,
  });
  return (
    <>
     {openModal.filter ? <OrdersFilter  refetch={refetch} openModal={openModal.filter} setOpenModal={setOpenModal}/> :""} 
        {openModal.buttonOrange ? <Modal name={'buttonOrange'} openModal={openModal.buttonOrange} setOpenModal={setOpenModal}/> :"" }

    <div className="flex flex-col sm:flex-row  gap-5  sm:gap-0 items-center sm:justify-between w-full">
      <div className="flex items-center justify-end  gap-4 w-full">
        <NavbarTable openModal={openModal.filter} setOpenModal={setOpenModal}>
          <ButtonOrange   nameModal ={"buttonOrange"}  setOpenModal={setOpenModal} name="ریفرش" src="/icons/refresh.svg" />
        </NavbarTable>
      </div>
    </div>
    </>
  );
};

export default NavbarTableOrders;


import {NavbarTable , ButtonOrange} from '@/page/admin';
import { useState } from 'react';
import Modal from '../shared/Modal';
import SaveData from './saveData';
const NavbarTableInventory = ({refetch}:{refetch :()=>void}) => {
  const [openModal, setOpenModal] = useState({
    filter: false,
    buttonOrange: false,
  });
  return (
    <>
     {openModal.filter ? <Modal name={'filter'} openModal={openModal.filter} setOpenModal={setOpenModal}/> :""} 
     {openModal.buttonOrange ? <SaveData refetch={refetch} name={'buttonOrange'} openModal={openModal.buttonOrange} setOpenModal={setOpenModal}/> :"" }
    <div className="flex flex-col sm:flex-row  gap-5  sm:gap-0 items-center sm:justify-between w-full">
      <div className="flex items-center justify-end  gap-4 w-full">
        <NavbarTable openModal={openModal.filter} setOpenModal={setOpenModal}>
          <ButtonOrange setOpenModal={setOpenModal}   nameModal ={"buttonOrange"} name="ذخیره" src="/icons/save.svg" />
        </NavbarTable>
      </div>
    </div>
    </>
  );
};

export default NavbarTableInventory;

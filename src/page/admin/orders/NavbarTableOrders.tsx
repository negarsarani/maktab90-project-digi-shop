import { NavbarTable, ButtonOrange } from '@/page/admin';
import { useState } from 'react';
import Modal from '../shared/Modal';
import OrdersFilter from './OrdersFilter';
import { FabPropsVariantOverrides } from '@mui/material';
import { Button } from '@/components';
import Image from 'next/image';
import useRedux from '@/hooks/useRedux';
import { FILTERREMOVE } from '@/redux/slice';
interface props {
  refetch: () => void;
}
const NavbarTableOrders = ({ refetch }: props) => {
  const [openModal, setOpenModal] = useState({
    filter: false,
    buttonOrange: false,
  });
  const [value, dispatch] = useRedux((state) => state.adminState);
  return (
    <>
      {openModal.filter ? (
        <OrdersFilter
          refetch={refetch}
          openModal={openModal.filter}
          setOpenModal={setOpenModal}
        />
      ) : (
        ''
      )}
      {openModal.buttonOrange ? (
        <Modal
          name={'buttonOrange'}
          openModal={openModal.buttonOrange}
          setOpenModal={setOpenModal}
        />
      ) : (
        ''
      )}

      <div className="flex flex-col sm:flex-row  gap-5  sm:gap-0 items-center sm:justify-between w-full">
        <div className="flex items-center justify-end  gap-4 w-full">
          <NavbarTable openModal={openModal.filter} setOpenModal={setOpenModal}>
            <Button
              className={
                'bg-orangeAdmin  sm:px-3 sm:py-2 py-2 px-2 text-sm sm:text-md  hover:bg-orange-500 shadow-md text-white flex items-center justify-center rounded-md gap-1 '
              }
              type="button"
              onClick={() => {
                dispatch(FILTERREMOVE({ name: 'orders' }));
                setTimeout(() => {
                  return refetch();
                }, 100);
              }}
            >
              <Image
                src={'/icons/refresh.svg'}
                alt={'ریفرش'}
                width={15}
                height={15}
              />
              <span className=""> {'ریفرش'}</span>
            </Button>
          </NavbarTable>
        </div>
      </div>
    </>
  );
};

export default NavbarTableOrders;

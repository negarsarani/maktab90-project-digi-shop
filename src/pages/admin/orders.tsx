import getData from '@/api/getData';
import Pagination from '@/feature/admin/components/Pagination';
import NavbarTableOrders from '@/feature/admin/navbar/NavbarTableOrders';
import useQueries from '@/hooks/useQueries';
import useRedux from '@/hooks/useRedux';
import { querykeys } from '@/react-query/constants';
import { DATA } from '@/redux/slice/admin/adminSlice';
import React from 'react';

const Orders = () => {
  const [value, dispatch] = useRedux((state) => state.adminState);

  const [isLoading, data, isError, refetch] = useQueries(
    () => getData('products'),
    querykeys.inventory
  );
  isLoading === false && dispatch(DATA({ items: data, name: 'inventory' }));
  return (
    <div className="w-full  flex flex-col gap-5 ">
      <NavbarTableOrders />
      {/* <ReactQueryDevtools /> */}
      <div className=" w-full  pb-10 flex flex-col  items-center justify-center ">
        <div className=" overflow-hidden  bg-white flex flex-col overflow-x-auto w-full rounded-t-xl ">
          {/* <InventoryTable
            isLoading={isLoading}
            value={value}
            isError={isError}
          ></InventoryTable> */}
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default Orders;
Orders.getLayout = function PageLayout(page: any) {
  return <> {page}</>;
};

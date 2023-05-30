import NavbarTable from '@/feature/admin/products/NavbarTableNavbarTableProduct';
import Pagination from '@/feature/admin/components/Pagination';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';

const pricesInventory = () => {
  return (
    <div className="w-full h-full py-10 flex flex-col gap-10 ">
      <NavbarTable />
      <ReactQueryDevtools />
      <div className=" w-full flex flex-col  items-center justify-center ">
        <div className=" overflow-hidden   flex flex-col overflow-x-auto w-full  ">
          {/* <ProductTable isLoading={isLoading} value={value} isError={isError}/> */}
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default pricesInventory;
pricesInventory.getLayout = function PageLayout(page: any) {
  return <> {page}</>;
};

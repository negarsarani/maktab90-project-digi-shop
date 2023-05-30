import React, { useEffect } from 'react';
import getData from '@/api/getData';

import useRedux from '@/hooks/useRedux';
import { DATA } from '../../redux/slice/admin/adminSlice';

import useQueries from '@/hooks/useQueries';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import ProductTable from '@/feature/admin/ProductTable';
import Pagination from '@/feature/admin/components/Pagination';
import NavbarTableProduct from '@/feature/admin/products/NavbarTableProduct';
import { querykeys } from '@/react-query/constants';
import { isError } from 'react-query';

const Products = () => {
  const [value, dispatch] = useRedux('adminState');

  const [isLoading, data, isError, refetch] = useQueries(
    () => getData('products'),
    querykeys.products
  );
  isLoading == false && dispatch(DATA({ items: data, name: 'products' }));

  return (
    <div className="w-full h-full py-10 flex flex-col gap-10 ">
      <NavbarTableProduct />
      <ReactQueryDevtools />

      <div className=" w-full flex flex-col  items-center justify-center ">
        <div className=" overflow-hidden   flex flex-col overflow-x-auto w-full  ">
          <ProductTable isLoading={isLoading} value={value} isError={isError} />
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default Products;
Products.getLayout = function PageLayout(page: any) {
  return <> {page}</>;
};

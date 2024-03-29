import { useEffect, useState } from 'react';
import getData from '@/api/getData';
import useRedux from '@/hooks/useRedux';
import { DATA } from '@/redux/slice/admin/adminSlice';
import useQueries from '@/hooks/useQueries';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { querykeys } from '@/react-query/constants';
import { getCookie } from 'cookies-next';
import { ProductTable, Pagination, NavbarTableProduct } from '@/page/admin';
import Modal from '@/page/admin/shared/Modal';

const Products = () => {
  const [value, dispatch] = useRedux((state: any) => state.adminState);

  const [isLoading, data, isError, refetch] = useQueries(
    () => getData(value.products.url.path ),
    querykeys.products
  );
  isLoading === false &&
    dispatch(DATA({ items: data, name: 'products', key: 'products' }));



  return (
    <div className="w-full h-full flex flex-col gap-5">
      <NavbarTableProduct refetch={refetch} />
 
      <div className="w-full pb-10 flex flex-col">
        <div className="overflow-hidden bg-white flex flex-col overflow-x-auto w-full rounded-t-xl">
          <ProductTable
            isLoading={isLoading}
            value={value}
            isError={isError}
            refetch={refetch}
          />
        </div>
        <Pagination name={'products'} refetch={refetch} />
      </div>
    </div>
  );
};

export default Products;
Products.getLayout = function PageLayout(page: any) {
  return <>{page}</>;
};

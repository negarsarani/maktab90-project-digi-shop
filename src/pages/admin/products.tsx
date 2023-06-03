import  { useEffect } from 'react';
import getData from '@/api/getData';
import useRedux from '@/hooks/useRedux';
import { DATA } from '@/redux/slice/admin/adminSlice';
import useQueries from '@/hooks/useQueries';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { querykeys } from '@/react-query/constants';
import { getCookie } from 'cookies-next';
import { ProductTable, Pagination, NavbarTableProduct } from '../../page/admin';

const Products = () => {
  const [value, dispatch] = useRedux((state) => state.adminState);

  const [isLoading, data, isError, refetch] = useQueries(
    () => getData('products?sort=price'),
    querykeys.products
  );
  isLoading == false &&
    dispatch(DATA({ items: data, name: 'products', key: 'products' }));
  useEffect(() => {
    console.log(getCookie('accesstoken'));
  });
  return (
    <div className="w-full h-full flex flex-col gap-5 ">
      <NavbarTableProduct />
      {/* <ReactQueryDevtools /> */}

      <div className=" w-full  pb-10 flex flex-col  ">
        <div className="  overflow-hidden  bg-white flex flex-col overflow-x-auto w-full rounded-t-xl ">
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

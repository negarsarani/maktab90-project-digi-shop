import getData from '@/api/getData';
import {Pagination , OrdersTable , NavbarTableOrders} from '@/page/admin';
import useQueries from '@/hooks/useQueries';
import useRedux from '@/hooks/useRedux';
import { querykeys } from '@/react-query/constants';
import { DATA } from '@/redux/slice/admin/adminSlice';

const Orders = () => {
  const [value, dispatch] = useRedux((state) => state.adminState);
  const [isLoading, data, isError, refetch] = useQueries(
    () => getData(value.orders.url.path),
    querykeys.orders
  );
  isLoading === false && dispatch(DATA({ items: data, name: 'orders' , key: 'orders'}));
  return (
    <div className="w-full  flex flex-col gap-5 ">
      <NavbarTableOrders />
      {/* <ReactQueryDevtools /> */}
      <div className=" w-full  pb-10 flex flex-col  items-center justify-center ">
        <div className=" overflow-hidden  bg-white flex flex-col overflow-x-auto w-full rounded-t-xl ">
          <OrdersTable
            isLoading={isLoading}
            value={value}
            isError={isError}
          ></OrdersTable>
        </div>
        <Pagination name={"orders"} refetch={refetch}/>
      </div>
    </div>
  );
};

export default Orders;
Orders.getLayout = function PageLayout(page: any) {
  return <> {page}</>;
};

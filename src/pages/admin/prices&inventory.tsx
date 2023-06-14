
import {InventoryTable , NavbarTableInventory , Pagination} from '@/page/admin';
import useQueries from '@/hooks/useQueries';
import useRedux from '@/hooks/useRedux';
import getData from '@/api/getData';
import { querykeys } from '@/react-query/constants';
import { DATA } from '@/redux/slice/admin/adminSlice';

const PricesInventory = () => {
  const [value, dispatch] = useRedux((state) => state.adminState);

  const [isLoading, data, isError, refetch] = useQueries(
    () => getData(value.inventory.url.path),
    querykeys.inventory
  );
  isLoading === false && dispatch(DATA({ items: data, name: 'inventory', key:"products" }));

  return (
    <div className="w-full  flex flex-col gap-5 ">
      <NavbarTableInventory  refetch={refetch}/>
      {/* <ReactQueryDevtools /> */}
      <div className=" w-full  pb-10 flex flex-col  items-center justify-center ">
        <div className=" overflow-hidden  bg-white flex flex-col overflow-x-auto w-full rounded-t-xl ">
          <InventoryTable
            isLoading={isLoading}
            value={value}
            isError={isError}
          ></InventoryTable>
        </div>
        <Pagination name={"inventory"} refetch={refetch}/>
      </div>
    </div>
  );
};

export default PricesInventory;
PricesInventory.getLayout = function PageLayout(page: any) {
  return <> {page}</>;
};

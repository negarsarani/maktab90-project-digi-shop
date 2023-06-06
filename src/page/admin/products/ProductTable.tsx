import { headerProductTable } from '@/data/admin';
import useRedux from '@/hooks/useRedux';
import { SkeletonTable, Tbody, Th, Thead, Td } from '@/page/admin';
import { TableProps } from '@/types/type';
import Image from 'next/image';
import { SORTDATA } from '@/redux/slice';
type itemType = {};
const ProductTable = ({ isLoading, value, isError, refetch }: TableProps) => {
  const [valueAdmin, dispatch] = useRedux((state) => state.adminState);

  const handleSort =  (event: any) => {
    const ITEM = event.currentTarget.id;
    dispatch(SORTDATA({ name: 'products', sortItem: ITEM})) ;
    setTimeout(() => {
      refetch();
    }, 100);
  };
  if (isLoading) {
    return (
      <div>
        <SkeletonTable />
      </div>
    );
  }

  return (
    <table className={`w-full bg-white ${isError && 'h-60'} `}>
      <Thead className=" ">
        {headerProductTable.map((item) => (
          <Th
            key={item.id}
            className={` bg-orangeLighter  py-4 ${
              item.icon && 'hover:bg-orange-200 cursor-pointer'
            }  text-center text-xs font-medium text-gray`}
            onClick={handleSort}
            id={item.id}
          >
            <div className="flex items-center justify-center   gap-3 ">
              {item.icon === true ? (
                <Image
                  src="/icons/sortAscend.svg"
                  alt="مرتب کردن"
                  width={10}
                  height={10}
                  className="cursor-pointer"
                />
              ) : (
                ''
              )}
              {item.name}
            </div>
          </Th>
        ))}
        <Th className=" bg-orangeLighter  py-4  text-center text-xs font-medium text-gray ">
          مدیریت کالا
        </Th>
      </Thead>
      <Tbody className=" divide-grayMedium">
        {value.products?.data?.map((item: any) => {
          return (
            <tr key={item._id}>
              <Td
                key={item.name}
                className=" py-4 px-6 border-b flex items-center justify-center h-20"
              >
                <div className=" w-[10rem] flex items-center justify-center">
                  <Image
                    src={item.images[0]}
                    alt={'item.name'}
                    className="rounded-xl bg-white"
                    width={70}
                    height={70}
                  />
                </div>
              </Td>
              <Td key={item.name} className="py-4 px-6 border-b">
                <div className="text-sm text-center px-4 text-gray-900">
                  {item.name}
                </div>
              </Td>
              <Td key={item.name} className="py-4 px-6 border-b">
                <div className="text-sm text-center px-10 text-gray-900">
                  {item.category}
                </div>
              </Td>
              <Td key={item.name} className="py-4 px-6 border-b ">
                <div className="flex  w-[5rem]">
                  <button className="text-sm text-gray-900 w-full">
                    <Image
                      src="/icons/trash.svg"
                      alt="حذف"
                      width={20}
                      height={20}
                    />
                  </button>
                  <button className="text-sm text-gray-900 ">
                    <Image
                      src="/icons/edit.svg"
                      alt="حذف"
                      width={25}
                      height={20}
                    />
                  </button>
                </div>
              </Td>
            </tr>
          );
        })}
      </Tbody>
    </table>
  );
};

export default ProductTable;

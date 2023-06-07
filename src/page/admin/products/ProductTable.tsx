import { headerProductTable } from '@/data/admin';
import useRedux from '@/hooks/useRedux';
import { SkeletonTable, Tbody, Th, Thead, Td } from '@/page/admin';
import { OrderedCategory, TableProps } from '@/types/type';
import Image from 'next/image';
import { SORTDATA } from '@/redux/slice';
import categoryData, { orderedCategory } from '@/data/shared';
type itemType = {};
let Data: OrderedCategory[];
orderedCategory().then((res) => (Data = res));
const ProductTable = ({ isLoading, value, isError, refetch }: TableProps) => {
  const [valueAdmin, dispatch] = useRedux((state) => state.adminState);

  const handleSort = (event: any) => {
    const ITEM = event.currentTarget.id;
    dispatch(SORTDATA({ name: 'products', sortItem: ITEM }));
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
  const HandleCategory = (itemCategory: string, itemSub: string) => {
    console.log(itemCategory, itemSub);
    console.log(Data);

    const FindCategory = Data.find(
      (item: { id: string; name: string; icon: string }) => {
        return item.id === itemCategory;
      }
    );
    console.log(FindCategory);

    const FindSubcategory = FindCategory?.subCategories.find(
      (item: { _id: string; name: string; category: string }) => {
        return item._id === itemSub;
      }
    );
    console.log(FindSubcategory);

    return `${FindCategory?.name} /${FindSubcategory?.name}`;
  };
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
            <div className="flex items-center justify-center  ">
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
      <Tbody className=" ">
        {value.products?.data?.map((item: any) => {
          return (
            <tr key={item._id} className="border-b">
              <Td
                key={item.name}
                className="py-4 flex items-center justify-center md:w-full w-[10rem] "
              >
                   <div className="   flex items-center justify-center">
                   <Image
                    src={item.images[0]}
                    alt={'item.name'}
                    className="rounded-xl "
                    width={70}
                    height={70}
                  />
                </div>
               
              </Td>
              <Td key={item.name} className="py-4 px-6 border-b ">
                <div className="text-sm text-center px-4 text-gray-900 flex items-center justify-center ">
                  <span>{item.name}</span>
                  
                </div>
              </Td>
              <Td key={item.name} className="py-4 px-6 border-b ">
                <div className="text-sm text-center px-4 text-gray-900 flex items-center justify-center ">
                  {/* {HandleCategory(item.category, item.subcategory) !== undefined
                    ? HandleCategory(item.category, item.subcategory)
                    : 'فاقد دسته بندی'} */}
                    oomoljjlknmjnjlknkjkjjnhiknknpkmolm/fdvsdcfw
                </div>
              </Td>
              <Td key={item.name} className="py-4 px-6 " >
                <div className="flex items-center justify-center gap-2 md:w-full w-[10rem]">
                  <button className="text-sm text-gray-900">
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
                      width={22}
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

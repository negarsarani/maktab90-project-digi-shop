import { headerProductTable } from '@/data/admin';
import useRedux from '@/hooks/useRedux';
import { SkeletonTable, Tbody, Th, Thead, Td } from '@/page/admin';
import { TableProps } from '@/types/type';
import Image from 'next/image';
import { SORTDATA } from '@/redux/slice';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useGetQuery from '@/hooks/useGetQuery';
import { SortIcon } from '../shared/SortIcon';
import useCategory from '@/data/shared';
type itemType = {};

const ProductTable = ({ isLoading, value, isError, refetch }: TableProps) => {
  const [valueAdmin, dispatch] = useRedux((state) => state.adminState);
  const [sortObj, setSortObj] = useState({ key: '' });
  const router = useRouter();
  const queries = useGetQuery();
  const [category, subCategory] = useCategory();
  useEffect(() => {
    const slicePath = valueAdmin.products.url.path.split('?')[1];
    router.push({
      pathname: '',
      query: slicePath,
    });
  }, []);
  useEffect(() => {
    const slicePath = valueAdmin.products.url.path.split('?')[1];
    console.log(queries);
    router.push({
      pathname: '',
      query: slicePath,
    });
  }, [sortObj]);
  const handleSort = (event: any) => {
    const ITEM = event.currentTarget.id;
    dispatch(SORTDATA({ name: 'products', sortItem: ITEM }));
    setTimeout(() => {
      refetch();
    }, 100);
    ITEM === sortObj ? setSortObj({ key: '' }) : setSortObj({ key: ITEM });
  };

  if (isLoading) {
    return (
      <div>
        <SkeletonTable />
      </div>
    );
  }
  const HandleCategory = (itemCategory: string, itemSub: string) => {
    const FindCategory = category?.find(
      (item: { _id: string; name: string; icon: string }) => {
        return item._id === itemCategory;
      }
    );

    const FindSubcategory = subCategory?.find(
      (item: { _id: string; name: string; category: string }) => {
        return item._id === itemSub;
      }
    );

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
            onClick={(event) => {
              item.icon ? handleSort(event) : null;
            }}
            id={item.id}
          >
            <div className="flex items-center justify-center  gap-2">
              {item.icon === true ? (
                valueAdmin.products.sort === item.id ? (
                  <SortIcon sort={'ascending'} />
                ) : (
                  <SortIcon sort={'descending'} />
                )
              ) : (
                ''
              )}
              <span>{item.name}</span>
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
                className="py-4 flex items-center justify-center "
              >
                <div className="   flex items-center justify-center">
                  <div className='w-[6rem]'>
                     <Image
                    src={item.images[0]}
                    alt={'item.name'}
                    className="rounded-xl "
                    width={80}
                    height={70}
                  />
                </div>
                  </div>
                 
              </Td>
              <Td key={item.name} className="py-4 px-6   w-[5rem]">
                <div className="text-sm text-center px-4 h-20 w-full text-gray-900 flex items-center justify-center ">
                  <span className='  overflow-hidden  w-[14rem]  text-ellipsis'>{item.name}</span>
                </div>
              </Td>
              <Td key={item.name} className="py-4 px-6  ">
                <div className="text-sm text-center px-4 text-gray-900 flex items-center justify-center ">
                  <div className=' sm:w-[10rem] w-[5rem]'>
                     {HandleCategory(item.category, item.subcategory) !== undefined
                    ? HandleCategory(item.category, item.subcategory)
                    : 'فاقد دسته بندی'}
                  </div>
                 
                </div>
              </Td>
              <Td key={item.name} className="py-4 px-6 ">
                <div className="flex items-center justify-center gap-2 lg:w-full w-[5rem]">
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

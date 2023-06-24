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
import ButtonsAction from './Buttons';
type itemType = {};

const ProductTable = ({ isLoading, value, isError, refetch }: TableProps) => {
  const [valueAdmin, dispatch] = useRedux((state) => state.adminState);
  const [sortObj, setSortObj] = useState({ key: '' });
  const router = useRouter();
  const queries = useGetQuery();
  useEffect(() => {
    const slicePath = valueAdmin.products.url.path.split('?')[1];
    router.push({
      pathname: '',
      query: slicePath,
    });
  }, []);
  useEffect(() => {
    const slicePath = valueAdmin.products.url.path.split('?')[1];
    router.push({
      pathname: '',
      query: slicePath,
    });
  }, [sortObj]);
  const handleSort = (event: any) => {
    const ITEM = event.currentTarget.id;
    setTimeout(() => {
      dispatch(SORTDATA({ name: 'products', sortItem: ITEM }));
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
              <Td  className="py-4  w-[10rem]">
                <div className="  lg:w-full w-[10rem]  flex items-center justify-center">
                  <div className="">
                    <Image
                      src={`http://localhost:8000/images/products/images/${item.images[0]}`}
                      alt={'item.name'}
                      className="rounded-xl "
                      width={80}
                      height={70}
                    />
                  </div>
                </div>
              </Td>
              <Td  className="py-4 px-6   w-[20rem]">
                <div className="text-sm text-center px-4 h-20 lg:w-full w-[20rem] text-gray-900 flex items-center justify-center ">
                  <span className="  overflow-hidden  w-full  text-ellipsis">
                    {item.name}
                  </span>
                </div>
              </Td>
              <Td  className="py-4 px-6  w-[20rem]">
                <div className="text-sm text-center px-4 text-gray-900  lg:w-full w-[20rem] flex items-center justify-center ">
                  <div className=" w-full">
                    {`${item.category?.name} / ${item.subcategory?.name}`}
                  </div>
                </div>
              </Td>
              <Td  className="py-4 px-6  w-[10rem]">
                <div className="flex items-center justify-center gap-2 lg:w-full w-[5rem]">
                <ButtonsAction id={item._id} nameProduct={item.name} refetch={refetch}/>
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

import Image from 'next/image';
import { TableProps } from '@/types/type';
import { headerInventoryTable } from '@/data/admin';
import { Input } from '@/components';
import { useState } from 'react';
import { Tbody, Th, Thead, Td } from '@/page/admin';

const InventoryTable = ({ isLoading, value, isError }: TableProps) => {
  const [changeData, setChangeData] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState({
    id: '',
    price: false,
    Inventory: false,
  });
  const handleInputChange = (itemId: string, item: string) => {
    item === 'inventory'
      ? setSelectedItemId({
          id: itemId,
          price: false,
          Inventory: true,
        })
      : setSelectedItemId({
          id: itemId,
          price: true,
          Inventory: false,
        });
  };
  return (
    <table className={`w-full bg-white ${isError && 'h-60'}  `}>
      <Thead className=" ">
        {headerInventoryTable.map((item) => (
           <Th
           key={item.id}
           className={` bg-orangeLighter  py-4 ${
             item.icon && 'hover:bg-orange-200 cursor-pointer'
           }  text-center text-xs font-medium text-gray`}
          //  onClick={handleSort}
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
      </Thead>
      <Tbody className="    ">
        {value.inventory?.data?.map((item: any) => {
          return (
            <tr key={item.name} className="border-b">
              <Td
                key={item.name}
                className=" py-4  w-[6rem] "
              >
                <div className="  flex  lg:w-full w-[6rem] items-center justify-center">
                  <div className=''>
                    <Image
                    src={item.images[0]}
                    alt={'item.name'}
                    className="rounded-xl "
                    width={70}
                    height={70}
                  />
                  </div>
                  
                </div>
              </Td>
              <Td key={item.name} className="py-4 px-6  w-[20rem]">
                <div className="text-sm text-center px-4 h-20 text-gray-900 flex items-center justify-center lg:w-full w-[20rem]">
                  <span className='  overflow-hidden text-ellipsis w-full '>{item.name}</span>
                </div>
              </Td>
              <Td key={item.name} className="py-4 px-6 border-b  w-[14rem] ">
                {selectedItemId.price && selectedItemId.id === item._id ? (
                  <div className="flex items-center lg:w-full w-[14rem] justify-center ">
                    <Input
                      className="text-sm text-center  w-full flex items-center justify-center py-3   bg-white border-opacity-40 border-2 rounded-lg  border-orangeAdmin focus:border-none focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-orangeAdmin shadow-md text-gray-900 placeholder:py-2"
                      placeholder="فاقد قیمت"
                      type="number"
                      name="price"
                      id="priceInput"
                    />
                  </div>
                ) : (
                  <div className="flex items-center lg:w-full w-[14rem]  justify-center">
                    <span
                      className="text-sm  text-center w-full flex items-center justify-center  py-3  bg-white border-2 rounded-xl  border-gray-100  shadow-md  text-gray-900"
                      id="price"
                      onClick={(event) =>
                        handleInputChange(item._id, event.currentTarget.id)
                      }
                    >
                      {item.price}
                    </span>
                  </div>
                )}
              </Td>
              <Td key={item.name} className="py-4 px-6 border-b w-[14rem] ">
                {selectedItemId.Inventory && selectedItemId.id === item._id ? (
                  <div className="flex items-center lg:w-full w-[14rem] justify-center ">
                    <Input
                      className="text-sm text-center w-full flex items-center justify-center py-3 w0full  bg-white border-opacity-40 border-2 rounded-lg  border-orangeAdmin focus:border-none focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-orangeAdmin shadow-md text-gray-900 placeholder:py-2"
                      placeholder="فاقد موجودی"
                      type="number"
                      name="price"
                      id="inventoryInput"
                    />
                  </div>
                ) : (
                  <div className="flex items-center  lg:w-full w-[14rem] justify-center   ">
                    <span
                      className="text-sm text-center w-full flex items-center justify-center  py-3  bg-white border-2 rounded-xl  border-gray-100  shadow-md  text-gray-900"
                      id="inventory"
                      onClick={(event: React.MouseEvent<HTMLElement>) =>
                        handleInputChange(item._id, event.currentTarget.id)
                      }
                    >
                      {item.quantity}
                    </span>
                  </div>
                )}
              </Td>
            </tr>
          );
        })}
      </Tbody>
    </table>
  );
};

export default InventoryTable;

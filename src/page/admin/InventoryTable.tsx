import React, { ReactEventHandler } from 'react';
import Thead from './components/Thead';
import Th from './components/Th';
import Tbody from './components/Tbody';
import Td from './components/Td';
import Image from 'next/image';
import { TableProps } from '@/types/type';
import { headerInventoryTable } from '../../data/admin';
import Input from '../../components/Input';
import { useState } from 'react';
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
            key={item}
            className=" bg-orangeLighter  py-4 px-6 text-center text-xs font-medium text-gray "
          >
            {item}
          </Th>
        ))}
      </Thead>
      <Tbody className=" divide-grayMedium   ">
        {value.inventory?.data?.map((item: any) => {
          return (
            <tr key={item.name} className="">
              <Td
                key={item.name}
                className=" py-4 flex items-center justify-center  border-b "
              >
                <div className=" w-[10rem] flex items-center justify-center">
                  <Image
                    src={`http://localhost:8000/images/products/images/${item.images[0]}`}
                    alt={'item.name'}
                    className="rounded-xl "
                    width={100}
                    height={100}
                  />
                </div>
              </Td>
              <Td key={item.name} className="py-4 px-6 border-b ">
                <div className="text-sm text-center px-4 text-gray-900 flex items-center justify-center">
                  {item.name}
                </div>
              </Td>
              <Td key={item.name} className="py-4 px-6 border-b">
                {selectedItemId.price && selectedItemId.id === item._id ? (
                  <div className="flex items-center justify-center ">
                    <Input
                      className="text-sm text-center  w-[10rem] lg:w-[15rem]flex items-center justify-center py-3   bg-white border-opacity-40 border-2 rounded-lg  border-orangeAdmin focus:border-none focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-orangeAdmin shadow-md text-gray-900"
                      placeholder="فاقد قیمت"
                      type="number"
                      name="price"
                      id="priceInput"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center  ">
                    <span
                      className="text-sm text-center  w-[10rem] md:w-[15rem]flex items-center justify-center  py-3  bg-white border-2 rounded-xl  border-gray-100  shadow-md  text-gray-900"
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
              <Td key={item.name} className="py-4 px-6 border-b  ">
                {selectedItemId.Inventory && selectedItemId.id === item._id ? (
                  <div className="flex items-center justify-center w-full">
                    <Input
                      className="text-sm text-center  w-[10rem] lg:w-[15rem]flex items-center justify-center py-3   bg-white border-opacity-40 border-2 rounded-lg  border-orangeAdmin focus:border-none focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-orangeAdmin shadow-md text-gray-900"
                      placeholder="فاقد موجودی"
                      type="number"
                      name="price"
                      id="inventoryInput"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center  ">
                    <span
                      className="text-sm text-center  w-[10rem] md:w-[15rem]flex items-center justify-center  py-3  bg-white border-2 rounded-xl  border-gray-100  shadow-md  text-gray-900"
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

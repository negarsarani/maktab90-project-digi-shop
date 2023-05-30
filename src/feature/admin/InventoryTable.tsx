import React from 'react';
import Thead from './components/Thead';
import Th from './components/Th';
import Tbody from './components/Tbody';
import Td from './components/Td';
import Image from 'next/image';

const inventoryTable = () => {
    return (
        <table className={`w-full bg-white ${isError && 'h-60'} `}>
        <Thead className=" ">
          {headerTable.map((item) => (
            <Th
              key={item}
              className=" bg-orangeLighter  py-4 px-6 text-center text-xs font-medium text-gray "
            >
              {item}
            </Th>
          ))}
        </Thead>
        <Tbody className=" divide-grayMedium">
          {/* {value.products?.data?.map((item: any) => { */}
            return (
              <tr key={item.name}>
                <Td
                  key={item.name}
                  className=" py-4 px-6 border-b flex items-center justify-center h-20"
                >
                  <Image
                    src={`http://localhost:8000/images/products/images/${item.images[0]}`}
                    alt={'item.name'}
                    className="rounded-xl"
                    width={100}
                    height={100}
                  />
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
                <Td key={item.name} className="py-4 px-6 border-b  ">
                  <div className="flex gap-4">
                    <button className="text-sm text-gray-900">
                      <Image
                        src="/icons/trash.svg"
                        alt="حذف"
                        width={20}
                        height={20}
                      />
                    </button>
                    <button className="text-sm text-gray-900">
                      <Image
                        src="/icons/edit.svg"
                        alt="حذف"
                        width={20}
                        height={20}
                      />
                    </button>
                  </div>
                </Td>
              </tr>
            );
          {/* })} */}
        </Tbody>
      </table>
    );
};

export default inventoryTable;
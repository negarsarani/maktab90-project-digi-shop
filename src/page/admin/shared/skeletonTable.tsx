import React from 'react';
import Thead from './Thead';
import Th from './Th';
import Tbody from './Tbody';
import Td from './Td';

const SkeletonTable = () => {
    return (
        <div className="container mx-auto py-8 animate-pulse rounded-lg bg-white">
            <table className="min-w-full   rounded-xl">
                <Thead className='rounded-xl'>
                    <Th className="py-4 px-6 bg-gray-200 border-b">
                        <p className="bg-gray-300 rounded-lg w-full h-4 "></p>
                    </Th>
                    <Th className="py-4 px-6 bg-gray-200 border-b"> <p className="bg-gray-300 rounded-lg w-full h-4 "></p></Th>
                    <Th className="py-4 px-6 bg-gray-200 border-b"> <p className="bg-gray-300 rounded-lg w-full h-4 "></p></Th>
                </Thead>
                <Tbody>
                    <tr>
                        <Td className="py-4 px-6 border-b">
                            <p className="w-full h-7 bg-gray-200 rounded-lg "></p>
                        </Td>
                        <Td className="py-4 px-6 border-b"> <p className="w-full h-7 bg-gray-200 rounded-lg "></p></Td>
                        <Td className="py-4 px-6 border-b"> <p className="w-full h-7 bg-gray-200 rounded-lg "></p></Td>
                    </tr>
                    <tr>
                        <Td className="py-4 px-6 border-b"> <p className="w-full h-7 bg-gray-200 rounded-lg "></p></Td>
                        <Td className="py-4 px-6 border-b"> <p className="w-full h-7 bg-gray-200 rounded-lg "></p></Td>
                        <Td className="py-4 px-6 border-b"> <p className="w-full h-7 bg-gray-200 rounded-lg "></p></Td>
                    </tr>
                    <tr>
                        <Td className="py-4 px-6 border-b"> <p className="w-full h-7 bg-gray-200 rounded-lg "></p></Td>
                        <Td className="py-4 px-6 border-b"> <p className="w-full h-7 bg-gray-200 rounded-lg "></p></Td>
                        <Td className="py-4 px-6 border-b"> <p className="w-full h-7 bg-gray-200 rounded-lg "></p></Td>
                    </tr>
                </Tbody>
            </table>
        </div>
    );
};

export default SkeletonTable;

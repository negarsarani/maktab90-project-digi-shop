import React, { useEffect } from 'react';
<<<<<<< HEAD
=======
import img from '../../assets/Icons/Buy.svg';
>>>>>>> 531ffe1 (add table to admin/product)
import getData from '@/api/getData';
import Thead from '@/feature/admin/components/Thead';
import Th from '@/feature/admin/components/Th';
const name = () => {
  getData('products').then((res) => console.log(res));
};

<<<<<<< HEAD
=======
const products = () => {
  useEffect(() => {
    getData('products').then((res) => console.log(res));
  }, []);
>>>>>>> 531ffe1 (add table to admin/product)
  return (
    <div className="overflow-x-auto container mx-auto ">
      <button onClick={() => name()}>scsa</button>
      <div className="sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <Thead ></Thead>
                <thead>
                  <tr>
                    <Th className='' ></Th>
                    <th
                      scope="col"
                      className="px-6 bg-red-300 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      تصویر کالا
                    </th>
                    <th
                      scope="col"
                      className="px-6  py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      نام کالا
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      دسته بندی
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      مدیریت کالا
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">1</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">John Doe</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">USA</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">2</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">Jane Smith</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">Canada</div>
                    </td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <Pagination />
      </div>
      <Pagination />
=======
      </div>
>>>>>>> 531ffe1 (add table to admin/product)
    </div>
  );
};

<<<<<<< HEAD
export default Products;
Products.getLayout = function PageLayout(page: any) {
=======
export default products;
products.getLayout = function PageLayout(page: any) {
>>>>>>> 531ffe1 (add table to admin/product)
  return <> {page}</>;
};

import React from 'react';

const SelectBox = () => {
  return (
    <>
      <div className="sm:col-span-3">
        <label
          htmlFor="country"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          دسته بندی
        </label>
        <div className="mt-2">
          <select
            id="country"
            name="country"
            autoComplete="country-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orangeAdmin sm:max-w-xs sm:text-sm sm:leading-6"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
        </div>
      </div>
      <div className="sm:col-span-3">
        <label
          htmlFor="country"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          زیر دسته بندی
        </label>
        <div className="mt-2">
          <select
            id="country"
            name="country"
            autoComplete="country-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orangeAdmin sm:max-w-xs sm:text-sm sm:leading-6"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default SelectBox;

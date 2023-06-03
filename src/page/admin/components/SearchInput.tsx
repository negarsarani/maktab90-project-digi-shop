import React from 'react';

const SearchInput = () => {
    return (
        <input
        type="text"
        className="sm:w-5/12 lg:w-4/12 xl:w-3/12 py-2 h-9 pl-10 pr-4 text-gray-700 w-10/12 bg-white border rounded-lg  border-gray-400 focus:border-none focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-orangeAdmin shadow-md"
        placeholder="جستجو"
      />
    );
};

export default SearchInput;
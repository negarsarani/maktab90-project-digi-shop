import { MouseEvent, ReactNode } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

const Pagination = () => {
  const handlePagination = (event: any) => {
    console.log(event.id);
  };
  return (
    <div className="flex w-full rounded-b-xl items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between">
        <a
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          id="Prev"
          onClick={(e: MouseEvent<HTMLAnchorElement>) =>
            handlePagination(e.currentTarget)
          }
        >
          Previous
        </a>
        <span className="md:flex hidden"> page 1</span>

        <a
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          id="Next"
          onClick={(e: MouseEvent<HTMLAnchorElement>) =>
            handlePagination(e.currentTarget)
          }
        >
          Next
        </a>
      </div>
    </div>
  );
};

export default Pagination;

import useRedux from '@/hooks/useRedux';
import { PAGINATE } from '@/redux/slice/admin/adminSlice';
import { MouseEvent } from 'react';
interface props {
  name: string;
  refetch: () => void;
}
const Pagination = ({ name, refetch }: props) => {
  const [value, dispatch] = useRedux((state) => state.adminState);
  const HandlePagination = async (event: any) => {
    await dispatch(PAGINATE({ name: name, item: event.id }));
    refetch();
  };

  return (
    <div className="flex w-full rounded-b-xl items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className=" grid grid-cols-3 w-full ">
          <div className="flex justify-start">
            {value[name]?.options?.totalPages === 1 ? (
              ''
            ) : value[name]?.options?.totalPages > 1 ? (
              value[name]?.options?.page === 1 ? (
               ""
              ) : value[name]?.options?.page <=
                value[name]?.options?.totalPages ? (
                <a
                  className="relative inline-flex items-center rounded-md border cursor-pointer border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  id="Prev"
                  onClick={(e: MouseEvent<HTMLAnchorElement>) =>
                    HandlePagination(e.currentTarget)
                  }
                >
                  صفحه قبلی
                </a>
              ) : (
                <span></span>
              )
            ) : (
              ''
            )}
          </div>

          <span className="flex justify-center ">
            {' '}
            صفحه {value[name].options.page}
          </span>
          <div className="flex justify-end ">
            {value[name]?.options?.totalPages === 1 ? (
              ''
            ) : value[name]?.options?.totalPages > 1 ? (
              value[name]?.options?.page === 1 ? (
                <a
                  className="relative  inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
                  id="Next"
                  onClick={(e: MouseEvent<HTMLAnchorElement>) =>
                    HandlePagination(e.currentTarget)
                  }
                >
                  صفحه بعدی
                </a>
              ) : value[name]?.options?.page <
                value[name]?.options?.totalPages ? (
                <a
                  className="relative  inline-flex items-center cursor-pointer rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  id="Next"
                  onClick={(e: MouseEvent<HTMLAnchorElement>) =>
                    HandlePagination(e.currentTarget)
                  }
                >
                  صفحه بعدی
                </a>
              ) : (
                <span></span>
              )
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
  );
};

export default Pagination;

import useRedux from '@/hooks/useRedux';
import { PAGINATE } from '@/redux/slice/admin/adminSlice';
import { MouseEvent } from 'react';
interface props {
  name: string;
  refetch: () => void;
}
const Pagination = ({ name, refetch }: props) => {
  const [value, dispatch] = useRedux((state) => state.adminState);
  console.log(value[name].options.page);
  const HandlePagination = async (event: any) => {
    await dispatch(PAGINATE({ name: name, item: event.id }));
    refetch();
  };

  return (
    <div className="flex w-full rounded-b-xl items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className=" grid grid-cols-3 w-full ">
        <div className="flex justify-start">
          {value[name].options.page === 1 ? (
            <span></span>
          ) : (
            <a
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              id="Prev"
              onClick={(e: MouseEvent<HTMLAnchorElement>) =>
                HandlePagination(e.currentTarget)
              }
            >
              Previous
            </a>
          )}
        </div>

        <span className="flex justify-center "> page 1</span>
        <div className="flex justify-end ">
          <a
            className="relative  inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            id="Next"
            onClick={(e: MouseEvent<HTMLAnchorElement>) =>
              HandlePagination(e.currentTarget)
            }
          >
            Next
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pagination;

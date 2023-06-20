import { useRouter } from 'next/router';
interface props {
  total_pages: number;
}
const Paginate = ({ total_pages }: props) => {
  const router = useRouter();
  
  const HandlePagination = (page = 1) => {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        page: page,
      },
    });
  };
  return (
    <div className="flex w-full items-center justify-between px-10">
      <div className=" grid grid-cols-3 w-full ">
        <div className="flex justify-start">
          <a
            className="relative inline-flex items-center rounded-md border cursor-pointer border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            id="Prev"
            onClick={(e: MouseEvent<HTMLAnchorElement>) => {
              let page: number = router.query.page && +router.query.page - 1;
              page = page < 1 ? 1:page;
              HandlePagination(page);
            }}
          >
            صفحه قبلی
          </a>
          {/* {value[name]?.options?.totalPages === 1 ? (
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
              )} */}
        </div>

        <span className="flex justify-center ">
        
          {router.query.page ? router.query.page :1 }
        </span>
        <div className="flex justify-end ">
          <a
            className="relative  inline-flex items-center cursor-pointer rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            id="Next"
            onClick={() => {
              let page: number = router.query.page  ? +router.query.page + 1 : 2
              page = +page > total_pages ? total_pages : page ;
              HandlePagination(page);
            }}
          >
            صفحه بعدی
          </a>
          {/* {value[name]?.options?.totalPages === 1 ? (
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
              )} */}
        </div>
      </div>
    </div>
  );
};
export default Paginate;

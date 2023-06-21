import { useRouter } from 'next/router';
interface props {
  total_pages: number | string;
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
          {total_pages !== 1 ? (
            router.query.page ? 
            <a
              className="relative inline-flex items-center rounded-md border cursor-pointer border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              id="Prev"
              onClick={() => {
                let page: number = router.query.page && +router.query.page - 1;
                page = page < 1 ? 1 : page;
                HandlePagination(page);
              }}
            >
              صفحه قبلی
            </a> : <span></span>
          ) : (
            <span></span>
          )}
        </div>

        <span className="flex justify-center ">
          صفحه {router.query.page ? router.query.page : 1}
        </span>
        <div className="flex justify-end ">
          {total_pages !== 1 ? (
            <a
              className="relative  inline-flex items-center cursor-pointer rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              id="Next"
              onClick={() => {
                let page: number = router.query.page
                  ? +router.query.page + 1
                  : 2;
                page = +page > total_pages ? total_pages : page;
                HandlePagination(page);
              }}
            >
              صفحه بعدی
            </a> 
          ) : (
            <span> </span>
          )}
        </div>
      </div>
    </div>
  );
};
export default Paginate;

import Linkrouter from '@/components/Linkrouter';

export default function notfound() {
  return (
    <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div className="relative">
          <div className="absolute">
            <div className="">
              <h1 className="my-2 text-gray-800 font-bold text-2xl">
                صفحه مورد نظر شما یافت نشد
              </h1>
              <p className="my-2 text-gray-800">
                <span>
                  لطفا از <Linkrouter href="/" className='font-semibold'> صفحه اصلی</Linkrouter> دیجی شاپ
                  دیدن کنید .
                </span>
              </p>
              <Linkrouter href="/">
                <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
                  من را ببر
                </button>
              </Linkrouter>
            </div>
          </div>
          <div >
            <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
          </div>
        </div>
      </div>
      <div className='w-96'>
        <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
      </div>
    </div>
  );
}
notfound.getLayout = function PageLayout(page: any) {
  return <>{page}</>;
};

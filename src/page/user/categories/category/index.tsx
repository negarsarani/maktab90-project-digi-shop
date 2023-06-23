import { productType } from '@/types/type';
import { Card } from '@/page/user/shared';
import { Paginate } from '@/page/user/categories';

interface props {
  data: {
    data: { products: productType[] };
    page: string | number;
    per_page: string | number;
    total: string | number;
    total_pages: string | number;
  };
}
const Index = ({ data }: props) => {
  if (data.data.products.length === 0) {
    return (
      <div className="w-full animate-pulse items-center flex h-full justify-center">
        {' '}
        <span>کالایی یافت نشد</span>
      </div>
    );
  }
  return (
    <div className=' flex items-center justify-center flex-col gap-24'>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-5 ">
        {data.data.products?.map((item) => {
          return (
            <div
              className="flex justify-center items-center w-full  "
              key={item._id}
            >
              <Card
                desc={item.description}
                id={item._id}
                price={item.price}
                srcImg={item.images[0]}
                href={'#'}
                name={item.name}
              />
            </div>
          );
        })}
      </div>
      <Paginate total_pages={data.total_pages}/>
    </div>
  );
};

export default Index;

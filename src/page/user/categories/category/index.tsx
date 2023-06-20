import { productType } from '@/types/type';
import { Card } from '@/page/user/shared';
import { Paginate } from '@/page/user/categories';

interface props {
  data: productType[];
}
const Index = ({ data }: props) => {
  if (data.length === 0) {
    return (
      <div className="w-full animate-pulse items-center flex h-full justify-center">
        {' '}
        <span>کالایی یافت نشد</span>
      </div>
    );
  }
  return (
    <div className=' flex items-center justify-center flex-col gap-24'>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 container mx-auto gap-5  ">
        {data?.map((item) => {
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
      <Paginate />
    </div>
  );
};

export default Index;

import { productType } from '@/types/type';
import { Card } from '@/page/user/shared';
interface props {
  data: productType[];
}
const Index = ({ data }: props) => {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-5  ">
      {data.map((item) => {
        return (
          <div className="flex justify-center items-center w-full  " key={item._id}>
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
  );
};

export default Index;

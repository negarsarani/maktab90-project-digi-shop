import { productType } from '@/types/type';
import { Card } from '@/page/user/shared';
interface props {
  data: productType[];
}
const Index = ({ data }: props) => {
  return (
    <div>
        ss
      {/* {data.map((item) => {
        return (
          <Card
            key={item._id}
            desc={item.description}
            id={item._id}
            price={item.price}
            srcImg={item.images[0]}
            href={'#'}
            name={item.name}
          />
        );
      })} */}
      sss
    </div>
  );
};

export default Index;

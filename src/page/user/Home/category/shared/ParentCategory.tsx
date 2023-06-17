import Linkrouter from '@/components/Linkrouter';
import Slider from './Slider';
import { Card } from '@/page/user/shared';
import { dataCardType } from '@/types/type';
interface props {
  bgColor: string;
  title: string;
  href: string;
  data: {
    _id: string;
    name: string;
    price: string;
    description: string;
    images: string[];
    href: string;
  }[];
}
const ParentCategory = ({ bgColor, title, data, href }: props) => {
  return (
    <div className={`${bgColor}`}>
      <div className="flex items-center justify-between text-black">
        <span>{title}</span>
        <Linkrouter href={href}>
          <span>مشاهده همه</span>
        </Linkrouter>
      </div>
      <div>
        <Slider>
          {data?.map(
            (item: {
              _id: string;
              name: string;
              price: string;
              description: string;
              images: string[];
              href: string;
            }) => {
              return (
                <Card
                  key={item.name}
                  id={item._id}
                  desc={item.description}
                  href={'#'}
                  name={item.name}
                  price={item.price}
                  srcImg={item.images[0]}
                ></Card>
              );
            }
          )}
        </Slider>
      </div>
    </div>
  );
};

export default ParentCategory;

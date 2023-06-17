import Linkrouter from '@/components/Linkrouter';
import Slider from './Slider';
import { Card, Skeletoncard } from '@/page/user/shared';
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
  isLoading: boolean;
}
const ParentCategory = ({ bgColor, title, data, href, isLoading }: props) => {
  return (
    <div className={`${bgColor}`}>
      <div className="flex items-center justify-between text-black">
        <span>{title}</span>
        <Linkrouter href={href}>
          <span>مشاهده همه</span>
        </Linkrouter>
      </div>
      <div>
        <Slider className={"flex gap-10"}>
          {isLoading ? (
            <div className='flex w-full gap-10'>
              <Skeletoncard />
              <Skeletoncard />
              <Skeletoncard />
              <Skeletoncard />

            </div>
          ) : (
            data?.map(
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
            )
          )}
        </Slider>
      </div>
    </div>
  );
};

export default ParentCategory;

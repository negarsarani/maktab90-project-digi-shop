import Linkrouter from '@/components/Linkrouter';
import Slider from './Slider';
import { Card, Skeletoncard } from '@/page/user/shared';
import { dataCardType } from '@/types/type';
import { SwiperSlide } from 'swiper/react';
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
      <div className=" overflow-hidden w-full overflow-x-scroll flex ">
        <Slider>
          {isLoading ? (
            <div className="flex w-full gap-10">
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
                  <SwiperSlide key={item._id} className='px-10 '>
                    <Card
                      key={item.name}
                      id={item._id}
                      desc={item.description}
                      href={'#'}
                      name={item.name}
                      price={item.price}
                      srcImg={item.images[0]}
                    />
                  </SwiperSlide>
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

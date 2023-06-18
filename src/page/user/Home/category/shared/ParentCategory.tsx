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
    <div className={`${bgColor} pb-5 rounded-lg my-10 `}>
      <div className="flex items-center justify-between text-black py-5 px-5">
        <span>{title} در دیجی شاپ</span>
        <Linkrouter href={href}>
          <span className='hover:text-gray-700'>مشاهده همه</span>
        </Linkrouter>
      </div>
      <div className=" w-full px-10">
        <Slider>
          {isLoading ? (
            <div className="flex w-full gap-10 ">
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
                  <SwiperSlide key={item._id} className=' '>
                    <div className='flex items-center justify-center w-full'>
                     <Card
                      key={item.name}
                      id={item._id}
                      desc={item.description}
                      href={'#'}
                      name={item.name}
                      price={item.price}
                      srcImg={item.images[0]}
                    /> 
                    </div>
                    
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

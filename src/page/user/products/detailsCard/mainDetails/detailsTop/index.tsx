import { Button, Linkouter } from '@/components';
import Image from 'next/image';
import React from 'react';
interface props {
  data: {
    rating: [Object];
    _id: string;
    category: [Object];
    subcategory: [Object];
    name: string;
    price: 526777;
    quantity: 444;
    brand: string;
    description: string;
    thumbnail: string;
    images: [];
    createdAt: string;
    slugname: string;
  };
}
const Index = ({ data }: props) => {
  return (
    <div className='lg:col-span-6 sm:col-span-8 '>
      {' '}
      <h3 className="mb-3">
        تبلت سامسونگ مدل Galaxy Tab A7 Lite (2021, 8.7") 4G SM-T225 ظرفیت 32/3
        گیگابایت
      </h3>
      <div className="w-full bg-white  rounded-lg shadow-sm   px-4 pb-5 pt-3">
        <div className=" w-full  h-full ">
          <div className="  flex flex-col justify-between  h-fullrounded-lg px-4 ">
            <div className="">
              <div className="py-5">
                <span>دسته بندی :</span>{' '}
                <Linkouter
                  className="hover:text-zinc-500"
                  href={`/category/${data.category.slugname}`}
                >
                  {data.category.name}
                </Linkouter>
              </div>
              <div className="flex items-center border-t py-5 gap-2">
                <Image
                  src={'/icons/user/Tick.svg'}
                  alt={'name'}
                  width={20}
                  height={20}
                />{' '}
                <span>ضمانت اصل بودن کالا</span>
              </div>
              <div className="border-t py-5">
                <span>{data.quantity}</span> <span>تعداد موجود در انبار</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row  justify-between items-center gap-1 sm:gap-0 ">
              <div>
                <div className="text-btnCard flex py-5 items-center justify-center gap-2">
                  {' '}
                  <span>
                    {Intl.NumberFormat('fa-IR').format(data.price)}
                  </span>{' '}
                  <span>تومان</span>
                </div>
              </div>
              <div className="flex ">
                <Button
                  type="button"
                  className="bg-btnCard   p-2 rounded-lg flex items-center justify-center gap-5 px-3"
                >
                  <Image
                    src={'/icons/user/BuyCard.svg'}
                    alt={'name'}
                    width={20}
                    height={20}
                  />
                  <span className="text-white ">افزودن به سبد خرید</span>
                </Button>

                {/* <Button type="button" className=" p-2 bg-btnCard rounded-r-lg">
                <Image
                  src={'/icons/user/Minus.svg'}
                  alt="minus"
                  width={20}
                  height={10}
                />
              </Button>
              <div className="border flex items-center justify-center p-2  ">
                <span>dscsdcvd</span>
              </div>
              <Button type="button" className="p-2 bg-btnCard rounded-l-lg">
                <Image
                  src={'/icons/user/Plus.svg'}
                  alt="plus"
                  width={20}
                  height={10}
                />
              </Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

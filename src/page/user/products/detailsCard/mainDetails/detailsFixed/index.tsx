import Date from '@/components/Date';
import Image from 'next/image';
import Rating from 'react-rating';
interface props {
  data: {
    rating: { rate: number; count: string };
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
    <div className="  lg:col-span-3 w-full col-span-full   flex items-start justify-center ">
      <div className='flex flex-col items-center justify-center gap-7 rounded-lg lg:py-20 p-10  bg-white w-full'>
         <div className="flex  flex-col xl:flex-row  items-center justify-center gap-3">
        <span>برند : </span>
        <span>{data.brand}</span>
      </div>
      <div className="flex  flex-col xl:flex-row  items-center justify-center gap-3">
        <span>تاریخ عرضه کالا :</span>
        <Date date={data.createdAt} />
      </div>
      <div className="flex items-center justify-center w-full  gap-3">
        <span>امتیاز کالا :</span>
        <span>{data.rating.rate}</span>
      </div>{' '}
      <div className="flex  flex-col items-center justify-evenly sm:justify-center w-full  gap-3">
        <span>
          به این کالا امتیاز بدهید
        </span>
        <Rating
          placeholderRating={+data.rating.rate}
          emptySymbol={
            <Image
              src="/icons/user/Star.svg"
              alt="star"
              width={20}
              height={10}
            />
          }
          placeholderSymbol={
            <Image
              src="/icons/user/StarFill.svg"
              alt="star"
              width={20}
              height={10}
            />
          }
          fullSymbol={
            <Image
              src="/icons/user/StarFill.svg"
              alt="star"
              width={20}
              height={10}
            />
          }
        />
      </div>
      </div>
     
    </div>
  );
};

export default Index;

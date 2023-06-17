import { Button } from '@/components';
import Linkrouter from '@/components/Linkrouter';
import Image from 'next/image';

interface props {
  href: string;
  srcImg: string;
  name: string;
  desc: string;
  price: string;
  id: string;
}
function Card({ href, srcImg, name, desc, price, id }: props) {
  return (
    <div className="bg-white rounded-xl w-64 shadow-xl overflow-hidden ">
      <div className="flex items-center justify-center p-5 w-full">
        <Linkrouter href={href}>
          <Image
            src={`http://localhost:8000/images/products/images/${srcImg}`}
            alt={name}
            width={180}
            height={180}
            className='rounded-xl'
          />
        </Linkrouter>
      </div>
      <div className='px-5 py-2  w-full '>
        <div className='w-full '>
        <div className='truncate'>
          <Linkrouter href={href} className="truncate w-full">
            {name} 
          </Linkrouter>
        </div>
        <div className='w-full truncate'>{"ssssssssssssssssssssssssxxxxxxxccccs"}</div>
      </div>
      <div className="flex justify-between items-center">
        <Button type="button" className="bg-btnCard p-2 rounded-lg">
          <Linkrouter href={href}>
            <Image
              src={'/icons/user/BuyCard.svg'}
              alt={name}
              width={25}
              height={25}
            />
          </Linkrouter>
        </Button>
        <div className="flex items-center  gap-1 justify-between">
          <span>{price}</span> <span>تومان</span>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default Card;

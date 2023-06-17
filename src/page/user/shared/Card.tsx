import { Button } from '@/components';
import Linkrouter from '@/components/Linkrouter';
import Image from 'next/image';

interface props {
  href: string;
  srcImg: string;
  name: string;
  desc: string;
  price: string;
}
function Card({ href, srcImg, name, desc, price }: props) {
  return (
    <div>
      <div>
        <Linkrouter href={href}>
          <Image src={srcImg} alt={name} width={20} height={20} />
        </Linkrouter>
      </div>
      <div>
        <div>
          <Linkrouter href={href} className="">
            {name}
          </Linkrouter>
        </div>
        <div>{desc}</div>
      </div>
      <div>
        <Button type="button" className="bg-btnCard">
          <Linkrouter href={href}>
            <Image
              src={'/icons/user/BuyCard.svg'}
              alt={name}
              width={20}
              height={20}
            />
          </Linkrouter>
        </Button>
        <div className="flex items-center justify-between">
          <span>تومان</span>
          <span>{price}</span>
        </div> 
      </div>
    </div>
  );
}

export default Card;

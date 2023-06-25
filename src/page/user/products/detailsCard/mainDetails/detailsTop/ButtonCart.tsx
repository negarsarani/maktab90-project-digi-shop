import { Button } from '@/components';
import Image from 'next/image';
import { useState } from 'react';
interface props {
  quantity: number;
}
const ButtonCart = ({ quantity }: props) => {
  const [addToCart, setAddToCart] = useState(false);
  const [numberOrder, setnumberOrder] = useState(1);
  const handleCart = (number: number) => {
    setnumberOrder(number);
  };
  return (
    <div>
      {addToCart ? (
        <div className="flex">
          <Button
            type="button"
            className=" p-2 bg-btnCard rounded-r-lg"
            onClick={() => handleCart(numberOrder < quantity ? numberOrder + 1 : numberOrder)}
          >
            <Image
              src={'/icons/user/Plus.svg'}
              alt="plus"
              width={20}
              height={10}
            />
          </Button>
          <div className="border flex items-center justify-center p-2  ">
            <span> {numberOrder} </span>
          </div>
          {
            numberOrder === 1 ? <Button
            type="button"
            className="p-2 bg-btnCard rounded-l-lg"
            onClick={() => setAddToCart(false)}
          >
            <Image
              src={'/icons/user/Trash.svg'}
              alt="minus"
              width={20}
              height={10}
            />
          </Button> :<Button
            type="button"
            className="p-2 bg-btnCard rounded-l-lg"
            onClick={() => handleCart(numberOrder > 0 ? numberOrder - 1 : numberOrder)}
          >
            <Image
              src={'/icons/user/Minus.svg'}
              alt="minus"
              width={20}
              height={10}
            />
          </Button> 
          }
          
        </div>
      ) : (
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
          <span className="text-white " onClick={() => setAddToCart(true)}>
            افزودن به سبد خرید
          </span>
        </Button>
      )}
    </div>
  );
};

export default ButtonCart;

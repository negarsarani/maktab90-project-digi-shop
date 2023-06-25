import { Button } from '@/components';
import Image from 'next/image';
import { useState } from 'react';
interface props {
  quantity: number;
  id: string;
}
const ButtonCart = ({ quantity, id }: props) => {
  const [addToCart, setAddToCart] = useState(false);
  const [numberOrder, setnumberOrder] = useState(0);
  const handleCart = (number: number) => {
    setnumberOrder(number);
       const dataCart: string | null = localStorage.getItem('cart');
    if (dataCart) {
      const parseData = JSON.parse(dataCart);
      const ChangeData = parseData.map((item: any) => {
        if (item.id === id) {
          item.quantity = numberOrder;
          return item;
        }
        return item;
      });

      localStorage.setItem('cart', JSON.stringify(ChangeData));
    } else {
      const data = { id: id, quantity: numberOrder };
      localStorage.setItem('cart', JSON.stringify([data]));
    }
   
  };
  const handleDeleteCart = () => {
    const dataCart: string | null = localStorage.getItem('cart');
    if (dataCart) {
      const parseData = JSON.parse(dataCart);
      const FilterData = parseData.map((item: any) => item.id !== id);
      return FilterData.length > 1
        ? localStorage.setItem('cart', JSON.stringify(FilterData))
        : localStorage.removeItem('cart');
    }
  };
  return (
    <div>
      {addToCart ? (
        <div className="flex">
          <Button
            type="button"
            className=" p-2 bg-btnCard rounded-r-lg"
            onClick={() =>
              handleCart(numberOrder < quantity ? numberOrder + 1 : numberOrder)
            }
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
          {numberOrder === 1 ? (
            <Button
              type="button"
              className="p-2 bg-btnCard rounded-l-lg"
              onClick={() => {
                setAddToCart(false);
                handleDeleteCart();
              }}
            >
              <Image
                src={'/icons/user/Trash.svg'}
                alt="Trash"
                width={20}
                height={10}
              />
            </Button>
          ) : (
            <Button
              type="button"
              className="p-2 bg-btnCard rounded-l-lg"
              onClick={() =>
                handleCart(numberOrder > 0 ? numberOrder - 1 : numberOrder)
              }
            >
              <Image
                src={'/icons/user/Minus.svg'}
                alt="minus"
                width={20}
                height={10}
              />
            </Button>
          )}
        </div>
      ) : quantity !== 0 ? (
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
          <span
            className="text-white "
            onClick={() => {
              setAddToCart(true);
              handleCart(1);
            }}
          >
            افزودن به سبد خرید
          </span>
        </Button>
      ) : (
        <Button
          type="button"
          className="bg-grayLight   p-2 rounded-lg flex items-center justify-center gap-5 px-3"
        >
          <Image
            src={'/icons/user/BuyCard.svg'}
            alt={'name'}
            width={20}
            height={20}
          />
          <span className="text-white ">فاقد موجودی</span>
        </Button>
      )}
    </div>
  );
};

export default ButtonCart;

import { Button } from '@/components';
import useRedux from '@/hooks/useRedux';
import { CART, DELETEITEM } from '@/redux/slice/user/userSlice';
import Image from 'next/image';
import { useState } from 'react';
interface props {
  quantity: number;
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
const ButtonCart = ({ quantity, data }: props) => {
  const [value, dispatch] = useRedux((state) => state.userState);
  const [addToCart, setAddToCart] = useState(false);
  const [numberOrder, setnumberOrder] = useState(1);

  const handleLocalCart = (number: number) => {
    setnumberOrder(number);

    return dispatch(CART({ quantity: number, data: data }))
    console.log(value.cart);
  };
  const handleDeleteCart = () => {
    return dispatch(DELETEITEM({ id: data._id }));
  };
  return (
    <div>
      {addToCart ? (
        <div className="flex">
          <Button
            type="button"
            className=" p-2 bg-btnCard rounded-r-lg"
            onClick={() => {
              // handleNumberOrder(
              //   numberOrder < quantity ? numberOrder + 1 : numberOrder
              // );
              return handleLocalCart(
                numberOrder < quantity ? numberOrder + 1 : numberOrder
              );
            }}
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
                return handleDeleteCart();
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
              onClick={() => {
                // handleNumberOrder(
                //   numberOrder > 0 ? numberOrder - 1 : numberOrder
                // );
                handleLocalCart(
                  numberOrder > 0 ? numberOrder - 1 : numberOrder
                );
              }}
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
          onClick={() => {
            setAddToCart(true);
            return handleLocalCart(1);
          }}
        >
          <Image
            src={'/icons/user/BuyCard.svg'}
            alt={'name'}
            width={20}
            height={20}
          />
          <span className="text-white ">افزودن به سبد خرید</span>
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

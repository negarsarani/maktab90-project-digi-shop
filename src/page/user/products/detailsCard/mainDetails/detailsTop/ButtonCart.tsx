import { Button } from '@/components';
import useRedux from '@/hooks/useRedux';
import { CART, DELETEITEM } from '@/redux/slice/user/userSlice';
import { productType } from '@/types/type';
import Image from 'next/image';
import { useEffect, useState } from 'react';
interface props {
  quantity: number;
  data: productType;
}
const ButtonCart = ({ quantity, data }: props) => {
  const [value, dispatch] = useRedux((state) => state.userState);
  const [addToCart, setAddToCart] = useState(false);
  const [numberOrder, setnumberOrder] = useState(1);
  useEffect(() => {
    console.log(value.cart);

    if (value.cart.length > 0) {
      const dataLocalFind = value.cart.find((item: any) => item.data._id === data._id);

      console.log(dataLocalFind);
      if (dataLocalFind ) {
        setAddToCart(true)
        
        setnumberOrder(dataLocalFind.quantity)
      }
       
    }
  }, []);
  const handleLocalCart = (number: number) => {
    setnumberOrder(number);

    dispatch(CART({ quantity: number, data: data }));
  };
  const handleDeleteCart = () => {
    return dispatch(DELETEITEM({ id: data._id }));
  };
  return (
    <div>
      {}
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

import { Button } from '@/components';
import useRedux from '@/hooks/useRedux';
import { CART, DELETEITEM } from '@/redux/slice/user/userSlice';
import { dataProduct } from '@/types/type';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'react-toastify';
interface props {
  quantity: number;
  data: dataProduct;
}
const ButtonCart = ({ quantity, data }: props) => {
  const [value, dispatch] = useRedux((state) => state.userState);
  const [numberOrder, setnumberOrder] = useState(quantity);
  // console.log(value.cart);

  const handleLocalCart = (number: number) => {
    if (number === data.quantity) {
      toast.warn(`حداکثر موجودی این کالا ${data.quantity} عدد می باشد.`);
    } 
      setnumberOrder(number);

      dispatch(CART({ quantity: number, data: data }));
   
  };
  const handleDeleteCart = () => {
    return dispatch(DELETEITEM({ id: data._id }));
  };
  return (
    <div>
      <div className="flex">
        <Button
          type="button"
          className=" p-2 bg-btnCard rounded-r-lg"
          onClick={() => {
            handleLocalCart(
              numberOrder < data.quantity ? numberOrder + 1 : numberOrder
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
              handleLocalCart(numberOrder > 0 ? numberOrder - 1 : numberOrder);
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
    </div>
  );
};

export default ButtonCart;

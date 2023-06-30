import { Button, Input } from '@/components';
import Linkrouter from '@/components/Linkrouter';
import useRedux from '@/hooks/useRedux';
import { TOTAL } from '@/redux/slice/user/userSlice';
import { dataProduct } from '@/types/type';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface props {
  data: { data: dataProduct; quantity: number }[];
}
const Index = ({ data }: props) => {
 const [value , dispatch]= useRedux(state=>state.userState)
  const [sumPrice, setSumPrice] = useState(0);
  const [discount, setDiscount] = useState({
    usediscount: false,
    percent: 0,
    value: '',
  });
  const [cost, setcost] = useState(35000);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const TotalData = data.reduce((total, item) => {
      const price = +item.data.price * item.quantity;
      return total + price;
    }, 0);
    setSumPrice(TotalData);
    setTotal(TotalData + cost);
    dispatch(TOTAL(TotalData + cost))
  }, [data]);
  const handleDiscount = (event) => {
    event.preventDefault();

    let discountPercentage = 0; // Default discount percentage is 0 (no discount applied)
    if (discount.usediscount === false) {
      if (discount.value === 'Golden') {
        discountPercentage = 30;
        discount.percent = (sumPrice * discountPercentage) / 100;
        setDiscount(discount);
      } else if (discount.value === 'Silver') {
        discountPercentage = 20;
        discount.percent = (sumPrice * discountPercentage) / 100;
        setDiscount(discount);
      } else if (discount.value === 'Bronze') {
        discountPercentage = 10;
        discount.percent = (sumPrice * discountPercentage) / 100;
        setDiscount(discount);
      }

      const discountAmount = (total * discountPercentage) / 100;
      const discountedTotal = total - discountAmount;
      setTotal(discountedTotal);
      dispatch(TOTAL(discountedTotal))
      discount.usediscount = true
      discount.value =""
      setDiscount(discount)
    } else{
      toast.warn("کاربر عزیز شما کد تخفیف دیگری استفاده کردید.")
    }
  };

  return (
    <div className=" lg:w-4/12 rounded-md p-3 w-full bg-white h-fit  ">
      <div className="border-btnCard border w-full  border-opacity-20 rounded-md flex flex-col gap-5  p-3">
        <p>اطلاعات پرداخت</p>
        <div className="flex items-center justify-between text-sm">
          <div>
            <span>مبلغ کالا ها</span>
            <span className="bg-btnCard text-white rounded-lg w-1 h-1"></span>
          </div>
          <div className="flex items-center justify-center gap-1">
            <span className="text-sm">
              {Intl.NumberFormat('fa-IR').format(sumPrice)}
            </span>
            <span>تومان</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div>
            <span className="text-btnCard">تخفیف</span>
          </div>
          <div className="text-btnCard flex items-center justify-center gap-1">
            <span className="text-sm">
              {Intl.NumberFormat('fa-IR').format(discount.percent)}
            </span>
            <span>تومان</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div>
            <span className="">هزینه ارسال</span>
            {/* <span className="">!</span> */}
          </div>
          <div className="flex items-center justify-center gap-1">
            <span className="text-sm">
              {Intl.NumberFormat('fa-IR').format(cost)}
            </span>
            <span>تومان</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div>
            <span className="">مبلغ قابل پرداخت</span>
            {/* <span className="">!</span> */}
          </div>
          <div className="flex items-center justify-center gap-1">
            <span className="text-sm">
              {Intl.NumberFormat('fa-IR').format(total)}
            </span>
            <span>تومان</span>
          </div>
        </div>
        <div className="w-full">
          <form
            action=""
            className="flex items-center justify-center text-sm gap-3"
            onSubmit={handleDiscount}
          >
            <Button
              type="submit"
              className="bg-zinc-400 px-5 rounded-lg py-3 text-white hover:bg-btnCard focus:ring-btnCard outline-none "
              onClick={() => {}}
            >
              اعمال
            </Button>
            <Input
              name="discount"
              type="text"
              className="border-btnCard block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-btnCard sm:text-sm sm:leading-6 placeholder:py-2"
              placeholder="کد تخفیف را وارد کنید"
              onChange={(e: any) => {
                discount.value = e.target.value;
                setDiscount(discount);
              }}
            />
          </form>
        </div>
        <div className="flex-1 flex items-center justify-center text-sm">
        <Linkrouter href='/cart/final' className='w-full' >
          <Button
            type="button"
            className="bg-btnCard w-full text-white rounded-xl py-2"
            onClick={() => {}}
            >
            ادامه
          </Button>
            </Linkrouter>
        </div>
      </div>
    </div>
  );
};

export default Index;

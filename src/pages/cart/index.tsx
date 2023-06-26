import getData from '@/api/getData';
import useRedux from '@/hooks/useRedux';
import {MainCart} from '@/page/user'

const Main = () => {
  const [value, dispatch] = useRedux((state) => state.userState);
  if (value.cart.length <= 0) {
    return <div>سبد خرید شما خالی می باشد</div>;
  }

  return <div className='xl:container xl:mx-auto px-4 '><MainCart data={value.cart}/> </div>;
};

export default Main;

Main.getLayout = function PageLayout(page: any) {
  return <>{page}</>;
};

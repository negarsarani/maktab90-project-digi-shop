import Sidebar from './sidebar';
import Cards from './cards';
import { dataProduct } from '@/types/type';
interface props {
  data: { data: dataProduct; quantity: number }[];
}
const index = ({ data }: props) => {
  console.log("darta=>>>>",data);
  
  return (
    <div className="flex lg:flex-row flex-col gap-3 py-10 ">
      <Cards data={data} />
      <Sidebar />
    </div>
  );
};

export default index;

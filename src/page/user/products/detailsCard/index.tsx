import { Button } from '@/components';
import Image from 'next/image';
import TabsDetails from './tabsDetails';
import MainDetails from './mainDetails';
interface props{
  data: {
    rating: [Object],
    _id: string,
    category: [Object],
    subcategory: [Object],
    name: string,
    price: 526777,
    quantity: 444,
    brand: string,
    description: string,
    thumbnail: string,
    images: [],
    createdAt: string,
    slugname: string,
  }
}
export default function Index({data}:props) {
  return (
    <div className="">
      <MainDetails data={data}>
        <TabsDetails data={data} />
      </MainDetails>
    </div>
  );
}

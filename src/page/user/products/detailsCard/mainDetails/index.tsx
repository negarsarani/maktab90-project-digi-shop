import { ReactNode } from 'react';
import DetailsFixed from './detailsFixed';
import DetailsTop from './detailsTop';
import ImageSlider from './imageSlider';

interface props {
  children: ReactNode;

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
const Index = ({ children, data }: props) => {
  return (
    <div className=" bg-red-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
      <ImageSlider images={data.images} />

      <DetailsTop data={data} />
      <DetailsFixed data={data} />
      <div className=" lg:col-span-9 col-span-full w-full">{children}</div>
    </div>
  );
};

export default Index;

import { ReactNode } from 'react';
import DetailsFixed from './detailsFixed';
import DetailsTop from './detailsTop';
import ImageSlider from './imageSlider';

interface props {
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
const Index = ({ data , children}: props) => {
  return (
    <div className="grid grid-cols-1 h-full md:grid-cols-12 lg:grid-cols-12 gap-3">
      <ImageSlider images={data.images} />
      <DetailsTop data={data} />
      <DetailsFixed data={data} />
     
    </div>
  );
};

export default Index;

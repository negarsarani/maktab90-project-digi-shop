import { ReactNode } from 'react';
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
const Index = ({ data }: props) => {
  return (
    <div className=" rounded-lg lg:col-span-3 w-full">
      {data.brand}

      {/* محتوای دیگر */}
    </div>
  );
};

export default Index;

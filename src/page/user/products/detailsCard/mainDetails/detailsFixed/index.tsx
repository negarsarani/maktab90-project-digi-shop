import { ReactNode } from 'react';
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
const Index = ({data}:props) => {
    return (
        <div className='bg-blue-200 rounded-lg lg:col-span-3  relative'>
          <div className=' lg:fixed lg:left-10'>
            {data.brand}

          </div>
           
        </div>
    );
};

export default Index;
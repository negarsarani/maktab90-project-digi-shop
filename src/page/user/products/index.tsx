import Detail from './details';
import ImageSlider from './imageSlider';
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
const Products = ({data}:props) => {
  return (
    <div className="flex flex-col sm:flex-row w-full py-10 px-5 xl:container xl:mx-auto">
      <div className="sm:w-5/12 md:w-4/12  lg:w-3/12 w-full ">
        <ImageSlider images={data.images} />
      </div>
      <div className="flex-1">
        <Detail />
      </div>
    </div>
  );
};

export default Products;

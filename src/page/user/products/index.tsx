import DetailCard from './detailsCard'
import SimilarProducts from './similarProducts'
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
    <div className=" w-full py-10 px-5 ">
     <DetailCard data={data}/>
     <SimilarProducts/>
    </div>
  );
};

export default Products;

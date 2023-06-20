import Detail from './details';
import ImageSlider from './imageSlider';
const Products = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full py-10 px-5 xl:container xl:mx-auto">
      <div className="sm:w-5/12 md:w-4/12  lg:w-3/12 w-full ">
        <ImageSlider />
      </div>
      <div className="flex-1">
        <Detail />
      </div>
    </div>
  );
};

export default Products;

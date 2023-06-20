import getData from '@/api/getData';
import { productType } from '@/types/type';
import {Products} from '@/page/user'
interface props {
  data: productType;
}
const SingleProduct = ({ data }: props) => {
  console.log(data);

  return <div>
    <Products/>
  </div>
};

export default SingleProduct;

export const getServerSideProps = async ({ params }) => {
  try {
    const Dataproduct = await getData(`/products/${params.id}`);

    return {
      props: {
        data: Dataproduct,
      },
    };
  } catch (error) {
    return {
      props: {
        data: ['lll'],
      },
    };
  }
};

SingleProduct.getLayout = function PageLayout(page: any) {
  return <>{page}</>;
};

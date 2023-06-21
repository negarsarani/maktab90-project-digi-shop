import getData from '@/api/getData';
import { productType } from '@/types/type';
import { Products } from '@/page/user';
interface props {
  data: productType;
}
const SingleProduct = ({ data }: props) => {
  return (
    <div>
      <Products />
    </div>
  );
};

export default SingleProduct;

export const getServerSideProps = async ({ params }) => {
  const Dataproduct = await getData(`/products/${params.id}`);
  if (Dataproduct.status === 'success') {
    return {
      props: {
        data: Dataproduct,
      },
    };
  } else {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }
};

SingleProduct.getLayout = function PageLayout(page: any) {
  return <>{page}</>;
};

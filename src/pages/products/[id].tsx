import getData from '@/api/getData';
import { productType } from '@/types/type';
import { Products } from '@/page/user';
interface props {
  data: {
    data: {
      product: {
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
    };
  };
}
const SingleProduct = ({ data }: props) => {
  return (
    <div>
      <Products data={data.data.product} />
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

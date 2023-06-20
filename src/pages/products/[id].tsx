import getData from '@/api/getData';

const SingleProduct = ({}) => {
  return <div></div>;
};

export default SingleProduct;

export const getServerSideProps = async ({ params }) => {

  const Dataproduct = await getData(`/products?${params.id}`).then(
    (res: any) => res?.data?.categories
  );

  try {
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

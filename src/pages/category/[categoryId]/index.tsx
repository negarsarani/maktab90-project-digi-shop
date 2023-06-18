import getData from '@/api/getData';
import { CategoryProduct, Filter } from '@/page/user/category';
import { querykeys } from '@/react-query/constants';
import { productType } from '@/types/type';
import { useQueries } from '@tanstack/react-query';
import React from 'react';
interface props {
  id: string;
  data: {
    data: { products: productType[] };
    page: string | number;
    per_page: string | number;
    total: string | number;
    total_pages: string | number;
  };
}
const Index = ({ id, data }: props) => {
  const serverData = data.data.products;
  console.log(data);

  return (
    <div>
      <Filter />
      <CategoryProduct />
      {`category ${id}`}{' '}
      {serverData.map((item) => (
        <div key={item._id}>{item.name}</div>
      ))}{' '}
      dcdscsc
    </div>
  );
};

export default Index;
export const getServerSideProps = async ({ params }) => {
  const category = await getData('/categories?limit=1000').then(
    (res: any) => res?.data?.categories
  );

  const slug = params.categoryId;
  const findId = category.find((item: { slugname: string }) => {
    return item.slugname === slug;
  });

  const DataCategory = await getData(`/products?category=${findId._id}`);
  console.log(DataCategory);

  try {
    return {
      props: {
        id: slug,
        data: DataCategory,
      },
    };
  } catch (error) {
    return {
      props: {
        id: slug,
        data: ['lll'],
      },
    };
  }
};
Index.getLayout = function PageLayout(page: any) {
  return <> {page}</>;
};

import getData from '@/api/getData';
import { CategoryProduct, Filter } from '@/page/user/categories';
import { productType } from '@/types/type';
import React from 'react';

interface props {
  nameSubCategory: string;
  data: {
    data: { products: productType[] };
    page: string | number;
    per_page: string | number;
    total: string | number;
    total_pages: string | number;
  };
}
const Index = ({ nameSubCategory , data}: props) => {
  console.log(nameSubCategory , data);
  
  const serverData = data.data.products;

  return (
    <div>
      <Filter name={nameSubCategory}>
        <CategoryProduct data={serverData} />
      </Filter>
    </div>
  );
};

export default Index;
export const getServerSideProps = async ({ params }) => {
  const subcategory = await getData('/subcategories?limit=1000').then(
    (res: any) => res?.data?.subcategories
  );


  const slug = params.subcategory;
  const findId = subcategory.find((item: { slugname: string }) => {
    return item.slugname === slug;
  });

  const DataSubCategory = await getData(`/products?subcategory=${findId?._id}`);

  try {
    return {
      props: {
        nameSubCategory: findId.name,
        data: DataSubCategory,
      },
    };
  } catch (error) {
    return {
      props: {
        nameSubCategory: findId.name,
        data: ['lll'],
      },
    };
  }
};
Index.getLayout = function PageLayout(page: any) {
  return <> {page}</>;
};

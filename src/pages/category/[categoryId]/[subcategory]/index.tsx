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
const Index = ({ nameSubCategory , data , slug}: props) => {
  

  return (
    <div>
      <Filter name={nameSubCategory}>
        <CategoryProduct data={data} />
      </Filter>
    </div>
  );
};

export default Index;
export const getServerSideProps = async ( req ) => {
  const params = req.params;
  const subcategory = await getData('/subcategories?limit=1000').then(
    (res: any) => res?.data?.subcategories
  );


  const slug = params.subcategory;
  const findId = subcategory.find((item: { slugname: string }) => {
    return item.slugname === slug;
  });

  const DataSubCategory = await getData(`/products?subcategory=${findId?._id}`);
  
  if (DataSubCategory.status === 'success') {
    return {
      props: {
        nameSubCategory: findId.name,
        data: DataSubCategory,
        slug: findId.name,
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
Index.getLayout = function PageLayout(page: any) {
  return <> {page}</>;
};

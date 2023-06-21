import getData from '@/api/getData';
import { CategoryProduct, Filter } from '@/page/user/categories';
import { productType } from '@/types/type';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/router';
import { NextResponse } from 'next/server';
import { useEffect } from 'react';

interface props {
  nameCategory: string;
  data: {
    data: { products: productType[] };
    page: string | number;
    per_page: string | number;
    total: string | number;
    total_pages: string | number;
  };
  slug: string;
}

const Index = ({ nameCategory, data, slug }: props) => {
  const router = useRouter();

  
  return (
    <div>
      <Filter name={nameCategory}>
        <CategoryProduct data={data} />
      </Filter>
    </div>
  );
};

export default Index;

export const getServerSideProps = async (req, res) => {
  const params = req.params;

  const category = await getData('/categories?limit=1000').then(
    (res: any) => res?.data?.categories
  );

  const slug = params.categoryId;
  const findId = category.find((item: { slugname: string }) => {
    return item.slugname === slug;
  });

  const DataCategory = await getData(
    `/products?category=${findId?._id}&sort=${
      params.sort || '-createdAt'
    }&page=${params.page || 1}&limit=${params.limit || 3}`
  );

  if (DataCategory.status === 'success') {
    return {
      props: {
        nameCategory: findId.name,
        data: DataCategory,
        slug: slug,
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
  return <>{page}</>;
};

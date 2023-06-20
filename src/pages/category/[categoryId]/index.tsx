import getData from '@/api/getData';
import { CategoryProduct, Filter } from '@/page/user/categories';
import { productType } from '@/types/type';
import { useRouter } from 'next/router';
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

  useEffect(() => {
    router.replace({
      pathname: `/category/${slug}`,
      query: { sort: '-createdAt' },
    });
  }, []);

  const serverData = data.data.products;

  return (
    <div>
      <Filter name={nameCategory}>
        <CategoryProduct data={serverData} />
      </Filter>
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

  const DataCategory = await getData(`/products?category=${findId?._id}&sort=-createdAt`);

  try {
    return {
      props: {
        nameCategory: findId.name,
        data: DataCategory,
        slug: slug,
      },
    };
  } catch (error) {
    return {
      props: {
        nameCategory: findId.name,
        data: ['lll'],
        slug: slug,
      },
    };
  }
};

Index.getLayout = function PageLayout(page: any) {
  return <>{page}</>;
};

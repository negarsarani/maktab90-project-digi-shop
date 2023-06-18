import getData from '@/api/getData';
import { CategoryProduct, Filter } from '@/page/user/categories';
import { productType } from '@/types/type';
interface props {
  nameCategory: string;
  data: {
    data: { products: productType[] };
    page: string | number;
    per_page: string | number;
    total: string | number;
    total_pages: string | number;
  };
}
const Index = ({ nameCategory, data }: props) => {
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

  const DataCategory = await getData(`/products?category=${findId?._id}`);
  console.log(DataCategory);

  try {
    return {
      props: {
        nameCategory: findId.name,
        data: DataCategory,
      },
    };
  } catch (error) {
    return {
      props: {
        nameCategory: findId.name,
        data: ['lll'],
      },
    };
  }
};
Index.getLayout = function PageLayout(page: any) {
  return <> {page}</>;
};

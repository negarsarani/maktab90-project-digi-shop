import getData from '@/api/getData';
import useQueries from '@/hooks/useQueries';
import { Skeletoncard } from '@/page/user/shared';
import { ParentCategory } from '@/page/user';

const Index = () => {
  const [isLoading, data] = useQueries(
    () => getData('/products?limit=6&category=647f18eb6dd9b0e1d228fe00'),
    ['watchcategory']
  );
  if (isLoading) {
   return <Skeletoncard />;
  }
  return <div>
    <ParentCategory bgColor='' data={data} href='' title='' ></ParentCategory>
  </div>
};

export default Index;

import getData from '@/api/getData';
import useQueries from '@/hooks/useQueries';
import { Skeletoncard } from '@/page/user/shared';
import { ParentCategory, Data } from '@/page/user';

const Index = () => {
  const { name, value, href, url, bg } = Data('watch') || {
    name: '',
    bg: '',
    href: '#',
    url: '',
  };
  const [isLoading, data] = useQueries(() => getData(url), ['watchcategory']);

  if (isLoading) {
    return <Skeletoncard />;
  }
  return (
    <div>
      <ParentCategory
        bgColor={bg}
        data={data?.data.products}
        href={href}
        title={name}
      ></ParentCategory>
    </div>
  );
};

export default Index;

import getData from '@/api/getData';
import useQueries from '@/hooks/useQueries';
import { ParentCategory, Data } from '@/page/user';

const Index = () => {
  const { name, value, href, url, bg } = Data('mobile') || {
    name: '',
    bg: '',
    href: '#',
    url: '',
  };
  const [isLoading, data] = useQueries(() => getData(url), ['mobilecategory']);

  return (
    <div>
      <ParentCategory
        isLoading={isLoading}
        bgColor={bg}
        data={data?.data?.products}
        href={href}
        title={name}
      />
    </div>
  );
};

export default Index;

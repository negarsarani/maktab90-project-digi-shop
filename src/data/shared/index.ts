import getData from '@/api/getData';
import useQueries from '@/hooks/useQueries';
import { querykeys } from '@/react-query/constants';

function useCategory() {
  const [isLoading, dataCategory, isError, refetch] = useQueries(
    () => getData('/categories?limit=1000'),
    [querykeys.category[0]]
  );
  const [isLoadingSub, dataSubCategory, isErrorSub, refetchSub] = useQueries(
    () => getData('/subcategories?limit=1000'),
    [querykeys.subcategory[0]]
  );
  const [categories, subCategories] = [dataCategory, dataSubCategory];
 console.log(categories?.data?.categories ,  subCategories?.data?.subcategories)
  return [
    categories?.data?.categories,
    subCategories?.data?.subcategories,
    isLoading,
  ];
}

export default useCategory;

export function useUsers() {
  getData('/users');
  const [isLoading, data, isError, refetch] = useQueries(
    () => getData('/users'),
    ['users']
  );
  return data?.data?.users
}


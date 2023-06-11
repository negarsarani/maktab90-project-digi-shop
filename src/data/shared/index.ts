import getData from '@/api/getData';
import useQueries from '@/hooks/useQueries';

function useCategory() {
  const [isLoading, dataCategory, isError, refetch] = useQueries(
    () => getData('/categories?limit=1000'),
    ['categories']
  );
  const [isLoadingSub, dataSubCategory, isErrorSub, refetchSub] = useQueries(
    () => getData('/subcategories?limit=1000'),
    ['subcategories']
  );
  const [categories, subCategories] = [dataCategory, dataSubCategory];

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

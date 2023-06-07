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

  return [categories?.data?.categories, subCategories?.data?.subcategories, isLoading];
}

export default useCategory;

export const orderedCategory = async () => {
  // const [categories, subCategories] = await categoryData();
  // const orderedData = categories.map(
  //   (item: { _id: string; name: string; icon: string }) => {
  //     const FilterSub = subCategories.filter(
  //       (i: { category: {} }) => item._id === i.category
  //     );
  //     return {
  //       id: item._id,
  //       name: item.name,
  //       icon: item.icon,
  //       subCategories: FilterSub,
  //     };
  //   }
  // );
  // return orderedData;
};

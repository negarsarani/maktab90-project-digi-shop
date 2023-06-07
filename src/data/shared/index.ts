import getData from '@/api/getData';

const categoryData = async () => {
  const [categories, subCategories] = [
    await getData('/categories?limit=1000').then((res) => res.data.categories),
    await getData('/subcategories?limit=1000').then(
      (res) => res.data.subcategories
    ),
  ];
  return [categories, subCategories];
};

export default categoryData;

export const orderedCategory = async () => {
  const [categories, subCategories] = await categoryData();
  const orderedData = categories.map(
    (item: { _id: string; name: string; icon: string }) => {
      const FilterSub = subCategories.filter(
        (i: { category: {} }) => item._id === i.category
      );
      return {
        id: item._id,
        name: item.name,
        icon: item.icon,
        subCategories: FilterSub,
      };
    }
  );
  return orderedData;
};

const userName = (item)=>{

}
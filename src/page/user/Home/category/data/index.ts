type dataCategoryType = {
  name: string;
  value: string;
  href: string;
  url: string;
  bg: string;
};
const dataCategory = [
  {
    name: 'ساعت هوشمند',
    value: 'watch',
    href: '',
    url: '/products?limit=6&category=647f18eb6dd9b0e1d228fe00',
    bg: 'bg-grayMediumism',
  },
];

function FindDataCategory(
  nameSelect: 'watch' | 'laptop' | 'mobile' | 'accessories' | 'tablet'
): dataCategoryType | undefined {
  const findItem = dataCategory.find(
    (item: dataCategoryType) => item.value === nameSelect
  );
  return findItem;
}
export default FindDataCategory
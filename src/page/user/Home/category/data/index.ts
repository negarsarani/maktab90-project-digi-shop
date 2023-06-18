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
    href: '/category/watch',
    url: '/products?limit=6&category=647f18eb6dd9b0e1d228fe00',
    bg: 'bg-grayMediumism',
  },
  {
    name: 'لپ تاپ',
    value: 'laptop',
    href: '/category/laptop',
    url: '/products?limit=6&category=647f19326dd9b0e1d228fe06',
    bg: 'bg-pinkLight',
  },
  {
    name: 'موبایل',
    value: 'mobile',
    href: '/category/mobile',
    url: '/products?limit=6&category=647f18876dd9b0e1d228fdf8',
    bg: 'bg-blueLight',
  },
  {
    name: 'تبلت',
    value: 'tablet',
    href: '/category/tablet',
    url: '/products?limit=6&category=647f18ae6dd9b0e1d228fdfc',
    bg: 'bg-yellowLighter',
  },
  {
    name: 'لوازم جانبی',
    value: 'accessories',
    href: '/category/accesories',
    url: '/products?limit=6&category=647f19556dd9b0e1d228fe0a',
    bg: 'bg-pinkLight',
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
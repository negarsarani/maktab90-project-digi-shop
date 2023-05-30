import tag from '../../../assets/Icons/Tag.svg';
import buy from '../../../assets/Icons/Buy.svg';
import profile from '../../../assets/Icons/Profile.svg';
import file from '../../../assets/Icons/file.svg';
type sideBarDataType = {
  name: string;
  href: string;
  icon: string;
}[];
type HeaderTableType = string[];
export const sideBarData: sideBarDataType = [
  { name: 'مدیریت کالاها', href: '/admin/products', icon: '/icons/file/svg' },
  { name: 'سفارش ها', href: '/admin/orders', icon: '/icons/Buy.svg' },
  {
    name: 'موجودی و قیمت ها',
    href: '/admin/prices&inventory',
    icon: '/icons/Tag.svg',
  },
  { name: 'مدیریت کاربران', href: '/admin', icon: '/icons/profile.svg' },
];

export const headerProductTable: HeaderTableType = [
  'تصویر کالا',
  'نام کالا',
  'دسته بندی',
  'مدیریت کالا',
];

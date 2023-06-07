type sideBarDataType = {
  name: string;
  href: string;
  icon: string;
}[];
type HeaderTableType = { name: string; icon: boolean; id: string }[];
export const sideBarData: sideBarDataType = [
  { name: 'مدیریت کالاها', href: '/admin/products', icon: '/icons/file.svg' },
  { name: 'سفارش ها', href: '/admin/orders', icon: '/icons/Buy.svg' },
  {
    name: 'موجودی و قیمت ها',
    href: '/admin/prices&inventory',
    icon: '/icons/Tag.svg',
  },
  { name: 'مدیریت کاربران', href: '/admin', icon: '/icons/profile.svg' },
];

export const headerProductTable: HeaderTableType = [
  { name: 'تصویر کالا', icon: false, id: 'image' },
  { name: 'نام کالا', icon: true, id: 'name' },
  { name: 'دسته بندی', icon: true, id: 'category' },
];
export const headerInventoryTable: HeaderTableType = [
  { name: 'تصویر کالا', icon: false, id: 'image' },
  { name: 'نام کالا', icon: true, id: 'name' },
  { name: 'قیمت', icon: true, id: 'price' },
  { name: 'موجودی', icon: true, id: 'inventory' },
];
export const headerOrdersTable: HeaderTableType = [
  { name: 'نام کاربر', icon: false, id: 'image' },
  { name: 'مجموع ملبغ', icon: true, id: 'name' },
  { name: "وضعیت سفارش" , icon: true, id: 'tine' },
  { name: 'زمان ثبت سفارش', icon: true, id: 'orders' },
  { name: 'بررسی سفارش', icon: false, id: 'check' },
];

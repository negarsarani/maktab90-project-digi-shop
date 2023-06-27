import { ReactNode } from 'react';
export type LayoutChildrenAdminType = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type tableChildType = {
  className?: string;
  children: string | ReactNode;
  onClick?: (event: any) => void;
  id?: string;
};
export type TableProps = {
  isLoading: boolean | unknown;
  value: any;
  isError: boolean | any;
  refetch: () => void;
};

export type ChildAdminInit = {
  filter: string;
  sort: string;
  options: { limit: number; page: number; totalPages: number | string };
  url: { keyApi: string; path: string };
  data: any[];
};
export type DataLoginAdmin = {
  username: string;
  password: string;
};
interface SortTypes {
  key: string;
  item: string;
}
export interface OrderedCategory {
  id: string;
  name: string;
  icon: string;
  slug: string;
  subCategories: {
    _id: string;
    name: string;
    slugname?: string;
    category: string;
  }[];
}
export interface ProductModal {
  [key: string]: string | never[];
  name: string;
  brand: string;
  quantity: string;
  price: string;
  category: string;
  subcategory: string;
  images: never[];
  thumbnail: string;
}
export type dataCardType = {
  id: string;
  href: string;
  srcImg: string;
  name: string;
  desc: string;
  price: string;
};
export type productType = {
  _id: string;
  name: string;
  brand: string;
  quantity: string;
  price: string;
  images: string[];
  description?: string;
};

export type dataProduct = {

    rating: [Object];
    _id: string;
    category: [Object];
    subcategory: [Object];
    name: string;
    price: 526777;
    quantity: 444;
    brand: string;
    description: string;
    thumbnail: string;
    images: [];
    createdAt: string;
    slugname: string;

};
export type userType ={
  id: string;
      firstname: string;
      lastname: string;
      username: string;
      phoneNumber: string;
      address: string;
      role: 'USER' | 'ADMIN';
      createdAt: string;
      updatedAt: string;
}
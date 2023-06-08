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
  isError: boolean | unknown;
  refetch: () => void;
};

export type ChildAdminInit = {
  sort: string;
  options: { limit: number; page: number };
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
  subCategories: {
    _id: string;
    name: string;
    category: string;
  }[];
}

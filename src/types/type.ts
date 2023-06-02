import { ReactNode } from 'react';
export type LayoutChildrenAdminType = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type tableChildType = {
  className?: string;
  children: string | ReactNode;
};
export type TableProps = {
  isLoading: boolean | unknown;
  value: any;
  isError: boolean | unknown;
};
export type ChildAdminInit = {
  page: number;
  options: { limit: number };
  data: any[];
};

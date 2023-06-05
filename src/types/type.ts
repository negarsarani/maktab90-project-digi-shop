import { ReactNode } from 'react';
export type LayoutChildrenAdminType = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type tableChildType = {
  className?: string;
  children: string | ReactNode;
  onClick?: (event: any) => void
  id?: string;
};
export type TableProps = {
  isLoading: boolean | unknown;
  value: any;
  isError: boolean | unknown;
};
export type ChildAdminInit = {
  
  options: { limit: number , page: number;};
  url:{keyApi: string , path:string}
  data: any[];
};
export type DataLoginAdmin = {
  username: string;
  password: string;
}
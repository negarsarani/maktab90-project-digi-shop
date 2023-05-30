import { ReactNode } from 'react';
export type LayoutChildrenAdminType = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type tableChildType = {
  className?: string;
  children: string | ReactNode
};

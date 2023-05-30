import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const Mainlayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Mainlayout;

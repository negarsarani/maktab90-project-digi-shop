import Footer from '@/layout/user/Footer';
import Header from '@/layout/user/Header';
import  { ReactNode  } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const Mainlayout = ({ children }: MainLayoutProps) => {
  
  return (
    <div className='relative'>
      <Header/>
      <main className='bg-bgbody mt-[6.7rem]'>{children}</main>
      <Footer />
    </div>
  );
};

export default Mainlayout;

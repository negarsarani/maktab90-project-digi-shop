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
      <main className='bg-bgbody lg:mt-[6.7rem] mt-[7.5rem]'>{children}</main>
      <Footer />
    </div>
  );
};

export default Mainlayout;

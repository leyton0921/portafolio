import { ReactNode } from 'react';
import Navbar from '@/components/navbar/navbar';
import Options from '@/components/options/options';
import Footer from '@/components/footer/footer';


interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main>
        <Navbar />
        <Options/>
        {children}
        <Footer/>
    </main>
  );
};

export default Layout;
import { ReactNode } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ScrollProgressBar from '../components/common/ScrollProgressBar';

interface MainLayoutProps {
  children: ReactNode;
  showScrollProgress?: boolean;
}

const MainLayout = ({ children, showScrollProgress = false }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {showScrollProgress && <ScrollProgressBar />}
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
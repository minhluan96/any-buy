import React from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';
import Footer from '../Footer';

interface LayoutProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-row min-h-screen bg-gray-100 text-gray-800'>
      <Sidebar />
      <main className='main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in'>
        <Header />
        <div className='main-content flex flex-col flex-grow p-4'>{children}</div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;

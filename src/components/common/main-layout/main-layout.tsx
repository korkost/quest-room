import React from 'react';
import { Header, Footer } from '../../common/common';

interface IMainLayout {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayout) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default MainLayout;

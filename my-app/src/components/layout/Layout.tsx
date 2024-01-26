import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import { HeadingSection } from '../headingSection/HeadingSection';

export const Layout = () => {
  return <>
    <Header />
    <HeadingSection />
    <Outlet />
    <Footer />
  </>;
};

export default Layout;
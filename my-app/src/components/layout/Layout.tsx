import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import { HeadingSection } from '../headingSection/HeadingSection';
import * as Styles from './Layout.styles';

export const Layout = () => {
  return <>
    <Header />
    <HeadingSection />
    <Styles.Container>
      <Outlet />
    </Styles.Container>
    <Footer />
  </>;
};

export default Layout;
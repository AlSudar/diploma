import { Footer } from '../Footer';
import { Header } from '../Header';
import * as React from 'react';
import styles from './index.module.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export { Layout };

import * as React from 'react';
import styles from './index.module.scss';

const Layout = ({ children }: { children: any }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export { Layout };

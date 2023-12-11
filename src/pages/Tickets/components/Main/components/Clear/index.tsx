import * as React from 'react';
import styles from './index.module.scss';

const Clear = () => {
  return (
    <div className={styles.wrapper}>
      <p>По вашему запросу билетов не найдено</p>
    </div>
  );
};

export { Clear };

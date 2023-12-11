import * as React from 'react';
import styles from './styles.module.scss';

const Loading = ({ progressLoading }: { progressLoading: number }) => {
  return (
    <section className={styles.wrapper}>
      <div
        style={{ width: `${progressLoading}%` }}
        className={styles.wrapperLineLoading}
      />
      <p className={styles.description}>Идет поиск</p>
      <div className={styles.trains}></div>
    </section>
  );
};

export { Loading };

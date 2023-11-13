import * as React from 'react';
import styles from './index.module.scss';
import * as cn from 'classnames';

const Advantages = () => {
  return (
    <section className={styles.advantagesWrapper}>
      <header className={styles.advantagesHeader}>
        <h2 className={styles.advantagesHeaderTitle}>Как это работает</h2>
        <a href='#' className={styles.advantagesLink}>
          Узнать больше
        </a>
      </header>
      <ul className={styles.advantagesList}>
        <li
          className={cn(
            styles.advantagesListItem,
            styles.advantagesListItemComputer
          )}
        >
          Удобный заказ на сайте
        </li>
        <li
          className={cn(
            styles.advantagesListItem,
            styles.advantagesListItemOffice
          )}
        >
          Нет необходимости ехать в офис
        </li>
        <li
          className={cn(
            styles.advantagesListItem,
            styles.advantagesListItemEarth
          )}
        >
          Огромный выбор направлений
        </li>
      </ul>
    </section>
  );
};

export { Advantages };

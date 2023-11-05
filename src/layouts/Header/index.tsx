import * as React from 'react';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainerWrapper}>
        <div className={styles.logoContainer}>
          <img
            src='/svg/Header/logo.svg'
            alt='Логотип сайта'
            width={104}
            height={49}
            className={styles.logo}
          />
        </div>
      </div>
      <div className={styles.navigationWrapper}>
        <ul className={styles.navigation}>
          <li className={styles.navigationItem}>
            <a href='#'>О нас</a>
          </li>
          <li className={styles.navigationItem}>
            <a href='#'>Как это работает</a>
          </li>
          <li className={styles.navigationItem}>
            <a href='#'>Отзывы</a>
          </li>
          <li className={styles.navigationItem}>
            <a href='#'>Контакты</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export { Header };

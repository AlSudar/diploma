import * as React from 'react';
import styles from './index.module.scss';

const About = () => {
  return (
    <section className={styles.aboutWrapper}>
      <div className={styles.about}>
        <h2 className={styles.aboutTitle}>о нас</h2>
        <div className={styles.description}>
          <p>
            Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы
            наблюдаем, как с каждым днем все больше людей заказывают жд билеты
            через интернет.
          </p>
          <p>
            Сегодня можно заказать железнодорожные билеты онлайн всего в 2
            клика, но стоит ли это делать? Мы расскажем о преимуществах заказа
            через интернет.
          </p>
          <p className={styles.descriptionBold}>
            Покупать жд билеты дешево можно за 90 суток до отправления поезда.
            Благодаря динамическому ценообразованию цена на билеты в это время
            самая низкая.
          </p>
        </div>
      </div>
    </section>
  );
};

export { About };

import React from 'react';
import { Layout } from './layouts/Layout/index.tsx';
import './index.css';
import styles from './index.module.scss';
import cn from 'classnames';
import { Carousel } from 'antd';
import { sliderData } from './data.ts';

function App() {
  console.log(sliderData);
  return (
    <Layout>
      <section className={styles.heroWrapper}>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>
            Вся жизнь - <span>путешествие!</span>
          </h1>
          <form action='' className={styles.heroForm}></form>
        </div>
      </section>
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
      <section className={styles.reviews}>
        <h2 className={styles.reviewsTitle}>отзывы</h2>
        <Carousel dots={{ className: styles.reviewsSliderDots }}>
          {sliderData.map((sliderDataItem, id) => {
            return (
              <div key={id} className={styles.reviewsSlider}>
                {sliderDataItem.map((item, id) => {
                  return (
                    <div key={id} className={styles.sliderItem}>
                      <img
                        width={200}
                        height={200}
                        src={item.img}
                        alt=''
                        className={styles.sliderItemImg}
                      />
                      <div>
                        <h3 className={styles.sliderItemTitle}>{item.title}</h3>
                        <p className={styles.sliderItemDesc}>{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </Carousel>
      </section>
    </Layout>
  );
}

export default App;

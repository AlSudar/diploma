import * as React from 'react';
import styles from './index.module.scss';
import { Carousel } from 'antd';
import { sliderData } from './data';

const Reviews = () => {
  return (
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
  );
};

export { Reviews };

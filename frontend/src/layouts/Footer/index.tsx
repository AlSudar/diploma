import * as React from 'react';
import styles from './index.module.scss';
import * as cn from 'classnames';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerContentLeft}>
          <h3 className={styles.footerContentTitle}>Свяжитесь с нами</h3>
          <ul className={styles.footerContentSocials}>
            <li>
              <a
                href='telto:8(800)0000000'
                className={cn(
                  styles.footerContentSocialItem,
                  styles.footerContentSocialTel
                )}
              >
                8 (800) 000 00 00
              </a>
            </li>
            <li>
              <a
                href='mailto:inbox@mail.ru'
                className={cn(
                  styles.footerContentSocialItem,
                  styles.footerContentSocialMail
                )}
              >
                inbox@mail.ru
              </a>
            </li>
            <li>
              <a
                href='skype:tu.train.tickets'
                className={cn(
                  styles.footerContentSocialItem,
                  styles.footerContentSocialSkype
                )}
              >
                tu.train.tickets
              </a>
            </li>
            <li>
              <a
                href='https://yandex.ru/maps/213/moscow/house/moskovskaya_ulitsa_vl27s1/Z04YcgZlQUYPQFtvfXp2cH9iZQ==/?ll=37.415838%2C55.671311&z=16.77'
                className={cn(
                  styles.footerContentSocialItem,
                  styles.footerContentSocialGeo
                )}
              >
                г. Москва <br />
                ул. Московская <br />
                27-35 555 555
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.footerContentRight}>
          <h3 className={styles.footerContentTitle}>Подписка</h3>
          <form action='post' className={styles.footerContentRightForm}>
            <label className={styles.footerContentRightFormLabel}>
              <span>Будьте в курсе событий</span>
              <input type='text' />
            </label>
            <button
              type='submit'
              className={styles.footerContentRightFormSubmit}
            >
              Отправить
            </button>
          </form>
          <h3 className={styles.footerContentTitle}>Подписывайтесь на нас</h3>
          <ul className={styles.footerContentAdressList}>
            <li className={styles.footerContentAdressYouTube}>
              <a href='#'></a>
            </li>
            <li className={styles.footerContentAdressIn}>
              <a href='#'></a>
            </li>
            <li className={styles.footerContentAdressGoogle}>
              <a href='#'></a>
            </li>
            <li className={styles.footerContentAdressFacebook}>
              <a href='#'></a>
            </li>
            <li className={styles.footerContentAdressTw}>
              <a href='#'></a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottomWrapper}>
        <div className={styles.footerBottom}>
          <img
            src='/svg/Header/logo.svg'
            alt='Логотип сайта'
            width={87}
            height={41}
            className={styles.logo}
          />
          <button className={styles.buttonTop}></button>
          <p className={styles.copyrigth}>2018 WEB</p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };

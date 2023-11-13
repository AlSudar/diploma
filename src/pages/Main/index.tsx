import * as React from 'react';
import styles from './index.module.scss';

import { About } from './components/About';
import { Advantages } from './components/Advantages';
import { Reviews } from './components/Reviews';
import { Form } from './components/Form';

const Main = () => {
  return (
    <>
      {' '}
      <section className={styles.heroWrapper}>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>
            Вся жизнь - <span>путешествие!</span>
          </h1>
          <Form />
        </div>
      </section>
      <About />
      <Advantages />
      <Reviews />
    </>
  );
};

export { Main };

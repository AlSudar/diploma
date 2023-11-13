import * as React from 'react';
import styles from './index.module.scss';
import { FormSearchTicket } from '../../../../components/FormSearchTicket';
import { FormData } from '../../../../types/index';

const Hero = () => {
  const [data, setData] = React.useState<FormData | undefined>();

  const submitForm = () => {
    console.log('fetch');
  };

  return (
    <section className={styles.heroWrapper}>
      <div className={styles.hero}>
        <FormSearchTicket
          formType='row'
          data={data}
          setData={setData}
          onSubmitForm={submitForm}
        />
      </div>
    </section>
  );
};

export { Hero };

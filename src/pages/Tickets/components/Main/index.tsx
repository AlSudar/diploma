import * as React from 'react';
import styles from './index.module.scss';
import { Clear } from './components/Clear';
import { Steps } from '../Steps';

export type StepsType = 'Билеты' | 'Пассажиры' | 'Оплата' | 'Проверка';

const Main = ({ dataTickets }: { dataTickets: any }) => {
  const [activeStep, setActiveStep] = React.useState<StepsType>('Билеты');
  if (
    dataTickets.total_count === 0 ||
    (dataTickets.items && dataTickets.items.length === 0)
  ) {
    return <Clear />;
  }

  return (
    <main>
      <Steps activeStep={activeStep} />
      <button onClick={() => setActiveStep(() => 'Пассажиры')}>
        Пассажиры
      </button>
      <button onClick={() => setActiveStep(() => 'Оплата')}>Оплата</button>
      <button onClick={() => setActiveStep(() => 'Проверка')}>Проверка</button>
    </main>
  );
};

export { Main };

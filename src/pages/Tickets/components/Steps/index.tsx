import * as React from 'react';
import * as cn from 'classnames';
import styles from './index.module.scss';

const STEPS = ['Билеты', 'Пассажиры', 'Оплата', 'Проверка'];

const Steps = ({ activeStep }: { activeStep: string }) => {
  return (
    <header className={styles.header}>
      <ul className={styles.steps}>
        {STEPS.map((item, id) => {
          const stepIsActive = item === activeStep;
          return (
            <li
              className={cn(
                styles.step,
                stepIsActive ? styles.stepActive : styles.stepInActive
              )}
              key={id}
            >
              <span className={styles.stepText}>
                <span className={styles.stepCount}>{(id += 1)}</span> {item}
              </span>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export { Steps };

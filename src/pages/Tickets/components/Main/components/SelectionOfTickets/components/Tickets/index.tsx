import * as React from 'react';
import styles from './index.module.scss';
import { Layout } from '../../../../layouts';
import { ColLeft } from '../../../../layouts/ColLeft';
import { ColRight } from '../../../../layouts/ColRight';

const Tickets = ({ dataTickets }: { dataTickets: any }) => {
  return (
    <Layout>
      <ColLeft>
        <div className={styles.sortWrapper}>
          <div>Дата поездки</div>
          <div>Дата возвращения</div>
        </div>
      </ColLeft>
      <ColRight>
        <header className={styles.header}>
          <p className={styles.headerCount}>
            найдено {dataTickets.items.length}
          </p>
          <div className={styles.headerSort}>
            <p className={styles.headerSelectWrapper}>
              сортировать по: <span>времени</span>
            </p>
            <p className={styles.headerSortCount}>показывать по 5</p>
          </div>
        </header>
        {dataTickets && (
          <ul className={styles.tickets}>
            {dataTickets.items.map((item: any, id: number) => {
              return (
                <li key={id} className={styles.ticket}>
                  <div className={styles.ticketLeft}>
                    <p>{item.departure.train.name}</p>
                    <div>
                      <p>
                        {item.departure.from.city.name} «
                        {item.departure.from.railway_station_name}»{' '}
                      </p>
                      <p>
                        {item.departure.to.city.name} «
                        {item.departure.to.railway_station_name}»
                      </p>
                    </div>
                  </div>
                  <div></div>
                </li>
              );
            })}
          </ul>
        )}
      </ColRight>
    </Layout>
  );
};

export { Tickets };

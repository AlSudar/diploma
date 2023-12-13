import * as React from 'react';
import styles from './index.module.scss';
import { Layout } from '../../../../layouts';
import { ColLeft } from '../../../../layouts/ColLeft';
import { ColRight } from '../../../../layouts/ColRight';

const Tickets = ({ dataTickets }: { dataTickets: any }) => {
  return (
    <Layout>
      <ColLeft>
        <div>
          <div>Дата поездки</div>
          <div>Дата возвращения</div>
        </div>
        <div>
          <p>Последние билеты</p>
        </div>
      </ColLeft>
      <ColRight>
        <header>
          <p>найдено {dataTickets.items.length}</p>
          <div>
            <p>
              сортировать по: <span>времени</span>
            </p>
            <p>показывать по 5</p>
          </div>
        </header>
      </ColRight>
    </Layout>
  );
};

export { Tickets };

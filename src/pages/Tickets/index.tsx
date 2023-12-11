import * as React from 'react';
import { Layout } from '../../layouts/Layout';
import { Hero } from './components/Hero';
import { Loading } from './components/Loading';
import { Main } from './components/Main';

const Tickets = () => {
  const [data, setData] = React.useState<null | any>(null);
  const [progressLoading, setProgressLoading] = React.useState<number>(0);

  return (
    <Layout>
      <Hero setDataTicket={setData} setProgressLoading={setProgressLoading} />
      {data ? (
        <Main dataTickets={data} />
      ) : (
        <Loading progressLoading={progressLoading} />
      )}
    </Layout>
  );
};

export default Tickets;

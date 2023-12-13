import * as React from 'react';
import { Clear } from './components/Clear';
import { Layout } from './layouts';
import { ColLeft } from './layouts/ColLeft';
import { StepsHeader } from '../StepsHeader';
import { SelectionOfTickets } from './components/SelectionOfTickets';

const Main = ({ dataTickets }: { dataTickets: any }) => {
  const [activeSteps, setActiveSteps] = React.useState<string[]>(['Билеты']);
  if (
    dataTickets.total_count === 0 ||
    (dataTickets.items && dataTickets.items.length === 0)
  ) {
    return <Clear />;
  }
  console.log(dataTickets);

  return (
    <main>
      <StepsHeader activeSteps={activeSteps} />
      <SelectionOfTickets dataTickets={dataTickets} activeSteps={activeSteps} />
    </main>
  );
};

export { Main };

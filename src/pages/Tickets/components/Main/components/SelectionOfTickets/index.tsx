import * as React from 'react';
import { Tickets } from './components/Tickets';

const SelectionOfTickets = ({
  activeSteps,
  dataTickets,
}: {
  activeSteps: string[];
  dataTickets: any;
}) => {
  switch (activeSteps[activeSteps.length - 1]) {
    case 'Билеты':
      return <Tickets dataTickets={dataTickets} />;

    default:
      return;
  }
};

export { SelectionOfTickets };

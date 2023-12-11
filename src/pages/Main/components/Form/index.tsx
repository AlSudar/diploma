import * as React from 'react';
import styles from './index.module.scss';
import { FormSearchTicket } from '../../../../components/FormSearchTicket';

import { useNavigate } from 'react-router-dom';
import { FormData } from '../../../../types/index';

const Form = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState<FormData | undefined>();

  const submitForm = () => {
    navigate(
      `/tickets?departurePoint=${data.departurePoint.name}&arrivalPoint=${
        data.arrivalPoint.name
      }&dateArrival=${data.dateArrival}${
        data.dateDeparture ? `&dateDeparture=${data.dateDeparture}` : ''
      }`
    );
  };

  return (
    <div className={styles.heroForm}>
      <FormSearchTicket
        formType='colums'
        data={data}
        setData={setData}
        onSubmitForm={submitForm}
      />
    </div>
  );
};

export { Form };

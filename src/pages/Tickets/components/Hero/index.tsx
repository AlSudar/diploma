import * as React from 'react';
import styles from './index.module.scss';
import { FormSearchTicket } from '../../../../components/FormSearchTicket';
import { FormData } from '../../../../types/index';
import { ModalInfo } from '../../../../components/ModalInfo';
import { createPortal } from 'react-dom';
import { loadHandler } from './utils';

const Hero = ({
  setDataTicket,
  setProgressLoading,
}: {
  setDataTicket: React.Dispatch<React.SetStateAction<any>>;
  setProgressLoading: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [data, setData] = React.useState<FormData | undefined>();
  const [firstSubmitIsReady, setFirstSubmitIsReady] =
    React.useState<boolean>(true);
  const [modalErrorVisible, setModalErrorVisible] = React.useState(false);

  const submitForm = async () => {
    setDataTicket(null);
    try {
      const xhr = new XMLHttpRequest();
      xhr.addEventListener(
        'load',
        (e) => loadHandler(e, setProgressLoading),
        false
      );

      xhr.open(
        'GET',
        `https://students.netoservices.ru/fe-diplom/routes?from_city_id=${data.departurePoint._id}&to_city_id=${data.arrivalPoint._id}`,
        true
      );
      xhr.send();
      xhr.onload = function () {
        const parseJSON = JSON.parse(xhr.response);
        setDataTicket(parseJSON);
      };
    } catch (error) {
      setModalErrorVisible(true);
    }
  };

  React.useEffect(() => {
    if (
      firstSubmitIsReady &&
      data &&
      data.arrivalPoint &&
      data.departurePoint
    ) {
      submitForm();
      setFirstSubmitIsReady(false);
    }
  }, [data]);

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
      {modalErrorVisible &&
        createPortal(
          <ModalInfo
            title='Произошла ошибка'
            description='Что-то пошло не так во время загрузки билетов. Попробуй еще раз.'
            type='error'
            onClose={() => setModalErrorVisible(false)}
          />,
          document.body
        )}
    </section>
  );
};

export { Hero };

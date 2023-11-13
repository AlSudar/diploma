import * as React from 'react';
import styles from './index.module.scss';
import { DatePicker, Form, Select } from 'antd';
import { DatePickerIcon, GeoIcon, ReplaceIcon } from './icons/icons';
import * as cn from 'classnames';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import * as dayjs from 'dayjs';
import { FormData } from '../../types/index';

const FormSearchTicket = ({
  formType = 'colums',
  onSubmitForm,
  data,
  setData,
}: {
  formType?: 'row' | 'colums';
  onSubmitForm: () => void;
  data: FormData | undefined;
  setData: React.Dispatch<React.SetStateAction<FormData>>;
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [errorVisible, setErrorVisible] = React.useState<boolean>(false);

  useEffect(() => {
    if (searchParams.has('departurePoint')) {
      setData((prevData) => {
        return {
          ...prevData,
          departurePoint: searchParams.get('departurePoint'),
        };
      });
    }

    if (searchParams.has('arrivalPoint')) {
      setData((prevData) => {
        return {
          ...prevData,
          arrivalPoint: searchParams.get('arrivalPoint'),
        };
      });
    }

    if (searchParams.has('dateDeparture')) {
      setData((prevData) => {
        return {
          ...prevData,
          dateDeparture: searchParams.get('dateDeparture'),
        };
      });
    }

    if (searchParams.has('dateArrival')) {
      setData((prevData) => {
        return {
          ...prevData,
          dateArrival: searchParams.get('dateArrival'),
        };
      });
    }
  }, []);

  const reverseDepartureArrivalPoints = () => {
    if (data && data.arrivalPoint && data.departurePoint) {
      const copyDataArrivalPoint = data.arrivalPoint;
      const copyDataDeparturePoint = data.departurePoint;
      const newParams: { [key: string]: string } = {};
      searchParams.forEach((value: string, key: string) => {
        newParams[key] = value;
      });
      newParams['arrivalPoint'] = copyDataArrivalPoint;
      newParams['departurePoint'] = copyDataDeparturePoint;
      setSearchParams(newParams);

      setData((prevData) => {
        return {
          ...prevData,
          arrivalPoint: copyDataDeparturePoint,
          departurePoint: copyDataArrivalPoint,
        };
      });
    }
  };

  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  const submitForm = () => {
    if (
      !data ||
      !data.arrivalPoint ||
      !data.departurePoint ||
      !data.dateArrival
    ) {
      setErrorVisible(true);
    } else {
      onSubmitForm();
    }
  };

  const onChangeValueInput = (fieldName: string, fieldValue: string) => {
    setData((prevData) => {
      return { ...prevData, [fieldName]: fieldValue };
    });

    const newParams: { [key: string]: string } = {};
    searchParams.forEach((value: string, key: string) => {
      newParams[key] = value;
    });
    newParams[fieldName] = fieldValue;
    setSearchParams(newParams);
  };

  return (
    <Form onFinish={submitForm} className={styles.heroForm}>
      <div className={cn(formType === 'row' && styles.heroFormRow)}>
        <div
          className={cn(
            styles.inputsWrapper,
            formType === 'row' && styles.inputsWrapperRows
          )}
        >
          <p className={styles.heroFormLabel}>Направление*</p>
          <div
            className={cn(
              styles.heroFormDirectionWrapper,
              formType === 'row' && styles.heroFormDirectionWrapperRow
            )}
          >
            <Select
              value={data && data.departurePoint ? data.departurePoint : ''}
              showSearch
              size='large'
              onChange={(value) => onChangeValueInput('departurePoint', value)}
              className={cn(
                styles.heroFormDirection,
                (!data && errorVisible && styles.inputError) ||
                  (errorVisible && !data.departurePoint && styles.inputError)
              )}
              suffixIcon={<GeoIcon />}
              placeholder='Откуда поедете'
              optionFilterProp='children'
              filterOption={filterOption}
              options={[
                {
                  value: 'jack',
                  label: 'Jack',
                },
                {
                  value: 'lucy',
                  label: 'Lucy',
                },
                {
                  value: 'tom',
                  label: 'Tom',
                },
              ]}
            />
            <button
              className={styles.button}
              onClick={reverseDepartureArrivalPoints}
            >
              <ReplaceIcon />
            </button>
            <Select
              value={data && data.arrivalPoint ? data.arrivalPoint : ''}
              onChange={(value) => onChangeValueInput('arrivalPoint', value)}
              showSearch
              size='large'
              className={cn(
                styles.heroFormDirection,
                (!data && errorVisible && styles.inputError) ||
                  (errorVisible && !data.arrivalPoint && styles.inputError)
              )}
              suffixIcon={<GeoIcon />}
              placeholder='Куда поедете'
              optionFilterProp='children'
              filterOption={filterOption}
              options={[
                {
                  value: 'jack',
                  label: 'Jack',
                },
                {
                  value: 'lucy',
                  label: 'Lucy',
                },
                {
                  value: 'tom',
                  label: 'Tom',
                },
              ]}
            />
          </div>
        </div>
        <div
          className={cn(
            styles.heroFormDateWrapper,
            formType === 'row' && styles.inputsWrapperRows
          )}
        >
          <div>
            <p className={styles.heroFormLabel}>Дата отправления туда*</p>
            <DatePicker
              value={
                data && data.dateArrival ? dayjs(data.dateArrival) : undefined
              }
              suffixIcon={<DatePickerIcon />}
              size='large'
              onChange={(_, dateString) =>
                onChangeValueInput('dateArrival', dateString)
              }
              className={cn(
                styles.heroFormDateItem,
                (!data && errorVisible && styles.inputError) ||
                  (errorVisible && !data.dateArrival && styles.inputError)
              )}
            />
          </div>
          <div>
            <p className={styles.heroFormLabel}>Дата отправления обратно</p>
            <DatePicker
              value={
                data && data.dateDeparture
                  ? dayjs(data.dateDeparture)
                  : undefined
              }
              suffixIcon={<DatePickerIcon />}
              size='large'
              onChange={(_, dateString) =>
                onChangeValueInput('dateDeparture', dateString)
              }
              className={styles.heroFormDateItem}
            />
          </div>
        </div>
      </div>
      <button
        className={cn(
          styles.heroFormButton,
          formType === 'row' && styles.heroFormButtonRow
        )}
      >
        Найти билеты
      </button>
      {errorVisible && (
        <span className={styles.error}>Заполните все обязательные поля</span>
      )}
    </Form>
  );
};

export { FormSearchTicket };

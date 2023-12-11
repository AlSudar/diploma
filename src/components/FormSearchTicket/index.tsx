import { DatePicker, Form } from 'antd';
import { DatePickerIcon, ReplaceIcon } from './icons/icons';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { FormData } from '../../types/index';
import { Label } from '../Label';
import { Select } from '../Select';
import { SelectItem } from '../Select/SelectItem';
import styles from './index.module.scss';
import * as React from 'react';
import * as cn from 'classnames';
import * as dayjs from 'dayjs';
import { FETCH_URL } from '../../data';

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
  const [selectDeparturePointData, setSelectDeparturePointData] =
    React.useState<[] | { _id: string; name: string }[]>([]);

  useEffect(() => {
    (async function () {
      if (searchParams.has('departurePoint')) {
        await fetch(
          `${FETCH_URL}/routes/cities?name=${searchParams.get(
            'departurePoint'
          )}`
        )
          .then((res) => res.json())
          .then((data) =>
            setData((prevData) => {
              return {
                ...prevData,
                departurePoint: data[0],
              };
            })
          )
          .catch((e) => console.error(e));
      }
      if (searchParams.has('arrivalPoint')) {
        await fetch(
          `${FETCH_URL}/routes/cities?name=${searchParams.get('arrivalPoint')}`
        )
          .then((res) => res.json())
          .then((data) =>
            setData((prevData) => {
              return {
                ...prevData,
                arrivalPoint: data[0],
              };
            })
          )
          .catch((e) => console.error(e));
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
    })();
  }, []);

  const reverseDepartureArrivalPoints = () => {
    if (data && data.arrivalPoint && data.departurePoint) {
      const copyDataArrivalPoint = data.arrivalPoint;
      const copyDataDeparturePoint = data.departurePoint;
      const newParams: { [key: string]: string } = {};
      searchParams.forEach((value: string, key: string) => {
        newParams[key] = value;
      });
      newParams['arrivalPoint'] = copyDataArrivalPoint.name;
      newParams['departurePoint'] = copyDataDeparturePoint.name;
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

  const changeParams = (
    fieldName: string,
    fieldValue: { _id: string; name: string } | string
  ) => {
    const newParams: { [key: string]: string } = {};

    searchParams.forEach((value: string, key: string) => {
      newParams[key] = value;
    });
    if (typeof fieldValue === 'string') {
      newParams[fieldName] = fieldValue;
    } else {
      newParams[fieldName] = fieldValue.name;
    }
    setSearchParams(newParams);
  };

  const onChangeValueInput = (
    fieldName: string,
    fieldValue: { _id: string; name: string } | string
  ) => {
    setData((prevData) => {
      return { ...prevData, [fieldName]: fieldValue };
    });

    changeParams(fieldName, fieldValue);
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
          <Label text='Направление*' />
          <div
            className={cn(
              styles.heroFormDirectionWrapper,
              formType === 'row' && styles.heroFormDirectionWrapperRow
            )}
          >
            <Select
              value={
                data && data.arrivalPoint && data.arrivalPoint.name
                  ? data.arrivalPoint.name
                  : ''
              }
              onChange={async (e) => {
                onChangeValueInput('arrivalPoint', {
                  _id: '0',
                  name: e.target.value,
                });
                await fetch(`${FETCH_URL}/routes/cities?name=${e.target.value}`)
                  .then((res) => res.json())
                  .then((data) => setSelectDeparturePointData(data))
                  .catch((e) => console.error(e));
              }}
              className={
                (!data && errorVisible && styles.selectError) ||
                (errorVisible && !data.arrivalPoint && styles.selectError)
              }
            >
              {selectDeparturePointData &&
                selectDeparturePointData.length > 0 &&
                selectDeparturePointData.map((item) => {
                  return (
                    <SelectItem
                      text={item.name.toLocaleUpperCase()}
                      key={item._id}
                      onChange={() => {
                        setData((prevData) => {
                          return { ...prevData, arrivalPoint: item };
                        });
                      }}
                    />
                  );
                })}
            </Select>
            <div
              className={styles.button}
              onClick={reverseDepartureArrivalPoints}
            >
              <ReplaceIcon />
            </div>
            <Select
              value={
                data && data.departurePoint && data.departurePoint.name
                  ? data.departurePoint.name
                  : ''
              }
              onChange={async (e) => {
                onChangeValueInput('departurePoint', {
                  _id: '0',
                  name: e.target.value,
                });
                await fetch(`${FETCH_URL}/routes/cities?name=${e.target.value}`)
                  .then((res) => res.json())
                  .then((data) => setSelectDeparturePointData(data))
                  .catch((e) => console.error(e));
              }}
              className={
                (!data && errorVisible && styles.selectError) ||
                (errorVisible && !data.arrivalPoint && styles.selectError)
              }
            >
              {selectDeparturePointData &&
                selectDeparturePointData.length > 0 &&
                selectDeparturePointData.map((item) => {
                  return (
                    <SelectItem
                      text={item.name.toLocaleUpperCase()}
                      key={item._id}
                      onChange={() => {
                        setData((prevData) => {
                          return { ...prevData, departurePoint: item };
                        });
                      }}
                    />
                  );
                })}
            </Select>
          </div>
        </div>
        <div
          className={cn(
            styles.heroFormDateWrapper,
            formType === 'row' && styles.inputsWrapperRows
          )}
        >
          <div>
            <Label text='Дата отправления туда*' />
            <DatePicker
              placeholder='Выберите дату'
              value={
                data && data.dateArrival ? dayjs(data.dateArrival) : undefined
              }
              suffixIcon={<DatePickerIcon />}
              size='large'
              onChange={(_id, date) => onChangeValueInput('dateArrival', date)}
              className={cn(
                styles.heroFormDateItem,
                (!data && errorVisible && styles.inputError) ||
                  (errorVisible && !data.dateArrival && styles.inputError)
              )}
            />
          </div>
          <div>
            <Label text='Дата отправления обратно' />
            <DatePicker
              placeholder='Выберите дату'
              value={
                data && data.dateDeparture
                  ? dayjs(data.dateDeparture)
                  : undefined
              }
              suffixIcon={<DatePickerIcon />}
              size='large'
              onChange={(_, date) => onChangeValueInput('dateDeparture', date)}
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

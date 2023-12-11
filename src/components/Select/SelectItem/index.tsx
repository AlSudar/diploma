import * as React from 'react';
import styles from './index.module.scss';

const SelectItem = ({
  text,
  onChange,
}: {
  text: string;
  onChange?: () => void;
}) => (
  <li className={styles.item} onClick={onChange}>
    {text}
  </li>
);

export { SelectItem };

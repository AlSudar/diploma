import * as React from 'react';
import styles from './index.module.scss';

const Label = ({ text, id }: { text: string; id?: string }) => (
  <label className={styles.label} htmlFor={id ? id : ''}>
    {text}
  </label>
);

export { Label };

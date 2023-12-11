import * as React from 'react';
import styles from './index.module.scss';
import * as cn from 'classnames';

const Select = ({
  value,
  onChange,
  className,
  children,
}: {
  value: string;
  onChange: (e: any) => Promise<void>;
  className?: string;
  children: any;
}) => {
  return (
    <div className={styles.select}>
      <input
        className={cn(styles.selectInput, className)}
        value={value}
        onChange={onChange}
      />
      {children && children.length > 0 && (
        <ul className={styles.selectList}>{children}</ul>
      )}
    </div>
  );
};

export { Select };

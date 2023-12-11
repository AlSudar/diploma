import * as React from 'react';
import styles from './index.module.scss';
import * as cn from 'classnames';

const ModalInfo = ({
  title,
  description,
  onClose,
  type,
}: {
  type: 'info' | 'error';
  title: string;
  description?: string;
  onClose: () => void;
}) => {
  return (
    <section className={styles.modalWrapper}>
      <div className={styles.modal}>
        <header
          className={cn(
            styles.modalHeader,
            type === 'error' ? styles.modalHeaderError : styles.modalHeaderInfo
          )}
        ></header>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
        <footer>
          <button onClick={onClose} className={styles.modalButton}>
            Понятно
          </button>
        </footer>
      </div>
    </section>
  );
};

export { ModalInfo };

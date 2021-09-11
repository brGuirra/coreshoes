import { IoPerson } from 'react-icons/io5';

import styles from './styles.module.scss';

export const Account = (): JSX.Element => {
  return (
    <a href="#account" className={styles.account}>
      <IoPerson />
      <span>Minha conta</span>
    </a>
  );
};

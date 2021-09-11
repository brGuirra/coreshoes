import { IoCart } from 'react-icons/io5';

import styles from './styles.module.scss';

export const Cart = (): JSX.Element => {
  return (
    <a href="#cart" className={styles.cart}>
      <IoCart />
      <span className={styles.cartAmount}>0</span>
    </a>
  );
};

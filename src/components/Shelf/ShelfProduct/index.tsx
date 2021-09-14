import { IoStar, IoStarOutline } from 'react-icons/io5';

import styles from './styles.module.scss';

import shoe from '../../../assets/images/shoe.png';

export const ShelfProduct = (): JSX.Element => {
  return (
    <div className={styles.shelfProduct}>
      <div className={styles.image}>
        <div className={styles.corner}>
          <span>OFF</span>
        </div>
        <img src={shoe} alt="Sapato Floater Preto" />
      </div>
      <h6 className={styles.title}>Sapato Floater Preto</h6>
      <div className={styles.rating}>
        <IoStar />
        <IoStar />
        <IoStar />
        <IoStar />
        <IoStarOutline />
      </div>
      <div className={styles.price}>
        <p>de R$ 299,00</p>
        <p className={styles.discountPrice}>por R$ 259,00</p>
        <p>ou em 9x de R$ 28,87</p>
      </div>
      <button className={styles.addToCart} type="button">
        Adicionar ao carrinho
      </button>
    </div>
  );
};

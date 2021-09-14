import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { ShelfProduct } from './ShelfProduct';

import styles from './styles.module.scss';

export const Shelf = (): JSX.Element => {
  return (
    <section className={styles.shelf}>
      <h1 className={styles.title}>Mais vendidos</h1>
      <div className={styles.slideWrapper}>
        <IoIosArrowBack className={styles.leftArrow} />
        <IoIosArrowForward className={styles.rightArrow} />
        <div className={styles.slider}>
          <ShelfProduct />
          <ShelfProduct />
          <ShelfProduct />
          <ShelfProduct />
          <ShelfProduct />
        </div>
      </div>
    </section>
  );
};

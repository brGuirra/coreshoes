import { IoIosArrowDown } from 'react-icons/io';

import styles from './styles.module.scss';

export const Menu = (): JSX.Element => {
  return (
    <nav>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <a href="#home">Home</a>
        </li>
        <li className={styles.menuItem}>
          <button type="button">
            <IoIosArrowDown className={styles.arrow} />
            Feminino
          </button>
          <ul style={{ display: 'none' }}>
            <li>
              <a href="#botas">Botas</a>
            </li>
            <li>
              <a href="#botas">Sapatos</a>
            </li>
            <li>
              <a href="#botas">Sandálias</a>
            </li>
          </ul>
        </li>
        <li className={styles.menuItem}>
          <button type="button">
            <IoIosArrowDown />
            Masculino
          </button>
          <ul style={{ display: 'none' }}>
            <li>
              <a href="#botas">Botas</a>
            </li>
            <li>
              <a href="#botas">Sapatos</a>
            </li>
            <li>
              <a href="#botas">Tênis</a>
            </li>
          </ul>
        </li>
        <li className={styles.menuItem}>
          <a href="#contato">Contato</a>
        </li>
      </ul>
    </nav>
  );
};

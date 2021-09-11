import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Account } from './Account';
import { Cart } from './Cart';

import { Menu } from './Menu';
import { SearchBar } from './SearchBar';

import styles from './styles.module.scss';

export const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <Menu />
      <SearchBar />
      <Account />
      <Cart />
    </header>
  );
};

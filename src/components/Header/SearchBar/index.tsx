import { IoSearch } from 'react-icons/io5';

import styles from './styles.module.scss';

export const SearchBar = (): JSX.Element => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBarWrapper}>
        <IoSearch />
        <input type="text" placeholder="O que está procurando?" />
      </div>
    </div>
  );
};

import { IoMail, IoHeadset } from 'react-icons/io5';

import styles from './styles.module.scss';

export const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerLocation}>
          <h2 className={styles.footerTitle}>Localização</h2>
          <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
          <p>Alphavile SP</p>
          <p>brasil@corebiz.ag</p>
          <p>+55 11 3090 1039</p>
        </div>
        <div className={styles.footerContacts}>
          <h2 className={styles.footerTitle}>Contato</h2>
          <button type="button" className={styles.footerContactsButton}>
            <IoMail />
            <span>Envie um e-mail</span>
          </button>
          <button type="button" className={styles.footerContactsButton}>
            <IoHeadset />
            <span>Ligue pra gente</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

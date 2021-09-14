import styles from './styles.module.scss';

export const Newsletter = (): JSX.Element => {
  return (
    <section className={styles.newsletter}>
      <div className={styles.newsletterWrapper}>
        <h1>Participe de nossas news com promoções e novidades!</h1>
        <form className={styles.newsletterForm}>
          <input
            className={styles.newsletterFormInput}
            type="text"
            name="name"
            placeholder="Digite o seu nome"
          />
          <input
            className={styles.newsletterFormInput}
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
          />
          <button className={styles.newsletterFormButton} type="submit">
            Eu quero!
          </button>
        </form>
      </div>
    </section>
  );
};

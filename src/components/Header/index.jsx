import styles from './Header.module.scss';
import logo from './logo.png';
import search from './search.png';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo do Alura Space" />
      <div className={styles.header__container}>
        <input className={styles.header__input} type="text" placeholder="O que você procura?" />
        <img src={search} alt="Ícone de lupa" />
      </div>
    </header>
  );
}

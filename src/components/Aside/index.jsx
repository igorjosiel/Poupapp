import styles from "./aside.module.css";
import logo from "../../assets/logo.svg";

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <img src={logo} alt="Logo do Poupapp" />

      <footer className={styles.footer}>
        Desenvolvido por Alura. Projeto fictício sem fins comerciais.
      </footer>
    </aside>
  );
};

export default Aside;

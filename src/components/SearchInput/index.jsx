import styles from "./searchInput.module.css";
import { IconSearch } from "../icons";

export default function searchInput(props) {
  return (
    <div className={styles.container}>
      <IconSearch />

      <input className={styles.input} {...props} />
    </div>
  );
}

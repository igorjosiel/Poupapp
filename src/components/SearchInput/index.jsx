import styles from "./searchInput.module.css";
import { IconSearch } from "../icons";

const SearchInput = (props) => {
  return (
    <div className={styles.container}>
      <IconSearch />

      <input className={styles.input} {...props} />
    </div>
  );
};

export default SearchInput;

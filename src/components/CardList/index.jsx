import styles from "./cardlist.module.css";

const CardList = ({ children }) => {
  return <ul className={styles.list}>{children}</ul>;
};

export default CardList;

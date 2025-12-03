import Button from "../Button";
import styles from "./buttoncard.module.css";

const ButtonCard = ({ children }) => {
  return (
    <div className={styles.actions}>
      <Button>{children}</Button>
    </div>
  );
};

export default ButtonCard;

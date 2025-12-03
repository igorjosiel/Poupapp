import Button from "../Button";
import styles from "./cardbutton.module.css";

const CardButton = ({ children }) => {
  return (
    <div className={styles.actions}>
      <Button>{children}</Button>
    </div>
  );
};

export default CardButton;

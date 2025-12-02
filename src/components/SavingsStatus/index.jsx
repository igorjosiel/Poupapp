import styles from "./savingsstatus.module.css";
import { IconSavings } from "../icons";

const SavingsStatus = ({ percent }) => {
  return (
    <div className={styles.container}>
      <p>
        <IconSavings /> Economizar
      </p>
    </div>
  );
};

export default SavingsStatus;

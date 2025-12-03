import styles from "./savingsstatus.module.css";
import { IconSavings } from "../icons";
import ProgressBar from "../ProgressBar";

const SavingsStatus = ({ percent }) => {
  return (
    <div className={styles.container}>
      <p>
        <IconSavings /> Economizar
      </p>

      <ProgressBar percent={percent} />
    </div>
  );
};

export default SavingsStatus;

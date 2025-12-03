import styles from "./accountitem.module.css";

import { IconBank } from "../icons";

const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const AccountItem = ({ item }) => {
  return (
    <div className={styles.account}>
      <div className={styles.bank}>
        <IconBank /> {item.bank}
      </div>
      <div className={styles.balance}>
        <p>Saldo</p>
        <p className={styles.value}>{formatter.format(item.balance)}</p>
      </div>
    </div>
  );
};

export default AccountItem;

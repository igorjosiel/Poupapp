import { Fragment } from "react";
import CardButton from "../CardButton";
import { IconWallet } from "../icons";
import CardList from "../CardList";
import AccountItem from "../AccountItem";

const accounts = [
  { bank: "Anybank", balance: 1200 },
  { bank: "Bytebank", balance: 800 },
  { bank: "Switch Bank", balance: 1800 },
];

const Accounts = () => {
  return (
    <Fragment>
      <CardList>
        {accounts.map((account, index) => {
          return (
            <li key={index}>
              <AccountItem item={account} />
            </li>
          );
        })}
      </CardList>

      <CardButton>
        <IconWallet /> Adicionar conta
      </CardButton>
    </Fragment>
  );
};

export default Accounts;

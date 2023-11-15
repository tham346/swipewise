import Transaction from "./Transaction";
import { TransactionContext } from "../data/TransactionContext";
import { useContext } from "react";

export default function TransactionList() {
  const { transactions, removeTransaction, setTransactions } = useContext(
    TransactionContext
  );

  function toggleClick(transaction) {
    const updatedTransaction = transactions.map(function (list) {
      if (list.id === transaction.id) {
        list.clicked = !list.clicked;
        return list;
      } else {
        return list;
      }
    });
    setTransactions(updatedTransaction);
  }

  return (
    <div>
      <ul>
        {transactions.map((transaction) => (
          <Transaction
            key={transactions.id}
            id={transactions.id}
            transaction={transaction}
            remove={removeTransaction}
            toggleClick={toggleClick}
          />
        ))}
      </ul>
    </div>
  );
}

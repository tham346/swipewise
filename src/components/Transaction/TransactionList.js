import Transaction from "./Transaction";
import { TransactionContext } from "../../data/TransactionContext";
import { useContext } from "react";

export default function TransactionList() {
  const { transactions, removeTransaction } = useContext(
    TransactionContext
  );

  return (
    <div>
      <ul className="listContainer">
        <div className="divider">
          <p>Nov, 2023</p>
          <p className="sectionTotal">$274.72</p>
        </div>
        <div className="line"></div>
        {transactions.map((transaction) => (
          <Transaction
            key={transactions.id}
            id={transactions.id}
            transaction={transaction}
            remove={removeTransaction}
          />
        ))}
        <li className="transaction">
          <div className="transaction-details">
              <span className="transaction-name">
                McDonalds
              </span>
              <span className="transaction-date">
                Nov 7, 2023
              </span>
          </div>
          <div className="transaction-amount">
              <span>$16.72</span>
          </div>
        </li>
        <li className="transaction">
          <div className="transaction-details">
              <span className="transaction-name">
                McDonalds
              </span>
              <span className="transaction-date">
                Nov 6, 2023
              </span>
          </div>
          <div className="transaction-amount">
              <span>$16.72</span>
          </div>
        </li>
        <li className="transaction">
          <div className="transaction-details">
              <span className="transaction-name">
                McDonalds
              </span>
              <span className="transaction-date">
                Nov 5, 2023
              </span>
          </div>
          <div className="transaction-amount">
              <span>$16.72</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
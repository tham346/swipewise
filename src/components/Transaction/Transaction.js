import { TransactionContext } from "../../data/TransactionContext";
import { useContext } from "react";
import './Transaction.css'

export default function Transaction(props) {
  const { setEditing } = useContext(TransactionContext);
  const transaction = props.transaction;

  function handleDelete() {
    props.remove(transaction);
  }

  return (
    <li className="transaction">
      <div className="transaction-details">
          <span className="transaction-name">
            {transaction.title}
          </span>
          <span className="transaction-date">
            {transaction.date}
          </span>
      </div>
      <span className="transaction-amount">
        {transaction.amount}
      </span>
      {/* <div className="buttons">
        <div onClick={() => setEditing(transaction.id)}>
          <span className="edit">edit</span>
        </div>
        <div onClick={handleDelete}>
          <span className="remove">remove</span>
        </div>
      </div> */}
    </li>
  );
}
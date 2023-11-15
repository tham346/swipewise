import { TransactionContext } from "../data/TransactionContext";
import { useContext } from "react";

export default function Transaction(props) {
  const { setEditing } = useContext(TransactionContext);
  const transaction = props.transaction;

  function handleDelete() {
    props.remove(transaction);
  }

  function handleStatusChange() {
    props.toggleCompleted(transaction);
  }

  return (
    <li className="transaction">
      <div className="transaction-details">
        <p>
          <span className="transaction-details">
            <input
              className="check"
              type="checkbox"
              value={transaction.completed}
              onChange={handleStatusChange}
            />
            {transaction.completed === true ? (
              <del>{transaction.title}</del>
            ) : (
              transaction.title
            )}
          </span>
        </p>
      </div>
      <div className="buttons">
        <div onClick={() => setEditing(transaction.id)}>
          <span className="edit">edit</span>
        </div>
        <div onClick={handleDelete}>
          <span className="remove">remove</span>
        </div>
      </div>
    </li>
  );
}

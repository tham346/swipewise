import { nanoid } from "nanoid";
import { TransactionContext } from "../data/TransactionContext";
import { useState, useContext } from "react";

export default function TransactionForm(props) {
  const {
    transactions,
    addTransaction,
    removeTransaction,
    updateTransaction,
    setEditing,
    editing
  } = useContext(TransactionContext);

  let initialData = {
    title: ""
  };

  if (editing !== "new") {
    initialData = transactions.find(function (t) {
      return t.id === editing;
    });
  }

  const [transaction, setTransaction] = useState(initialData);

  function handleTitleChange(e, field) {
    setTransaction({ ...transaction, [field]: e.target.value });
    console.log(transaction);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (editing === "new") {
      addTransaction({ ...transaction, id: nanoid() });
    } else {
      updateTransaction(transaction);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          onChange={(e) => handleTitleChange(e, "title")}
          value={transaction.title}
          placeholder="Add new transaction.."
        />
        <button className="add">Add</button>
      </form>
    </div>
  );
}

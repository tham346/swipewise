import { nanoid } from "nanoid";
import { TransactionContext } from "../../data/TransactionContext";
import { useState, useContext } from "react";
import './Transaction.css'

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
    title: "",
    amount: "",
    date: ""
  };

  if (editing !== "new") {
    initialData = transactions.find(function (t) {
      return t.id === editing;
    });
  }

  const [transaction, setTransaction] = useState(initialData);

  function handleTitleChange(e) {
    setTransaction({ ...transaction, title: e.target.value });
  }

  function handleAmountChange(e) {
    setTransaction({ ...transaction, amount: e.target.value });
  }

  function handleDateChange(e) {
    setTransaction({ ...transaction, date: e.target.value });
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
    <div className="formContainer">
      <form onSubmit={handleSubmit} className="form">
        <h2>Add Transaction</h2>
        <label className="inputContainer">
          Transaction Name
          <input
            className="input"
            type="text"
            onChange={handleTitleChange}
            value={transaction.title}
          />
        </label>
        <label className="inputContainer">
          Amount
          <input
            className="input"
            type="text"
            onChange={handleAmountChange}
            value={transaction.amount}
            placeholder="$0.00"
          />
        </label>
        <label className="inputContainer">
          Date
          <input
            className="input"
            type="text"
            onChange={handleDateChange}
            value={transaction.date}
            placeholder="MM/DD/YYYY"
          />
        </label>
        <button className="save">Save</button>
      </form>
    </div>
  );
}
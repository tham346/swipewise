import TransactionList from "./components/TransactionList";
import TransactionForm from "./components/TransactionForm";
import { TransactionContext } from "./data/TransactionContext";
import { BarChart } from "./components/Chart";
import { useState } from "react";

import "./styles.css";

export default function App() {
  const [editing, setEditing] = useState(null);

  const [transactions, setTransactions] = useState([]);

  function addTransaction(transaction) {
    const updatedTransaction = [...transactions, transaction];
    setTransactions(updatedTransaction);
    setEditing(null);
  }

  function removeTransaction(transaction) {
    const updatedTransaction = transactions.filter(function (list) {
      return list.id !== transaction.id;
    });
    setTransactions(updatedTransaction);
    setEditing(null);
  }

  function updateTransaction(transaction) {
    setTransactions(
      transactions.map(function (t) {
        if (t.id === transaction.id) {
          return transaction;
        } else {
          return t;
        }
      })
    );
    //Remove the form after creating a product
    setEditing(null);
  }
  return (
    <div className="App">
      <TransactionContext.Provider
        value={{
          transactions,
          setTransactions,
          updateTransaction,
          addTransaction,
          removeTransaction,
          setEditing,
          editing
        }}
      >
        <h1>SwipeWise</h1>
        {!editing ? (
          <>
            <TransactionList />
            <button onClick={() => setEditing("new")}>Add</button>
          </>
        ) : (
          <>
            <TransactionForm />
          </>
        )}
      </TransactionContext.Provider>
      <BarChart/>
    </div>
  );
}

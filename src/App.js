import TransactionList from "./components/Transaction/TransactionList";
import TransactionForm from "./components/Transaction/TransactionForm";
import { TransactionContext } from "./data/TransactionContext";
import { BarChart } from "./components/Chart/Chart";
import { useState } from "react";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import "./styles.css";

import { Routes, Route } from 'react-router-dom';
import SignUp from "./components/SignUp";
import Login from "./components/Login";

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
    setEditing(null);
  }
  return (
    <div className="App">
      <NavBar/>

      <div className="routes">
        <Routes>
          <Route path="SignUp" element={<SignUp/>} />
          <Route path="Login" element={<Login/>} />
          <Route path="Home" element={<App/>} />
        </Routes>
      </div>

      <LandingPage/>
      <div className="container">
      <div className="header">
        <span className="heading">John Doe</span>
        <span className="subheading">Welcome back!</span>
      </div>
      <div className="totalBox">
        <div className="topRow">
          <p>Total Balance</p>
          <p>Account: Savings</p>
        </div>
          <span className="total">$2,150.67</span>
        <div className="bottomRow">
          <p><span className="up">▲</span>Income: + $120.75</p>
          <p><span className="down">▼</span>Expense: - $53.00</p>
        </div>
      </div>
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
        {!editing ? (
          <div className="container">
            <div className="buttons">
              <button className="budget" onClick={() => setEditing("new")}>Set Budget</button>
              <button className="income" onClick={() => setEditing("new")}>Add Income</button>
              <button className="add" onClick={() => setEditing("new")}>+ Add Transaction</button>
            </div>
            <div className="history">
              <span className="subheading">Transaction History</span>
              <button name="filter"className="filter">Filter ▼</button>
            </div>
              <TransactionList />
          </div>
        ) : (
          <div className="container">
            <div className="buttons">
              <button className="budget" onClick={() => setEditing("new")}>Set Budget</button>
              <button className="income" onClick={() => setEditing("new")}>Add Income</button>
              <button className="add" onClick={() => setEditing("new")}>+ Add Transaction</button>
            </div>
            <TransactionForm />
            <div className="history">
              <span className="subheading">Transaction History</span>
              <button name="filter"className="filter">Filter ▼</button>
            </div>
            <TransactionList />
          </div>
        )}
      </TransactionContext.Provider>
      <div className="subheading">Overview</div>
      <BarChart/>
      </div>
    </div>
  );
}

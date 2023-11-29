import React from 'react';
import TransactionList from "./Transaction/TransactionList"
import TransactionForm from "./Transaction/TransactionForm";
import { TransactionContext } from "../data/TransactionContext";
import { BarChart } from "./Chart/Chart";
import { useState } from "react";
import "../styles.css";
import Budget from './Budget/Budget';


export default function Profile() {
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
              <p>
                <span className="up">▲</span>Income: + $120.75
              </p>
              <p>
                <span className="down">▼</span>Expense: - $53.00
              </p>
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
                  <button className="budget" onPress={() => Budget()}>
                    Budget
                  </button>
                  <button className="add" onClick={() => setEditing("new")}>
                    + Add Transaction
                  </button>
                </div>
                <div className="history">
                  <span className="subheading">Transaction History</span>
                  <button name="filter" className="filter">
                    Filter ▼
                  </button>
                </div>
                <TransactionList />
              </div>
            ) : (
              <div className="container">
                <div className="buttons">
                  <button className="budget" onPress={() => Budget()}>
                    Budget
                  </button>
                  <button className="add" onClick={() => setEditing("new")}>
                    + Add Transaction
                  </button>
                </div>
                <TransactionForm />
                <div className="history">
                  <span className="subheading">Transaction History</span>
                  <button name="filter" className="filter">
                    Filter ▼
                  </button>
                </div>
                <TransactionList />
              </div>
            )}
          </TransactionContext.Provider>
          <div className="subheading">Overview</div>
          <BarChart />
        </div>
  );
}
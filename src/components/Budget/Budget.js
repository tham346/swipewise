import React from "react";
import SetBudget from "./SetBudget";

export default function Budget(){
    return(
        <div>
            <h1>Budget</h1>
            <h2>Total Balance</h2>
            <h2>$2,150.67</h2>
            <p>Spent:</p>
            <p>Budget:</p>
            <button className="setBudget" onPress={() => SetBudget()}>Set Budget</button>
        </div>
    )
}
import React from "react";
import SetBudget from "../SetBudget/SetBudget";
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Budget(){
    const now = 100;
    return(
        <div>
            <h1 className="budgetTitle">Budget</h1>
            <h2 className="totalBalance">Total Balance</h2>
            <h2 className="balance">$2,150.67</h2>
            <div className="progressBar">
                <ProgressBar now={now} label={`${now}%`}/>;
                <p>Spent:</p>
                <p>Budget:</p>                
            </div>
            <button className="setBudgetBtn" onPress={() => SetBudget()}>Set Budget</button>
        </div>
        //This is the code for when a user has set up a budget
        // const now = 60;
        // return(
        //     <div>
        //         <h1>Budget</h1>
        //         <h2>Total Balance</h2>
        //         <h2>$2,150.67</h2>
        //         <ProgressBar now={now} label={`${now}%`} />;
        //         <p>Spent:</p> //logic to implement user's imput
        //         <p>Budget:</p> //logic to implement user's input
        //         <button className="setBudget" onPress={() => SetBudget()}>Set Budget</button>
        //         <ProgressBar/>
        //         <ProgressBar/>
        //         <ProgressBar/>
        //     </div>
    )
}
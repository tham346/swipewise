import react from "react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import CurrencyInput from 'react-currency-input-field';
import "react-datepicker/dist/react-datepicker.css";

export default function SetBudget() {
    const [startDate, setStartDate] = useState(new Date());

    return(
        <div>
            <h1 className="setBudget">Set Budget</h1>
            <p className="amount">Amount:</p>
            <div className="">
                <CurrencyInput
                id="amount-input"
                name="input-name"
                placeholder=""
                decimalsLimit={2}
                onValueChange={(value, name) => console.log(value, name)}
                />                
            </div>
            <div className="dateContainer">
                <p>Set Date</p>
                <DatePicker className="datePicker" selected={startDate} onChange={(date) => setStartDate(date)} />            
            </div>          

            <div className="criteria">
                <p>Criteria</p>
                <Dropdown>
                    <DropdownButton id="dropdown-basic-button2" title="Criteria...">
                        <Dropdown.Item href="#/action-1">Groceries</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Transportation</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Utilities</Dropdown.Item>
                    </DropdownButton>                     
                </Dropdown>
            </div>
            <div className="repeat">
                <p>Repeat</p>
                <DropdownButton id="dropdown-basic-button" title="Repeat...">
                    <Dropdown.Item href="#/action-1">Never</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Month</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Year</Dropdown.Item>
                </DropdownButton>                 
            </div>
            <button className="saveBtn">Save</button>
        </div>
    )
}
import react from "react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import "react-datepicker/dist/react-datepicker.css";

export default function SetBudget() {
    const [startDate, setStartDate] = useState(new Date());

    return(
        <div>
            <form>
                <label>
                    Amount:
                    <input type="text" name="amount"/>
                </label>
            </form>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            <div>
                <DropdownButton id="dropdown-basic-button" title="Repeat...">
                    <Dropdown.Item href="#/action-1">Never</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Month</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Year</Dropdown.Item>
                </DropdownButton>                 
            </div>
            <div>
            <DropdownButton id="dropdown-basic-button" title="Criteria...">
                <Dropdown.Item href="#/action-1">Groceries</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Transportation</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Utilities</Dropdown.Item>
            </DropdownButton> 
            </div>
            <button>Save</button>
        </div>
    )
}